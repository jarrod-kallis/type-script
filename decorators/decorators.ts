function logged(constructorFunc: Function) {
  console.log(constructorFunc);
}

@logged
class DecoratedPerson {
  constructor() {
    console.log('Hi!');
  }
}
