const s = Symbol("hello");
const s2 = Symbol("hello");
console.log(typeof s);

const str = new String("Tom");
console.log(str);

String.prototype[s] = function () {
  return "hello " + this;
};

const tom = "Tom";
tom[s];
