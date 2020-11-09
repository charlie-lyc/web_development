import React, { useState } from "react";

function ToDoItem(props) {
  /********** Is Done **********/
  // const [isDone, setIsDone] = useState(false);
  // function handleClick() {
  //   // setIsDone(true);
  //   // 또는
  //   setIsDone((prev) => !prev);
  // }
  /********** Delete Item **********/
  // function handleClick() {
  //   props.onChecked(props.id);
  // }
  return (
    <div
      /********** Delete Item **********/
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/********** Is Done **********/}
      {/* <li style={{ textDecoration: isDone && "line-through" }}>{props.text}</li> */}
      {/* <li style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.text}</li> */}
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
