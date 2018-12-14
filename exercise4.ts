// type Map = { [key: string]: any };

class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T): void {
    this.map[key] = item;
  }

  getItem(key: string): T {
    return this.map[key];
  }

  clear(): void {
    this.map = {};
  }

  printMap(): void {
    for (let key in this.map) {
      console.log(key, this.getItem(key));
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('bananas').toFixed());
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
console.log(stringMap.getItem('name').length);
stringMap.printMap();

const anyMap = new MyMap<any>();
anyMap.setItem('1', { name: 'Max', age: 27 });
anyMap.setItem('2', { name: 'Jarrod', surname: 'Kallis' });
anyMap.printMap();
