import React, { useState } from "react";

function App() {
  /* 버튼을 누를 때마다 현재시간 갱신 */
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  /* 버튼을 누르지 않아도 1초간격으로 자동으로 현재시간 갱신 */
  // setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

//Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
