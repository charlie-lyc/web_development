/*
  "Use State Hook"

  UI = f(State)

  ex) 'Ice' vs 'Water'

  var temp = -10
  Ice = f(-10)

  var temp = 60
  Water = f(60)

*/

/*
  ex) To-Do List Application

    App
     |
  ListItem
     |
  paragraph

                      'click'
  var isDone = false; =======> var isDone = true;

*/

/*
  <Imperative Programming>
  document.getElementById("root").style.textDecoration = "line-through";

  <Declarative Programming>
            'let isDone = false'
  Buy Milk =====================> Buy Milk(?)

*/

/*
  이미 렌더링된 JSX이라도 절차적(명령적)프로그래밍을 통해
  해당 속성에 직접 접근하여 값을 바꿀수 있다.

  그런데 선언적 프로그래밍을 통해서는 이미 렌더링된 JSX에 직접 접근할 수 없다.
  즉 function이 할당된 event handler(trigger)에 작동 조건을 만족시키는 값(true)
  이 전달되어도 이미 렌더링된 상태에서 이 바뀐 상태에 맞추어 렌더링된 JSX가 바뀌지 않는다.
  이 때 필요한 것이 React 'Hook'이다.

  'Hook'의 의미는 User Interface에 영향을 주는 "State"를 낚시 바늘로 낚아 이용하는 것을 의미한다.

  UI = f(State)

*/
