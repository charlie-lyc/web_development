import React from "react";
import ReactDOM from "react-dom";

/* 기본적으로 CSS를 배울 때 Inline Style을 사용하지 말 것을 얘기해 놓고 왜 이제는 쓰라고 하는 것인가?
  => 그 때는 Opening Tag가 길어 질수 밖에 없는 상황이였지만, 
    ReactJS를 이용함으로써 CSS를 업데이트 및 유지, 보수가 편리해지기 때문이다.           */
/* JSX에서 CSS Property 대신 JS Object로 대체 할 수 있다. 
   1. key-value pair를 따른다.
   2. key의 ''는 생략 가능하고, value가 문자값일 경우 ''를 표기해야 한다. 그렇지 않으면 변수로 인식된다.
   3. CSS의 ';' 대신 ","가 사용된다고 생각하자.                                    */
/* 앞서 경험했던 HTML 경우와 마찬가지로 JSX에서 CSS의 속성 표기법 또한 원래와 조금 다르다.
  ex) '-' 대신 "camelCase" 사용                                                */
const customStyle = {
  color: "red",
  // fontSize: 48 // OK
  fontSize: "48px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  // <h1 style="color: red;">Hello World!</h1>, // NOT available
  // <h1 style={{color: 'red'}}>Hello World!</h1>, // OK
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
