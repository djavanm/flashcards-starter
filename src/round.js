const Turn = require('./Turn');
const Game = require('./Game');

class Round {
  constructor(deck, game) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.game = game;
  }
  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    if(turn.evaluateCard() === false) {
      this.incorrectGuesses.unshift(currentCard.id)
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
  endRound() {
    const percent = this.calculatePercentCorrect()
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`)
    if(percent < 90){
      console.log(`Sorry, your score was too low. Try again!`)
      this.game.start()
    }
  };
};
module.exports = Round;