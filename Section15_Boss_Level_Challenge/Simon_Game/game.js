// alert('Hello.')

const buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Add event listener to 'keydown' event. Only once at the first time.
$(document).on('keydown', function() {
  if (!started) {
    started = true;
    nextSequence();
  }
});

// Add event listener to 'click' event. After the first time.
$('.btn').on('click', function() {
  // 1. Get chosen colour from id.
  // var userChosenColour = this.id;
  // or
  // var userChosenColour = this.getAttribute('id');
  // or
  var userChosenColour = $(this).attr('id');
  // or
  // var userChosenColour = event.target.id;
  // or
  // var userChosenColour = event.target.getAttribute('id');
  // or
  // var userChosenColour = $(event.target).attr('id');
  // 2. Store chosen colour.
  userClickedPattern.push(userChosenColour);
  // 3. Play sound.
  playSound(userChosenColour);
  // 4. Animation effect.
  animatePress(userChosenColour);
  // 5. Check answer everytime clicked.
  checkAnswer(userClickedPattern.length);
});

/******************************************************************************/

function nextSequence() {
    // 1. Get random colour.
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    // 2. Store random colour.
    gamePattern.push(randomChosenColour);
    // 3. Animation effect.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // 4. Sound effect.
    playSound(randomChosenColour);
    // 5. Display level
    level ++;
    $('#level-title').text('Level ' + level);
    // 6. Empty 'userClickedPattern' array.
    userClickedPattern = [];
}

function playSound(name) {
  var chosenSound = new Audio('sounds/' + name + '.mp3');
  chosenSound.play();
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function() {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}

function wrongAnswer() {
  // 1. Play sound.
  playSound('wrong');
  // 2. Animation effect.
  $('body').addClass('game-over');
  setTimeout(function() {
    $('body').removeClass('game-over');
  }, 200);
  // 3. Display game over.
  $('#level-title').text('Game Over, Press Any Key to Restart');
}

function startOver() {
  // Reset all values.
  gamePattern = [];
  level = 0;
  started = false;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel-1] === userClickedPattern[currentLevel-1]) {
    // Log when the last elements are same.
    console.log('success');
    // Proceed next sequence when they have the same length as well.
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
       nextSequence();
      }, 1000);
    }
  } else {
    // Log when they are not same.
    console.log('wrong');
    // Got wrong answer.
    wrongAnswer();
    // Get ready to restart.
    startOver();
  }
}
