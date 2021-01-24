var readlineSync = require('readline-sync');
var chosenNum = readlineSync.questionInt("please choose a positive number: ");
while (chosenNum <= 0)
{
    chosenNum = readlineSync.questionInt("Please choose a POSITIVE number: ")
}
var randomizedArr = Array.from({length: chosenNum},(x,i) => Math.floor(Math.random() * 50) + 1).sort(
    function(a,b) {
        return b - a;
    }
);
console.log(randomizedArr);
console.log('Max is => ' + randomizedArr[0]);
console.log('Min is => ' + randomizedArr[chosenNum - 1]);
