# TicTacToe

## Factory Function Practice

This project serves as a practice exercise for implementing a Tic-Tac-Toe game using factory functions. The logic is divided into three different factory functions: GameBoard, Cell, and GameController.

## Problem and Solution Sections

### Problem: How do I mark the players' moves in the console?

#### Solution:
In the nested array representing the game board, each cell is initially marked with a starting value of 0. To mark a player's move, access the desired cell using `board[row][column]` and change its value to the special identifier for the player (e.g., X or O).

### Problem: How do I display the game board in the console with a UI?

#### Solution:
To display the game board in the console with a user interface, utilize the nested cells by using the `map` function twice. Retrieve their current values and print them together to represent the current state of the game.

