//? Array Iteration Methods:
//* Array iteration methods are also known as advanced array method for modern JS as well as React JS.
//* Array iteration methods are used to loop through automatically on an array and perform some operations for each and every element.

let numbers = [1,2,3,4,5]

//! Map()
//* The map() is used to iterate on an array and it transform each and evry element in an array.
//* It will create a new array instead of modifying the original array
//? Syntax:arr.map((cValue,cIndex,cArray)=>{])
    
let squarredNumber = numbers.map((cValues,cIndex,cArray)=>{
   //onsole.log(cValues,cIndex);
    return cValues*cValues
})
console.log(squarredNumber)

//! this Arg:
//* thisArg will refers to the external object.

//! Filter():











