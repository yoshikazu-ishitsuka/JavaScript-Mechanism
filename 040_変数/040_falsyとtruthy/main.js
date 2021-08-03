// let a = 0; // "", 0n, null, undefined, NaN(not a number)
let a = parseInt("");
console.log(Boolean(a));

if (!a) {
  console.log("hello");
} else {
  console.log("bye");
}
