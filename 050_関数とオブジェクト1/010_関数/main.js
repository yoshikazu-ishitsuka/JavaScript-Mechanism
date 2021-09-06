function fn() {
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
  return a;
}

// function fn(a) {
//   console.log(2);
// }

let c = fn(1, undefined);
console.log(c);
