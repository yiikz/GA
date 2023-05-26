// TIMER
// timer starts when receive 1st click on 'card' class

// const timerStarts = document.querySelector('.card');

// timerStarts.addEventListener('click', function() {
//   startTimer();
// });

// function startTimer() {
//   // Disable the specific element
//  timerStarts.style.pointerEvents = 'none';

//   // Start the timer for 20 seconds
//   setTimeout(function() {
//     // Timer has finished, do something here
//     console.log('Timer finished!');

//     // Enable the specific element again
//     timerStarts.style.pointerEvents = 'auto';
//   }, 20000); // 20 seconds in milliseconds
// }

// // Function to update the timer display
// function updateTimer(timeInSeconds) {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = timeInSeconds % 60;

//     // Format the time to have leading zeros
//     const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;

//     // Update the timer container with the formatted time
//     timerContainer.textContent = formattedTime;
//   }

//   // Function to add leading zero to numbers less than 10
//   function padZero(number) {
//     return number < 10 ? `0${number}` : number;
//   }

// RESTART BUTTON

const lists = document.querySelectorAll(".cardDeck");

function restartGame() {
  shuffleCard();
}

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", function () {
  restartGame();
});

//Mechanism to flip open cardk

let nodesInPlay = []; //{ frontCard:{}, backCard: {}},{ frontCard:{}, backCard: {}}
let cardInPlay = [];
let matchCount = 0;
let matched = false;

document.getElementById("result").innerText = matchCount;

const startGame = () => {
    console.log("start game")
  matched = false;

  document.querySelectorAll(".card").forEach((el) => {
    //select (.card) class, and for every element in it
    el.addEventListener("click", (event) => {
      // when clicked
      console.log("you clicked me, Q image. I am: ", event.target);
      console.log(
        "I am Q image. my parent my div container is: ",
        event.target.parentNode
      ); //parentNode of Q = div class 'view fron view'
      console.log(
        "I am Q image. the parent of my parent, li class 'card' which holds both images is: ",
        event.target.parentNode.parentNode
      ); //parentNode of 'view front view' = li class 'card'

      const parentNodeMatched =
        event.target.parentNode.parentNode.classList.contains("matched"); // = if li class

      event.target.parentNode.parentNode.classList.add("matched");

      //code below explains: when clicked, detect node parent of item, and check through all
      // if item has 'hide', then show
      // if item doesnt have 'hide', then hide

      console.log(
        "my parent li class 'card' which holds both images: ",
        event.target.parentNode.parentNode.children
      );

      const frontOfCard = event.target.parentNode.parentNode.children[0]; //

      const backOfCard = event.target.parentNode.parentNode.children[1]; // has hide then user has not opened card

      console.log("backOfCard: ", backOfCard);
      console.log(
        "backOfCard firstElementChild: ",
        backOfCard.firstElementChild
      );
      console.log("img src: ", backOfCard.firstElementChild.src);

      if (backOfCard.classList.contains("hide") && cardInPlay.length>=0 && cardInPlay.length < 2) {
        backOfCard.classList.remove("hide");
        frontOfCard.classList.add("hide");
        
        nodesInPlay.push({ frontOfCard: frontOfCard, backOfCard: backOfCard });
        cardInPlay.push(backOfCard.firstElementChild.src); // add to array
        console.log(cardInPlay, cardInPlay.length); //cardInPlay = url of img
        
      }

      if (parentNodeMatched) {
        //break code here
        return;
      }

      //winning condition
      if (cardInPlay.length == 2) {
        //when playr picked 2 cards,
        //we check if card is a match

        //if card1 X match card2
        console.log(nodesInPlay)
        console.log("cardInPlay[0] == cardInPlay[1]", cardInPlay[0] == cardInPlay[1])
        if (cardInPlay[0] == cardInPlay[1]) {
          matched = true; // if card1 matches card2
          console.log("card matched");
          cardInPlay = [];
          matchCount++;





        } else {
          nodesInPlay[0].frontOfCard.classList.remove("hide");
          nodesInPlay[0].backOfCard.classList.add("hide");
          console.log("hit")

          nodesInPlay[1].frontOfCard.classList.remove("hide");
          nodesInPlay[1].backOfCard.classList.add("hide");
          console.log("hit2")

          matched = false;
          cardInPlay = [];
          nodesInPlay = [];
          return;
        }

        // if(cardInPlay[0] !== cardInPlay[1]) {
        //     frontOfCard.classList.remove("hide");
        //    backOfCard.classList.add("hide");
        //     return;
        // }

        // } else if (cardInPlay.length > 2) {
        // frontOfCard.classList.add("show");                       // front card close back !!!NOT WORKING!!!
        //    frontOfCard.classList.remove("hide");
        //    backOfCard.classList.add("hide");
        //    cardInPlay = [];
        //    console.log(frontOfCard,"front of card")
        // }

        // if (matchCount == 8) {
        //   setTimeout(() => {
        //     //return shuffleCard ();
        //     alert("You win");
        //   }, 1000);
        // }
      }
    });
  });
};

setInterval(startGame, 800);
// startGame()

//Array of ietms from Li class
// Retrieve list items with a specific class
const listItems = Array.from(document.getElementsByClassName("back-view"));
console.log(listItems); //use this back view array

// Extract values from list items and store in a new array
const backViewList = listItems.map((li) => console.log(li.textContent));

console.log(backViewList);

const backCardCount = listItems.length;
console.log(backCardCount);

//NEW SHUFFLE CARD !!! NOT WORKINH!!

function shuffleCard() {
  matchCount = 0;

  for (let i = 0; i < backCardCount; i++) {
    const randomShuffle = Math.floor(Math.random() * backViewList.length); //eg (0.9 x 16) > nearest integer
    const randomCard = backViewList[randomShuffle]; // pick 1 random card
    //const newCard = buildCard(randomCard);                                         //becomes new card

    backViewList.splice(randomShuffle, 1); //remove '1' item at randomShuffle index
    //lists.appendChild(newCard);

    console.log(randomCard);
  }
}

// shuffleCard();
