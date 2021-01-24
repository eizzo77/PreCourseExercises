var readlineSync = require('readline-sync');
var str = readlineSync.question("Please type a String: "); // GIRAFFARIG ==> true // GIRAPHA ==> false
console.log(str.split('').reverse().join('') == str);
