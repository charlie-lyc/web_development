import React from "react";
import ReactDOM from "react-dom";

const fname = "Charlie";
const num = 3;
const lname = "lee";

/* JS Expression: OK -VS- JS Statement: NOT available */
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
