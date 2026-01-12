//! Types of function in JavaScript


//* 1. Named Function
//* 2. Anonymous Function
//* 3.Function Expression
//* 4. Arrow Function
//* 5. IIFE (Immediately Invoked Function Expression)
//* 6. Callback Function
//* 7. Nestwd Function
//* 8. Generator Function
//* 9. Higher Order Functio(HOF)
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

//~ NOTE: Arrow function dont have their arguments objects.

//! Implicit Return:
//* It means if we have only one statement in the function then we can remove the curly braces and return keyword.

let add1=(num1,num2)=> num1 + num2; 
//Internally it will be like this:
// let add1=(num1,num2)=> {return num1 + num2};
console.log(add1(10,20));

let a,b=(10,20,30);
console.log(a); // undefined
console.log(b); // 30
// Because comma operator returns the last value

//! Explicit Return:
//* If there are multiple statements in the function then we need to use curly braces and return keyword.

// If you are mentioning the return keyword manually then you need to use curly braces.

let expplicitFunc =() =>{
    console.log("First Statement");
    console.log('Second Statement');
    return "Return Statement";
}
console.log(expplicitFunc());

//! 6.Callback Function:
//* A function which is passed as an argument to another function is called callback function.

function orderFood(waiter){
    console.log(`👩‍🍳:Sir What you want
        1. Pizza
        2. Burger
        3. Pasta`);
    waiter();
}
orderFood(serveFood);
orderFood(reviewFood);

function serveFood(){
    console.log("👨‍🍳:Sir I will serve you the food");
}

function reviewFood(){
    console.log("Food was delicious");
}

document.getElementById("serve").addEventListener("click", function() {
    orderFood(serveFood);
});

document.getElementById("review").addEventListener("click", function() {
    orderFood(reviewFood);
});

function sir (studentName,callback){
    console.log("Sir,is checking papers");

setTimeout(()=>{
    console.log('Papers are checked');
    console.log(`Result for ${studentName}:`);
    callback()
},3000);
}

//~CallBack Function
function result(){
console.log("PASS✅")
}

sir("Smit",result)

function demo(){
console.log("Hello World")
}
demo()
//todo 2nd Way
//? Directly mention the callback function inside the main fucntion

//! 7. Higher Order Function

//*A function which will accept another fucntion as an argument or it will return another function is called as Higher Order Function.

function calculate(num1,num2,operation){
    return operation(num1,num2);
}

function add2(num1,num2){
    return num1 + num2;
}
console.log(calculate(10,20,add));

//! 8. Nested Function

//* the function which is presenet inside another function is called a nested function

function outer(){
    console.log("This is outer function")

    function inner(){
        console.log('This is inner function')
    }
    inner()
}
outer()

//! 9. Generator Function

//* The generator function is a special type of fucntion which will pause and resume its execution

//? yield -> pause the execution
//? .next-> resume the execution and again pause it

function* netflixSeries(){
    yield "Episode 1"
    yield "Episode 2"
    yield "Episode 3"
}

let episode=netflixSeries();
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());
console.log(episode.next());




