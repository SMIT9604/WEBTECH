//! What is scope in JS
//? The Scope is a accessbility or visibility of the variable

//! Types of scopes:
//? 1.Global Scope
//? 2.Block Scope
//? 3.Local or Functional Scope
//? 4.Script Scope
//? 5.Module Scope

//! Global Scope

//* We can access the program anywhere in the program

//debugger
//~ The 'debugger' is a keyword in JS
//~ The debugger automatically enables the debugging in JS

var num=10;
console.log("num:" ,num)

//! Block Scope 

//* The vairaible which is declared with let and const has always block scope.
//* That means we can only access it in block itself

//Block

{
    var num3=50;
    var num1=20;
    const num2=30;
    console.log("num1:",num1)
    console.log("num2:",num2)
    console.log("num3:",num3)
}

//! Local or function scope:

//* The varibale which is declared with var,let and const are always local to function.

function localFunc(){
    var a=10;
    let b=20;
    const c=30;
    console.log("a:",a)
    console.log("b:",b)
    console.log("c:",c)
}
localFunc();


//! Script  Scope

let x=100;
const y=100;

console.log("x" ,x)
console.log("y" ,y)