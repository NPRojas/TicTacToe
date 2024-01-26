function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    // 2d array for the board, row 0 is top row while column 0 is 
    // the left most column
    for (let i = 0; i < rows; i++) {
      // creates an array for each row  
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        // add column cells in the empty row array
        board[i].push(Cell());
      }
    }

    // for UI to render the board 
    const getBoard = () => board;

    const markCell = (row, column, player) => {
        const selectedCell = board[row][column];

        // check to see if the cell is empty, otherwise the move is invalid
        if (selectedCell.getValue !== 0) return;
        selectedCell.addMark(player);
    }

    //print the board in the console for debugging
    const printBoard = () => {
        const updatedBoard = board.map((row) => row.map((cell) => cell.getValue))
        console.log(updatedBoard);
    }

    return {getBoard, markCell, printBoard};
}

function Cell() {
    let value = 0;

    // change the of value of the sqaure to the players mark 
    const addMark = (player) => {
        value = player;
    };

    // get the value of a cell
    const getValue = () => value;

    return {
        addMark,
        getValue
    };
}

