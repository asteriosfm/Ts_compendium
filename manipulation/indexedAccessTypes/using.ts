const MyArray1 = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type MyArrayName = typeof MyArray1[number]['name'];
type Age123 = 'age';
type MyArrayAge = typeof MyArray1[number][Age123]
