// Query Selectors

var gameBoard = document.querySelector(".game-board");

// Global Variables 

var playerOne = new Player(1, "sun");
var playerTwo = new Player(2, "smudge");
var game = new Game(playerOne, playerTwo);

// Event Listeners

gameBoard.addEventListener("click", function(event) {
    var index = event.target.id.slice(-1);
    console.log(event.target)
    if (event.target.classList.contains("game-tile") && game.board[index] === 0) {
        game.takeTurn(index);
    } else if (event.target.classList.contains("game-tile") && game.board[index] !== 0) {
        duplicateTurnAlert();
    }
});





// Functions

function duplicateTurnAlert() {
    var alertBox = document.querySelector(".alert-box");
    alertBox.classList.remove("hidden");
    setTimeout(function() {
        alertBox.classList.add("hidden");
    }, 3000);
}

function updateOutput() {
    var playerOneIcon = `<img src="${game.playerOne.token}" alt="Player One Icon" class="game-tile">`;
    var playerTwoIcon = `<img src="${game.playerTwo.token}" alt="Player Two Icon" class="game-tile">`;
    for (i = 0; i < game.board.length; i++) {
        if (game.board[i] === 1) {
            document.getElementById(`tile${i}`).innerHTML = playerOneIcon;
            console.log(document.getElementById(`tile${i}`))
        } else if (game.board[i] === 4) {
            document.getElementById(`tile${i}`).innerHTML = playerTwoIcon;
        }
    }
}

function clearBoard() {
    game.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameBoard.innerHTML = `
    <div class="game-tile" id="tile0"></div>
    <div class="game-tile" id="tile1"></div>
    <div class="game-tile" id="tile2"></div>
    <div class="game-tile" id="tile3"></div>
    <div class="game-tile" id="tile4"></div>
    <div class="game-tile" id="tile5"></div>
    <div class="game-tile" id="tile6"></div>
    <div class="game-tile" id="tile7"></div>
    <div class="game-tile" id="tile8"></div>
    `
}
