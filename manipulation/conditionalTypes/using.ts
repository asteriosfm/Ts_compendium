//Conditional Types
//SomeType extends OtherType ? TrueType : FalseType;
type DateLabel = 'week' | 'year';

type DateController<Type> = Type extends DateLabel ? Type : Date;

const a1: DateController<DateLabel> = 'week';
const a2: DateController<Date> = new Date();



//With Overloads
interface IdLabel {
  id: number,
}

interface NameLabel {
  name: string
}

function createLabelS(a: string): NameLabel;
function createLabelS(a: number): IdLabel;
function createLabelS(a: string | number): NameLabel | IdLabel {
  throw 'not implemented'
}

type NameOrIdC<Type extends string | number> = Type extends string
  ? NameLabel
  : IdLabel;



//Conditional Type Constraints
// type MessageOfS<T> = T['message']//Error
type MessageOfS<T extends {message: unknown}> = T['message']
interface MessageOfDialog {
  message: string
}

const myDialogMessage: MessageOfS<MessageOfDialog> = 'Hi there!';

type MessageOfSS<T extends { message: unknown } | string> = T extends {message: unknown}
  ? T['message']
  : string;

const myDialogMessageS: MessageOfSS<string> = 'Hi there';

type OneOfArr<T> = T extends any[] ? T[number] : T;

const Aarr = [1];
const a13: OneOfArr<typeof Aarr> = 1



//Infering
type GetReturnType1<T> = T extends (...args: any[]) => infer ReturnType1
  ? ReturnType1
  : T

type Str2 = GetReturnType1<() => string[]>;



//ReturnType
function a132(): string {
  return 'asda'
}

type Str32 = ReturnType<typeof a132>



//Distributive Conditional Types
type ToArray1<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr13 = ToArray1<string | number>;

type ToArrayNonDist1<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr11 = ToArrayNonDist1<string | number>;