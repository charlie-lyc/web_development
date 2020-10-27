import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
// => styles.css 파일을 보고 App.jsx에 적합한 'className'들을 추가

//2. Extract the contact card as a reusable Card component.
// => App.jsx에서 반복되는 구조의 재사용 가능한 요소들만 뽑아내어 Card.jsx 생성

//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
// => App.jsx의 <Card />에 사용되는 속성들을 Card.jsx에서 props를 이용해 추가

//4. Import the contacts.js file to create card components.
//=> contacts.js 파일에서 export하고 App.jsx에서 import

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
