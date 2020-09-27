//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Practice for react</h1>
    <ul>
      <li>First List</li>
      <li>Second List</li>
      <li>Third List</li>
    </ul>
  </div>,
  document.querySelector("#root")
);
