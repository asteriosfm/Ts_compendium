//The primitives: string, number, and boolean

//Arrays: Array<number>, string[]

//any: TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

//Type Annotations on Variables
let myName: string = 'Maksym';

//--------------Functions--------------
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

function getFavoriteNumber(): number {
  return 26;
}


//--------------Object Types--------------
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

//Optional Properties
function printName(obj: { first: string; last?: string }) {
  // ...
}


//--------------Union Types--------------
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}


//--------------Type Aliases--------------
type Point = {
  x: number;
  y: number;
};

function printCoordinates(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}


//--------------Interfaces--------------
interface Point1 {
  x: number;
  y: number;
}

function printCoord1(pt: Point1) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

//--------------Type Assertions--------------
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
// In this situation, you can use a type assertion to specify a more specific type:
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
