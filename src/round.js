const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    if(turn.evaluateCard() === false) {
      this.incorrectGuesses.unshift(this.deck[this.turns].id)
    }
    this.turns++;
    return turn.giveFeedback();
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  calculatePercentCorrect() {
    return (Math.abs(this.incorrectGuesses.length - this.turns) / this.turns) * 100
  }
};
module.exports = Round;