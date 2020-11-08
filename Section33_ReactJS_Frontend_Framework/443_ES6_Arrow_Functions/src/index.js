import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

/* with "External Function" */
// function square(x) {
//   return x * x;
// }
// const newNumbers = numbers.map(square);
// console.log(newNumbers); // [9, 3136, 4, 2304, 25]
/* with "Anonymous Function" */
// const newNumbers = numbers.map(function(num) {
//   return num * num;
// });
// console.log(newNumbers); // [9, 3136, 4, 2304, 25]
/*  whth "Arrow Function" */
// const newNumbers = numbers.map(num => num * num);
// console.log(newNumbers); // [9, 3136, 4, 2304, 25]

// Challenges
////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(x => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(num => num > 10);
