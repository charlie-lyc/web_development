//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from 'react';
import ReactDOM from 'react-dom';

// const currentDate = new Date(2020, 1, 1, 0);
// const currentDate = new Date(2020, 1, 1, 12);
// const currentDate = new Date(2020, 1, 1, 18);
const currentDate = new Date();

// console.log(new Date().getHours());
const currentTime = currentDate.getHours();

const customStyle = {
  color: ''
}
let greeting;

if (0 <= currentTime && currentTime < 12) {
  customStyle.color = "red";
  greeting = 'morning';
} else if {
  customStyle.color = "green";
  greeting = 'afternoon';
} else {
  customStyle.color = "blue";
  greeting = 'evening';
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>Goog {greeting}</h1>,
  document.querySelector('#root')
);
