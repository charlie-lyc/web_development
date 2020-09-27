// alert('Hello') // External JS 경로 설정이 제대로 되었는지 확인

// 주사위 숫자 선택을 위한 배열
var diceNumbers = ['1', '2', '3', '4', '5', '6'];

// 주사위를 던지기 전에 연출 효과
var displayDices = setInterval(getDices, 300);

// 주사위 던지기를 위한 클릭 범위 설정
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
image1.onclick = throwDices;
image2.onclick = throwDices;

/******************************************************************************/

// 주사위 숫자 배열에 대한 0~5 임의의 인덱스를 얻는 함수
function getRandomIndex() {
  return randomIndex = Math.floor(Math.random() * diceNumbers.length);
}

// 임의의 인덱스를 이용해서 1~6 주사위 숫자를 얻는 함수
function getDiceNumber() {
  return diceNumbers[getRandomIndex()];
}

// 주사위 숫자를 이용하여 이미지 파일의 이름 조합하여 주사위 이미지 파일을 얻는 함수
function getDices() {
  image1.src = 'images/dice' + getDiceNumber() + '.png';
  image2.src = 'images/dice' + getDiceNumber() + '.png';
  // OR
  // var dice1 = 'images/dice' + getDiceNumber() + '.png';
  // var dice2 = 'images/dice' + getDiceNumber() + '.png';
  // image1.setAttribute('src', dice1);
  // image2.setAttribute('src', dice2);
}

/* 주사위 던지기 함수 : 두개의 주사위에 대한 각각의 인덱스를 얻어 주사위 이미지 파일을 결정하고, 승무패 확인
                   주사위 이미지들을 클릭할 때 함수가 호출된다. */
function throwDices() {
  clearInterval(displayDices);
  var index1 = getRandomIndex();
  var index2 = getRandomIndex();
  image1.src = 'images/dice' + diceNumbers[index1] + '.png';
  image2.src = 'images/dice' + diceNumbers[index2] + '.png';
  // OR
  // var dice1 = 'images/dice' + diceNumbers[index1] + '.png';
  // var dice2 = 'images/dice' + diceNumbers[index2] + '.png';
  // image1.setAttribute('src', dice1);
  // image2.setAttribute('src', dice2);
  
  var heading = document.querySelector('h1');
  if (index1 > index2) {
    // heading.innerHTML = '<i class="fas fa-flag"></i> Player 1 Wins!';
    // OR
    heading.innerHTML = '🚩 Player 1 Wins!';
  } else if (index1 < index2) {
    // heading.innerHTML = 'Player 2 Wins! <i class="fas fa-flag"></i>';
    // OR
    heading.innerHTML = 'Player 2 Wins! 🚩';
  } else {
    heading.textContent = 'Draw!';
  }
}
