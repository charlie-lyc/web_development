import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* 'key'는 React DOM 구조에서 자동으로 생성되는 특별한 property이므로 이용해도 나타나지 않는다. */}
        {/* <p>{props.key}</p> */}
        {/* 따라서 id를 나타내고 싶다면 key말고 다른 property name을 사용해야 한다. */}
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
