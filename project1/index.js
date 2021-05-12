
//Grab the game-board, the components, player and the outcome from html doc to load into JS
document.addEventListener('DOMContentLoaded', () => {
    const token = document.querySelectorAll('.game-board div')
    // const outcome = document.querySelector('#outcome')
    const playerOnBoard = document.querySelector('#current-player')
    let currentPlayer = 1



    //function: for each token in the game board, loop a event listener click to click each token.
    for (let i = 0; token.length; i++){
        token[i].onclick = () => {
        // alert('You have clicked square ' + i)

        //function:
        if (currentPlayer == 1) {
            token[i].classList.add('player-one')
            token[i].classList.add('not-available')
            currentPlayer = 2
            playerOnBoard.innerHTML = currentPlayer
            }
        }
    }

}); 