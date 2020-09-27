//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "Charlie";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentDate.getFullYear()}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.querySelector("#root")
);
