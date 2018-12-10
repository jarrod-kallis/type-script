// string
let myName = 'Max';
// myName = 27; // Error

// number
let myAge = 27;
// myAge = 'Max'; // Error

// boolean
let hasHobbies = true;
// hasHobbies = 1; // Error

// any
let myRealAge; // :any;
myRealAge = 27;
myRealAge = '27'; // No Error

let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// array
let hobbies = ['Cooking', 'Sports'];
// hobbies = [100]; // Error
console.log(typeof hobbies);

let anyHobbies: any[] = ['Cooking', 'Sports'];
anyHobbies = [100];
console.log(typeof anyHobbies);

// tuples
let address: [string, number] = ['Superstreet', 99];

// enum
enum Color {
  Gray, // 0
  Green = 100,
  Blue = 2
}
let myColor: Color = Color.Green;
console.log(myColor);

// functions
function returnWhatWhat(arg: string): string {
  return arg;
}
console.log(returnWhatWhat('What what'));

function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// function types
let myFunc: (v1: number, v2: number) => number;
// myFunc = returnWhatWhat; // Error
myFunc = multiply;
console.log(myFunc(5, 2));

// objects
let userData: { name: string, age: number } = {
  name: 'Max',
  age: 27
}
