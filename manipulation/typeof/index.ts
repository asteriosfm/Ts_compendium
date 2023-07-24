//Typeof Type Operator
let s = "hello";
let n: typeof s;

type Predicate = (x: unknown) => boolean;//() => type: constraint
type K = ReturnType<Predicate>;

function f14() {
  return { x: 10, y: 3 };
}
type P13 = ReturnType<typeof f>;
// type P = ReturnType<f>; ERROR