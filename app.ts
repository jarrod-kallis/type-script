// You can find a detailed documentation on the TypeScript Compiler Config File (tsconfig.json) here:
// http://www.typescriptlang.org/docs/handbook/tsconfig-json.html

// Details on the Compiler Options can be found here:
// http://www.typescriptlang.org/docs/handbook/compiler-options.html

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
let userData: { name: string; age: number } = {
  name: 'Max',
  age: 27
};

// Type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

// complex object
let complex: Complex = {
  // { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    if (all === true) {
      return this.data;
    } else {
      return [0];
    }
  }
};

console.log(complex.output(true));

// Union Types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
// myRealRealAge = true; // Error

// Check type
let finalValue = '30';
if (typeof finalValue === 'number') {
  console.log('Final value is a number');
}

// Never
function neverReturns(): never {
  throw new Error('An error!');
}

// Nullable Types
let canBeNull = 12;
// canBeNull = null; // Error
let canAlsoBeNull: number | null = 12;
canAlsoBeNull = null; // No Error
let canThisBeAny = null;
canThisBeAny = 12; // This would've given an error on TS 2.0

// No Implicit Any
// Error: Has to be given a type
// function a(v) {
//   return v;
// }
// a('yo');

// No Unused Parameters
// function m(v: boolean, v2: boolean): void {
//   if (v) {
//     console.log('True');
//   }
// }
// m(true, false);

// No Implicit Returns
// function a(v: string) {
//   if (v === 'yo') {
//     return v;
//   }
// }
// a('yo');
