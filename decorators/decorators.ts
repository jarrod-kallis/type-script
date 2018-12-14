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

@printable
class DecoratedPlant {
  name: string = 'Green Plant';
}
const p: DecoratedPlant = new DecoratedPlant();
// Have to cast as 'any', because TS doesn't know at
// compile time that the class will have a print method
(<any>p).print();
