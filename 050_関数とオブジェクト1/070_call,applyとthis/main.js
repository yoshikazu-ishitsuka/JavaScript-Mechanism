function a(name, name1) {
  console.log("hello " + name + " " + name1);
}

const tim = { name: "Tim" };

const b = a.bind(tim);

b();

a.apply(tim, ["Tim, 'Bob"]);
a.call(tim, "Tim");
