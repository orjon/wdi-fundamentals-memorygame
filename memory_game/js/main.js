console.log("Up and running!");

var cards = [
{
	rank: "jack",
	suit: "spades",
	cardImage: "images/jack-of-spades.png"
},
{
	rank: "jack",
	suit: "hearts",
	cardImage: "images/jack-of-hearts.png"
},
{
	rank: "jack",
	suit: "clubs",
	cardImage: "images/jack-of-clubs.png"
},
{
	rank: "jack",
	suit: "diamonds",
	cardImage: "images/jack-of-diamonds.png"
},
{
	rank: "queen",
	suit: "spades",
	cardImage: "images/queen-of-spades.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "clubs",
	cardImage: "images/queen-of-clubs.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "spades",
	cardImage: "images/king-of-spades.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "clubs",
	cardImage: "images/king-of-clubs.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];



var cardsInPlay = []; //Initially set to empty.


function resetGame () {
	location.reload();
}

document.getElementById('resetButton').addEventListener('click', resetGame);




function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	    var cardElement = document.createElement('img');
	    cardElement.setAttribute('src', 'images/back.png');
	    cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
	    document.getElementById('game-board').appendChild(cardElement);
	}
}


function checkForMatch() {

	var flippedCards = document.querySelectorAll('.selected');

	if (cardsInPlay[0] === cardsInPlay[1]) {
	    for (var i=0; i<flippedCards.length; i++) {
		    flippedCards[i].classList.remove('selected');
		    flippedCards[i].classList.add('correct');
		}
		console.log("You found a match!");

	} else {
		for (var i=0; i<flippedCards.length; i++) {
		    flippedCards[i].classList.remove('selected');
		    flippedCards[i].classList.add('incorrect');
		}
		console.log("Sorry, try again");
		// setTimeout(function() {  //delay to prevent alert appearing too soon
        // 		alert("Sorry, try again");
        // },50)
	}

}

function flipCard() {
  	var cardId = this.getAttribute('data-id');
  	this.className ='selected';
	this.setAttribute('src', cards[cardId].cardImage)
	// console.log("User flipped " + cards[cardId].rank);
	// console.log("Suit " + cards[cardId].suit);
	// console.log("Card Image  " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

createBoard();