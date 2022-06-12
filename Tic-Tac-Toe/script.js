// Store game status element to be able to use it more easily later in the game
const displayStatus = document.querySelector('.display');

// Declare the variables that will be used to track the game state throughout the game

// declare variable "isGameActive" to pause the game
let isGameActive = true;

// declare the current (active) player
let currentPlayer = "X";

// store the current game state
/// create an array of strings (with an index 0-8 to equal the 9 cells)
//// allows to easily track the cells that were already played
let gameState = ["", "", "", "", "", "", "", "", ""];

// declare messages that will display throughout the game. make them dynamic so that
// the data is current everytime the function is used (i.e player name)
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Draw! Game over.`;
const currentPlayerTurn = () => `${currentPlayer}'s turn`;

// set an inital message to let the players know who turn it is
displayStatus.innerHTML = currentPlayerTurn();

// ways to win on the grid by following grid's cell index
const waysToWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// handleCellPlayed
function handleCellPlayed(clickedCell, clickedCellIndex) {
// update the internal game state to relect the move made & update the UI to reflect the played move
gameState[clickedCellIndex] = currentPlayer;
clickedCell.innerHTML = currentPlayer;
// We accept the currently clicked cell (the .target of our click event), and the index of the cell that has been clicked.
};

// handlePlayerChange
function handlePlayerChange() {
    // use a ternary operator to assign a new player (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    displayStatus.innerHTML = currentPlayerTurn();
};


// handleResultValidation
// check whether the game is a win, draw, still going or ended
function handleResultValidation() {
    let gameWon = false;
    for (let i=0; i<=7; i++) {
        const winCondition = waysToWin[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a==="" || b==="" || c==="") {
            continue;
        }
        if (a===b && b===c) {
            gameWon = true;
            break
        }
    }
if (gameWon) {
    displayStatus.innerHTML = winningMessage();
    isGameActive = false;
    return;
}
// Draw- to check for draw see if there are any unpopulated values in the game state array 
    let gameDraw = !gameState.includes("");
    if(gameDraw) {
        displayStatus.innerHTML = drawMessage();
        isGameActive = false;
        return;
    }
// from this point, there are moves still to be made so continue the game by changing the current player
    handlePlayerChange();
};

// handleCellClick
function handleCellClick(clickedCellEvent) {
    // check to see if cell is already clicked and if not, continue the game flow
    // save the clicked html element in a variable for easier use throughout game
    const clickedCell = clickedCellEvent.target
    /* Grab the "data-cell-index" attribute from the clicked cell to be able to identify
    where that cell is in the grid container. NOTE: the getAttribute will return a string value.
    Since an actual # is needed, parse the string to an interger*/
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    /* Check whether the move had already been played or if the game is paused. 
    If either of those are true, ignore the click. */
    if (gameState[clickedCellIndex] !== "" || !isGameActive) {
        return;
    }
    // continue with the game flow if all functions are met properly
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


// handleRestartGame
/* connect the game and restart functionality - set the variables that tracked game state back to 
their defaults, clear the game board and update the game status back to the current player message. */
function handleRestartGame() {
    isGameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    displayStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// Add the event listeners for the game cells and for the restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick))
document.querySelector('.restart').addEventListener('click', handleRestartGame)