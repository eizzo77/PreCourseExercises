// libs added
var figlet = require('figlet');
var readlineSync = require('readline-sync');

const words = ["WonderLand","AbraCadabra",'Encyclopedia','BootCamper','zomBie','microwave','Godzilla','Sphinx','oxygen','Whisky'];
var regex = new RegExp('[a-zA-Z]','gi'); // regex which will be used dynamically during run time. will be updated with user's letters given.
var attemptsLeft = 10;
var chosenLetters = '[^]'; // the letters will be added to this string
var chosenWord = ''; // in case the user chooses to try with a whole word. the word goes to this string.
let wordToGuess = words[Math.floor(Math.random() * words.length)]; // randomizes the word to guess from the array above.
let currentString = wordToGuess.replace(regex,'*'); // the word to guess, how it'll be displayed during run time. for now: * for any letter.
let isWin = false; // setting boolean which decides if user wins. false for now.
// setting the logo
function printLogo(logo) {
    console.log(figlet.textSync(logo, {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 90,
            whitespaceBreak: false
        }))};

printLogo("HANG MAN")
while (attemptsLeft > 0 && isWin === false ) { // while user's still gotten attempts and hasn't guessed the word.
    console.log(currentString);
    let userInput = readlineSync.question("please choose a Letter / a word <" + attemptsLeft + " Left>: ",{limit: /^[A-Za-z]+$/gi}); // limiting the user input with a regex. so only letters \ words can be input, global, non case sensitive.
    if (userInput.length === 1) { // checking if the input is a letter
        chosenLetters = chosenLetters.replace(']',userInput); // replacing the char ']' in this string with the letter input, making it looks like [^a, for example letter a.
        chosenLetters += ']'; // adding back the char ']' to close the expression. so can be used as a regex.
        regex = new RegExp(chosenLetters,'gi'); // setting the regex to a new Regex, adding the string with the updated input letters, gi for global and non-case sensitive
        currentString = wordToGuess.replace(regex,'*'); // updating the string displayed to user, in case the new letter has been found in the word to guess.
    } else { // in case user chose to type a word. 
        chosenWord = userInput; // chosenWord gets the input from the user.
    }
    if (currentString === wordToGuess || chosenWord.toLowerCase() === wordToGuess.toLowerCase()) { // we check whether the currentString equals to the word to guess, which means no * has left in it. 
        isWin = true;                                                                              // or, if user inputs word this round. checks if the word equals the word to guess.
    }
    --attemptsLeft;
}
if (isWin) { // we check whether the user has won or hasn't.
    console.log("Great! You guessed the WoRd " + wordToGuess + "! The Medal Truck is on the way ;D");
} else {
    console.log("FAiled to guess the word! try better next time!");
}