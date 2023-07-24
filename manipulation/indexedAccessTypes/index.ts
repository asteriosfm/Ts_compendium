//Indexed Access Types
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

// Another example of indexing with an arbitrary type is using number
// to get the type of an array’s elements.We can combine this with typeof
// to conveniently capture the element type of an array literal:
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person1 = typeof MyArray[number];

type Age1 = typeof MyArray[number]["age"];
// Or
type Age2 = Person1["age"];


const key = "age";
// type Age = Person[key];//ERROR
type key = "age";
type Age3 = Person[key];