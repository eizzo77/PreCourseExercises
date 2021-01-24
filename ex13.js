var readlineSync = require('readline-sync');
var str = readlineSync.question("Please type a String: ");
console.log(str.match(/\b[^\d\W]+\b/g).sort(function(a,b) {
    return b.length - a.length;
})[0]); // Hello dear Bootcamper = > Bootcamper
        //  hello dear Bootcamper IUTRI24121 @$!@GTRTRTR = > Boocamper