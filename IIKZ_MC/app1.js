


const tilesContainer = document.querySelector(".grid");


    //card options- 8 singles

const singleTileArr = [
    {
        name: 'A',
        img: 'Iikz Images\BG.jpg'
    },

    {
        name: 'B',
        img: 'Iikz Images\FB.png'
    },

    {
        name: "C",
        img: 'Iikz Images\potato.png'

    },

    {
        name: 'D',
        img: 'Iikz Images\NETFLIX.png'
    },

    { 
        name: 'E',
        img: 'Iikz Images\resized\baby2.png'

    },

    {
        name: 'F',
        img: 'Iikz Images\GOOGLE.png'

    },

    {
        name: 'G',
        img: 'Iikz Images\resized\giraffe.png'
    },

    {
        name: 'H',
        img: 'Iikz Images\rocket.png'
    }

]


//creat duplicate of cards

const allTileArr = [...singleTileArr, ...singleTileArr];


const tileCount = allTileArr.length;
console.log(allTileArr)


//Game start Status

let revealedCount = 0;
let activeTile = null;
let waitForNextMove = false; 


function buildTile(randomTile) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-tile", randomTile);


     element.addEventListener("click", () => {

        if (waitForNextMove) {
            return; 

        }


        const checkMatch = activeTile.getAttribute(data-tile);

        if (checkMatch === tile) {


            activeTile.setAttribute("data-revealed", "true")



            activeTile = null;
            waitForNextMove = false;
            revealedCount += 2;
            
            if (revealedCount === tileCount) {
                alert("You Win!")
            }
        }









        element.style.backgroundColor = randomTile;

        if (!activeTile){
            activeTile = element; 
        }

        console.log(activeTile);

        waitForNextMove = true;

        setTimeOut ()






     })

    return element;


}





//Shuffle tile 

for (let i = 0; i < tileCount; i ++){
    const randomShuffle = Math.floor(Math.random() * allTileArr.length);          //eg (0.9 x 16) > nearest integer
    const randomTile = allTileArr[randomShuffle];
    const tile = buildTile(randomTile)


    allTileArr.splice(randomShuffle, 1);           //remove '1' item at randomShuffle index
    tilesContainer.appendChild(tile);


    console.log(randomTile)
}










