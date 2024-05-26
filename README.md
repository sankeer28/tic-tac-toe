
# Tic Tac Toe 

This is a simple implementation of the classic Tic Tac Toe game built with HTML, CSS, and JavaScript.

![image](https://github.com/sankeer28/tic-tac-toe/assets/112449287/e00edcd0-ca78-4be9-8d23-ba89318cb8aa)


## Features

- Play against another player or against the computer.
- Responsive design, playable on both desktop and mobile devices.
- Winning and draw detection.
- Restart the game at any time.

## Demo

You can play the game online .

## Computer AI Algorithm
The computer player in this Tic Tac Toe game utilizes a basic heuristic search combined with a depth-limited minimax approach to make intelligent moves. Here's how the algorithm works:

1.**Basic Heuristic Search**
The AI evaluates the game state to decide its next move. It aims to win the game or prevent the opponent from winning by considering potential future moves.

2. **Depth-Limited Minimax Approach**
The algorithm employs a depth-limited minimax approach to search through possible game states up to a certain depth. Minimax is a decision-making algorithm commonly used in two-player games to determine the best move for the current player, assuming that the opponent also plays optimally.

3. **Key Steps of the Algorithm:**
Check if AI can win: The algorithm first checks if there's a winning move available for the AI. It iterates through each empty cell on the board and evaluates whether placing the AI's mark in that cell would result in a win. If a winning move is found, the AI places its mark there and wins the game.

Check if player can win and block: If the AI cannot win on the next move, it checks if the player has a winning move available. Similar to the previous step, it iterates through each empty cell, evaluates whether placing the player's mark in that cell would result in a win, and blocks the player's winning move by placing its mark in that cell.

Place mark randomly: If neither the AI nor the player has a winning move available, the AI places its mark randomly in one of the empty cells. This adds an element of randomness to the AI's behavior and prevents it from making predictable moves.

4. **Limitations and Improvements:**
The current implementation of the AI algorithm is limited to considering only immediate winning or blocking moves. It doesn't look ahead beyond one move.
For a more advanced AI, you could implement a deeper search using recursive minimax with alpha-beta pruning. This would allow the AI to consider multiple future moves and choose the best move based on a deeper evaluation of the game state.



### Example of Tic Tac Toe Algorithm 

#### Initial Board State:
|  0 | 1  | 2  |
|---|---|---|
| 3 | 4 | 5 |
| 6 | 7 | 8 |


#### Player 'X' makes a move:


| X |   |   |
|---|---|---|
|   | O |   |
|   |   |   |

#### Applying the AI Algorithm:

1. **Check if AI can win**:
   - The AI evaluates each empty cell to determine if placing an 'O' in that cell would result in a win.
   - In this example, placing an 'O' in cell 6 would result in a win for the AI ('O' in cells 0, 4, and 6).

2. **Check if player can win and block**:
   - The AI evaluates each empty cell to determine if placing an 'X' in that cell would result in a win for the player.
   - In this example, there are no immediate winning moves for the player, so the AI doesn't need to block.

3. **Place mark randomly**:
   - Since there's no immediate winning move or blocking move, the AI places its mark randomly in one of the empty cells.
   - Let's say the AI places an 'O' in cell 1.

#### Updated Board State:
| X | O  |   |
|---|---|---|
|   | O |   |
|   |   |   |

#### Player 'X' makes another move:

| X | O  |   |
|---|---|---|
|   | O |   |
|   | X  |   |
#### Applying the AI Algorithm (Continued):

1. **Check if AI can win**:
   - Placing an 'O' in any of the empty cells won't result in an immediate win for the AI.

2. **Check if player can win and block**:
   - There are no immediate winning moves for the player, so the AI doesn't need to block.

3. **Place mark randomly**:
   - The AI places its mark randomly in one of the empty cells.
   - Let's say the AI places an 'O' in cell 3.

#### Final Board State:
| X | O  |   |
|---|---|---|
|  O | O |   |
|   | X  |   |

In this example, the AI's moves are determined by evaluating potential winning moves, blocking opponent's winning moves, and placing marks randomly when necessary. This showcases how the Tic Tac Toe AI algorithm makes intelligent decisions during gameplay.
