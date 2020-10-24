import React from "react";
import ReactDOM from "react-dom";

const fname = "Charlie";
const num = 3;
const lname = "lee";

/* JS Expression: OK vs. JS Statement: NOT available */
/*
  JSX 내에서는 간단한 자바스크립트 표현은 사용이 가능하다.
    ex) 3, 1+2, 'hello', fn(), [], {}

  하지만, 구문 작성은 적용이 되지 않는다.
    ex) 3;
        let x = 3;
        if () ~ else if ~ else {}
        for ()~
        while () ~

*/
ReactDOM.render(
  <div>
    <h1>Hello, {fname}!</h1>
    <p>Your lucky number is {num}</p>
    <p>Your lucky number is {3 + 6}</p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    {/* ES5 in JSX */}
    <p>Hello, {fname} {lname}!</p>
    <p>Hello, {fname + " " + lname}!</p>
    {/* ES6 in JSX */}
    <p>Hello, {`${fname} ${lname}`}!</p>
    {/* <p>Your lucky number is {
      if (name === 'Charlie') {
        return 3;
      } else {
        return 6;
      }
    }</p> */}
  </div>,
  document.getElementById("root")
);
