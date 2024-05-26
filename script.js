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
    let emptyCells = cells.reduce((acc, cell, index) => {
        if (cell.textContent === '') acc.push(index);
        return acc;
    }, []);

 
    for (let i = 0; i < emptyCells.length; i++) {
        cells[emptyCells[i]].textContent = 'O';
        if (checkWinner()) {
            winner = 'O';
            const winningCells = getWinningCells();
            winningCells.forEach(cellIndex => cells[cellIndex].classList.add('winner'));
            setTimeout(() => alert(`Computer wins!`), 100);
            return;
        }
        cells[emptyCells[i]].textContent = '';
    }


    for (let i = 0; i < emptyCells.length; i++) {
        cells[emptyCells[i]].textContent = 'X';
        if (checkWinner()) {
            cells[emptyCells[i]].textContent = 'O';
            currentPlayer = 'X';
            return;
        }
        cells[emptyCells[i]].textContent = '';
    }

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    cells[emptyCells[randomIndex]].textContent = 'O';
    currentPlayer = 'X';
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
