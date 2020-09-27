// alert('Hello');

/***
  "addEventListener()"

  All Events Reference : https://developer.mozilla.org/en-US/docs/Web/Events
***/
// document.querySelector('button').addEventListener("click", handleClick);
// function handleClick() {
//   alert('I got clicked!');
// }
// OR
// document.querySelector('button').addEventListener("click", function() {
//   alert('I got clicked!');
// });

/***
  "$0" : 어디든 클릭하여 선택된 객체 자신을 의미

  $0.addEventListener('click', function(){
    console.log('I got clicked!')
  });
  => I got clicked! // 아무곳이나 클릭하면 콘솔에 출력
***/

/***
  "Higher Order Functions" and "Passing Functions as Arguments"

  ex) Arithmetic Calculator : 콘솔창에서 실습
  function add(num1, num2) {
    return num1 + num2;
  }
  function subtract(num1, num2) {
    return num1 - num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function divide(num1, num2) {
    return num1 / num2;
  }
  function calculator(num1, num2, operator) {
    return operator(num1, num2);
  }

  //Higher Order Functions, Passing Functions
  calculator(10, 5, add);
  => 15
  calculator(10, 5, subtract);
  => 5
  calculator(10, 5, multiply);
  => 50
  calculator(10, 5, divide);
  => 2

  debugger; // 콘솔창이 디버깅 모드로 변환
  calculator(10, 5, add); // "Step into next function call"키를 이용해서 디버깅이 다 진행된 다음에 결과값이 출력
  => 15
***/

/***
  "this" : 이벤트 발생시 대상이 된 객체 자신을 의미
***/

/************************ 드럼이미지를 클릭했을 때 소리가 나도록 ************************/
// var drums = document.querySelectorAll('.drum');
// var numberOfDrums = drums.length;
// for (let i = 0; i < numberOfDrums; i ++) {
//   drums[i].addEventListener("click", function() {
//     // console.log(this); // "this" : "click"이벤트 대상이 된 HTML객체 자신을 가리킨다.(여기서는 'drums[i]' 혹은, '<button>...</button>')
//     // this.style.color = 'white'; // 클릭한 대상의 폰트 색깔이 흰색으로 바뀌게 된다.
//     switch (this.innerHTML) {
//       case 'w':
//         var tom1 = new Audio('sounds/tom-1.mp3');
//         tom1.play();
//         break;
//       case 'a':
//         var tom2 = new Audio('sounds/tom-2.mp3');
//         tom2.play();
//         break;
//       case 's':
//         var tom3 = new Audio('sounds/tom-3.mp3');
//         tom3.play();
//         break;
//       case 'd':
//         var tom4 = new Audio('sounds/tom-4.mp3');
//         tom4.play();
//         break;
//       case 'j':
//         var snare = new Audio('sounds/snare.mp3');
//         snare.play();
//         break;
//       case 'k':
//         var crash = new Audio('sounds/crash.mp3');
//         crash.play();
//         break;
//       case 'l':
//         var kick = new Audio('sounds/kick-bass.mp3');
//         kick.play();
//         break;
//       /* default : 각 case에서 'break;'가 없다면, case별 실행 후 무조건 실행되는 구문이 되고,
//                   'break;'가 있다면, 어떤 case에도 해당되지 않을 때 실행된다. ('if'구문의 "else"와 같은 역할) */
//       // default:
//       //   console.log(this);
//     }
//   });
// }
/*******************************************************************************/

/***
  "event" : 발생된 이벤트 객체를 의미

  아래에서 'consle.log(event);'을 코딩한 상태에서 키보드 'a'를 누르면 크롬 콘솔창에서 아래와 같이 출력된다.
  => KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}
  이 객체에 대한 자세한 정보를 다시 클릭하여 들여다 보면, 아래와 같다.
    altKey: false
    bubbles: true
    cancelBubble: false
    cancelable: true
    charCode: 0
    code: "KeyA"
    composed: true
    ctrlKey: false
    currentTarget: null
    defaultPrevented: false
    detail: 0
    eventPhase: 0
    isComposing: false
    isTrusted: true
    key: "a"                     // event.key
    keyCode: 65                  // event.keyCode
    location: 0
    metaKey: false
    path: (4) [body, html, document, Window]
    repeat: false
    returnValue: true
    shiftKey: false
    sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
    srcElement: body
    target: body
    timeStamp: 23503.090000000157
    type: "keydown"               // event.type
    view: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
    which: 65
    __proto__: KeyboardEvent

***/

/****************** 드럼이미지에 해당되는 키보드키를 눌렀을 때 소리가 나도록 *****************/
// document.addEventListener("keydown", function() {
// OR
// window.addEventListener("keypress", function() {
//   // console.log('Key was pressed!');
//   // console.log(event); // "event" : 키보드 키를 "keydown"(눌렀)을 때의 '이벤트 객체'를 의미한다.
//   switch (event.key) {
//     case 'w':
//       var tom1 = new Audio('sounds/tom-1.mp3');
//       tom1.play();
//       break;
//     case 'a':
//       var tom2 = new Audio('sounds/tom-2.mp3');
//       tom2.play();
//       break;
//     case 's':
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;
//     case 'd':
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;
//     case 'j':
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;
//     case 'k':
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;
//     case 'l':
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;
//   }
// });
/*******************************************************************************/


/********************************* Refactoring *********************************/
var drums = document.querySelectorAll('.drum');
var numberOfDrums = drums.length;

for (let i = 0; i < numberOfDrums; i ++) {
  // 마우스 클릭 이벤트 추가
  drums[i].addEventListener("click", function() {
    // 소리 추가
    drumSound(this.innerHTML);
    // 에니메이션 추가
    drumAnimation(this.innerHTML);
  });
}

// 키보드 키 누르기 이벤트 추가
window.addEventListener("keypress", function(event) {
  // 소리 추가
  drumSound(event.key);
  // 에니메이션 추가
  drumAnimation(event.key);
});

function drumSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
  }
}

/**************************** 사운드에 이어 애니메이션 효과 추가 **************************/
function drumAnimation(key) {
  if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'j' || key === 'k' || key === 'l') {
    var drum = document.querySelector('.' + key);
    drum.classList.add('pressed');
    setTimeout(function (){
      drum.classList.remove('pressed');
    }, 200);
  }
}
