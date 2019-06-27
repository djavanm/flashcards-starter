const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/round');
const Turn = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    const round = new Round(deck, this);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;