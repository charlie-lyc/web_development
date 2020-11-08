import React, { useState } from "react";

function App() {
  // const state = React.useState(123);
  // console.log(state);
  // console.log(state[0]);
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

/* Destructing Array*/
// ex) const [red, green, blue] = [9, 132, 227];
//     red   // 9
//     green // 132
//     blue  // 227
