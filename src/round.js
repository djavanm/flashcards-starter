const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
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
    return (this.incorrectGuesses.length / this.turns) * 100
  }
};
module.exports = Round;