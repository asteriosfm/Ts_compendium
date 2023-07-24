//-----------------Function Type Expressions-----------------
function greeter1(fn: (a: string) => void) {
  fn("Hello, World");
}
function printToConsole1(s: string) {
  console.log(s);
}
greeter1(printToConsole1);

type GreetFunction<T> = (a: T) => T;
function greeter4<T>(fn: GreetFunction<T>): T {
  return fn('asdsad' as T)
}



//-----------------Call Signatures-----------------
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);



//-----------------Construct Signatures-----------------
type SomeConstructor = {
  new(s: string): object;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}



//-----------------Generic Functions-----------------
function firstElement12<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

function map1<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
const parsed1 = map1(["1", "2", "3"], (n) => parseInt(n));


function longest1<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
const longerString12 = longest1("alice", "bob");


function minimumLength1<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    obj.length = minimum
    return obj;
  }
}


function combine13<FirstType, SecondType>(arr1: FirstType[], arr2: SecondType[]): Array<FirstType | SecondType> {
  return [...arr1, ...arr2];
}

const arr123 = combine13<string, string>(['hello'], ["hello"]);
const arr2 = combine13([1, 2, 3], [4, 5, 6]);



//-----------------Guidelines for Writing Good Generic Functions-----------------
//Push Type Parameters Down
function firstElement1<Type>(arr: Type[]) {//good
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {//bad
  return arr[0];
}

//Use Fewer Type Parameters
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

//Type Parameters Should Appear Twice

//harder
function greet1<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greet1("world");

//simpler
function greet2(s: string) {
  console.log("Hello, " + s);
}



//-----------------Function Overloads-----------------
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3, 5);

//-----------------Writing Good Overloads-----------------
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}


//-----------------Declaring this in a Function-----------------
// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }

// const db = getDB();
// const admins = db.filterUsers(function (this: User) {
//   return this.admin;
// });

//Rest Arguments
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

//Parameter Destructuring
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}