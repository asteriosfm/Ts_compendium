//-----------------typeof type guards-----------------
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"


//-----------------Truthiness narrowing-----------------
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}


//-----------------Coerces to false-----------------
// 0
// NaN
// ""(the empty string)
// 0n(the bigint version of zero)
// null
// undefined


//-----------------Equality narrowing-----------------
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();

    // (method) String.toUpperCase(): string
    y.toLowerCase();

    // (method) String.toLowerCase(): string
  } else {
    console.log(x);

    // (parameter) x: string | number
    console.log(y);

    // (parameter) y: string | boolean
  }
}


//-----------------The in operator narrowing-----------------
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}


//-----------------instanceof narrowing-----------------
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());

    // (parameter) x: Date
  } else {
    console.log(x.toUpperCase());

    // (parameter) x: string
  }
}


//-----------------Control flow analysis-----------------
// This analysis of code based on reachability is called control flow analysis,
// and TypeScript uses this flow analysis to narrow types as it encounters type
// guards and assignments.When a variable is analyzed, control flow can split off
// and re - merge over and over again, and that variable can be observed to have a
// different type at each point.

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

function example1() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);

  // let x: boolean

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);

    // let x: string
  } else {
    x = 100;
    console.log(x);

    // let x: number
  }

  return x;

  // let x: string | number
}

//-----------------Using type predicates-----------------
function isFish(pet: Fish | Pet): pet is Fish {//pet is Fish
  return (pet as Fish).swim !== undefined;
}
// pet is Fish is our type predicate in this example.
// A predicate takes the form parameterName is Type,
// where parameterName must be the name of a parameter from the current function
// signature.
type Pet = {
  a: 'b',
  fly: () => void
}
function getSmallPet(): Pet {
  return {
    a: 'b', fly: () => {}
  }
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}


