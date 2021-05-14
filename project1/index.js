
// //Grab the game-board, the components, player and the outcome from html doc to load into JS
let playerTurn = 1;

document.addEventListener('DOMContentLoaded', () => { //listens for when content on dumb has loaded
    const token = document.querySelectorAll('.game-board div')
    // const tomato = document.querySelector('.player-one')
    // const yellowGreen = document.querySelector('player-two')
    const playerOnBoard = document.querySelector('#player-turn')
    const outcome = document.querySelector('.outcome')




// create an array of arrays of all possibility of a win in the game board grid 
    const winScenarios = [

        //Horizontal / reverse
        [0, 1, 2, 3],
        [6, 5, 4, 3],
        [7, 8, 9, 10],
        [13, 12, 11, 10],
        [14, 15, 16, 17],
        [20, 19, 18, 17],
        [21, 22, 23, 24],
        [27, 26, 25, 24],
        [28, 29, 30, 31],
        [34, 33, 32, 31],
        [35, 36, 37, 38],
        [41, 40, 39, 38],

        // Horiizontal Inbetween
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],

        //Vertical
         [0, 7, 14, 21],
         [35, 28, 21, 14],
         [1, 8, 15, 22],
         [36, 29, 22, 15],
         [2, 9, 16, 23],
         [37, 30, 23, 16],
         [3, 10, 17, 24],
         [38, 31, 24, 17],
         [4, 11, 18, 25],
         [39, 32, 25, 18],
         [5, 12, 19, 26],
         [40, 33, 26, 19],
         [6, 13, 20, 27],
         [41, 34, 27, 20],
 
        //Diagonal / reverse  / inbetween
        [14, 22, 30, 38],
        [7, 15, 23, 31],
        [39, 31, 23, 15],
        [0, 8, 16, 24],
        [40, 32, 24, 16],
        [8, 16, 24, 32],
        [1, 9, 17, 25],
        [41, 33, 25, 17],
        [9, 17, 25, 33],
        [2, 10, 18, 26],
        [34, 26, 18, 10],
        [3, 11, 19, 27]


         /* Layout of game board's grid using index 
        [0,  1,  2,  3,  4,  5,   6]
        [7,  8,  9,  10, 11, 12, 13]
        [14, 15, 16, 17, 18, 19, 20]
        [21, 22, 23, 24, 25, 26, 27]
        [28, 29, 30, 31, 32, 33, 34]
        [35, 36, 37, 38, 39, 40, 41]
*/
    ]

    let win = () => {
        for (let w = 0; w < winScenarios.length; w++){
            const tokenOne= token[winScenarios[w] [0] ]
            const tokenTwo = token[winScenarios[w] [1] ]
            const tokenThree = token[winScenarios[w] [2] ]
            const tokenFour = token[winScenarios[w] [3] ]

            if (tokenOne.classList.contains('player-one') &&  //check to see if player one is there
                tokenTwo.classList.contains('player-one') && 
                tokenThree.classList.contains('player-one') && 
                tokenFour.classList.contains('player-one') 
            )
            {
                outcome.innerHTML = "Player One is the winner"
            } 
            if (tokenOne.classList.contains('player-two') && 
                tokenTwo.classList.contains('player-two') && 
                tokenThree.classList.contains('player-two') && 
                tokenFour.classList.contains('player-two') 
            ) {
                outcome.innerHTML = "Player Two is the winner!"
            }
        }
    }




 


     // to add event listener to token on my grid by using a for loop, I referenced https://stackoverflow.com/questions/8801787/get-index-of-clicked-element-using-pure-javascript 
    //function: for each token in the game board, loop a event listener click to click each token.
    
    for (let i = 0; i < token.length; i++){
        token[i].onclick = () => {
        // alert('Square ' + i + ' was clicked.')
        /* the if statement passed through from class non-available in my html that states if the token isn't clicked at i+7 or 7=the last of the grid components, 
        then the token will not be available */
        console.log(token[i].classList)
        if (!token[ i].classList.contains('not-available'))
        /*when clicked, going to check to see if true that componenet isn't available and if it's not true it's going stop. has to contain not available in order to move on to nex conditional block*/
   
      //have to put element with ! to reverse the boolean to make statement false
        { 
        
            if (playerTurn === 1) {
            // referenced https://www.youtube.com/watch?v=XYzSyPlY7_E & https://www.youtube.com/watch?v=IKzlUvYSZO4 for adding class in js - classList.add 
                token[i].classList.add('player-one')
                token[i].classList.add('not-available')
                playerTurn = 2
                playerOnBoard.innerHTML = playerTurn
            // console.log(grid)
            }
    
            else if (playerTurn === 2) {
            
                token[i].classList.add('player-two')
                token[i].classList.add('not-available')
                
                playerTurn = 1
                playerOnBoard.innerHTML = playerTurn
                }
            } else {
            alert('Not a valid move')
            }
            win()
        }
    }
}); 
//only in event listeners you can pass through e through an event


// /// inside loop create if state inside loop if token[i] + this array i+ ?