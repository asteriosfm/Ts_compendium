//Generic Interfaces
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity


interface GenericIdentityFn1<Type> {
  (arg: Type): Type;
}

function identity1<Type>(arg: Type): Type {
  return arg;
}

let myIdentity1: GenericIdentityFn1<number> = identity;



//Generic Classes
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};



//Generic Constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}



//Using Type Parameters in Generic Constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m");//error



//Using Class Types in Generics
function create1<Type>(c: { new() }): Type {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance3<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;



//Generic Parameter Defaults
// declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;

// declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;

// declare function create<T extends HTMLElement, U extends HTMLElement>(
//   element: T,
//   children: U[]
// ): Container<T, U[]>;

// declare function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
//   element?: T,
//   children?: U
// ): Container<T, U>;
