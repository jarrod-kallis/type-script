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
