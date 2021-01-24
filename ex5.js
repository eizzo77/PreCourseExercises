//using Array.from - Creating an array of 50 elements only instead of 100 and iterate through all. faster but a bit more costly
console.log(Array.from({length: 50}, (x,i) => (i * 2) + 1));

// using Array.from & filter - least ideal option 
console.log(Array.from({length: 100}, (x,i) => i).filter(j => j % 2));

//using the old fashion way 
for (let i = 0; i < 50; i++)
{
    console.log((i * 2) + 1);
}