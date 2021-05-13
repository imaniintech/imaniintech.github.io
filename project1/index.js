
// //Grab the game-board, the components, player and the outcome from html doc to load into JS

// // let noChoice = 0;
// // let playerOne = 1;
// // let playerTwo = 2;
document.addEventListener('DOMContentLoaded', () => { //listens for when content on dumb has loaded
    const token = document.querySelectorAll('.game-board div')
    const playerOnBoard = document.querySelector('#player-turn')

    
// create an array of arrays of all possibility of a win in the game board grid 
    const winScenarios = [

        //Horizontal -reverse
        [0, 1, 2, 3],
        [6, 5, 4, 3],
        [7, 8, 9, 10],
        [13, 12, 11, 10]
        [14, 15, 16, 17]
        [20, 19, 18, 17]
        [21, 22, 23, 24]
        [27, 26, 25, 24]
        [28, 29, 30, 31]
        [34, 33, 32, 31]
        [35, 36, 37, 38]
        [41, 40, 39, 38]

        // Horiizontal Inbetween



         //Vertical
         [0, 7, 14, 21]
         [35, 28, 21, 14]
         [1, 8, 15, 22]
         [36, 29, 22, 15]
         [2, 9, 16, 23]
         [37, 30, 23, 16]
         [3, 10, 17, 24]
         [38, 31, 24, 17]
         [4, 11, 18, 25]
         [39, 32, 25, 18]
         [5, 12, 19, 26]
         [40, 33, 26, 19]
         [6, 13, 20, 27]
         [41, 34, 27, 20]
 



    ]

/* Layout of game board's grid using index 
        [0, 1, 2, 3, 4, 5, 6]
        [7, 8, 9, 10, 11, 12, 13]
        [14, 15, 16, 17, 18, 19, 20]
        [21, 22, 23, 24, 25, 26, 27]
        [28, 29, 30, 31, 32, 33, 34]
        [35, 36, 37, 38, 39, 40, 41]
*/




    let playerTurn = 1;

   
    //function: for each token in the game board, loop a event listener click to click each token.
    for (let i = 0; i <= token.length; i++){
        token[i].onclick = () => {
        // alert('Square ' + i + ' was clicked.')
        /* the if statement passed through from class non-available in my html that states if the token isn't clicked at i+7 or 7=the last of the grid components, 
        then the token will not be available */
        if (token[i + 7].classList.contains('not-available')) {
        
            if (playerTurn === 1) {
            // ref https://www.youtube.com/watch?v=XYzSyPlY7_E & https://www.youtube.com/watch?v=IKzlUvYSZO4 for adding class in js - classList.add 
            token[i].classList.add('player-one')
            token[i].classList.add('not-available')
            playerTurn = 2
            playerOnBoard.innerHTML = playerTurn
            }
            else if (playerTurn === 2) {
                token[i].classList.add('player-two')
                token[i].classList.add('not-available')
                playerTurn = 1
                playerOnBoard.innerHTML = playerTurn
                }
            } else
            alert('Not a valid move')
            
        
        }
    }
}); 



// /// inside loop create if state inside loop if token[i] + this array i+ ?