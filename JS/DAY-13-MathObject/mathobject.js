//! Math Object:
//* The match object is used to perform mathematical operations such as generating the random number, rounding off values, for trignometric functions , etc.

//* Without creating the math object , we can use the math properties and methods.

//! Math object Properties:

//? 1. Math.PI:
console.log(Math.PI)

//? 2. Math.E: (E stands for here Euler constant)
console.log(Math.E);

//! Math methods:

//? 1. Math.round():
console.log(Math.round(4.67)) //5
console.log(Math.round(4.34)) //4

//? 2. Math.floor()
console.log(Math.floor(5.9)) //5
console.log(Math.floor(5.1)) //5

//? 3. Math.ceil()
console.log(Math.ceil(6.9)) //7
console.log(Math.ceil(6.1)) //7

//? 4. Math.sqrt()
console.log(Math.sqrt(16)) //4

//? 5. Math.cbrt()
console.log(Math.cbrt(27)) //3

//? 6. Math.min()
console.log(Math.min(12,14,67,43,89,43,23,78))

//? 7. Math.max()
console.log(Math.max(12,14,67,43,89,43,23,78))

//? 8. Math.pow(base, exponent)
console.log(Math.pow(5,2)) // 25

//? 9. Math.abs()
console.log(Math.abs(10)) //10
console.log(Math.abs(-10)) //10

//? 10. Math.random()
//* Math.random() will generate the random numbers in between 0 (included) and 1 (excluded).

//todo  eg 0.000 - 0.999

console.log(Math.random());

//! Generate 4 digit OTP:
function generateOTP(){
    let otp= Math.floor(Math.random()*9000+1000);
    console.log("oTP:",otp);
    document.getElementById("otpDisplay").innerHTML = "OTP: " + otp;
}
document.getElementById("btn").addEventListener("click",generateOTP)
