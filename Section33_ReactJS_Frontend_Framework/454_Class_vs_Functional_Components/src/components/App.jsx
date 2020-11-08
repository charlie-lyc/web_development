import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

/* Class */
class App extends React.Component {
  render() {
    return <ClassComponent />;
  }
}

/* Hook */
// function App() {
//   return <FunctionalComponent />;
// }

export default App;
