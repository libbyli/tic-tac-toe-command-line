class TicTacToe {
  constructor() {
    this.board = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
    this.player = 'x';
    this.moves = 0;
  }

  move(number) {
    if (number === 1) {
      this.board[0][0] = this.player;
    } else if (number === 2) {
      this.board[0][1] = this.player;
    } else if (number === 3) {
      this.board[0][2] = this.player;
    } else if (number === 4) {
      this.board[1][0] = this.player;
    } else if (number === 5) {
      this.board[1][1] = this.player;
    } else if (number === 6) {
      this.board[1][2] = this.player;
    } else if (number === 7) {
      this.board[2][0] = this.player;
    } else if (number === 8) {
      this.board[2][1] = this.player;
    } else {
      this.board[2][2] = this.player;
    }
  }

  changePlayer() {
    if (this.player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
  }

  checkValidMove() {
    // check to see if move is valid
      // can't be on already occupied space
      // has to be on the board
  }

  checkWins() {
    // after 4 moves, check if move caused player to win
  }

  start() {
    console.log(`${this.board[0]}\n${this.board[1]}\n${this.board[2]}`);
  }
}

const game = new TicTacToe();
game.start();