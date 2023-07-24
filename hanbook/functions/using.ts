//-----------------Function Type Expressions-----------------
function hello123(fn: (a: string) => void): void {
  fn('Hello world');
}

hello123(console.log)



//-----------------Call Signatures-----------------
type DescribableFunction1<T> = {
  description: string,
  (...args: Array<T>): void
}

const cycleLogger = function (fn: DescribableFunction1<String>, args: string[]) {
  fn(...args)
}

function logger<T>(...args: Array<T>) {
  args.forEach(arg => console.log(arg))
};

logger.description = 'logger';

cycleLogger(logger, ['hello', 'world']);



//-----------------Construct Signatures-----------------
interface SomeConstructor1 {
  new(s: string): object
}

interface MetaConstructor<Type> {
  new(...args: any[]): Type,
}

function factory<Type>(ctor: MetaConstructor<Type>, ...args) {
  return new ctor(args)
}

class Animal {
  [name: string]: number;
  legs: number;

  constructor(legs: number) {
    this.legs = legs;
  }
}

const dog = factory(Animal, 4)