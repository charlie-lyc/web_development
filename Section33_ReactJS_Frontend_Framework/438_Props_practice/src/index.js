import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
// => App.jsx파일에 styles.css의 selector이름 적용

//2. Extract the contact card as a reusable Card component.
// => Card.jsx파일을 생성

//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
// => 'props'객체를 이용하여 Card.jsx파일을 작성

//4. Import the contacts.js file to create card components.
// => contactx.js파일에서 정보를 export하고, App.jsx에서 그 정보를 import하여 활용
