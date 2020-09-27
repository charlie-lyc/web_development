// alert('Hello.');

var pressedColors = [];
var clickedColors = [];

startGame();

/******************************************************************************/
function getIndex() {
  return index = Math.floor(Math.random() * $('.btn').length);
}

function getColor(index) {
  var colors = ['green', 'red', 'yellow', 'blue'];
  return color = colors[index];
}

function getButton(color) {
  $('.' + color).addClass('pressed');
  setTimeout(function() {
    $('.' + color).removeClass('pressed');
  }, 200);
  switch (color) {
    case 'green':
      let greenButton = new Audio('sounds/green.mp3');
      greenButton.play();
      break;
    case 'red':
      let redButton = new Audio('sounds/red.mp3');
      redButton.play();
      break;
    case 'yellow':
      let yellowButton = new Audio('sounds/yellow.mp3');
      yellowButton.play();
      break;
    case 'blue':
      let blueButton = new Audio('sounds/blue.mp3');
      blueButton.play();
      break;
    default:
      let wrongButton = new Audio('sounds/wrong.mp3');
      wrongButton.play();
  }
}

/******************************************************************************/

function getButtonRandomly() {
  var color = getColor(getIndex());
  pressedColors.push(color);
  getButton(color);
}

function loadClickButtons() {
  $('.btn').on('click', function() {
    if ($(this).hasClass('green')) {
      getButton('green');
      clickedColors.push('green');
    } else if ($(this).hasClass('red')) {
      getButton('red');
      clickedColors.push('red');
    } else if ($(this).hasClass('yellow')) {
      getButton('yellow');
      clickedColors.push('yellow');
    } else if ($(this).hasClass('blue')) {
      getButton('blue');
      clickedColors.push('blue');
    }
    setTimeout(function() {
      playGame();
    }, 750);
  });
}

function gameOver() {
  $('#level-title').text('Game Over, Press Any Key to Restart');
  $('body').addClass('game-over');
  setTimeout(function() {
    $('body').removeClass('game-over');
  }, 200);
  getButton(null);
}

function startGame() {
  $(document).on('keydown', function() {
    pressedColors = [];
    clickedColors = [];
    getButtonRandomly();
    $('.btn').off('click');
    loadClickButtons();
    $(document).off('keydown');
    $('#level-title').text('Level ' + pressedColors.length);
  });
  $('.btn').on('click', function() {
    gameOver();
    startGame();
  });
}

function checkButtons() {
  if (pressedColors.length >= clickedColors.length) {
    for (let i = 0; i < clickedColors.length; i++) {
      if (pressedColors[i] !== clickedColors[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function nextLevel() {
  clickedColors = [];
  getButtonRandomly();
  $('#level-title').text('Level ' + pressedColors.length);
}

function playGame() {
  console.log(pressedColors, clickedColors);
  if (checkButtons() && (pressedColors.length === clickedColors.length)) {
    nextLevel();
  } else if (checkButtons()) {
    return;
  } else {
    gameOver();
    $('.btn').off('click');
    startGame();
  }
}
/******************************************************************************/
