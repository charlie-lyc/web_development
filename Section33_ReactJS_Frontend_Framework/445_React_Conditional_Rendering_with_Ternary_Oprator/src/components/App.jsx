import React from "react";
import Login from "./Login";

let isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

/* Expression with (Conditional) Ternary Operator */
// (CONDITION ? DO If true : Do If false)
// ex) isCloudy === true ? bringUmbrella() : bringSunscreen()

/* Expression with Logical && Operator */
// (EXPRESSION && EXPRESSION) : && in JavaScript
// ex) const x = 5;
//     (x > 4 && x < 6)
// (CONDITION && EXPRESSION) : && in React
// (true && EXPRESSION(O)) : && in React
// (false && EXPRESSION(X)) : && in React

/* Another Example of (Conditional) Ternary Operator */
// const currentTime = new Date(2020, 11, 6, 11).getHours();
const currentTime = new Date(2020, 11, 6, 13).getHours();

function App() {
  return (
    /*  
      if (isLoggedIn === true) {
        return <h1>Hello</h1>;
      } else {
        return <Login />;
      }
      // "(조건)삼항 연산자"에 의해 위의 statement가 아래와 같은 expression으로 바뀌게 된다.
      isLoggedIn ? <h1>Hello</h1> : <Login />
      // 이를 JSX내에 적용하면 다음과 같다. 
    */
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    // 또는
    // <div className="container">{ isLoggedIn === true ? <h1>Hello</h1> : <Login /> }</div>

    /* (Conditional) Ternary Operator Example */
    // <div className="container">{ currentTime > 12 ? <h1>Why are you still working?</h1> : null }</div>
    /* Logical && Operator Example*/
    // <div className="container">{ currentTime > 12 && <h1>Why are you still working?</h1> }</div>
  );
}

export default App;
