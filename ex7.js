var readlineSync = require('readline-sync');
var chosenNum = readlineSync.questionInt("please choose a positive number: ");
while (chosenNum <= 0)
{
    chosenNum = readlineSync.questionInt("Please choose a POSITIVE number: ")
}
var fact = 1;
for (let i = 2; i <= chosenNum; ++i)
{
    fact *= i;
}
console.log(fact);