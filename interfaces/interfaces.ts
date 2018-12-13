interface IPerson {
  name: string;
  age?: number; // Optional field to implement in the concrete class
  // Indexable Types
  [index: string]: string | number | undefined;
  // Complete flexibility - allows any other property to be on the concrete class (of type 'string' or 'number' or 'undefined')
  // Terribly confusing, but all members must conform to the string index signature
  // https://www.typescriptlang.org/docs/handbook/interfaces.html
  // https://github.com/basarat/typescript-book/blob/de70ce929b992de89b5abd9befa7007139e90fd6/docs/types/index-signatures.md#all-members-must-conform-to-the-string-index-signature
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
  houseNumber: 7
  // married: false // Error: Type 'false' is not assignable to type 'string | number | undefined'
};

greetMe(person1);
changeName(person1, 'Jarrod');
greetMe(person1);
