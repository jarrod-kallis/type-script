class Person {
  public name: string;
  private type: string = 'Unknown';
  protected _age: number = 0;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  public printAge() {
    console.log(this.age);
    this.setType('Old Guy');
  }

  public setType(type: string) {
    this.type = type;
    console.log(this.type);
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }
}

const person: Person = new Person('Max', 'max');
console.log(person);
person.printAge();
person.setType('Cool guy');

// Inheritance
class Max extends Person {
  constructor(username: string) {
    super('Max', username);
    this.age = 31;
  }
}

const max: Max = new Max('max');
max.age = 27;
console.log(max);
console.log(max.age);

// Statics
class Helpers {
  public static PI: number = 3.14;
  public static calcCircumference(diameter: number): number {
    return diameter * this.PI;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(12750));

// Abstract
abstract class Project {
  name: string = 'Default';
  budget: number = 120;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.name = name;
  }
}

let itProject = new ITProject();
console.log(itProject);
itProject.changeName('Super IT Project');
console.log(itProject.calcBudget());
console.log(itProject);

// Singleton Pattern
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }

    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('The Only One');
// console.log(wrong);
let right = OnlyOne.getInstance();
console.log(right);
// right.name = 'Something else'; // Error - readonly property
