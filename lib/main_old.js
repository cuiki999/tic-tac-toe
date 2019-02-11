"use strict";

/* eslint semi: ["error", "always"] */
var nought = '<div id="circle" class="circle"></div>';
var cross = '<i id="cross" class="fas fa-times"></i>'; // square0.innerHTML = nought;
// square1.innerHTML = cross;

var square0 = document.getElementById('cell0');
var square1 = document.getElementById('cell1');
var square2 = document.getElementById('cell2');
var square3 = document.getElementById('cell3');
var square4 = document.getElementById('cell4');
var square5 = document.getElementById('cell5');
var square6 = document.getElementById('cell6');
var square7 = document.getElementById('cell7');
var square8 = document.getElementById('cell8'); // this is a div that displays results

var result = document.getElementById('result'); // this is a constant

var emptyBoard = ['0e', '1e', '2e', '3e', '4e', '5e', '6e', '7e', '8e']; // this will keep changing during the game

var board = ['0e', '1e', '2e', '3e', '4e', '5e', '6e', '7e', '8e']; // this is set to false when the player's moves are deactivated (between games)

var active = true; // winning arrays for the computer

var cVictory1 = ['0x', '1x', '2x'];
var cVictory2 = ['3x', '4x', '5x'];
var cVictory3 = ['6x', '7x', '8x'];
var cVictory4 = ['0x', '3x', '6x'];
var cVictory5 = ['1x', '4x', '7x'];
var cVictory6 = ['2x', '5x', '8x'];
var cVictory7 = ['0x', '4x', '8x'];
var cVictory8 = ['2x', '4x', '6x']; // winning arrays for the player

var pVictory1 = ['0o', '1o', '2o'];
var pVictory2 = ['3o', '4o', '5o'];
var pVictory3 = ['6o', '7o', '8o'];
var pVictory4 = ['0o', '3o', '6o'];
var pVictory5 = ['1o', '4o', '7o'];
var pVictory6 = ['2o', '5o', '8o'];
var pVictory7 = ['0o', '4o', '8o'];
var pVictory8 = ['2o', '4o', '6o']; // for when the computer is one move away from victory

var cAlmost1 = ['0e', '1x', '2x'];
var cAlmost2 = ['0x', '1e', '2x'];
var cAlmost3 = ['0x', '1x', '2e'];
var cAlmost4 = ['3e', '4x', '5x'];
var cAlmost5 = ['3x', '4e', '5x'];
var cAlmost6 = ['3x', '4x', '5e'];
var cAlmost7 = ['6e', '7x', '8x'];
var cAlmost8 = ['6x', '7e', '8x'];
var cAlmost9 = ['6x', '7x', '8e'];
var cAlmost10 = ['0e', '3x', '6x'];
var cAlmost11 = ['0x', '3e', '6x'];
var cAlmost12 = ['0x', '3x', '6e'];
var cAlmost13 = ['1e', '4x', '7x'];
var cAlmost14 = ['1x', '4e', '7x'];
var cAlmost15 = ['1x', '4x', '7e'];
var cAlmost16 = ['2e', '5x', '8x'];
var cAlmost17 = ['2x', '5e', '8x'];
var cAlmost18 = ['2x', '5x', '8e'];
var cAlmost19 = ['0e', '4x', '8x'];
var cAlmost20 = ['0x', '4e', '8x'];
var cAlmost21 = ['0x', '4x', '8e'];
var cAlmost22 = ['2e', '4x', '6x'];
var cAlmost23 = ['2x', '4e', '6x'];
var cAlmost24 = ['2x', '4x', '6e']; // for when the player is one move away from victory

var pAlmost1 = ['0e', '1o', '2o'];
var pAlmost2 = ['0o', '1e', '2o'];
var pAlmost3 = ['0o', '1o', '2e'];
var pAlmost4 = ['3e', '4o', '5o'];
var pAlmost5 = ['3o', '4e', '5o'];
var pAlmost6 = ['3o', '4o', '5e'];
var pAlmost7 = ['6e', '7o', '8o'];
var pAlmost8 = ['6o', '7e', '8o'];
var pAlmost9 = ['6o', '7o', '8e'];
var pAlmost10 = ['0e', '3o', '6o'];
var pAlmost11 = ['0o', '3e', '6o'];
var pAlmost12 = ['0o', '3o', '6e'];
var pAlmost13 = ['1e', '4o', '7o'];
var pAlmost14 = ['1o', '4e', '7o'];
var pAlmost15 = ['1o', '4o', '7e'];
var pAlmost16 = ['2e', '5o', '8o'];
var pAlmost17 = ['2o', '5e', '8o'];
var pAlmost18 = ['2o', '5o', '8e'];
var pAlmost19 = ['0e', '4o', '8o'];
var pAlmost20 = ['0o', '4e', '8o'];
var pAlmost21 = ['0o', '4o', '8e'];
var pAlmost22 = ['2e', '4o', '6o'];
var pAlmost23 = ['2o', '4e', '6o'];
var pAlmost24 = ['2o', '4o', '6e'];

var playerPlays = function playerPlays() {
  square0.onclick = function () {
    if (board[0] === '0e' && active) {
      board[0] = '0o';
      square0.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square1.onclick = function () {
    if (board[1] === '1e' && active) {
      board[1] = '1o';
      square1.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square2.onclick = function () {
    if (board[2] === '2e' && active) {
      board[2] = '2o';
      square2.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square3.onclick = function () {
    if (board[3] === '3e' && active) {
      board[3] = '3o';
      square3.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square4.onclick = function () {
    if (board[4] === '4e' && active) {
      board[4] = '4o';
      square4.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square5.onclick = function () {
    if (board[5] === '5e' && active) {
      board[5] = '5o';
      square5.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square6.onclick = function () {
    if (board[6] === '6e' && active) {
      board[6] = '6o';
      square6.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square7.onclick = function () {
    if (board[7] === '7e' && active) {
      board[7] = '7o';
      square7.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  square8.onclick = function () {
    if (board[8] === '8e' && active) {
      board[8] = '8o';
      square8.innerHTML = nought;
      checkIfPlayerWins();
    }
  };

  checkIfTie();
}; // first check if it's a tie, then whether someone is close to winning
// using setTimeout() so there's a bit of delay before the computer makes its move


var computerChecks = function computerChecks() {
  setTimeout(function () {
    checkIfTie();
    someoneIsCloseToWinning();
  }, 300);
}; // computer randomly selects a square, if it's taken, the function repeats itself until it lands on an empty one
// called from someoneIsCloseToWinning(), when no other conditions are met
// this gives a console error in chrome: Uncaught RangeError: Maximum call stack size exceeded, I guess because it can go on indefinitely in theory


var computerPlaysRandom = function computerPlaysRandom() {
  var random = Math.floor(Math.random() * 9);

  if (random === 0) {
    if (board[0] === '0e') {
      board[0] = '0x';
      square0.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 1) {
    if (board[1] === '1e') {
      board[1] = '1x';
      square1.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 2) {
    if (board[2] === '2e') {
      board[2] = '2x';
      square2.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 3) {
    if (board[3] === '3e') {
      board[3] = '3x';
      square3.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 4) {
    if (board[4] === '4e') {
      board[4] = '4x';
      square4.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 5) {
    if (board[5] === '5e') {
      board[5] = '5x';
      square5.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 6) {
    if (board[6] === '6e') {
      board[6] = '6x';
      square6.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 7) {
    if (board[7] === '7e') {
      board[7] = '7x';
      square7.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  } else if (random === 8) {
    if (board[8] === '8e') {
      board[8] = '8x';
      square8.innerHTML = cross;
      playerPlays();
      checkIfComputerWins();
    } else {
      computerPlaysRandom();
    }
  }
}; // if the player is one move away from winning, the computer will try to block it
// if the computer is one move away, it will try to win
// in certain cases, the computer will prioritize blocking the player over winning. I left that in on purpose.


var someoneIsCloseToWinning = function someoneIsCloseToWinning() {
  if (includesArray(board, cAlmost1) === true || includesArray(board, pAlmost1) === true) {
    board[0] = '0x';
    square0.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost2) === true || includesArray(board, pAlmost2) === true) {
    board[1] = '1x';
    square1.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost3) === true || includesArray(board, pAlmost3) === true) {
    board[2] = '2x';
    square2.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost4) === true || includesArray(board, pAlmost4) === true) {
    board[3] = '3x';
    square3.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost5) === true || includesArray(board, pAlmost5) === true) {
    board[4] = '4x';
    square4.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost6) === true || includesArray(board, pAlmost6) === true) {
    board[5] = '5x';
    square5.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost7) === true || includesArray(board, pAlmost7) === true) {
    board[6] = '6x';
    square6.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost8) === true || includesArray(board, pAlmost8) === true) {
    board[7] = '7x';
    square7.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost9) === true || includesArray(board, pAlmost9) === true) {
    board[8] = '8x';
    square8.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost10) === true || includesArray(board, pAlmost10) === true) {
    board[0] = '0x';
    square0.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost11) === true || includesArray(board, pAlmost11) === true) {
    board[3] = '3x';
    square3.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost12) === true || includesArray(board, pAlmost12) === true) {
    board[6] = '6x';
    square6.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost13) === true || includesArray(board, pAlmost13) === true) {
    board[1] = '1x';
    square1.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost14) === true || includesArray(board, pAlmost14) === true) {
    board[4] = '4x';
    square4.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost15) === true || includesArray(board, pAlmost15) === true) {
    board[7] = '7x';
    square7.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost16) === true || includesArray(board, pAlmost16) === true) {
    board[2] = '2x';
    square2.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost17) === true || includesArray(board, pAlmost17) === true) {
    board[5] = '5x';
    square5.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost18) === true || includesArray(board, pAlmost18) === true) {
    board[8] = '8x';
    square8.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost19) === true || includesArray(board, pAlmost19) === true) {
    board[0] = '0x';
    square0.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost20) === true || includesArray(board, pAlmost20) === true) {
    board[4] = '4x';
    square4.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost21) === true || includesArray(board, pAlmost21) === true) {
    board[8] = '8x';
    square8.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost22) === true || includesArray(board, pAlmost22) === true) {
    board[2] = '2x';
    square2.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost23) === true || includesArray(board, pAlmost23) === true) {
    board[4] = '4x';
    square4.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else if (includesArray(board, cAlmost24) === true || includesArray(board, pAlmost24) === true) {
    board[6] = '6x';
    square6.innerHTML = cross;
    checkIfComputerWins();
    playerPlays();
  } else {
    computerPlaysRandom();
  }
}; // this function compares if the array in sub (e.g cVictoryOne) is included in sup (board)
// not my function, just copied
// https://stackoverflow.com/questions/8628059/check-if-every-element-in-one-array-is-in-a-second-array


var includesArray = function includesArray(sup, sub) {
  var i, j;

  for (i = 0, j = 0; i < sup.length && j < sub.length;) {
    if (sup[i] < sub[j]) {
      ++i;
    } else if (sup[i] === sub[j]) {
      ++i;
      ++j;
    } else {
      // sub[j] not in sup, so sub not subbag
      return false;
    }
  } // make sure there are no elements left in sub


  return j === sub.length;
}; // inside this function, 'let active' gets set to false so that the player can't click anything while the game is reseting itself


var resetGame = function resetGame() {
  active = false;
  setTimeout(function () {
    board = ['0e', '1e', '2e', '3e', '4e', '5e', '6e', '7e', '8e'];
    square0.innerHTML = '';
    square1.innerHTML = '';
    square2.innerHTML = '';
    square3.innerHTML = '';
    square4.innerHTML = '';
    square5.innerHTML = '';
    square6.innerHTML = '';
    square7.innerHTML = '';
    square8.innerHTML = '';
    result.innerHTML = '';
    active = true;
    beginGame();
  }, 2000);
};

var checkIfPlayerWins = function checkIfPlayerWins() {
  if (includesArray(board, pVictory1) === true || includesArray(board, pVictory2) === true || includesArray(board, pVictory3) === true || includesArray(board, pVictory4) === true || includesArray(board, pVictory5) === true || includesArray(board, pVictory6) === true || includesArray(board, pVictory7) === true || includesArray(board, pVictory8) === true) {
    result.innerHTML = 'You won!';
    resetGame();
  } else {
    computerChecks();
  }
};

var checkIfComputerWins = function checkIfComputerWins() {
  if (includesArray(board, cVictory1) === true || includesArray(board, cVictory2) === true || includesArray(board, cVictory3) === true || includesArray(board, cVictory4) === true || includesArray(board, cVictory5) === true || includesArray(board, cVictory6) === true || includesArray(board, cVictory7) === true || includesArray(board, cVictory8) === true) {
    result.innerHTML = 'You lost.';
    resetGame();
  } else {
    playerPlays();
  }
};

var checkIfTie = function checkIfTie() {
  if (includesArray(board, cVictory1) === false && includesArray(board, cVictory2) === false && includesArray(board, cVictory3) === false && includesArray(board, cVictory4) === false && includesArray(board, cVictory5) === false && includesArray(board, cVictory6) === false && includesArray(board, cVictory7) === false && includesArray(board, cVictory8) === false && includesArray(board, pVictory1) === false && includesArray(board, pVictory2) === false && includesArray(board, pVictory3) === false && includesArray(board, pVictory4) === false && includesArray(board, pVictory5) === false && includesArray(board, pVictory6) === false && includesArray(board, pVictory7) === false && includesArray(board, pVictory8) === false && board.some(function (i) {
    return emptyBoard.includes(i);
  }) === false) {
    result.innerHTML = 'It\'s a tie.';
    resetGame();
  }
};

var beginGame = function beginGame() {
  var randomizeOrder = Math.floor(Math.random() * 2);

  if (randomizeOrder === 0) {
    playerPlays();
  } else {
    computerPlaysRandom();
  }
};

beginGame();