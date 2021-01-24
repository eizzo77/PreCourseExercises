console.log(combineArray(["Whats"],["Up","Doc?"])); // [ 'Whats', 'Up', 'Doc?' ]
console.log(combineArray(['Hi','My','Name'],['Is','What'])); //  'Hi', 'My', 'Name', 'Is', 'What' ]
console.log(combineArray([],'ok')); // [ 'ok' ]
var arr1 = combineArray(["Hello"],["Appleseeds","Bootcamp"]);
var arr = ['A']; var arrr = ['B','C'];
var arr2 = joinArrays(arr,arrr);
console.log(arr1);
console.log(arr1.join(' '));
console.log(arr2);
arr2.forEach( (a,i) => {console.log("index #" + i + "=>" + a)});
 
function combineArray(arr1,arr2) {
    return arr1.concat(arr2);
}
// E6 solution
function joinArrays(arr1,arr2) {
    return [...arr1,...arr2];
}