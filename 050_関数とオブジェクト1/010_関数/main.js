function fn(a, b = 1) {
  console.log(a, b);
}

// function fn(a) {
//   console.log(2);
// }

let c = null; //こうは使わない
fn(1, undefined);
