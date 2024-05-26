
# Tic Tac Toe 

This is a simple implementation of the classic Tic Tac Toe game built with HTML, CSS, and JavaScript.

<p align="center">
  <img src="https://github.com/sankeer28/tic-tac-toe/assets/112449287/cd329a40-f694-44bd-b166-1ea9ca4185dc" />
</p>

## [Demo](https://sankeer28.github.io/tic-tac-toe/)

## 99% Unbeatable Computer AI Algorithm
The 'computer' in this game utilizes a depth-limited minimax approach.


 **Depth-Limited Minimax Approach:**
The algorithm uses a depth-limited minimax approach to search through possible game states up to a certain depth. Minimax is a decision-making algorithm commonly used in two-player games to determine the best move for the current player, assuming that the opponent also plays optimally.

 **Key Steps of the Algorithm:**
- Check if AI can win: The algorithm first checks if there's a winning move available for the AI. It iterates through each empty cell on the board and evaluates whether placing the AI's mark in that cell would result in a win. If a winning move is found, the AI places its mark there and wins the game.

- Check if player can win and block: If the AI cannot win on the next move, it checks if the player has a winning move available. Similar to the previous step, it iterates through each empty cell, evaluates whether placing the player's mark in that cell would result in a win, and blocks the player's winning move by placing its mark in that cell.

- Place mark randomly: If neither the AI nor the player has a winning move available, the AI places its mark randomly in one of the empty cells. This adds an element of randomness to the AI's behavior and prevents it from making predictable moves.

**Limitations and Improvements:**
The current implementation of the AI algorithm is limited to considering only immediate winning or blocking moves. It doesn't look ahead beyond one move.
There is no difficulty selector.


