var readlineSync = require('readline-sync');
var userName = readlineSync.question('What\'s your name? ');
console.log('Hello ' + userName + '!');