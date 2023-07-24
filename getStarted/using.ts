//types: any, never, void, unknown, undefined, string, number, symbol, boolean, null
let a: any = 1;
let b: never;
let c: () => void = () => {};
let d: unknown = Date.now();
let e: undefined = undefined;
let f: string = 'asd';
let g: number = 4;
let h: symbol = Symbol('a');
let i: boolean = true;
let j: null = null;



//---------------Interfaces & Types---------------
type Account = {
  id: string,
  date: string,
}

interface UserAccount {
  id: string,
  date: string,
}



////---------------Composing Types---------------
type EventStatus = 'upcoming' | 'archive';
type TrueOrFalse = true | false;



//Generics
type Operation<Type> = (argument: Type) => void;

const myFunc: Operation<string> = (name) => console.log(name);

interface Contorller<Input extends string, Output> {
  text: (a: Input) => Output,
  notify: (message: Input) => Output,
}

const myController: Contorller<string, boolean> = {
  text: (text) => {
    console.log(text);
    return true
  },
  notify: (text) => {
    console.log(text);
    return true
  }
}
