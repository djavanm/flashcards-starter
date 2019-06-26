const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
describe('Round', function() {

  it('should be a function', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the new deck', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck.cards);
  });
  
  it('should return the current card', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should return the incorrect guesses', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    const round = new Round(deck);
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should have take turn method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    const round = new Round(deck);
    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.takeTurn('object')).to.equal('incorrect!');
    expect(round.turns).to.equal(2);
    expect(round.returnCurrentCard()).to.equal(round.deck[2]);
    expect(round.calculatePercentCorrect()).to.equal(50)
  });
});