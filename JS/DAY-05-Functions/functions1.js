//! Functions :
//* The Function is a block of code which is used to perform some specific task.

//? : function identifier () {//code}
// Here identifier -> function-name

//! Types of Function :

//! Non-Parameterized Function:
function greetUser() {
    console.log("Hello, User");
}
greetUser();

//~ The function call statement is responsible to call or invoke the function execution.
//~ In simple terms FCS is a combination of function namw with empty () 

//! Parameterized Function
//todo What is Parameters?
//* Parameters is temporary variable which is declared inside the function definition.

//todo What is arguments?
//*Arguments are the actual values which is passed inside the function call statement.

function greetPerson(name,name2){
    console.log(`Greetings from ${name} and ${name2}`);
}
greetPerson("Smit","Meet")