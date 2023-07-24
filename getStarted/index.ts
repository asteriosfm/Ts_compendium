//types: any, never, void, unknown, undefined, string, number, symbol, undefined, boolean, null


//---------------Interfaces & Types---------------
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

type me = string

const userAcc: User = new UserAccount('Maksym', 10);


//---------------Composing Types---------------
type MyBool = true | false;

//strings set
type WindowStates = 'open' | 'closed' | 'minimized';

function getLength(obj: string | string[]) {
  return obj.length;
}


//---------------Generics---------------
type StringArray = Array<string>;
type ObjectWithNameArray = Array<{name: string}>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type
}

declare const backpack: Backpack<String>;

const object = backpack.get();
backpack.add('x')
// backpack.add(23)


//---------------Structural Type System---------------
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

const point = {x: 23, y: 123}
logPoint(point);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

}
const newVPoint = new VirtualPoint(12, 42);
logPoint(newVPoint);


