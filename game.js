class Game {
  constructor(playerOne, playerTwo) {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.whosTurn = 1;
    this.winner = null;
  }

  takeTurn(index) {
    if (this.whosTurn === 1) {
      this.board[index] = 1;
      this.whosTurn = 2;
      updateOutput();
      this.checkForWin();
      this.checkForDraw();
    } 
        
    else {
      this.board[index] = 4;
      this.whosTurn = 1;
      updateOutput();
      this.checkForWin();
      this.checkForDraw();
    }
  };

  checkForDraw() {
    if (!this.board.includes(0) && this.winner === null) {
      
      this.winner = 'Draw';
      updateAnnouncement(this.winner);
      setTimeout(this.resetGame, 2000);
    }
  };

  resetGame() {
    this.whosTurn = 1;
    clearBoard();
    updateWinCount();
    updateAnnouncement(this.whosTurn);
  };

  checkForWin() {
    var columnOne = [this.board[0], this.board[3], this.board[6]];
    var columnTwo = [this.board[1], this.board[4], this.board[7]];
    var columnThree = [this.board[2], this.board[5], this.board[8]];
    var rowOne = [this.board[0], this.board[1], this.board[2]];
    var rowTwo = [this.board[3], this.board[4], this.board[5]];
    var rowThree = [this.board[6], this.board[7], this.board[8]];
    var diagonalOne = [this.board[0], this.board[4], this.board[8]];
    var diagonalTwo = [this.board[2], this.board[4], this.board[6]];
    var winConditions = [columnOne, columnTwo, columnThree, rowOne, rowTwo, rowThree, diagonalOne, diagonalTwo];
    for (var i = 0; i < winConditions.length; i++) {
      var sum = winConditions[i].reduce(function(a, b) {
        return a + b;
      });

      if (sum == 3) {
        console.log("P1win")
        this.playerOne.increaseWins();
        this.winner = 'Player One'
        updateAnnouncement(this.winner);
        setTimeout(this.resetGame, 2000);
      } 
    
      else if (sum == 12) {
        console.log("P2win")
        this.playerTwo.increaseWins();
        this.winner = 'Player Two'
        updateAnnouncement(this.winner);
        setTimeout(this.resetGame, 2000);
      }
    };
  };
};