//Optional Properties
interface Me {
  id: string,
  name: string,
  age?: number,
}



//Readonly Properties
// Properties can also be marked as readonly for TypeScript.
// While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type - checking.
interface Me2 {
  id: string,
  readonly name: string,
  age: number,
  readonly parents: string[]
}

const obj: Me2 = {
  id: 'asdasd',
  name: 'Maksym',
  age: 21,
  parents: ['Yulia', 'Sergiy']
}



//Index Signatures
const getStringArray = (): string[] => ['a', 'b', 'c']
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];



//Intersection Types
interface Shape {
  name: string
}

interface Rectangle {
  width: number,
  height: number,
}

type Square = Rectangle & Shape;
const mySquare: Square = {
  width: 4,
  height: 4,
  name: 'mySquare',
}



//Generic Object Types
interface Box1<T> {
  type: T,
  types: T[]
}

let myBox: Box1<string> = {
  type: 'asd',
  types: ['asd']
}

type OrNull1<Type> = Type | null;

type OneOrMany1<Type> = Type[] | Type

type OneOrManyOrNull1<Type> = OrNull1<OneOrMany1<Type>>

type OneOrManyOrNullStrings1 = OneOrManyOrNull1<string>



//The ReadonlyArray Type
const a: ReadonlyArray<string> = ['1', '12'];//can't mutate or push
const b: readonly string[] = ['1', '12'];//can't mutate or push



//Tuple Types
const a1: [string, number] = ['a', 1];
