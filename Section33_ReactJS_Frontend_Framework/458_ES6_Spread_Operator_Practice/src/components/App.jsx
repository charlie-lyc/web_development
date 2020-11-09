import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    setInputText(event.target.value);
  }
  const [items, setItems] = useState([]);
  function addItem() {
    setItems([...items, inputText]);
    // 또는
    // setItems((prev) => [...prev, inputText]);
    // 그리고 입력창은 리프레쉬
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
