import React from "react";
import Card from "./Card";
import contacts from "../contacts";

import Avatar from "./Avatar";
import Info from "./Info";

function createCard(contact) {
  return (
    <Card
      {/* key는 JSX에서 map()이 사용될때 자동으로 생성되는 특별한 속성이다. */}
      {/* 사용한다고해서 에러가 발생되지는 않지만 브라우저에 나타나지는 않는다. */}
      key={contact.id}
      {/* 따라서 id 값을 이용하기 위해서는 다른 속성 이름이 필요하다. */}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  // console.log(contacts);
  return (
    <div>
      {/* Card components들을 생성하기 위해 만든 JSX를 아래와 같이 간단하게 재사용할 수 있다. 이것이 React의 power이다.!!! */}
      <Avatar image="https://media-exp1.licdn.com/dms/image/C5603AQHCcxmlWRxB-g/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=mw16YMIyBqOPwKRUo3uIs5-HVySgjPfON-pUHklKiEg"/>
      <Info detailInfo="Hello I'm Chalie."/>
      {/* Card components들의 구조를 체계적으로 구성 */}
      <h1 className="heading">My Contacts</h1>
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}

      {/* JSX내에서 표현문은 가능하지만 구문은 사용이 불가능하기 때문에 if 나 for 또는 while 등은 사용할 수 없다. */}
      {/* 그런데 자바스크립트 메소드 중에는 for 구문과 유사한 forEach()가 있고, 또 이를 포함하고 있는 map()을 아래와 이용할 수 있다. */}
      {/* { contacts.map(function(contact) {
        return createCard(contact);
        }) }
      또는
      */}
      { contacts.map(createCard) }
      {/* 특이점 첫번째, 표현문만 가능하기 때문에  map(); 으로 작성하지 않는다. 세미콜론은 제거 해야한다. */}
      {/* 특이점 두번째, 첫번째 특징에 의한 react complile의 차이인지 모르겠지만 map()의 실행결과가 배열로 반환되지 않는다. */}
    </div>
  );
}


export default App;
