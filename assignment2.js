// libs added
var figlet = require('figlet');
var readlineSync = require('readline-sync');
cardSuits = ['♥','♣','♠','♦']; // array of suits
var gameRunning = true; // game loop

// an object represents the game mechanics and interface
let gameInterface = {
        printLogo: function(logo) {
                console.log(figlet.textSync(logo, {
                        font: 'Standard',
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                        width: 90,
                        whitespaceBreak: false
                    }));
        },
        askUserMultiplyChoices: function(question,answers) {
                return readlineSync.keyInSelect(answers,question,{cancel:false});
        },
        askUserName: function(user) {
               return readlineSync.question(user + " - " + "Please enter your Name: ");
        },
        placeABet: function(player) {       
                player.bet = gameInterface.askUserBet("Place your bet for the next Round: 1 - " + player.amount +  ": ");
        },
        randomizeABet: function(player) {
                player.bet = Math.floor(Math.random() * player.amount) + 1;
        },
        printMessageToUser: function(message) {
                console.log(message);
        },
        askUserBet: function(message) {
                let bet = readlineSync.questionInt(message);
                while (bet <= 0) {
                        console.log("Please type a legit natural Number...");
                        bet = readlineSync.questionInt(message);        
                }
                return bet;
        },
        isAFairBet: function(bet,playerAmount) {
                if (bet > playerAmount) {
                        return false;
                } else {
                        return true;
                }
        },
        generatePlayerCard: function(card) {
                card.number = Math.floor(Math.random() * 12) + 1; 
                card.suit = cardSuits[Math.floor(Math.random() * 4)];
        },
        rewardTheWinner: function(firstPlayer,secondPlayer) {
                if (firstPlayer.card.number > secondPlayer.card.number) {
                        firstPlayer.amount += firstPlayer.bet;
                        secondPlayer.amount -= secondPlayer.bet;
                        console.log(firstPlayer.name + " has won " + firstPlayer.bet + " and now have " + firstPlayer.amount);
                        console.log(secondPlayer.name + " has lost and now have " + secondPlayer.amount);
                } else if (secondPlayer.card.number > firstPlayer.card.number) {
                        secondPlayer.amount += secondPlayer.bet;
                        firstPlayer.amount -= firstPlayer.bet;
                        console.log(secondPlayer.name + " has won " + secondPlayer.bet + " and now have " + secondPlayer.amount);
                        console.log(firstPlayer.name + " has lost and now have " + firstPlayer.amount);
                } else {
                        console.log("Both cards have the same number! regenerating again...")
                }
                
        },
        printCard: function(card,playerName) {
                let cardNumber = card.number.toString().length === 1 ? card.number.toString() + " " : card.number;
                console.log(playerName +':\n' +
                        ' ___________\n'
                +  '|' + cardNumber +'         |\n'
                +  '|' + card.suit +'          |\n'
                +  '|           |\n'
                +  '|           |\n'
                +  '|          ' + card.suit + '|\n'
                +  '|         '+ cardNumber +'|\n'
                +  '|___________|\n');
        },
        askPlayerYesNoQuestion: function(msg) {
                return readlineSync.keyInYNStrict(msg);
        }
};

var Player = function(_name,_card) {
        this.name = _name;
        this.amount = 50;
        this.card = _card;
        this.bet;
}; 

var Card = function() {
        this.number;
        this.suit;
};

// game is built so that if the user selects to play against COMP, COMP is considered as Player 2. COMP's bets are regenerated randomly.
gameInterface.printLogo("~~~ Game of WAR ~~~");
gameInterface.isPvp = gameInterface.askUserMultiplyChoices("please choose the game Mode: ",["Play Vs COMP","Play Vs another Player"]);
let firstPlayerName = gameInterface.askUserName("Player1");
let player1 = new Player(firstPlayerName, new Card());
let secondPlayerName = 'COMP';
if (gameInterface.isPvp) {
        secondPlayerName = gameInterface.askUserName("Player2");
}
let player2 = new Player(secondPlayerName, new Card());
while (gameRunning) {
        gameInterface.printMessageToUser("Hello " + player1.name + "! you currently have " + player1.amount + " ILS");
        gameInterface.placeABet(player1);
        if (gameInterface.isPvp) {
                gameInterface.printMessageToUser("Hello " + player2.name + "! you currently have " + player2.amount + " ILS");
                gameInterface.placeABet(player2);
        } else {
                gameInterface.randomizeABet(player2);
        }
        // checking for a fair bet for each Player.
        if (!gameInterface.isAFairBet(player1.bet,player1.amount)) {
                gameInterface.printMessageToUser(player1.name + "! you wish you had! Not cool... I'm out!");
                gameRunning = false;
        } else if (!gameInterface.isAFairBet(player2.bet,player2.amount)) {
                gameInterface.printMessageToUser(player2.name + "! you wish you had! Not cool... I'm out!");
                gameRunning = false;
        } else {
                do {
                        gameInterface.generatePlayerCard(player1.card);
                        gameInterface.printCard(player1.card,player1.name);
                        gameInterface.printMessageToUser("   ~~VS~~");
                        gameInterface.generatePlayerCard(player2.card);
                        gameInterface.printCard(player2.card,player2.name);
                        gameInterface.printMessageToUser(player1.name + "'s bet is " + player1.bet);
                        gameInterface.printMessageToUser(player2.name + "'s bet is " + player2.bet);
                        gameInterface.rewardTheWinner(player1,player2); // checking which card is higher and rewarding the winner of the round.
                } while (player1.card.number === player2.card.number); // dealing with cards having the same number.
                // checking whether one of the players is broke after this round. if yes - breaks the game loop.
                if (player1.amount === 0) {
                        gameInterface.printMessageToUser(player1.name + " is broke and can't play no more. " + player2.name + " wins!");
                        gameRunning = false;
                } else if (player2.amount === 0) {
                        gameInterface.printMessageToUser(player2.name + " is broke and can't play no more. " + player1.name + " wins!");
                        gameRunning = false;
                // asking for another round. if Yes - ignoring this 'if' statement. if No - printing and breaking the loop.
                } else if (!gameInterface.askPlayerYesNoQuestion("Play another Round?")) {
                        gameRunning = false;
                        gameInterface.printMessageToUser("Game over! " + player1.name + "'s going home with " + player1.amount + " ILS")
                        gameInterface.printMessageToUser(player2.name + "'s going home with " + player2.amount + " ILS");
                };
        } ;  
};
