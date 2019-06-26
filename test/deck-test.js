const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should return the new deck', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    expect(deck.cards).to.deep.equal(cards);
  });
  it('should be able to count cards', function(){
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards)
    expect(deck.countCards()).to.equal(30)
  })
});