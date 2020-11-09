import React, { useState } from "react";

function App() {
  /* 두개의 input" 태그로 부터 얻는 값을 따로 관리하기 힘들다. */
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }
  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }
  /* 두개의 input" 태그로 부터 얻는 값을 한꺼번에 관리하기. */
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });
  function handleChange(event) {
    /* 2개의 "input" 태그에 동일하게 이 함수를 'onChange'에 할당하였기 때문에 "event.target"이 다이내믹하게 바뀐다.*/
    // console.log(event.target.value);
    // console.log(event.target.name);
    // const value = event.target.value;
    // const name = event.target.name;
    /* 2개의 "input" 태그의 'value'가 더 이상 변화가 없는 상태에서 아래와 같이 선언한다.*/
    const { value, name } = event.target;
    setFullName((prev) => {
      // console.log(prevValue);
      /* 선언되지 않은 "event.target.name"의 상태로는 'setFullName()'를 사용할 수 없다. */
      // if (event.target.name === "fName") {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prev.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: prev.firstName,
          lastName: value
        };
      }
    });
  }

  return (
    <div className="container">
      {/* <h1>Hello {firstName} {lastName}</h1> */}
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          // onChange={handleFirstNameChange}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // vaule={fullName.firstName}
        />
        <input
          // onChange={handleLastNameChange}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          // vaule={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
