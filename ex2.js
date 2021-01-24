var readlineSync = require('readline-sync');
const sizeOfInputs = 2;
var numsArr = [];
while (numsArr.length < sizeOfInputs) {                                 // regex's limiting the user input to only nunombers. both positive or negative.
    numsArr.push(readlineSync.question('please pick a Number: ',{limit: /^[-]?[\d]+$/g})); // basically this command alone returns the updated length of the array
                                                                                           // but i used the old fasion way for a better readability 
};  
console.log(Number(numsArr[0]) + Number(numsArr[1]) === 10? "make 10" : "nope");

