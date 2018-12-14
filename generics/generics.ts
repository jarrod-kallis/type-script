// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('Max').length); // 3
console.log(echo(27).length); // undefined
console.log(echo({ name: 'Max', age: 27 }).length); // undefined

// Simple Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Max').length); // 3 - TypeScript inferred
console.log(betterEcho<string>('Max').length); // 3 - Explicitely tell TS that you're passing a string
// console.log(betterEcho(27).length); // Error - Property 'length' does not exist on type 'number'
// console.log(betterEcho<object>({ name: 'Max', age: 27 }).length); // Error

// Built-in Generics
// Arrays are generic, because they can hold any type
const testResultsArray: Array<number> = [1, 2, 3.99];
testResultsArray.push(-4.7);
// testResultsArray.push('string'); // Error
console.log(testResultsArray);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(e => console.log(e));
}
printAll<string>(['apple', 'banana', '28']);

// Generic Types
// <T>(data: T) => T: means that echo2 is a function that takes a generic type T and then returns that type,
// Which is exactly what betterEcho does, so we can assign that to echo2
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2('Something'));
console.log(echo2<string>('Something')); // Same thing - more explicit

// Classes
class SimpleMath<T extends number | string> {
  baseValue: T;
  multiplyValue: T;

  constructor(baseValue: T, multiplyValue: T) {
    this.baseValue = baseValue;
    this.multiplyValue = multiplyValue;
  }

  calculate(): number {
    // return (this.baseValue as number) * (this.multiplyValue as number);
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath(10, 20);
console.log(simpleMath.calculate());
