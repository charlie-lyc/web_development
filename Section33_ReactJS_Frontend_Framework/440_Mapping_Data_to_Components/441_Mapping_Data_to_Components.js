/*

  // JSX내에서 표현문은 가능하지만 구문은 사용이 불가능하기 때문에 if 나 for 또는 while 등은 사용할 수 없다.
  // 그런데 자바스크립트 메소드 중에는 for 구문과 유사한 forEach()가 있고, 또 이를 포함하고 있는 map(), filter(), reduce() 메소드가 있다.
  // map()이 자바스크립트에서 사용된다면 이런식이 될 것이다.
  contacts.map(function() {
      return createCard();
  });
  // 또는
  contacts.map(createCard);

  // JSX내에서 사용시 특이점 첫번째, 표현문만 가능하기 때문에  map(); 으로 작성하지 않는다. 세미콜론은 제거 해야한다.
  // 두번째, 첫번째 특징에 의한 react complile의 차이인지 모르겠지만 map()의 실행결과가 배열로 반환되지 않는다.
  // 어쨌든 결론적으로 아래와 같이 심플하게 표현될 수 있다.
  { contacts.map(createCard) }
  
*/
