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

    const markCell = (row, column, playerToken) => {
        const selectedCell = board[row][column];

        // check to see if the cell is empty, otherwise the move is invalid
        if (selectedCell.getValue() !== 0) return;
        selectedCell.addMark(playerToken);
    }

    //print the board in the console for debugging
    const printBoard = () => {
        board.forEach(row => console.log(row.map(cell => cell.getValue()).join(" ")));
    }

    return {getBoard, markCell, printBoard};
}

function Cell() {
    let value = 0;

    // change the of value of the sqaure to the players mark 
    const addMark = (playerToken) => {
        value = playerToken;
    };

    // get the value of a cell
    const getValue = () => value;

    return {
        addMark,
        getValue
    };
}

function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard();

    const players = [ {
        nombre: playerOneName,
        token: "X"
    },
    {
        nombre: playerTwoName,
        token: "O"
    }   
    ];

    let activePlayer = players[0];

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getactivePlayer().nombre}'s turn.`);
    }

    const playRound = (row, column) => {
        board.markCell(row, column, getActivePlayer().token);
         // switch turns
        switchPlayer();
        printNewRound();
    };

    // start the game
    printNewRound();

    return {playRound, getActivePlayer};
}

const game = GameController();