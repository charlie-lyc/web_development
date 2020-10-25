import React from "react"; // JavaScript ES6
// const react = require('react'); // Node.js (not JavaScript)

import ReactDOM from "react-dom";

// import PI, { doublePi, triplePi } from "./math";
import * as pi from "./math";

ReactDOM.render(
  <ul>
    /* <li>{PI}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li> */
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
