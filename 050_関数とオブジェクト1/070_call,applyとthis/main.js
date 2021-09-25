function a(name) {
  console.log("hello " + name);
}

const tim = { name: "Tim" };

const b = a.bind(tim);

b();

a.apply(tim);
a.call(tim, "Tim");
