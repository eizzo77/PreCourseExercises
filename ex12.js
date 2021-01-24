var readlineSync = require('readline-sync');
var str = readlineSync.question("Please type a String: ");
console.log(str.replace(/a|e|i|o|u|y| /g,x => x.toUpperCase()));