import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// function App() {
//   let count = 0;
//   function increase() {
//     // console.log("I got clicked");
//     count++;
//     // 이미 렌더링 되어버려 바꿀 수 없다면 바뀐 상태에 맞게 다시 렌더링하는 것이 하나의 해결책이 될 수 있다.
//     ReactDOM.render(
//       <div className="container">
//         <h1>{count}</h1>
//         <button onClick={increase}>+</button>
//       </div>,
//       document.getElementById("root")
//     );
//   }

ReactDOM.render(<App />, document.getElementById("root"));
