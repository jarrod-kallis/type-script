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
