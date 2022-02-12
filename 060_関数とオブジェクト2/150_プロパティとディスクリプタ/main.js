// const obj = { prop: 0 };

const obj = {};

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");

console.log(descriptor);
