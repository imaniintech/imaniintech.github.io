const cards = document.querySelectorAll(".memory-card");

let isCardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; //remove card from staying on board if same card clicked twice
    this.classList.add("flip");
    // console.log('Clicked!')
    // console.log(this)

    if (!isCardFlipped) {
        //1st click
        isCardFlipped = true;
        firstCard = this;
        // console.log({isCardFlipped, firstCard})

        return;
    } 
    // 2nd click
    isCardFlipped = false;
    secondCard = this;
    // console.log({firstCard, secondCard})

    checkForMatch();
}  

function checkForMatch() {
    let aMatch = firstCard.dataset.name === secondCard.dataset.name;
    //check to see if cards match, if so will remove event listener and bring back to original state
//terenary operator
    aMatch ? disableCards() : unflipCards();
        // console.log(firstCard.dataset.name)
        // console.log(secondCard.dataset.name)
      // console.log('Function was executed')
}


// cards match!
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

// cards do not match :(
function unflipCards() {
    lockBoard = true; //only unlock after cards have been flipped

    setTimeout( () => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

    resetBoard();
    }, 1500);
}

function resetBoard() {
    [isCardFlipped, lockBoard] = [false, false]; //es6 destrutering assignment 
    [firstCard, secondCard] = [null, null]
}

//invoked function expression (cards get shuffle before player starts game)
(function shuffleCards() {
    cards.forEach(card => {
        let randomShuffle = Math.floor(Math.random() * 12);
        card.style.order = randomShuffle;
    });
})();

cards.forEach(card => card.addEventListener("click", flipCard));