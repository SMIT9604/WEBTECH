console.log("String in JS");

//! String:
//* String is the collection of characters.
//* String is immutable in nature.

//? How many ways we can create the string:
//* 1. By using single quotes ('')
//* 2. By using double quotes ("")
//* 3. By using String Template Literal (Backticks) (``)

//! We can create a string with the help of String() constructor:

let strObject = new String("Hello");
console.log(strObject);
console.log(typeof strObject);

//! String Properties: length
//* The length property it is used to count the characters present inside the given string.
//? Return Type: number

let str1 = "Hello World!";
console.log(str1.length); // 12

//! String Methods:

//! 1. charAt():
//* Returns the character at the specified index.
//? Syntax: str.charAt()
//? Return Type: Character
let str2 = "JavaScript";
console.log(str2.charAt(4)); // S
console.log(str2.charAt(3)); // a

//! 2. indexOf():
//*
//? Syntax:
//? Return Type:
console.log(str2.indexOf("va"));

//! 3. includes():
//*
//? Syntax:
//? Return Type:
console.log(str2.includes("Script")); // true

//! 4. Slice():
//* It extracts a section of a string and returns it as a new string, without modifying the original string.
//* Syntax: str.slice(startIndex, endIndex)
//* Return Type: string
let str3 = "Hello, welcome to the world of JavaScript.";
let slicedStr = str3.slice(31,-1);
console.log(slicedStr); // welcome

//! 5. substring():
//* It returns the part of the string between the start and end indexes, or to the end of the string.
//* Syntax: str.substring(startIndex, endIndex)
//* Return Type: string
let substr = str3.substring(7, 14);
console.log(substr); // welcome

//! 6. Trim():
//* It removes whitespace from both ends of a string.
//* Syntax: str.trim()
//* Return Type: string
let str4 = "   Hello World!   ";
let trimmedStr = str4.trim();
console.log(trimmedStr); // "Hello World!"

//! 7. trimStart():
//* It removes whitespace from the beginning of a string.
//* Syntax: str.trimStart()
//* Return Type: string
let trimStartStr = str4.trimStart();
console.log(trimStartStr); // "Hello World!   "

//! 8. trimEnd():
//* It removes whitespace from the end of a string.
//* Syntax: str.trimEnd()
//* Return Type: string
let trimEndStr = str4.trimEnd();
console.log(trimEndStr); // "   Hello World!"

//! 9. lastIndexOf():
//* It returns the index of the last occurrence of a specified value in a string.
//* Syntax: str.lastIndexOf(searchValue, fromIndex)
//* Return Type: number
let str5 = "Hello, welcome to the world of JavaScript. JavaScript is fun.";
let lastIndex = str5.lastIndexOf("JavaScript");
console.log(lastIndex); // 43

//! 10. split():
//* It splits a string into an array of substrings based on a specified separator.
//* Syntax: str.split(separator, limit)
//* Return Type: Array
let str6 = "Apple, Banana, Cherry, Date";
let fruitsArray = str6.split(", ");
console.log(fruitsArray); // ["Apple", "Banana", "Cherry", "Date"]

//! 11. toLowerCase():
//* It converts a string to lowercase letters.
//* Syntax: str.toLowerCase()
//* Return Type: string
let upperStr = "HELLO WORLD";
let lowerStr = upperStr.toLowerCase();
console.log(lowerStr); // "hello world" 

//! 12. toUpperCase():
//* It converts a string to uppercase letters.
//* Syntax: str.toUpperCase()
//* Return Type: string
let lowerStr2 = "hello world";
let upperStr2 = lowerStr2.toUpperCase();
console.log(upperStr2); // "HELLO WORLD"

//! 13. concat():
//* It concatenates two or more strings.
//* Syntax: str.concat(string2, string3, ..., stringN)
//* Return Type: string
let greet = "Hello, ";
let name = "Alice";
let fullGreeting = greet.concat(name);
console.log(fullGreeting); // "Hello, Alice"

//! 14. padStart():
//* It pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
//* Syntax: str.padStart(targetLength, padString)       
//* Return Type: string
let str7 = "5";
let paddedStrStart = str7.padStart(3, "0");
console.log(paddedStrStart); // "005"

//! 15. padEnd():
//* It pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
//* Syntax: str.padEnd(targetLength, padString)
//* Return Type: string
let str8 = "5";
let paddedStrEnd = str8.padEnd(3, "0");
console.log(paddedStrEnd); // "500"

//! 16.startsWith():
//* It checks whether a string starts with the characters of a specified string, returning true or false as appropriate.
//* Syntax: str.startsWith(searchString, position)
//* Return Type: boolean
let str9 = "Hello, welcome to JavaScript.";
console.log(str9.startsWith("Hello")); //true
console.log(str9.startsWith("welcome", 15)); //false

//! 17.endsWith():
//* It checks whether a string ends with the characters of a specified string, returning true or false as appropriate.
//* Syntax: str.endsWith(searchString, length)
//* Return Type: boolean
let str10 = "Hello, welcome to JavaScript.";
console.log(str10.endsWith("JavaScript.")); //true
console.log(str10.endsWith("welcome", 14)); //true  

//! 18. repeat():
//* It constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
//* Syntax: str.repeat(count)
//* Return Type: string
let str11 = "Hi! ";
let repeatedStr = str11.repeat(3);
console.log(repeatedStr); // "Hi! Hi! Hi! "

//! 19. replaceall():
//* It returns a new string with all matches of a pattern replaced by a replacement.
//* Syntax: str.replaceAll(searchValue, replaceValue)
//* Return Type: string
let str12 = "The cat sat on the mat and the cat is white in color.";
let newStr = str12.replaceAll("cat", "dog");
console.log(newStr); // The dog sat on the mat and the dog is white in color.
//! 20.replace():
//* It returns a new string with some or all matches of a pattern replaced by a replacement.
//* Syntax: str.replace(searchValue, replaceValue)
//* Return Type: string
let str13 = "The cat sat on the mat the cat is white in color.";
let newStr2 = str13.replace("cat", "dog");
console.log(newStr2); //The dog sat on the mat and the cat is white in color.


//! Create a function 'getFileExtension' that returns the file extension of a given filename.
//* input: resume.pdf
function getFileExtension(filename){
  return filename.slice(filename.lastIndexOf("."))
}
console.log(getFileExtension("resume.pdf"))



//! Create a function getFileName that returns the file name without extension.
//* input: resume.pdf output: resume

function getFileName(filename1){
    return filename1.slice(0,filename1.lastIndexOf("."))
}
console.log(getFileName("resume.pdf"))

//! Create a function 'countCharacters' to count total characters

function countCharacters(name1){
    return name1.length
}
console.log(countCharacters("Smit")
)
//! Create a function 'getUserName' from email

function getUserName(email){
    return email.slice(0,email.lastIndexOf('@'))
}
console.log(getUserName("smit@123")
)
//! Create a function 'maskEmail' to mask email id with padend.

function maskEmail(email){
    let a=email.slice(0,email.lastIndexOf("@"))
    return a.slice(0,2) + a.padEnd(a,'*')
}
console.log(maskEmail("smit@1234"))