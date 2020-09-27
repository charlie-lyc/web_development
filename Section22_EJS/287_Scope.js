/*** Local Variales : ex) [function]

  function a() {
    var x = 2;
    console.log(x);
  }
  a(); // expected output: 2

  // console.log(x); // expected output: x is not defined

  // function b() {
  //   console.log(x);
  // }
  // b(); // expected output: x is not defined

***/


/*** Global Variales : ex) [function]

  var x = 2;
  function a() {
    console.log(x); // expected output: 2
  }
  a();
  console.log(x); // expected output: 2

***/


/* ex) [if ~ else if], [for], [while]

  if (true) {
    var x = 2;
    console.log(x); // expected output: 2
  }
  console.log(x); // expected output: 2

  if (true) {
    let x = 3;
    console.log(x); // expected output: 3
  }
  console.log(x); // expected output: 2

*/


/* Summary : ES6에서는 'const'과 'let'를 주로 사용하고, Block을 벗어나서도 계속 영향이 지속되는 것은 'var'.
  1. [function] 밖에서 : var, let, const 모두 Global Variales
  2. [function] 안에서 : var, let, const 모두 Local Variales
  3. [if ~ else if], [for], [while] 안에서
      (1) var : Global Variales
      (2) let, const : Local Variales
*/
