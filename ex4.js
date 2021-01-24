// note - I made it so there is no way to enter any invalid input so I avoided the special task for this assignment. if it's not ok
// please let me know and I'll fix.
var readlineSync = require('readline-sync');
var restaurants = ['The Vitrina','Tony-Vespa','Japanica','Rustico','Arusa'];
var numOfPeople = readlineSync.question('how many people are you going with? '); 
if (numOfPeople.match(/[^\d]/gi) != null) {
    console.log("invalid input. Exiting...");
    throw "stop execution";
}
if (numOfPeople > 4)
{
    restaurants[0] = 'America Burger';
}
var isKosher = readlineSync.keyInYNStrict('Should it be Kosher?');
if (isKosher == true)
{
    restaurants[0] = 'Magic burger';
    restaurants[1] = 'Donatello';
    restaurants[3] = 'Penkina';
    var isMehadrin = readlineSync.keyInYNStrict('Should it be Kashrut Lemahadrin?');
    if (isMehadrin == true)
    {
        restaurants[0] = 'Burgerim';
        restaurants[1] = 'Pizza Agvania';
        restaurants[3] = 'Regina';
        restaurants[4] = 'Lehem Basar';
    }
}

var foodKindChosen = readlineSync.keyInSelect(['Hamburger','Pizza','Asian','Italiano','Israeli Food'],'What kind of food do you want?',{cancel:false});
console.log('You should go to ' + "'" + restaurants[foodKindChosen] + "'");
