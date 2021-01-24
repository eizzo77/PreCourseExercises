var readlineSync = require('readline-sync');
numbers = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
var chosenNum = readlineSync.question("Please pick a number between 0-9: ");
if (parseInt(chosenNum) >=0 && parseInt(chosenNum) <10) 
{
    console.log(numbers[chosenNum]);
}
else
{
    console.log('the number you have picked is not between 0-9');
}