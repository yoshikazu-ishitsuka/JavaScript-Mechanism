class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};
