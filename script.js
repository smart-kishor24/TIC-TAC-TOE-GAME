let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let scores = { X: 0, O: 0 };
let round = 1;
const winningCombinations = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

const cells = document.querySelectorAll('.cell');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const roundCounter = document.getElementById('round');
const modal = document.getElementById('winnerModal');
const winnerMessage = document.getElementById('winnerMessage');

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (board[index] !== '') return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  const winner = checkWinner();
  if (winner) {
    showWinner(winner);
    return;
  }

  if (!board.includes('')) {
    showWinner('Draw');
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      highlightWinningCells(combo);
      return board[a];
    }
  }
  return null;
}

function highlightWinningCells(combo) {
  combo.forEach(i => {
    cells[i].classList.add('winning');
  });
}

function showWinner(winner) {
  if (winner !== 'Draw') {
    scores[winner]++;
    winnerMessage.textContent = `🎉 Player ${winner} Wins!`;
  } else {
    winnerMessage.textContent = "It's a Draw! 😄";
  }
  updateScoreboard();
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  resetBoard();
  round++;
  roundCounter.textContent = round;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('winning');
  });
  currentPlayer = 'X';
}

function resetGame() {
  scores = { X: 0, O: 0 };
  round = 1;
  updateScoreboard();
  roundCounter.textContent = round;
  resetBoard();
}

function updateScoreboard() {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
}

function goBack() {
  alert("Back button clicked! You can link this to a menu page.");
}
