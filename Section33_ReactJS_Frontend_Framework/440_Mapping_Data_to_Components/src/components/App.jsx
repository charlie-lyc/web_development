import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      {/* 'key'는 React DOM 구조에서 자동으로 생성되는 특별한 property이므로 이용해도 나타나지 않는다. */}
      {/* 앞서 크롬 브라우저에 설치한 React Dev Tool을 통해서 확인할 수 있다. */}
      key={contact.id}
      {/* 따라서 id를 나타내고 싶다면 key말고 다른 property name을 사용해야 한다. */}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* JSX내에서 표현문은 가능하지만 구문은 사용이 불가능하기 때문에 if 나 for 또는 while 등은 사용할 수 없다. */}
      {/* 그런데 자바스크립트 메소드 중에는 for 구문과 유사한 forEach()가 있고, 또 이를 포함하고 있는 map(), filter(), reduce() 메소드가 있다. */}
      {/* JSX내에서 사용시 특이점 첫번째, 표현문만 가능하기 때문에  map(); 으로 작성하지 않는다. 세미콜론은 제거 해야한다. */}
      {/* 특이점 두번째, 첫번째 특징에 의한 react complile의 차이인지 모르겠지만 map()의 실행결과가 배열로 반환되지 않는다. */}
      {contacts.map(createCard)}

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
    </div>
  );
}

export default App;
