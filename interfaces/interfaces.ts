interface IPerson {
  name: string;
  age?: number; // Optional field to implement in the concrete class
  // Indexable Types
  [index: string]: string | number | undefined | ((person: IPerson) => void);
  // Complete flexibility - allows any other property to be on the concrete class (of type 'string' or 'number' or 'undefined')
  // Terribly confusing, but all members must conform to the string index signature
  // https://www.typescriptlang.org/docs/handbook/interfaces.html
  // https://github.com/basarat/typescript-book/blob/de70ce929b992de89b5abd9befa7007139e90fd6/docs/types/index-signatures.md#all-members-must-conform-to-the-string-index-signature
  greet(person: IPerson): void;
  greet2(): void;
}

function greetMe(person: IPerson): void {
  console.log(person.name);
}

function changeName(person: IPerson, name: string): void {
  person.name = name;
}

//const person1: { name: string; surname: string; age: number; sex: string } = {
const person1: IPerson = {
  name: 'Max',
  surname: 'Surname',
  age: 27,
  sex: 'M',
  houseNumber: 7,
  // married: false // Error: Type 'false' is not assignable to type 'string | number | undefined'
  greet: (person: IPerson): void => {
    console.log(`Hi, I'm ${person.name} ${person.surname}`);
  },
  greet2(): void {
    console.log(`Hi, I'm ${this.name} ${this.surname}`);
  }
};

greetMe(person1);
changeName(person1, 'Jarrod');
greetMe(person1);
person1.greet(person1);
person1.greet2();

class MyPerson implements IPerson {
  // This is ridiculous that I have to include the index type in my class
  // https://stackoverflow.com/questions/31977481/can-i-define-a-typescript-class-which-has-an-index-signature?rq=1
  [index: string]: string | number | undefined | ((person: IPerson) => void);
  name: string = '';
  surname: string = '';
  age: number = 0;
  // married: boolean = false;
  greet(person: IPerson): void {
    console.log('Too lazy: ' + person.name);
  }
  greet2(): void {
    console.log('Too lazy too: ' + this.name);
  }
}

const myPerson: MyPerson = new MyPerson();
myPerson.name = 'Jarrod';
myPerson.surname = 'Kallis';
myPerson.greet(myPerson);
myPerson.greet2();
