//1. Create a new React app.
// 스타트 템플릿을 다운로드 받아서 아래와 같이 실행함으로써 해결
// $ npm install
// $ npm start
import React from "react";
import ReactDom from "react-dom";

//2. Create a App.jsx component.
// => App.jsx를 만들기 전에 component를 저장할 디렉토리를 먼저 생성하고 아래와 같이 실행함으로써 해결
import App from "./components/App";

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
// => Header.jsx를 component 디렉토리에서 만들어 App.jsx로 넘겨줌으로써 해결

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
// => Footer.jsx를 component 디렉토리에서 만들어 App.jsx로 넘겨줌으로써 해결

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
// => Note.jsx를 component 디렉토리에서 만들어 App.jsx로 넘겨줌으로써 해결

//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

ReactDom.render(
    <App />,
    document.getElementById('root')
);
