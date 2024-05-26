let currentPlayer;
let cells;
let winner;
let gameType;

function startGame(type) {
    gameType = type;
    currentPlayer = 'X';
    winner = null;

    const menu = document.querySelector('.menu');
    menu.style.display = 'none';

    const resetButton = document.querySelector('.reset-button');
    resetButton.style.display = 'block';

    const board = document.querySelector('.board');
    board.style.display = 'grid';

    cells = [];
    board.innerHTML = '';


    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
        cells.push(cell);
    }

    if (gameType === 'vsAI' && currentPlayer === 'O') {
        makeAIMove();
    }
}

function handleCellClick() {
    if (winner) return; 

    const index = parseInt(this.dataset.index);
    if (cells[index].textContent !== '') return; 

    cells[index].textContent = currentPlayer;
    if (checkWinner()) {
        winner = currentPlayer;
        const winningCells = getWinningCells();
        winningCells.forEach(cellIndex => cells[cellIndex].classList.add('winner'));
        setTimeout(() => alert(`${winner} wins!`), 100);
    } else if (checkDraw()) {
        cells.forEach(cell => cell.classList.add('draw'));
        setTimeout(() => alert("It's a draw!"), 100);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (gameType === 'vsAI' && currentPlayer === 'O') {
            makeAIMove();
        }
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent;
    });
}

function checkDraw() {
    return cells.every(cell => cell.textContent !== '');
}
function makeAIMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 9; i++) {
        if (cells[i].textContent === '') {
            cells[i].textContent = 'O';
            let score = minimax(cells, 0, false);
            cells[i].textContent = '';
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    cells[move].textContent = 'O';
    currentPlayer = 'X';
}

function minimax(board, depth, isMaximizing) {
    if (checkWinner()) {
        return isMaximizing ? -1 : 1;
    } else if (checkDraw()) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i].textContent === '') {
                board[i].textContent = 'O';
                let score = minimax(board, depth + 1, false);
                board[i].textContent = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i].textContent === '') {
                board[i].textContent = 'X';
                let score = minimax(board, depth + 1, true);
                board[i].textContent = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}



function resetGame() {
    const board = document.querySelector('.board');
    board.style.display = 'none';

    const menu = document.querySelector('.menu');
    menu.style.display = 'block';

    const resetButton = document.querySelector('.reset-button');
    resetButton.style.display = 'none';
}

function getWinningCells() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return condition;
        }
    }

    return [];
}
