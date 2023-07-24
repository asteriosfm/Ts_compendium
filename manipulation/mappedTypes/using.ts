type Horse1 = [string, string];
type OneHorse = Horse1[number];
type BoolsAndHorses = {
  [key: string]: Horse1 | boolean
};


const horseObj: BoolsAndHorses = {
  horse: true,
  horses: ['horse1', 'horse2'],
}

type OptionsFlags1<T> = {
  [Property in keyof T]: boolean
}

type HorseObjObtions = OptionsFlags1<BoolsAndHorses>
type Contoller = {
  move: () => void,
  get: () => void
}

type ControllerTypes = OptionsFlags1<Contoller>;



//Mapping Modifiers

// Removes 'readonly' attributes from a type's properties
type Unlocked<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount1 = {
  readonly id: string,
  readonly name: string,
}

type UnlockedAccount1 = Unlocked<LockedAccount1>;


// Removes 'optional' attributes from a type's properties
type Concrete1<T> = {
  [Property in keyof T]-?: T[Property]
}

type NotConcreteAccount = {
  id?: string,
  name?: string,
}

type ConcreteAccount = Concrete1<NotConcreteAccount>



//Key Remapping via as
type Getters1<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property];
}

interface User123 {
  id: string,
  name: string,
  age: string
}

type GetUser = Getters<User123>;


type RemoveKindField1<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind' | 'radius'>]: Type[Property]
}

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle1 = RemoveKindField1<Circle>


type EventConfig1<Events extends {kind: string}> = {
  [E in Events as E['kind']]: (event: E) => void;
}

type SquareEvent1 = { kind: "square", x: number, y: number };
type CircleEvent1 = { kind: "circle", radius: number };

type Config1 = EventConfig1<SquareEvent1 | CircleEvent1>