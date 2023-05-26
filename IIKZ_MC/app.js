

// RESTART BUTTON

const lists = document.querySelectorAll('.cardDeck')

function restartGame() {
    shuffleCard ();

}



const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', function(){
    restartGame();
})






let cardInPlay = []

document.querySelectorAll('.card').forEach(el => {                                      //select (.card) class, and for every element in it 
    el.addEventListener("click", (event) => {                                           // when clicked 
        console.log("you clicked me, Q image. I am: ",event.target)                   
        console.log("I am Q image. my parent my div container is: ",event.target.parentNode)         //parentNode of Q = div class 'view fron view' 
        console.log("I am Q image. the parent of my parent, li class 'card' which holds both images is: ",event.target.parentNode.parentNode)           //parentNode of 'view front view' = li class 'card'
        
        
        
        const parentNodeMatched = event.target.parentNode.parentNode.classList.contains("matched")      // = if li class      

        const frontOfCard = event.target.parentNode.parentNode.children[0]              //
        
        const backOfCard = event.target.parentNode.parentNode.children[1] // has hide then user has not opened card
        
        
        if(parentNodeMatched){
            //break code here
            return;
        }

        if(cardInPlay.length == 2){
            //we check if card is a match
            if(cardInPlay[0] == cardInPlay[1]){
                console.log("card matched")
                matchCount ++;
            }else if{
                cardInPlay = []
            } else {
                return;
        }}


        //code below explains: when clicked, detect node parent of item, and check through all 
        // if item has 'hide', then show
        // if item doesnt have 'hide', then hide  


        console.log("my parent li class 'card' which holds both images: ",event.target.parentNode.parentNode.children)
        
       
        
        
        console.log("backOfCard: ", backOfCard)
        console.log("backOfCard firstElementChild: ", backOfCard.firstElementChild)
        console.log("img src: ",backOfCard.firstElementChild.src)

        if(backOfCard.classList.contains('hide')){
            backOfCard.classList.remove("hide")
            frontOfCard.classList.add("hide")
            cardInPlay.push(backOfCard.firstElementChild.src) // add to array
        }
    })
})

//if 









const cards = document.getElementsByClassName('.card');               //takes from all elements with .card




let cardOne, cardTwo;
let matchedPair = 0;
let disableDeck = false;                                                //X allow card to flip for same card and opened card



function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableFlip) {                       //if card 1 is X clciked card and X (opened card)
        clickedCard.classList.add("flip");                              // let it flip (FLIP is 'front view' disappearing)
        if(!cardOne) {                                                  // if X card1 (same card)
            return cardOne = clickedCard;                               // card1 move on to become clickedCard (approved)
        }
        cardTwo = clickedCard;                                          // if MATCH
        disableFlip = true;                                             // X flip

       let cardOneBack = cardOne.document.getElementsByClassName('back-view');        //use this back view array 
       cardTwoBack = cardTwo.document.getElementsByClassName('back-view');
       matchCards(cardOneBack, cardTwoBack);
        console.log(cardOneBack, cardTwoBack) ;           
        //let cardOneBack = cardOne.querySelector(".back-view img").src,   // links new var C1Img to 'backview'
        //cardTwoBack = cardTwo.querySelector(".back-view img").src;       // links new var C2Img to 'backview'
        //matchCards(cardOneBack, cardTwoBack);                              // invoke function to check match cards with Back views 
    }
}

function matchCards(backImg1, backImg2) {
    if(backImg1 === backImg2) {                                           //if Back view match
        matchCount++;  
        console.log("match successful");                                                    //Match count increas 
        if(matchCount == 8) {                                               //If MatchCount reaches 8, then invoke Shuffle()
            setTimeout(() => {
                return shuffleCard();                                       //Shuffle
            }, 1000);
        }   
    }

}



//var cardElement = document.getElementById("myCard");
//cardElement.addEventListener("click", function(event) {
//  flipCard(event);
//});


console.log(cards)
                    
//lists[0] refers to li class (only has 1 item), children [0] refers to [0] of div class, children [0]  
console.log(lists[0].children[3].children[0].style.display)            // finds potato box



// lists[0].children[0].children[0].style.display = "none";            //removes Q from baby

 //lists[0].children[1].children[0].style.display = "none";            //removes Q from giraffe

// lists[0].children[1].children[1].style.display = "none";  

//FLIP
//click -> all lists[0].children will disappear
//classlist.add 'front view'

//create a func where only on 'click', will change display to none && after timeout








//function flipCard 



//Shuffle card


//set timeout will run once
//set interval will keep running 


//Shuffle card


let singleCardArr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];            //random run through


//creat duplicate of cards

const allCardArr = [...singleCardArr, ...singleCardArr];
console.log(allCardArr)

const cardCount = allCardArr.length;
console.log(cardCount)




///
function buildCard(randomCard) {
    const element = document.createElement("div");

    element.classList.add("card");
    element.setAttribute("data-color", randomCard);

    return element; 
}





function shuffleCard() {                                               //when Shuffle() is invoked
    matchCount = 0;                                                       //reset Match count = 0 
    disableFlip = false;                                                   //can flip cards
    cardOne = cardTwo = "";

    for (let i = 0; i < cardCount; i ++){
        const randomShuffle = Math.floor(Math.random() * allCardArr.length);          //eg (0.9 x 16) > nearest integer
        const randomCard = allCardArr[randomShuffle];                                 // pick 1 random card 
        const newCard = buildCard(randomCard);                                         //becomes new card
    
    
        allCardArr.splice(randomShuffle, 1);           //remove '1' item at randomShuffle index
        //lists.appendChild(newCard);
    
    
        console.log(randomCard)
    }
    
    
    
}

///link to backview image 




shuffleCard();
    
// cards.forEach(card => {
//     card.addEventListener("click", flipCard);
// });