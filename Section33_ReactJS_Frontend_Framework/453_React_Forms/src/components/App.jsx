import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  /********** Real Time Change **********/
  function handleChange(event) {
    // console.log('Chnaged');
    // console.log(event.target);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
    // console.log(event.target.value);
    setName(event.target.value);
  }
  /********** When Clicked Change **********/
  function handleClickButton(event) {
    setHeadingText(name);
    // 폼이 리프레쉬되지 않게 할 수 있다.
    event.preventDefault();
  }

  return (
    <div className="container">
      {/* <h1>Hello {name}</h1> */}
      <h1>Hello {headingText}</h1>
      {/* <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClickButton}>Submit</button> */}
      {/* 아래와  같이 "form"태그를 사용할 경우에는 버튼을 클릭하면 "form"태그의 'onSubmit'을 작동시켜
          "button"태그 'onClick'과 동일한 역할을 한다.
          단, 기본적으로 폼이 리프레쉬된다. */}
      <form onSubmit={handleClickButton}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
