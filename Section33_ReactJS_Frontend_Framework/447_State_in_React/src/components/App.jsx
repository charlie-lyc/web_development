import React from "react";

var isDone = false;

function strike() {
  /* Imperative Programming : JSX가 rendering된 이후에도 얼마든지 값을 바꿀 수 있다.*/
  document.getElementById("root").style.textDecoration = "line-through";
  /* Declarative Programming : JSX가 이미 rendering되어버리면 원래의 값을 바꿀 수 없다. */
  // isDone = true;
}

function unStrike() {
  /* Imperative Programming */
  document.getElementById("root").style.textDecoration = null;
  /* Declarative Programming */
  // isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
