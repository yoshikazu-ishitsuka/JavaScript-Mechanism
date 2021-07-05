function a() {
  let b = 0;
  console.log(b);
}
a();

if (true) {
  // let c = 1;
  var c = 1;
  // varにするとブロックスコープが無視されるので意図しない挙動になる。よって非推奨。

  const d = function () {
    console.log("d is called");
  };
}

d();
// 関数宣言の場合はブロックスコープが無視される。function d()
// const d = function () { >>> 変数宣言にすればちゃんとブロックスコープが適用される。
// ブロックスコープは大抵ifやforなどと使われる。

console.log(c);
