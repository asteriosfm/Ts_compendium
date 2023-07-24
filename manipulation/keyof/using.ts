//The keyof type operator
type Point1 = { x: number; y: number };
type P1 = keyof Point;

const a: P1 = 'x'

type Arrayish1 = { [n: number]: unknown };
type A1 = keyof Arrayish;

type Mapish1 = { [k: string]: boolean };
type M1 = keyof Mapish;