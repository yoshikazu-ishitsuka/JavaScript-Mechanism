// const obj = { prop: 0 };

const obj = {};

Object.defineProperty(obj, "prop", {
  value: 0,
});

obj.prop = 1;

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");

console.log(descriptor);
