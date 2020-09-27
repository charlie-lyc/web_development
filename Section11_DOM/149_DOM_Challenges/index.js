/* 크롬 브라우저 자바스크립 콘솔에서 실습 : "HTML Tree Structure"
  document.firstElementChild                                     // <html>...</html>
  document.firstElementChild.firstElementChild                   // <head>...</head>
  document.firstElementChild.lastElementChild                    // <body>...</body>
  document.firstElementChild.lastElementChild.firstElementChild  // <h1>...</h1>
*/

// 1. Challenge
// var heading1 = document.firstElementChild.lastElementChild.firstElementChild;
// heading1.innerHTML = 'Good Bye';


/*** Syntax : using "Hierarchical Selectors(CSS selectors)"
      1) querySelector("Hierarchical Selectors").firstElementChild
                                                .lastElementChild
      2) querySelectorAll("Hierarchical Selectors")
          => 대상 모두가 선택되어 "배열"로 저장되고, 인덱스를 이용해 하나만 선택해야 한다.
             즉, 대상이 하나 뿐이어도 "배열"로 저장되므로, 인덱스는 "0"을 선택해야 한다.
***/

// 2. Challenge
// document.querySelector('input').click();

/* "querySelector()"를 이용해 부모객체를 선택하고, 'firstElementChild'와 'lastElementChild'를
    이용해서 첫번째와 마지막 자식객체를 선택할 수 있다. 단, 대상이 여러 개일 경우 "첫번째 하나만 선택된다." */

// 3. Challenge
// document.querySelector('ul').lastElementChild.innerHTML = 'Facebook';
// document.querySelector('ul').lastElementChild.style.color = 'red';


/*** Select HTML Element(s) : 대상 모두가 선택되어 "배열"로 저장되고, 인덱스를 이용해 하나만 선택해야 한다.
                            즉, 대상이 하나 뿐이어도 "배열"로 저장되므로, 인덱스는 "0"을 선택해야 한다.
      1) getElementsByTagName()[]
      2) getElementsByClassName()[]
      3) getElementById()           => 웹페이지 내에서 오직 하나만 선택된다.
***/

// 4. Challenge
// document.getElementsByTagName('li')[1].innerHTML = 'Amazon';
// document.getElementsByTagName('li')[1].style.color = 'blue';


/******************************************************************************/


// 1. Challenge
document.querySelector("#title").innerHTML = 'Good Bye';

// 2. Challenge
document.getElementsByTagName('input')[0].click();

// 3. Challenge
document.getElementsByClassName('item')[2].innerHTML = 'Facebook';
document.getElementsByClassName('item')[2].style.color = 'red';

// 4. Challenge
document.getElementsByClassName('item')[1].innerHTML = 'Amazon';
document.getElementsByClassName('item')[1].style.color = 'blue';


/******************************************************************************/


/*** Change and Manupulate Styles
     1. CSS에서의 속성값은 문자열(ex: "5rem") 형태로 표시한다.
     2. CSS에서의 속성이름이 '-'를 포함하고 있다면,
        'Camel Case'형태(ex: font-size => fontSize)로 바뀐다.
***/

/* Button Style */
document.getElementsByClassName('btn')[0].style = ': active; color: red;';

/* Challenge */
// document.querySelector("li").style.color = 'pink';
// document.querySelector("li a").style.color = 'pink';
// OR
document.querySelectorAll("#list .item")[0].style.color = 'pink';
document.querySelectorAll("#list a")[0].style.color = 'pink';

/* Challenge */
document.querySelector(".btn").style.backgroundColor = "yellow";


/******************************************************************************/


/*
  'Separation of Concerns' : "Structure(HTML)" VS "Style(CSS)" VS "Behaviour(JS)"
*/

/* 크롬 콘솔에서 실습 :
  document.querySelector('button').classList;
  => DOMTokenList ["btn", value: "btn"]

  document.querySelector('button').classList.add('invisible');
  document.querySelector('button').classList;
  => DOMTokenList(2) ["btn", "invisible", value: "btn invisible"]

  document.querySelector('button').classList.remove('invisible');
  document.querySelector('button').classList;
  => DOMTokenList ["btn", value: "btn"]

  "style.css"파일에서 아래와 같이 작성
  .invisible {
    visibility: hidden;
  }

  document.querySelector('button').classList.toggle('invisible');
  => true  // .invisible 클래스가 추가되어 스타일이 적용되고 따라서 버튼이 사라진다.

  document.querySelector('button').classList.toggle('invisible');
  => false  // .invisible 클래스가 삭제되어 스타일이 적용되지않고 따라서 버튼이 나타난다.

*/

/*** Syntax :
      1) classList.add()
      2) classList.remove()
      3) classList.toggle()
***/

/* Challenge : <h1>...</h1>의 폰트 사이즈, 색깔, 굵기를 한번에 변경하기.(// 그리고 다시 원상태로) */
document.querySelector('#title').classList.add('bigger');
// document.querySelector('#title').classList.remove('bigger');


/******************************************************************************/


/* Text Manipulation and Text-Content Property :

   document.getElementById('title').innerHTML;
   => "Good Bye" // HTML내의 모든 내용을 의미한다.
   document.getElementById('title').textContent;
   => "Good Bye" // 오로지 text로 된 Content만을 의미한다.

   예를 들어 <h1 id="title"><span>Hello</span></h1> 이였다면 결과는 다르다.

   document.getElementById('title').innerHTML;
   => "<span>Hello</span>"
   document.getElementById('title').textContent;
   => "Hello"

*/

/*** Syntax :
      1) innerHTML
      2) textContent
***/


/******************************************************************************/


/* Manipulate HTML Element Attributes :

  document.querySelector('li a').getAttribute('href');
  => "https://www.google.com"

*/

/* Anchor Hypertext Reference */
document.querySelector('li a').setAttribute('href', 'https://www.google.com');
// OR
// document.querySelector(".item a").setAttribute('href', 'https://www.google.com');
// OR
// document.querySelector("li.item a").setAttribute('href', 'https://www.google.com');
// OR
// document.querySelector("#list a").setAttribute('href', 'https://www.google.com');
// OR
// document.querySelector("li a").href = 'https://www.google.com';

/* Button Style */
// document.querySelector(".btn").setAttribute('style', ':active; color: red;');

/*** Syntax :
      1) getAttribute()
      2) setAttribute()
***/
