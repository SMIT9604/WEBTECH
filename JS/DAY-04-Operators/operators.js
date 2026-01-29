//! What is Operators?
//* Operators are used to perform a opeartions on operands.

//! Q. What is the difference between == and ===?

let num1 = 10;
let num2 = "10";

//*Here, == will only checks the value not the datatypes.
console.log(num1 == num2); //True

//*Here, === will check both value as well as datatypes.
console.log(num1 === num2); //False

//! String Concatenation Operator (+)
let firstName = "Smit "
let middleName = "Mehulbhai  "
let lastName = "Patel"

let fullName = firstName + middleName + lastName
console.log(fullName)

//! Ternary Operator
let statusCode = 200;

let result = statusCode === 200 ? "OK" : "NOT OK";
console.log(result);

console.log(null + 10);
console.log(null + undefined);
console.log(null + "hello");

//! Nullish Coleasing Operator (??)
//*The Nullish Coleasing operator is used to provide the default value only when the value is null or undefined

//* It is represented by the ??

//* If the value is valid output then value will not be executed

let age=0;
let str='';
let statue=false;
let userAge = age ?? "User value is false"
console.log(userAge)

function greetUser(userName){
    let greeting = userName ?? "Hello Guest";
    console.log(`Hello from ${greeting}`);
}
greetUser('Smit')