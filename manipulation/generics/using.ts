//Using Type Parameters in Generic Constraints
function getVal<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
  return obj[key]
}

const a133 = {
  fad: '1'
}

const fad = getVal(a133, 'fad');




//Using Class Types in Generics
function create<Type>(c: new() => Type): Type {
  return new c();
}

class BeeKeeper1 {
  hasMask: boolean = true;
}

class ZooKeeper1 {
  nametag: string = "Mikle";
}

const lionKeeper = create<ZooKeeper1>(ZooKeeper1)

class Animal1 {
  numLegs: number = 4;
}

class Bee1 extends Animal {
  numLegs = 6;
  keeper: BeeKeeper1 = new BeeKeeper1();
}

class Lion1 extends Animal {
  keeper: ZooKeeper1 = new ZooKeeper1();
}

function createInstance<A extends Animal>(c: new () => A): A {
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
