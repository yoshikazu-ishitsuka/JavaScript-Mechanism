function a() {
  console.log("hello " + this.name);
}

const tim = { name: "Tim" };

const b = a.bind(tim);

b();

a.apply(tim);
