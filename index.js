//class 'Card' creates a new card with a rank, suit and value
class Card {
  constructor(rank, suit, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
}

//class Player creates a new player with a player name, player screo and player deck
class Player {
  constructor(name) {
    this.playerName = name;
    this.playerScore = 0;
    this.playerDeck = [];
  }
  //method getPlayername returns the player's name
  getPlayerName() {
    return this.playerName;
  }
  //method getPlayerScore returns the player's score
  getPlayerScore() {
    return this.playerScore;
  }
  //method getPlayerDeck returns the player's deck
  getPlayerDeck() {
    return this.playerDeck;
  }
}

//class deck creates a new deck as an empty array
class Deck {
  constructor() {
    this.deck = [];
  }
  //method buildDeck executes the methods createDeck and shuffle then returns it to the array
  buildDeck() {
    this.createDeck();
    this.shuffle();
    return this.deck;
  }
  //method createDeck uses three arrays with suits, ranks and values
  createDeck() {
    const suits = ['♠', '♣', '♥', '♦'];
    const ranks = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    //for loop iterates through the suits and for each iterations will run another for loop for ranks and pushes to the deck array a new card using the card class each iterations
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.deck.push(new Card(ranks[j], suits[i], values[j]));
      }
    }
  }
  //method shuffle if the lenght of the array deck is more than 0 it will sort the array in a random order and add it to a variable called shuffleDeck. It will then add each card from shuffleDeck to the deck array
  shuffle() {
    if (this.deck.length > 0) {
      const shuffleDeck = this.deck.sort(() => Math.random() - 0.5);
      this.deck = [...shuffleDeck];
    }
  }
}
//class Game creates the game with an empty array called players and an empty array called deck
class Game {
  constructor() {
    this.players = [];
    this.deck = [];
  }
  //method start takes the input from method shoMenuOptions and adds it to a variable called input. It then useres that value in a while loop as long as it is not 0. It then usese the same value in a switch statement where if the value becomes one it will execute the createGame method or set the value of input to 0. Once out of the switch it sets the value pack to the promp of showMenuOptions. Once input becomes 0 it alerts the player
  start() {
    let input = this.showMenuOptions();
    while (input != 0) {
      switch (input) {
        case '1':
          this.createGame();
          break;
        default:
          input = 0;
      }
      input = this.showMenuOptions();
    }
    alert('Thank you for playing!');
  }
  //method showMenuOptions prompts the player the menu options and takes input from the player
  showMenuOptions() {
    return prompt(`
        Enter 0 to exit
        Enter 1 to play
        `);
  }
  //method create game starts the gameby creating two players with names of player 1 and player 2
  createGame() {
    this.players[0] = new Player('Player 1');
    this.players[1] = new Player('Player 2');
    //we create a new deck and execute the buildDeck method from Deck and add it to a variable called cards
    const cards = new Deck().buildDeck();
    //we spread have of the cards to player index 0 and the other half to player index 1
    this.players[0].deck = [...cards.slice(0, 26)];
    this.players[1].deck = [...cards.slice(26, 52)];
    //long 'Dealing hands' to the console
    console.log('Dealing hands');
    //we use a for loop to iterate through each hand of cards and use and if statement to determine which card has the highest value from player index 0 and player index 1 and log to the console the winner of each hand interation and add a point for the winner to their score
    for (let i = 0; i < this.players[0].deck.length; i++) {
      if (this.players[0].deck[i].value > this.players[1].deck[i].value) {
        this.players[0].playerScore += 1;
        let winningHand = `${this.players[0].deck[i].rank} of ${this.players[0].deck[i].suit}`;
        console.log(`Player 1 wins with a ${winningHand}`);
      } else {
        this.players[1].playerScore += 1;
        let winningHand = `${this.players[1].deck[i].rank} of ${this.players[1].deck[i].suit}`;
        console.log(`Player 2 wins with a ${winningHand}`);
      }
    }
    //we log to the console 'Hands Finished'
    console.log('Hands finished');
    //when the loop completes we use an if statement to determine which player has the most points and log to the console the winner. We use else in case there is a tie.
    if (this.players[0].playerScore > this.players[1].playerScore) {
      console.log(
        `${this.players[0].playerName.toUpperCase()} won with a score of ${
          this.players[0].playerScore
        }`
      );
    } else if (this.players[1].playerScore > this.players[0].playerScore) {
      console.log(
        `${this.players[1].playerName.toUpperCase()} won with a score of ${
          this.players[1].playerScore
        }`
      );
    } else {
      console.log('IT IS A TIE!');
    }
  }
}
//create a new game and add it to a variable called newGame
let newGame = new Game();
//use variable newGame to execute the start method from the Game class
newGame.start();
