// Query Selectors

var gameBoard = document.querySelector(".game-board");

// Global Variables 

var playerOne = new Player(1, "sun");
var playerTwo = new Player(2, "smudge");
var game = new Game(playerOne, playerTwo);

// Event Listeners

window.addEventListener("load", function() {
  updateOutput();
  updateAnnouncement(game.whosTurn);
});

gameBoard.addEventListener("click", function(event) {
  var index = event.target.id.slice(-1);
  if (event.target.classList.contains("game-tile") && game.board[index] === 0 && game.winner === null) {
    game.takeTurn(index);
  } 
  
  else if (event.target.classList.contains("game-tile") && game.board[index] !== 0 && game.winner === null) {
    alertDuplicateTurn();
  }
});

// Functions

function updateOutput() {
  gameBoard.innerHTML = "";
  for (i = 0; i < game.board.length; i++) {
    if (game.board[i] === 1) {
      gameBoard.innerHTML += `<div class="game-tile no-click" id="tile${i}"><img src="${game.playerOne.token}" alt="Player One Icon" class="game-tile player-icons"></div>`
    } 
        
    else if (game.board[i] === 4) {
    gameBoard.innerHTML += `<div class="game-tile no-click" id="tile${i}"><img src="${game.playerTwo.token}" alt="Player Two Icon" class="game-tile player-icons"></div>`
    } else {
    gameBoard.innerHTML += `<div class="game-tile" id="tile${i}"></div>`
    }
  };
};

function updateAnnouncement(announcement) {
  var announcementBox = document.querySelector(".announcement-box");
  if (announcement === 1) {
    announcementBox.innerHTML = `<img class="turn-icon" src="${game.playerOne.token}" alt="Player One Turn Token"><h1>'s Turn</h1>`;
  } 
  
  else if (announcement === 2) {
    announcementBox.innerHTML = `<img class="turn-icon" src="${game.playerTwo.token}" alt="Player Two Turn Token"><h1>'s Turn</h1>`;
  } 
  
  else if (announcement === "Player One"){
    announcementBox.innerHTML = `<h1>Player One Wins!</h1>`;
  } 
  
  else if (announcement === "Player Two"){
    announcementBox.innerHTML = `<h1>Player Two Wins!</h1>`;
  } 
  
  else if (announcement === "Draw"){
    announcementBox.innerHTML = `<h1>Draw!</h1>`;
  }
};

function updateWinCount() {
  var playerOneWins = document.querySelector("#playerOneWins");
  var playerTwoWins = document.querySelector("#playerTwoWins");
  var playerOneWinsMobile = document.querySelector("#playerOneWinsMobile");
  var playerTwoWinsMobile = document.querySelector("#playerTwoWinsMobile");
  playerOneWins.innerText = `${game.playerOne.wins} WINS`;
  playerOneWinsMobile.innerText = `${game.playerOne.wins} WINS`;
  playerTwoWins.innerText = `${game.playerTwo.wins} WINS`;
  playerTwoWinsMobile.innerText = `${game.playerTwo.wins} WINS`;
};

function alertDuplicateTurn() {
  var alertBox = document.querySelector(".alert-box");
  alertBox.classList.remove("hidden");
  setTimeout(function() {
    alertBox.classList.add("hidden");
  }, 3000);
};

function clearBoard() {
  game.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  game.winner = null;
};
