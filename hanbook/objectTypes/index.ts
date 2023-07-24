//Interface declaring
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}


//Alias Declaring
type Person1 = {
  name: string;
  age: number;
};

function greet1(person: Person1) {
  return "Hello " + person.name;
}


//Optional Properties
interface PaintOptions<Shape> {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}


//Readonly Properties
interface SomeType {
  readonly prop: string;
}

//Index Signatures
// const getStringArray = (): string[] => ['a', 'b', 'c']
// interface StringArray {
//   [index: number]: string;
// }

// const myArray: StringArray = getStringArray();
// const secondItem = myArray[1];


//Intersection Types
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;


//Generic Object Types
// Modern JavaScript also provides other data structures which are generic,
// like Map<K, V>, Set<T>, and Promise<T>.All this really means is that because of
// how Map, Set, and Promise behave, they can work with any sets of types.

interface Box<Type> {
  contents: Type;
}
let box: Box<string>;

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;


//The ReadonlyArray Type
function doStuff1(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");
}

function doStuff2(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");
}


//Tuple Types
type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  const a = pair[0];

  const b = pair[1];

  // ...
}

doSomething(["hello", 42]);

//readonly Tuple Types
function doSomething(pair: readonly [string, number]) {
  // ...
}