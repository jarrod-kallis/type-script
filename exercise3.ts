// Exercise 1 - How was your TypeScript Class?
class Car {
  private _name: string;
  public acceleration: number = 0;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  honk = (): void => console.log('Toooooooooot!');

  accelerate = (speed: number): void => {
    this.acceleration = this.acceleration + speed;
  };
}

let car1: Car = new Car('BMW');
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
  public width: number = 0;
  public length: number = 0;

  abstract calcSize(): number;
}

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle: Rectangle = new Rectangle();
rectangle.width = 10;
rectangle.length = 2;

console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class AnotherPerson {
  private _firstName: string = '';

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}

let anotherPerson: AnotherPerson = new AnotherPerson();
console.log(anotherPerson.firstName);
anotherPerson.firstName = 'Ma';
console.log(anotherPerson.firstName);
anotherPerson.firstName = 'Maximilian';
console.log(anotherPerson.firstName);
