console.log("Up and running!");

// var cardOne   = "queen";
// var cardTwo   = "queen";
// var cardThree = "king";
// var cardFour  = "king";

var cards = ["queen","queen","king","king"];
var cardsInPlay = []; //Initially set to empty.

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}
