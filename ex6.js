var readlineSync = require('readline-sync');
var chosenNum = readlineSync.questionInt("please choose a number larger than 10 ");
while (chosenNum <= 10)
{
    chosenNum = readlineSync.questionInt("please choose a number LARGER than 10 ");
}
console.log("thanks");