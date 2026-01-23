let userInput = prompt("Enter any number between 1 to 10:")
let generatedNum = Math.floor((Math.random()*10)+1)

if (userInput==generatedNum){
console.log("Yay you guessed the number")
}

else{
console.log("Better luck next time")
}
console.log("The number is :",generatedNum)