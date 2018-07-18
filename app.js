class TicTacToe {
  constructor() {
    this.board = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
    this.player = 'x';
    this.moves = 0;
  }

  move(row, column) {
    this.board[row][column] = this.player;
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
    console.log(`${this.board}`);
  }
}

const game = new TicTacToe();
game.start();