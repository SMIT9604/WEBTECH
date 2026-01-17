console.log('Arrays In Javascript')

//! Array:
//* Array is a special type of object in JS.
//* The array is a collection of multiple elements.
//* The array may be homogeneous or heterogeneous.

//? 1. Homogeneous Array:
//* The array which consists of same type of data.
let arrNum = [10,20,30,40]
console.log(arrNum)
console.log(typeof(arrNm))

//? 2. Heterogeneous Array:
//* The array which consists of different datatypes.

let mixedArr = [10,true,"Smit",function(){
    console.log("Function Executed")
},[10,20,40],['Smit','Patel']]

//? Accessing Elements from the array

console.log(mixedArr[0])
console.log(mixedArr[4][1])
console.log(mixedArr[5][0])
mixedArr[3]()

//! Array Properties: Lenght
//?1. Getting the values

let s=[10,20,30,40,50];
console.log(s.length);

//? 2. Setting the values
s.length=3;
console.log(s);

//! Array Methods:(Static Methods)
//? 1.Array.from()
let str='hello';
console.log(Array.from(str))

//? 2.Array.isArray()
console.log(Array.isArray(s))

//? 3.Array.of()
console.log(Array.of(1,2,3,4,5,6))

//! Array Instance Methods:
//? 1. push()
let numArr = [10, 20];
console.log(numArr);
numArr.push(30, 40, 50, 60, 70, 80, 90, 100);
console.log(numArr);

//? 2. pop():
numArr.pop();
console.log(numArr);

//? 3. unshift():
numArr.unshift("hello");
console.log(numArr);

//? 4. shift():
numArr.shift();
numArr.shift();
console.log(numArr);

//? 5. slice(startIndex, endIndex):
console.log(numArr.slice(1, 7));

//? 6. splice(startIndex, deleteCount, [newEle]):
let heros = ["Iron Man", "Hulk", "Thor", "Deadpool", "Blue Bettle", "Wanda"];
console.log(heros);
heros.splice(4, 1, "CA");
console.log(heros);

//? 7. includes():
console.log(heros.includes("Hawkey")); // false
console.log(heros.includes("Thor"));

//? 8. indexOf()
//? 9. concat()
let newarr = ["Dr. Strange"];
console.log(newarr);
let marval = heros.concat(newarr);
// console.log(marval);
console.log(heros.concat(newarr));

//? 11. join()
console.log(heros.join("-"));

//? 12. reverse()
console.log(heros.reverse());

//? 10. flat():
let nestedArr = [10, 20, 30, [40, 50, [60, 70]]];
console.log(nestedArr);
console.log(nestedArr.flat(2));

//? 13. find():
