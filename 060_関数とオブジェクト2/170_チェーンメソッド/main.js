class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello(person) {
    console.log(`${this.name} says hello ${person.name}`);
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age}`);
  }
}
