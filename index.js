const prompt = require('prompt');

const tictactoe = () => {
  let board = [['_','_','_'],['_','_','_'],['_','_','_']];
  let winner = null;
  let currentPlayer = 'X';

  const switchPlayerTurn = () => {
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else if (currentPlayer === 'O') {
      currentPlayer = 'X';
    }
  };

  const determineWinner = () => {
    if (board[0][0] === currentPlayer && board[1][0] === currentPlayer && board[2][0] === currentPlayer) {
      winner = currentPlayer;
    }
    if (board[0][1] === currentPlayer && board[1][1] === currentPlayer && board[2][1] === currentPlayer) {
      winner = currentPlayer;
    }
    if (board[0][2] === currentPlayer && board[1][2] === currentPlayer && board[2][2] === currentPlayer) {
      winner = currentPlayer;
    }
    if (board[0][0] === currentPlayer && board[0][1] === currentPlayer && board[0][2] === currentPlayer) {
      winner = currentPlayer;
    }
    if (board[1][0] === currentPlayer && board[1][1] === currentPlayer && board[1][2] === currentPlayer) {
      winner = currentPlayer;
    }
    if (board[2][0] === currentPlayer && board[2][1] === currentPlayer && board[2][2] === currentPlayer) {
      winner = currentPlayer;
    }
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
      winner = currentPlayer;
    }
    if (board[2][0] === currentPlayer && board[1][1] === currentPlayer && board[0][2] === currentPlayer) {
      winner = currentPlayer;
    }
  }
  const makeTurn = () => {
    if (!winner) {
      console.log(`It is currently ${currentPlayer}'s turn. Please make a move.`);
      prompt.get(['row', 'column'], (err, result) => {

        board[result.row][result.column] = currentPlayer;
        console.log('Command-line input received:');
        console.log('  row: ' + result.row);
        console.log('  column: ' + result.column);
        console.log(board.join('\n'));
        determineWinner();
        switchPlayerTurn();
        makeTurn();
      });
    } else {
      console.log(`Player ${winner} has won!!!!`);
      return;
    }
  };

  prompt.start();
  makeTurn();
};



tictactoe();



