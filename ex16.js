console.log(reverseArray([1,2,3,4,5])); // => [ 5, 4, 3, 2, 1 ]
console.log(reverseArray([1,2,1,2,1,2])); // => [ 2, 1, 2, 1, 2, 1 ]  
console.log(reverseArray([-1,20,311,45050,-555])); // => [ -555, 45050, 311, 20, -1 ]
function reverseArray(array) {
    return array.reverse();    
}