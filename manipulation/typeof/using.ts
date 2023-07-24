function f() {
  return { x: 10, y: 3 };
}
type P14 = ReturnType<typeof f>;