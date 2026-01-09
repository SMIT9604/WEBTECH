//! Types of function in JavaScript


//* 1. Named Function
//* 2. Anonymous Function
//* 3.Function Expression
//* 4. Arrow Function
//* 5. IIFE (Immediately Invoked Function Expression)
//* 6. Callback Function
//* 7. Recursive Function
//* 8. Generator Function
//* 9. Async Function
//* 10. Constructor Function
//* 11. Function Currying

//! 1. Named Function:
//* The function which is defined with identifier (name) is called named function.

function weekendParty(){
    console.log("Let's party on weekend");
}
weekendParty();

//! 2. Anonymous Function:
//* The function which is defined without identifier (name) is called anonymous function.

//! 1st way :
//? Store the anonymous function inside the variable and then call the function using variable name.

let mrHashmi= function(){
    console.log("Mr.X");
};
mrHashmi();

//! 3. Function Expression:
//* The function which is assigned to a variable as a expression  is called function expression.

//! 2nd way to call anonymous function:
//? Wrap the entire anonymous function inside the empty() and call the empty() inside the outer () or just after the function block.

(function(){
    console.log("Anonymous Function called using IIFE");
}());

//! arguments object in function:
//* The arguments object is used to store all the values which are passed inside the function call statement as actual values.

function getNumbers( num1,num2,num3){
    console.log(arguments);


let argumentsObject=arguments;
console.log(Array.isArray(argumentsObject)); // false
console.log(typeof argumentsObject); // object
}
getNumbers(10,20,30);

//! 4. IIFE (Immediately Invoked Function Expression):
//* The function which is defined and called at the same time is called IIFE.

(function(){
    console.log("IIFE function called");
})();

//! 5. Arrow Function:
//* Syntax--() => {}

//* The Arrow function is shorthand syntax to create function in JS.
//* Arrow function is introduced in ES6 concepts which was released in 2015.

let add =(num1,num2) => {
    console.log(num1 + num2);
    return num1 + num2 ;
};
console.log(add)
add(10,20)
console.log(add(30,50));


