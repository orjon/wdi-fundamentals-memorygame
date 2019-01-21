console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"	
}
];


var cardsInPlay = []; //Initially set to empty.
var flippedCards = [];

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	    var cardElement = document.createElement('img');
	    cardElement.setAttribute('src', 'images/back.png');
	    cardElement.setAttribute('data-id', i);
	    // console.log(cardElement); //check
    	cardElement.addEventListener('click', flipCard);
	    document.getElementById('game-board').appendChild(cardElement);
	}

}


function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		console.log(cardsInPlay);
		// document.getElementById('game-board').className ='correct';
		setTimeout(function() {  //delay to prevent alert appearing too soon
  			alert("You found a match!");
  		},50)

	} else {
		console.log("Sorry, try again");
		console.log(cardsInPlay);
		setTimeout(function() {  //delay to prevent alert appearing too soon
  			alert("Sorry, try again");
  		},50)
	}

}

function flipCard() {
  	cardId = this.getAttribute('data-id');
  	
  	this.className ='selected';
	this.setAttribute('src', cards[cardId].cardImage)
	console.log("User flipped " + cards[cardId].rank);
	console.log("Suit " + cards[cardId].suit);
	console.log("Card Image  " + cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	flippedCards.push(cardId);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

createBoard();


