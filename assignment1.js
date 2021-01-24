const elevatorMusicScore = 1;
const electronicMusicScore = 2;
const rockNRollScore = 3;
const hipHopScore = 4;
var figlet = require('figlet');
var readlineSync = require('readline-sync');

const quizObjects = [
    {
        question : "What Instrument would you like to learn to play the most?",
        answers : ["turntable","Guitar","Synthesizer","Saxophone"],
        points : [hipHopScore,rockNRollScore,electronicMusicScore,elevatorMusicScore]}
        ,
    {   question : "Where would you like to hang out?",
        answers : ["Barbi Club","Poerty Slam Session","Desert Festival","Library"],
        points : [rockNRollScore,hipHopScore,electronicMusicScore,elevatorMusicScore]}
        ,
    {   question : "Your'e in a music Concert. What's the one thing that makes you vibe the most?",
        answers : ["vibe?","Drops & Hafirot","Screams & Broken guitars","Hard bass & hard Bars"],
        points : [elevatorMusicScore,electronicMusicScore,rockNRollScore,hipHopScore]
    }
        ,
    {   question : "where do you like to listen to music the most?",
        answers : ["with my band in the Garage","not a particular place","Desert, The woods","with my friends in the hood"],
        points : [rockNRollScore,elevatorMusicScore,electronicMusicScore,hipHopScore]
    }
        ,
    {   question : "how does the music you listen to makes you feel the most?",
        answers : ["Aggressive or uplifted","Angry","Brain full of Dopamine","calm"],
        points : [hipHopScore,rockNRollScore,electronicMusicScore,elevatorMusicScore]
    }
        ,
    {   question : "Where your favorite music can be playing the most?",
        answers : ["when I hotel checking in","like every second club in TLV","In Da club","Echo 99FM"],
        points : [elevatorMusicScore,electronicMusicScore,hipHopScore,rockNRollScore]
    }
        ,
    {   question : "What your favorite music made you do / thinking about doing when you were younger?",
        answers : ["Making a band","DJing lessons twice a week","I took a brass lesson or two","writing the hardest wordplays ever"],
        points : [rockNRollScore,electronicMusicScore,elevatorMusicScore,hipHopScore]
    }
        ,
    {   question : "Your'e going to a show of your favorite musician, where would it be?",
        answers : ["United States","Israel, USA, Germany if I feel hardcore","Europe, Nevada, Negev Desert","I don't have any favorite musician"],
        points : [hipHopScore,rockNRollScore,electronicMusicScore,elevatorMusicScore]
    }
        ,
    {   question : "imagine a World without streaming platforms and innovative speakers, with what Device would you listen to your music?",
        answers : ["Controllers & Cassettes","Live of course","I still listen to music with my phonograph","BoomBox",],
        points : [electronicMusicScore,rockNRollScore,elevatorMusicScore,hipHopScore]
    }
        ,
    {   question: "How explicit the songs off your favorite music?",
        answers : ["There's a curse or two in a song","words?;O","my Speaker throws some clean words from time to time...","explicit songs? is this really a thing?"],
        points : [rockNRollScore,electronicMusicScore,hipHopScore,elevatorMusicScore]
    }
];

// looping throght the array of questions objs. displaying both the questions for each i and the answers.
// summing the given value to score var. 
var score = 0;
printLogo("What's Your Favorite Music Genre Quiz")
for (let i = 0; i <quizObjects.length; ++i) {
    var chosenIndex = readlineSync.keyInSelect(quizObjects[i].answers,quizObjects[i].question, {cancel: false});
    if (chosenIndex >= 0) {
        score += quizObjects[i].points[chosenIndex];
    }
};
console.log("---------------------------------------------")
console.log("your Favorite Music is: " + getFavMusicGenre(score));

// this function returns the fav genre based on the final score.
function getFavMusicGenre(number) {
    let str = "";
    if (number < 14) {
        str =  "Elevator Music";
    } else if (number < 24) {
        str =  "Electronic Music";
    } else if (number < 34) {
        str = "RockNRoll Music";
    } else {
        str = "Hip Hop Music";
    }

    return str;
};

function printLogo(logo) {
    console.log(figlet.textSync(logo, {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 100,
            whitespaceBreak: false
        }))};