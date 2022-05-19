/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let array1 = [1,2,3];
let array2 = array1; 
array2.push(4);
console.log ("second array:", array2)
console.log ("first array:", array1)
// Copying an array
let array3 = [4,5,6];
let array4 = [... array3];

array4.push(7)
console.log ("third array:", array3)
console.log ("fourth array:", array4)
// Copying an object
let obj1 = {a:1,b:2,c:3}
let obj2 = {...obj1, d:4}
let obj3 = {...obj1, b:5}
console.log ("first object:", obj1)
console.log ("second object:", obj2)
console.log ("third object:", obj3)
// Copying only part of an array/object
let arr5 = [...array1, {...obj1},...array3, "x", "y", "z"];
console.log(arr5)