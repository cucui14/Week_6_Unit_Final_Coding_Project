//add chai to index_test.js
var expect = chai.expect;
//
describe('Card War function', () => {
  describe('card class creator', () => {
    class Card {
      constructor(rank, suit, value) {
        this.rank = rank;
        this.value = value;
        this.suit = suit;
      }
      describe() {
        return `${this.rank} ${this.suit} ${this.value}`;
      }
    }

    it('Should return a new card with A ♠ 1', () => {
      let newCard = new Card('A', '♠', 1);
      expect(newCard.describe()).to.equal('A ♠ 1');
    });

    it('Should return a new card with 10 ♣ 10', () => {
      let newCard = new Card('10', '♣', 10);
      expect(newCard.describe()).to.equal('10 ♣ 10');
    });
  });
});
