const prompt = require('prompt');

let board = [['','',''],['','',''],['','','']];
let winner = null;
let currentPlayer = 'X';

prompt.start();

while (!winner) {
  console.log(`It is currently ${currentPlayer}'s turn. Please make a move.`);
  prompt.get([])
}
prompt.get()