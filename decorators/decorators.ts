// http://www.typescriptlang.org/docs/handbook/decorators.html

function logged(constructorFunc: Function) {
  console.log(constructorFunc);
}

@logged
class DecoratedPerson {
  constructor() {
    console.log('Hi!');
  }
}

// Factory
function mustLog(value: boolean): Function {
  return value ? logged : () => {};
}

@mustLog(true)
class DecoratedCar {}

// Advanced
function printable(constructorFunc: Function): void {
  constructorFunc.prototype.print = function() {
    // console.log(constructorFunc.prototype);
    console.log(this);
  };
}

@mustLog(true) // Multiple decorators
@printable
class DecoratedPlant {
  name: string = 'Green Plant';
}
const p: DecoratedPlant = new DecoratedPlant();
// Have to cast as 'any', because TS doesn't know at
// compile time that the class will have a print method
(<any>p).print();

// Method
function editable(value: boolean): Function {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propName);
    descriptor.writable = value;
  };
}

class DecoratedProject {
  private projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(true)
  calcBudget() {
    console.log(this.projectName, 1000);
  }

  @editable(false)
  static calcSomething() {
    console.log('Something');
  }
}

const project: DecoratedProject = new DecoratedProject('Super Project');
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
};
project.calcBudget();

DecoratedProject.calcSomething();
// Results in an error, because method can't be changed
// DecoratedProject.calcSomething = function() {
//   console.log('Something else');
// };
DecoratedProject.calcSomething();
