const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return the new guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return the new card', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const card = cards[0];
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const card = cards[0];
    const turn = new Turn('array', card);
    const turn2 = new Turn('object', card)
    expect(turn.evaluateCard()).to.equal(false);
    expect(turn2.evaluateCard()).to.equal(true);
  });

  it('returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const card = cards[0];
    const turn = new Turn('array', card);
    const turn2 = new Turn('object', card)
    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});