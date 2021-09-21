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

function a(name) {
  console.log("hello " + name);
}

const b = a.bind(null, "Tim"); // bindは固定。thisや引数を固定した新たな関数が作成される

b("Tom");
