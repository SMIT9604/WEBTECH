console.log("Data Objects")

//! Date Of Object:

//*  Date Object is a inbuild object in JS.
//*  Date is used to handle and manipulate the date in JS.

//? Syntax:
let todayDate = new Date();
console.log(todayDate);
 
//! Data Methods : (To access the date)
//? 1. getFullYear():
console.log(todayDate.getFullYear())

//? 2. getDay():
console.log(todayDate.getDay())

//? 3. getDate():
console.log(todayDate.getDate())

//? 4. getHours():
console.log(todayDate.getHours())

//? 5. getMinutes():
console.log(todayDate.getMinutes())

//? 6. getSeconds():
console.log(todayDate.getSeconds())

//? 7. getMilliseconds():
console.log(todayDate.getMilliseconds())


//! Formatting the Date 

let currentDate = new Date();
console.log(currentDate)

let date = currentDate.getDate();
let month = String(currentDate.getMonth()+1).padStart(2, "0");
let year = currentDate.getFullYear();

let formattedDate = `${date}-${month}-${year}`
console.log(formattedDate)

//! Setting the Date:
let myDate = new Date();

//? Setting the year :
myDate.setFullYear("2027")
myDate.setDate("9")
myDate.setMonth("5")

console.log(myDate)

//? Shortcut :

let demoDate = new Date("2027","5","3","12","32","24","789")
console.log(demoDate)