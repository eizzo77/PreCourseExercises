var readlineSync = require('readline-sync');
var str = readlineSync.question("Please type a String: ");
console.log(str.replace(/ /g,'*'));