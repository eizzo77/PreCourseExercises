var readlineSync = require('readline-sync');
var chosenNum = readlineSync.questionInt("please choose a positive number: ");
while (chosenNum <= 0)
{
    chosenNum = readlineSync.questionInt("Please choose a POSITIVE number: ")
}
console.log(Array.from({length : chosenNum}, (x,i) => i + 1).filter(number => printPrime(number)));

// its enough to check till the squre root of the number 
function printPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); ++i) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
};