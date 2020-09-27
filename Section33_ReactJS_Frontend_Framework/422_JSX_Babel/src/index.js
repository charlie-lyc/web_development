// const React = require("react");
// const ReactDOM = require("react-dom");
/* Use kewyword 'import' and 'from' instead of 'require()' */
import React from "react";
import ReactDOM from "react-dom";

/* Present three lines in Vanilla JS like below */
// let h1 = document.createElement("h1");
// h1.textContent = "Hello World";
// document.querySelector("#root").appendChild(h1);

/* ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT); */
// ReactDOM.render(<h1>Hello World</h1>, document.querySelector("#root"));

/* Present multiple elements */
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is paragraph.</p>
  </div>,
  document.querySelector("#root")
);
