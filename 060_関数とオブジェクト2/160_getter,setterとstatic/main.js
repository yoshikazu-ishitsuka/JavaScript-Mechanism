function Person(name, age) {
  this._name = name;
  this._age = age;
}

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    return this._name;
  },
  set: function (val) {
    this._name = val;
  },
});
