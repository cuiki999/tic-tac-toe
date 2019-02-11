"use strict";

/* eslint semi: ["error", "always"] */
var nought = '<div id="circle" class="circle"></div>';
var cross = '<i id="cross" class="fas fa-times"></i>';
var result = document.getElementById('result'); // a board for the program to keep track of the game

var board = [['', '', ''], ['', '', ''], ['', '', '']];
var sq00 = document.getElementById('cell0');
var sq01 = document.getElementById('cell1');
var sq02 = document.getElementById('cell2');
var sq10 = document.getElementById('cell3');
var sq11 = document.getElementById('cell4');
var sq12 = document.getElementById('cell5');
var sq20 = document.getElementById('cell6');
var sq21 = document.getElementById('cell7');
var sq22 = document.getElementById('cell8'); // the actual board that the user sees

var htmlBoard = [[sq00, sq01, sq02], [sq10, sq11, sq12], [sq20, sq21, sq22]]; // Counting how close to the victory computer/player is in any of the 8 possible winning combinations. If any number reaches 3, then computer/player wins, and if it reaches 2, oneMoveAway() gets executed when it's computer's turn

var compCount = [0, 0, 0, 0, 0, 0, 0, 0];
var playerCount = [0, 0, 0, 0, 0, 0, 0, 0]; // when active is true, the player and the computer can play, otherwise they can't (i.e. while the board is resetting)

var active = true; // this is used to keep track of how many games were played, and then based on whether the number is odd or even, the starting player is determined.

var gameCount = 0; // make all the fields clickable

var playerPlays = function playerPlays() {
  var _loop = function _loop(_y) {
    var _loop2 = function _loop2(_x) {
      htmlBoard[_y][_x].addEventListener('click', function () {
        if (board[_y][_x] === '' && active) {
          board[_y][_x] = 'o';
          htmlBoard[_y][_x].innerHTML = nought;
          addToCount(_y, _x, playerCount);
          checkResult();

          if (active) {
            compPlays();
          }
        }
      });
    };

    for (var _x = 0; _x < 3; _x++) {
      _loop2(_x);
    }
  };

  for (var _y = 0; _y < 3; _y++) {
    _loop(_y);
  }
}; // as soon as carryOn becomes false (i.e. computer makes a move), the function stops executing


var compPlays = function compPlays() {
  window.carryOn = true;
  setTimeout(function () {
    if (carryOn === true) {
      oneMoveAway(compCount);
      checkResult();
    }

    if (carryOn === true) {
      oneMoveAway(playerCount);
      checkResult();
    }

    if (carryOn === true) {
      compPlaysRandom();
      checkResult();
    } else {
      playerPlays();
    }
  }, 300);
}; // as soon as the computer is one move away from victory (the compCount for that combination equals 2), it plays that empty square, or if the player is one move away from victory, the computer blocks them. This function takes in the 'count' parameter, which applies to compCount as well as playerCount


var oneMoveAway = function oneMoveAway(count) {
  for (var i = 0; i < 3; i++) {
    if (count[0] === 2 && board[0][i] === '') {
      board[0][i] = 'x';
      htmlBoard[0][i].innerHTML = cross;
      addToCount(0, i, compCount);
      carryOn = false;
      return;
    } else if (count[1] === 2 && board[1][i] === '') {
      board[1][i] = 'x';
      htmlBoard[1][i].innerHTML = cross;
      addToCount(1, i, compCount);
      carryOn = false;
      return;
    } else if (count[2] === 2 && board[2][i] === '') {
      board[2][i] = 'x';
      htmlBoard[2][i].innerHTML = cross;
      addToCount(2, i, compCount);
      carryOn = false;
      return;
    } else if (count[3] === 2 && board[i][0] === '') {
      board[i][0] = 'x';
      htmlBoard[i][0].innerHTML = cross;
      addToCount(i, 0, compCount);
      carryOn = false;
      return;
    } else if (count[4] === 2 && board[i][1] === '') {
      board[i][1] = 'x';
      htmlBoard[i][1].innerHTML = cross;
      addToCount(i, 1, compCount);
      carryOn = false;
      return;
    } else if (count[5] === 2 && board[i][2] === '') {
      board[i][2] = 'x';
      htmlBoard[i][2].innerHTML = cross;
      addToCount(i, 2, compCount);
      carryOn = false;
      return;
    } else if (count[6] === 2) {
      if (board[0][0] === '') {
        board[0][0] = 'x';
        htmlBoard[0][0].innerHTML = cross;
        addToCount(0, 0, compCount);
        carryOn = false;
        return;
      } else if (board[1][1] === '') {
        board[1][1] = 'x';
        htmlBoard[1][1].innerHTML = cross;
        addToCount(1, 1, compCount);
        carryOn = false;
        return;
      } else if (board[2][2] === '') {
        board[2][2] = 'x';
        htmlBoard[2][2].innerHTML = cross;
        addToCount(2, 2, compCount);
        carryOn = false;
        return;
      }
    } else if (count[7] === 2) {
      if (board[0][2] === '') {
        board[0][2] = 'x';
        htmlBoard[0][2].innerHTML = cross;
        addToCount(0, 2, compCount);
        carryOn = false;
        return;
      } else if (board[1][1] === '') {
        board[1][1] = 'x';
        htmlBoard[1][1].innerHTML = cross;
        addToCount(1, 1, compCount);
        carryOn = false;
        return;
      } else if (board[2][0] === '') {
        board[2][0] = 'x';
        htmlBoard[2][0].innerHTML = cross;
        addToCount(2, 0, compCount);
        carryOn = false;
        return;
      }
    } else {
      carryOn = true;
    }
  }
}; // computer randomly plays a square based on its y and x coordinates in the 'board' array


var compPlaysRandom = function compPlaysRandom() {
  var randomY = Math.floor(Math.random() * 3);
  var randomX = Math.floor(Math.random() * 3);
  window.y = randomY;
  window.x = randomX;

  if (board[y][x] === '') {
    board[y][x] = 'x';
    htmlBoard[y][x].innerHTML = cross;
    addToCount(y, x, compCount);
    playerPlays();
  } else {
    compPlaysRandom();
  }
}; // each square that is being played counts towards 2-4 possible victory outcomes


var addToCount = function addToCount(y, x, count) {
  if (y === 0 && x === 0) {
    count[0]++;
    count[3]++;
    count[6]++;
  } else if (y === 0 && x === 1) {
    count[0]++;
    count[4]++;
  } else if (y === 0 && x === 2) {
    count[0]++;
    count[5]++;
    count[7]++;
  } else if (y === 1 && x === 0) {
    count[1]++;
    count[3]++;
  } else if (y === 1 && x === 1) {
    count[1]++;
    count[4]++;
    count[6]++;
    count[7]++;
  } else if (y === 1 && x === 2) {
    count[1]++;
    count[5]++;
  } else if (y === 2 && x === 0) {
    count[2]++;
    count[3]++;
    count[7]++;
  } else if (y === 2 && x === 1) {
    count[2]++;
    count[4]++;
  } else if (y === 2 && x === 2) {
    count[2]++;
    count[5]++;
    count[6]++;
  }
}; // if any of the numbers in compCount/playerCount reach 3, that means victory. If none of the fields equal empty space and nobody wins, it's a tie


var checkResult = function checkResult() {
  if (compCount.indexOf(3) !== -1) {
    result.innerHTML = 'You lost.';
    active = false;
    resetGame();
  } else if (playerCount.indexOf(3) !== -1) {
    result.innerHTML = 'You won!';
    active = false;
    resetGame();
  } else if (board[0].indexOf('') === -1 && board[1].indexOf('') === -1 && board[2].indexOf('') === -1) {
    result.innerHTML = 'It\'s a tie.';
    active = false;
    resetGame();
  }
}; // the game resets after a timeout of 2 seconds, to give the player a chance to look at the board


var resetGame = function resetGame() {
  setTimeout(function () {
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    compCount = [0, 0, 0, 0, 0, 0, 0, 0];
    playerCount = [0, 0, 0, 0, 0, 0, 0, 0];

    for (var _y2 = 0; _y2 < 3; _y2++) {
      for (var _x2 = 0; _x2 < 3; _x2++) {
        htmlBoard[_y2][_x2].innerHTML = '';
      }
    }

    result.innerHTML = '';
    active = true;
    beginGame();
  }, 2000);
}; // every time a new game is played, the game count increases by 1. If the number is odd, the player goes first, otherwise the computer does


var beginGame = function beginGame() {
  gameCount++;

  if (gameCount % 2 === 1) {
    playerPlays();
  } else {
    compPlays();
  }
};

beginGame();