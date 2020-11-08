import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick() {
    // console.log('Clicked');
    setHeadingText("Submitted");
  }
  /******************** Imperative ********************/
  // function handleMouseOver() {
  // console.log('MouseOver');
  // document.getElementsByTagName("button")[0].style.backgroundColor = "black";
  // }
  // function handleMouseOut() {
  // console.log('MouseOut');
  // document.getElementsByTagName("button")[0].style.backgroundColor = "white";
  // }
  /******************** Declarative ********************/
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      {/* <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button> */}
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
