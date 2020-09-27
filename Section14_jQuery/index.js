/* Test My JS */
// alert('Hello');


/* Test jQuery : CDN 링크의 위치나 인터넷 연결 등 모든 환경이 정상적이라면 코드가 제대로 실행되지만,
                 그렇지 않을 경우 제대로 실행되지 않을 수 있다. */
//$('h1').css('color', 'red');

/* 따라서 jQuery Library 등 모든 로딩이 완료된 후 안전하게 코드가 실행되도록 하기위해
   "$(document).ready()" 명령을 사용한다. 여기서는 모두 정상이라는 가정하에 사용하지 않겠다. */
// $(document).ready(function() {
//   console.log('Ready!');
// });


/*** 1. Select Elements :

  => "jQuery()"
  => "$()"

  jQuery("CSS Selector")
  $("CSS Selector")

  $('h1').css('color');
  => "rgb(0, 0, 0)"
  console.log($('h1').css('color'));
  => rgb(0, 0, 0)
  $('h1').css('color', 'green');
  => S.fn.init [h1, prevObject: S.fn.init(1)]
  console.log($('h1').css('color'));
  => rgb(0, 128, 0)

***/


/*** 2. Manipulate Styles :

  => "css()"
  => "addClass()" & "removeClass()"
  => "hasClass()"

  // 기존의 JS 방식으로는 작동되지 않는다. XX "classList.add()" XX
  $('h1').classList.add('big-title');

  // 해당 클래스의 스타일이 적용되었는지 확인
  $('h1').hasClass('big-title');
  => true

***/
// 각각 따로
// $('h1').css('font-size', '5rem');
// $('h1').css('color', 'green');
// $('h1').css('font-family', 'cursive');
// 한꺼번에
$('h1').addClass('big-title');

$('h1').addClass('margin-100');
setTimeout(function() {
  $('h1').removeClass('margin-100');
}, 1000);


/*** 3. Manipulate Text Content and Inner HTML :

  => "text()"
  => "html()"

***/
$('h1').text('Good Bye');
$('button').text('Do not click me');
setTimeout(function() {
  $('button').html('<em>Do not click me</em>');
}, 2000);


/*** 4. Manipulate Attributes :

  => "attr()"

***/
$('img').attr('src', 'tom1.png');
$('a').attr('href', 'https://google.com');
$('a').text('Search');
setTimeout(function(){
  $('h1').attr('class', '');
}, 3000);


/*** 5. Add Event Listener :

  => "click()"
  => "keypress()" => "keydown()"
  => "on()"

***/
$('h1').click(function() {
  $('h1').css('color', 'purple');
});
// Javascript :
// for (let i = 0; i < document.querySelectorAll('button').length; i++) {
//   document.querySelectorAll('button')[i].addEventListener('click', function() {
//     document.querySelector('h1').style.color = 'purple';
//   });
// }
// jQuery :
$('button').click(function() {
  $('h1').css('color', 'purple');
});

$('input').keypress(function(event) {
  console.log(event.key);
});

/* Challenge : 위에서 콘솔창에 출력되던 값을 <h1></h1>에 출력되도록 */
$('input').keypress(function(event) {
  $('h1').text(event.key);
});

// 마우스 포인트를 갖다대면 빨간색으로 변한다.(앞서 코딩: 글자 또는 버튼을 클릭하면 보라색으로 변한다.)
$('h1').on('mouseover', function() {
  $('h1').css('color', 'red');
});


/*** 6. Add and Remove Elements :

  => "before()" & "after()"
  => "prepend()" & "append()"
  => "remove()"

***/
// 해당 태그의 외부에서 앞서 위치
$('h1').before('<button>Before</button>');
// 해당 태그의 외부에서 후에 위치
$('h1').after('<button>After</button>');
// 해당 태그의 내부에서 opening tag(왼)쪽에 위치
$('h1').prepend('<button>Left</button>');
// 해당 태그의 내부에서 closing tag(오른쪽)쪽에 위치
$('h1').append('<button>Right</button>');

setTimeout(function() {
  // 해당 객체 삭제
  $('h1 button').remove();
}, 4000);


/*** 7. Animation Effect :

  => "hide()" & "show()", "toggle()"
  => "fadeOut()" & "fadeIn()", "fadeToggle()"
  => "slideUp()" & "slideDown()", "slideToggle()" // Drop Down 메뉴를 만들때 유용하다.
  => "animate()" // JS구문인데 CSS관련 코딩이 많이 나오는 것이 바람직하지 않다. "addClass()"을 추천

***/
// $('button').on('click', function() {
//   $('h1').hide();
//   setTimeout(function() {
//     $('h1').show();
//   }, 200);
// });

// 동일한 객체와 이벤트에 대한 코드가 동시에 존재하게 될 경우,
// 앞선 이벤트가 선점(뒤의 이벤트와 충돌)하게 되어 뒤에 위치한 코드가 실행되지 않게 된다.
// $('button').on('click', function() {
//   $('h1').toggle();
// });

// $('button').on('click', function() {
//   $('h1').fadeOut();
//   setTimeout(function() {
//     $('h1').fadeIn();
//   }, 2000);
// });

// $('button').on('click', function() {
//   $('h1').fadeToggle();
// });

// $('button').on('click', function() {
//   $('h1').slideUp();
//   setTimeout(function() {
//     $('h1').slideDown();
//   }, 2000);
// });

// $('button').on('click', function() {
//   $('h1').slideToggle();
// });

// CSS 개념을 적용한 객체(Dict-Type or JSON)를 입력 : 2초 뒤에 원래대로 또는 다른 형태로
// $('button').on('click', function() {
//   $('h1').animate({ opacity: 0.3, fontSize: "5rem"});
//   setTimeout(function() {
//       $('h1').animate({ opacity: 1, fontSize: "3rem"});
//   }, 2000);
// });

// 3초에 걸쳐 애니메이션 효과가 진행 : 그 다음에 원래대로 또는 다른 형태로
// $('button').on('click', function() {
//   $('h1').animate(
//     { opacity: 0.3, fontSize: "5rem"},
//     3000,
//     function() {
//       $('h1').animate({opacity: 1, fontSize: "3rem"});
//     }
//   )
// });


/*** jQuery 에니메이션 효과의 하이라이트 :
   => 동일한 객체에 대하여 여러 메소드가 차례로 적용되도록 할 수 있다.
   => Javascript 였다면 "setTimeout()"을 사용했겠지만 그럴 필요가 없다.
***/
// $('button').on('click', function() {
//   $('h1').slideUp();
//   $('h1').slideDown();
//   $('h1').animate({opacity: 0.5});
//   $('h1').animate({opacity: 1});
// });
/* 더욱더 놀라운 것은 아래와 같이도 실행된다!!! */
$('button').on('click', function() {
  $('h1').slideUp().slideDown().animate({opacity: 0.5}).animate({opacity: 1});
});
