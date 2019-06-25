class Turn {
	constructor(guess, card) {
	this.guess = guess; 
	this.card = card;
	}
	returnGuess() {
		return this.guess;
	}
	returnCard(){
		return this.card;
	}
	evaluateCard() {
		return this.guess === this.card.correctAnswer;
	}
	giveFeedback() {
		return this.evaluateCard() ? `correct!` : `incorrect!`;
	}
};

module.exports = Turn;