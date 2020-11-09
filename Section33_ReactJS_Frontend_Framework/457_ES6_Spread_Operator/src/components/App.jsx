import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    /* 앞서 구조 분해되어 얻은 name이 tag엘리먼트의 속성 이름, 즉 엘리먼트 객체의 key역할을 한다는 것을 생각해 냈다면 아주 좋은 시작이다.
        다만, 좀더 깊이 고민해야할 부분이 있다. 즉 name을 그대로 key로 사용하면 되는 것인가? 이에 대한 답은 객체의 기본적인 표기법을 다시 생각해 보면 알 수 있다. 
        예를 들어 객체를 {name: "charlie"} 이라고 표기하면 key에 외부의 변수 name의 값이 적용되는 것인가?
        절대 아니다. 그냥 key의 값이 "name"인 것이다. 객체의 표기상 ""이 없을 뿐이지 명백하게 String이다.
        즉, object[name] = value 와 object["name"] = value(또는 object.name = value)는 분명 다르다. 
        결론적으로 key의 값이 다이내믹하게 변하기 위해서는 Dot Notation이 아니라 Bracket Notation을 사용해야 한다. */
    /* 이 이슈와 관련하여 아래와 같이 표기할 수 있게 최근에 업데이트 되었다.
        객체 내에서 name 변수의 값이 key로 사용되기 위해서 Bracket Notation을 적용하여 아래와 같이 표기할 수 있다. */
    setContact((prev) => {
      return {
        ...prev,
        // name: value // (X)
        [name]: value
      };
    });
    /* 좀더 간략화 하면 아래와 같이 나타낼 수도 있으나 지나치면 가독성이 떨어지므로 위의 정도까지 나타내는 것이 좋다. */
    // setContact((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
