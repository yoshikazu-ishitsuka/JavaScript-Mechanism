function a() {
  console.log("called");
}

a();

let c = (function (d) {
  console.log("called " + d);
  return 0;
})(10);

let b = (function () {
  console.log("called");
})();
