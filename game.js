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
    } 
        
    else {
      this.board[index] = 4;
      this.whosTurn = 1;
    }
    
    updateOutput();
    updateAnnouncement(this.whosTurn);
    this.checkForWin();
    this.checkForDraw();
  };

  checkForDraw() {
    if (!this.board.includes(0) && this.winner === null) {
      this.winner = 'Draw';
      updateAnnouncement(this.winner);
      setTimeout(this.resetGame, 2000);
    }
  };

  resetGame() {
    clearBoard();
    updateWinCount();
    updateAnnouncement(this.whosTurn);
    updateOutput();
  };

  checkForWin() {
    var winConditions = [
        [0,1,2], [3,4,5], [6,7,8], 
        [0,3,6], [1,4,7], [2,5,8], 
        [0,4,8], [2,4,6]
    ];
    for (var i = 0; i < winConditions.length; i++) {
      var [a, b, c] = winConditions[i];
      var board = this.board;

      if (board[a] === 1 && board[a] === board[b] && board[a] === board[c]) {
        this.playerOne.increaseWins();
        this.winner = 'Player One'
        updateAnnouncement(this.winner);
        setTimeout(this.resetGame, 2000);
      } 
    
      else if (board[a] === 4 && board[a] === board[b] && board[a] === board[c]) {
        this.playerTwo.increaseWins();
        this.winner = 'Player Two'
        updateAnnouncement(this.winner);
        setTimeout(this.resetGame, 2000);
      }
    };
  };
};