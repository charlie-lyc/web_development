import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  // console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    {/* JSX는 html과 유사한 일종의 customizing된 object이므로 property를 변수처럼 임의로 정할 수 있다. */}
    {/* 다만 그 속성 이름이 html 이나 react 에서 이미 사용되는 것은 적용이 되지 않는다. */}
    {/* 예를 들어 'class' 나 'className' 은 JSX에서는 사용될 수 없다. */}
    {/* 좀더 실용적인 예를 들자면 어떤 CSS Style을 JSX에 적용하려면 'style' 속성을 JSX에 추가할 수 없으므로 */}
    {/* 앞서 배운 것처럼 html 태그에 적용해야 한다. */}
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Zack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="chucknorris@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
