function Person(name, age) {
  this._name = name;
  this._age = age;
}

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    return this._name;
  },
});
