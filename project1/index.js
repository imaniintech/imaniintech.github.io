
//Grab the game-board, the components, player and the outcome from html doc to load into JS
let currentPlayer = 1
document.addEventListener('DOMContentLoaded', () => {
    const token = document.querySelectorAll('.game-board div')
    // const outcome = document.querySelector('#outcome')  // ** note to self-still come back when wirking on win scenario 
    const playerOnBoard = document.querySelector('#current-player')



    //function: for each token in the game board, loop a event listener click to click each token.
    for (let i = 0; token.length; i++){
        token[i].onclick = () => {
        // alert('You have clicked square ' + i)

        //function:
        if (currentPlayer === 1) {
            // ref https://www.youtube.com/watch?v=XYzSyPlY7_E & https://www.youtube.com/watch?v=IKzlUvYSZO4 for adding class in js - classList.add 
            token[i].classList.add('player-one')
            token[i].classList.add('not-available')
            currentPlayer = 2
            playerOnBoard.innerHTML = currentPlayer
            }
        if (currentPlayer === 2) {
                token[i].classList.add('player-two')
                token[i].classList.add('not-available')
                currentPlayer = 1
                playerOnBoard.innerHTML = currentPlayer
            }
        }
    }
}); 