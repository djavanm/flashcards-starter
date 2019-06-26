const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
describe('Card', function() {

  it('should be a function', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    expect(cards[0]).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    expect(cards[0].question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    expect(cards[0].answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const cards = prototypeQuestions.map(cardObj => {
      const card = new Card({ ...cardObj});
      return card;
    });
    expect(cards[0].correctAnswer).to.equal('object');
  });
});