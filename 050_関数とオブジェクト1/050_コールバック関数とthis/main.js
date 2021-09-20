window.name = "John";

const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
  ref();
}

fn(helloTom);

function a() {
  console.log("hello " + this.name);
}

const b = a.bind({ name: "Tim" });

b();
