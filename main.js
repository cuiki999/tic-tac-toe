const nought = '<div id="circle" class="circle"></div>';
const cross = '<i id="cross" class="fas fa-times"></i>';

const cell0 = document.getElementById('cell0');
const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');

let result = document.getElementById('result');
// cell0.innerHTML = nought;
// cell1.innerHTML = cross;

// this is a constant
const emptyBoard = ['0e', '1e', '2e',
		  	 		'3e', '4e', '5e',
		  	 		'6e', '7e', '8e'];

// this will keep changing during the game
let board = ['0e', '1e', '2e',
		  	 '3e', '4e', '5e',
		  	 '6e', '7e', '8e'];

// winning arrays for the computer
const cVictory1 = ['0x', '1x', '2x'];
const cVictory2 = ['3x', '4x', '5x'];
const cVictory3 = ['6x', '7x', '8x'];
const cVictory4 = ['0x', '3x', '6x'];
const cVictory5 = ['1x', '4x', '7x'];
const cVictory6 = ['2x', '5x', '8x'];
const cVictory7 = ['0x', '4x', '8x'];
const cVictory8 = ['2x', '4x', '6x'];

// winning arrays for the player
const pVictory1 = ['0o', '1o', '2o'];
const pVictory2 = ['3o', '4o', '5o'];
const pVictory3 = ['6o', '7o', '8o'];
const pVictory4 = ['0o', '3o', '6o'];
const pVictory5 = ['1o', '4o', '7o'];
const pVictory6 = ['2o', '5o', '8o'];
const pVictory7 = ['0o', '4o', '8o'];
const pVictory8 = ['2o', '4o', '6o'];

// for when the computer is one move away from victory
const cAlmost1 = ['0e', '1x', '2x'];
const cAlmost2 = ['0x', '1e', '2x'];
const cAlmost3 = ['0x', '1x', '2e'];
const cAlmost4 = ['3e', '4x', '5x'];
const cAlmost5 = ['3x', '4e', '5x'];
const cAlmost6 = ['3x', '4x', '5e'];
const cAlmost7 = ['6e', '7x', '8x'];
const cAlmost8 = ['6x', '7e', '8x'];
const cAlmost9 = ['6x', '7x', '8e'];
const cAlmost10 = ['0e', '3x', '6x'];
const cAlmost11 = ['0x', '3e', '6x'];
const cAlmost12 = ['0x', '3x', '6e'];
const cAlmost13 = ['1e', '4x', '7x'];
const cAlmost14 = ['1x', '4e', '7x'];
const cAlmost15 = ['1x', '4x', '7e'];
const cAlmost16 = ['2e', '5x', '8x'];
const cAlmost17 = ['2x', '5e', '8x'];
const cAlmost18 = ['2x', '5x', '8e'];
const cAlmost19 = ['0e', '4x', '8x'];
const cAlmost20 = ['0x', '4e', '8x'];
const cAlmost21 = ['0x', '4x', '8e'];
const cAlmost22 = ['2e', '4x', '6x'];
const cAlmost23 = ['2x', '4e', '6x'];
const cAlmost24 = ['2x', '4x', '6e'];


// for when the player is one move away from victory
const pAlmost1 = ['0e', '1o', '2o'];
const pAlmost2 = ['0o', '1e', '2o'];
const pAlmost3 = ['0o', '1o', '2e'];
const pAlmost4 = ['3e', '4o', '5o'];
const pAlmost5 = ['3o', '4e', '5o'];
const pAlmost6 = ['3o', '4o', '5e'];
const pAlmost7 = ['6e', '7o', '8o'];
const pAlmost8 = ['6o', '7e', '8o'];
const pAlmost9 = ['6o', '7o', '8e'];
const pAlmost10 = ['0e', '3o', '6o'];
const pAlmost11 = ['0o', '3e', '6o'];
const pAlmost12 = ['0o', '3o', '6e'];
const pAlmost13 = ['1e', '4o', '7o'];
const pAlmost14 = ['1o', '4e', '7o'];
const pAlmost15 = ['1o', '4o', '7e'];
const pAlmost16 = ['2e', '5o', '8o'];
const pAlmost17 = ['2o', '5e', '8o'];
const pAlmost18 = ['2o', '5o', '8e'];
const pAlmost19 = ['0e', '4o', '8o'];
const pAlmost20 = ['0o', '4e', '8o'];
const pAlmost21 = ['0o', '4o', '8e'];
const pAlmost22 = ['2e', '4o', '6o'];
const pAlmost23 = ['2o', '4e', '6o'];
const pAlmost24 = ['2o', '4o', '6e'];


let playerPlays = () => {

	cell0.onclick = function() {
		if (board[0] === '0e') {
			board[0] = '0o'
			cell0.innerHTML = nought;
			playerWins();
		}
	}
	cell1.onclick = function() {
		if (board[1] === '1e') {
			board[1] = '1o'
			cell1.innerHTML = nought;
			playerWins();
		}
	}
	cell2.onclick = function() {
		if (board[2] === '2e') {
			board[2] = '2o'
			cell2.innerHTML = nought;
			playerWins();
		}
	}
	cell3.onclick = function() {
		if (board[3] === '3e') {
			board[3] = '3o'
			cell3.innerHTML = nought;
			playerWins();
		}
	}
	cell4.onclick = function() {
		if (board[4] === '4e') {
			board[4] = '4o'
			cell4.innerHTML = nought;
			playerWins();
		}
	}
	cell5.onclick = function() {
		if (board[5] === '5e') {
			board[5] = '5o'
			cell5.innerHTML = nought;
			playerWins();
		}
	}
	cell6.onclick = function() {
		if (board[6] === '6e') {
			board[6] = '6o'
			cell6.innerHTML = nought;
			playerWins();
		}
	}
	cell7.onclick = function() {
		if (board[7] === '7e') {
			board[7] = '7o'
			cell7.innerHTML = nought;
			playerWins();
		}
	}
	cell8.onclick = function() {
		if (board[8] === '8e') {
			board[8] = '8o'
			cell8.innerHTML = nought;
			playerWins();
		}
	}
	tie();
}


let computerPlays = () => {
	setTimeout (() => {
		tie();
		someoneIsCloseToWinning();		
	}, 300);
}


let computerPlaysRandom = () => {

	const random = Math.floor(Math.random() * 9)
	if (random === 0) {
		if (board[0] === '0e') {
			board[0] = '0x';
			cell0.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 1) {
		if (board[1] === '1e') {
			board[1] = '1x';
			cell1.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 2) {
		if (board[2] === '2e') {
			board[2] = '2x';
			cell2.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 3) {
		if (board[3] === '3e') {
			board[3] = '3x';
			cell3.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 4) {
		if (board[4] === '4e') {
			board[4] = '4x';
			cell4.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 5) {
		if (board[5] === '5e') {
			board[5] = '5x';
			cell5.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 6) {
		if (board[6] === '6e') {
			board[6] = '6x';
			cell6.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 7) {
		if (board[7] === '7e') {
			board[7] = '7x';
			cell7.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
	else if (random === 8) {
		if (board[8] === '8e') {
			board[8] = '8x';
			cell8.innerHTML = cross;
			playerPlays();
			computerWins();
		}
		else {
			computerPlaysRandom();
		}
	}
}


let someoneIsCloseToWinning = () => {
	if (includesArray(board, cAlmost1) === true || includesArray(board, pAlmost1) === true) {
		board[0] = '0x'
		cell0.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost2) === true || includesArray(board, pAlmost2) === true) {
		board[1] = '1x'
		cell1.innerHTML = cross;
		computerWins();
		playerPlays();
	} 
	else if (includesArray(board, cAlmost3) === true || includesArray(board, pAlmost3) === true) {
		board[2] = '2x'
		cell2.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost4) === true || includesArray(board, pAlmost4) === true) {
		board[3] = '3x'
		cell3.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost5) === true || includesArray(board, pAlmost5) === true) {
		board[4] = '4x'
		cell4.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost6) === true || includesArray(board, pAlmost6) === true) {
		board[5] = '5x'
		cell5.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost7) === true || includesArray(board, pAlmost7) === true) {
		board[6] = '6x'
		cell6.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost8) === true || includesArray(board, pAlmost8) === true) {
		board[7] = '7x'
		cell7.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost9) === true || includesArray(board, pAlmost9) === true) {
		board[8] = '8x'
		cell8.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost10) === true || includesArray(board, pAlmost10) === true) {
		board[0] = '0x'
		cell0.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost11) === true || includesArray(board, pAlmost11) === true) {
		board[3] = '3x'
		cell3.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost12) === true || includesArray(board, pAlmost12) === true) {
		board[6] = '6x'
		cell6.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost13) === true || includesArray(board, pAlmost13) === true) {
		board[1] = '1x'
		cell1.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost14) === true || includesArray(board, pAlmost14) === true) {
		board[4] = '4x'
		cell4.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost15) === true || includesArray(board, pAlmost15) === true) {
		board[7] = '7x'
		cell7.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost16) === true || includesArray(board, pAlmost16) === true) {
		board[2] = '2x'
		cell2.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost17) === true || includesArray(board, pAlmost17) === true) {
		board[5] = '5x'
		cell5.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost18) === true || includesArray(board, pAlmost18) === true) {
		board[8] = '8x'
		cell8.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost19) === true || includesArray(board, pAlmost19) === true) {
		board[0] = '0x'
		cell0.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost20) === true || includesArray(board, pAlmost20) === true) {
		board[4] = '4x'
		cell4.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost21) === true || includesArray(board, pAlmost21) === true) {
		board[8] = '8x'
		cell8.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost22) === true || includesArray(board, pAlmost22) === true) {
		board[2] = '2x'
		cell2.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost23) === true || includesArray(board, pAlmost23) === true) {
		board[4] = '4x'
		cell4.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else if (includesArray(board, cAlmost24) === true || includesArray(board, pAlmost24) === true) {
		board[6] = '6x'
		cell6.innerHTML = cross;
		computerWins();
		playerPlays();
	}
	else {
		computerPlaysRandom();
	}
}

// this function compares if the array in sub (e.g cVictoryOne) is included in sup (board)
// not my function, just copied
// https://stackoverflow.com/questions/8628059/check-if-every-element-in-one-array-is-in-a-second-array
let includesArray = (sup, sub) => {
    let i, j;
    for (i=0,j=0; i<sup.length && j<sub.length;) {
        if (sup[i] < sub[j]) {
            ++i;
        } else if (sup[i] == sub[j]) {
            ++i; ++j;
        } else {
            // sub[j] not in sup, so sub not subbag
            return false;
        }
    }
    // make sure there are no elements left in sub
    return j == sub.length;
}


let resetGame = () => {
	setTimeout(() => {
				
		board = ['0e', '1e', '2e',
	  	 	 	 '3e', '4e', '5e',
	  	 	 	 '6e', '7e', '8e'];
		cell0.innerHTML = '';
		cell1.innerHTML = '';
		cell2.innerHTML = '';
		cell3.innerHTML = '';
		cell4.innerHTML = '';
		cell5.innerHTML = '';
		cell6.innerHTML = '';
		cell7.innerHTML = '';
		cell8.innerHTML = '';

		result.innerHTML = '';

		beginGame();
	}, 2000)
}


let playerWins = () => {
	if (includesArray(board, pVictory1) === true || includesArray(board, pVictory2) === true || includesArray(board, pVictory3) === true || includesArray(board, pVictory4) === true || includesArray(board, pVictory5) === true || includesArray(board, pVictory6) === true || includesArray(board, pVictory7) === true || includesArray(board, pVictory8) === true) {
			result.innerHTML = 'You won!'
			resetGame();
	}
	else {
		computerPlays();
	}
};


let computerWins = () => {
	if (includesArray(board, cVictory1) === true || includesArray(board, cVictory2) === true || includesArray(board, cVictory3) === true || includesArray(board, cVictory4) === true || includesArray(board, cVictory5) === true || includesArray(board, cVictory6) === true || includesArray(board, cVictory7) === true || includesArray(board, cVictory8) === true) {
			
			result.innerHTML = 'You lost.'
			resetGame();		
	}
	else {
		playerPlays();
	}
	
}


let tie = () => {
	
	if (includesArray(board, cVictory1) === false && includesArray(board, cVictory2) === false && includesArray(board, cVictory3) === false && includesArray(board, cVictory4) === false && includesArray(board, cVictory5) === false && includesArray(board, cVictory6) === false && includesArray(board, cVictory7) === false && includesArray(board, cVictory8) === false && includesArray(board, pVictory1) === false && includesArray(board, pVictory2) === false && includesArray(board, pVictory3) === false && includesArray(board, pVictory4) === false && includesArray(board, pVictory5) === false && includesArray(board, pVictory6) === false && includesArray(board, pVictory7) === false && includesArray(board, pVictory8) === false && (board.some(i => emptyBoard.includes(i)) === false)) {
		
			result.innerHTML = 'It\'s a tie.'
			resetGame();	
		
	}
}


let beginGame = () => {
	let randomizeOrder = Math.floor(Math.random() * 2)
	if (randomizeOrder === 0) {
		playerPlays();
	}
	else {
		computerPlaysRandom();
	}
}


beginGame();
