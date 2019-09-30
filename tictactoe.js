class AI {
	constructor(difficulty, position) {
		this.difficulty = difficulty;
		this.position = position;
	}
}

let start = document.getElementById("start");
let squares = document.querySelectorAll(".square");
var playerActive = 1;

function setDifficulty(difficulty) {}

function turn(player, location) {
	square = location;
	if (square.lock === 0) {
		if (player === 1) {
			square.style.backgroundColor = "#4fca97";
			square.innerHTML = "x";
			playerActive = 2;
		} else {
			square.style.backgroundColor = "#caa34f";
			square.innerHTML = "o";
			playerActive = 1;
		}
		// TODO update gridArray here
		square.lock = 1;
	}
}

function checkWinner() {
	// TODO check for any row, col, or diagonal
}

function startGame(e) {
	let difficulty = document.querySelector(".difficulty input:checked").value;
	document.querySelector(".grid").style.display = "block";
	document.querySelector(".options").style.display = "none";
	// TODO create grid here
	let bot = new AI(difficulty, 2);
	squares.forEach(square => {
		square.lock = 0;
		square.addEventListener("click", e => {
			turn(playerActive, e.target);
			checkWinner();
		});
	});
}

start.addEventListener("click", e => {
	startGame(e);
});
