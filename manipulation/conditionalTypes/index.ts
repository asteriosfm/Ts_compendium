//Conditional Types
//SomeType extends OtherType ? TrueType : FalseType;

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel1<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel1("typescript");


let b = createLabel1(2.8);


let c = createLabel1(Math.random() ? "hello" : 42);



//Conditional Type Constraints
// type MessageOf<T> = T["message"]; ERROR
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;

type MessageOf1<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog12 {
  bark(): void;
}

type EmailMessageContents1 = MessageOf<Email>;

// type DogMessageContents = MessageOf<Dog12>;

type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;

// type Str = string

// Leaves the type alone.
type Num = Flatten<number>;

// type Num = number



type Flatten1<Type> = Type extends Array<infer Item> ? Item : Type;




type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num1 = GetReturnType<() => number>;

// type Num = number

type Str1 = GetReturnType<(x: string) => string>;

// type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// type Bools = boolean[]



declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;



//Distributive Conditional Types
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr1 = ToArrayNonDist<string | number>;