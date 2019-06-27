const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('it should be a function', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj });
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should return the new game', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj });
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game();
    game.start();
    expect(game.currentRound).to.deep.equal(round);
  });
  
  it('should start the new game', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj });
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game();
    game.start();
    expect(game.currentRound).to.deep.equal(round);
  });
  // it('should return the current card', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //   expect(round.returnCurrentCard()).to.equal(card1);
  // });

  // it('should return the incorrect guesses', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //   round.takeTurn('pug');
  //   expect(round.incorrectGuesses).to.deep.equal([1]);
  // });

  // it('should have take turn method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
  //   const deck = new Deck([card1, card2, card3]);
  //   const round = new Round(deck);
  //   expect(round.takeTurn('sea otter')).to.equal('correct!');
  //   expect(round.takeTurn('spleen')).to.equal('incorrect!');
  //   expect(round.turns).to.equal(2);
  //   expect(round.returnCurrentCard()).to.equal(card3);
  //   expect(round.calculatePercentCorrect()).to.equal(50)
  // });
});