//string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length); //26

/*
Extracting String Characters

There are 4 methods for extracting string characters:

1. The at(position) Method
2. The charAt(position) Method
3. The charCodeAt(position) Method
4. Using property access [] like in arrays
*/

//Javascript string charAt()

let text1 = "Hello World";
let char = text1.charAt(0); //charAt() method returns the character at a specified index(position) in a string
console.log(char); //In java index(position) start from 0 to nth string

//javaScript string charCodeAt()
//The charCodeAt() method returns the code of the character at a specified index in a string
//The method returns a UTF-16 code (an integer between 0 and 65535)

let text2 = "Hello World";
let char1 = text2.charCodeAt(0); //to put it simply, it give us the ASCI code of the designated character
console.log(char1);

//javaScript codePointAt()

let text3 = "Hello World";
let code = text.codePointAt(0); //get code point value at the first positon in a string
console.log(code);

//JavaScript string at()
//ES2022 introduced the string method at()

const name ="W3Schools";
let letter = name.at(1); //get the second letter of name //The at() method is supported in all modern browsers since March 2022:
console.log(letter); //3 //The at() method returns the character at a specified index (position) in a string.

/*Note
The at() method is a new addition to JavaScript.
It allows the use of negative indexes while charAt() do not.
Now you can use myString.at(-2) instead of charAt(myString.length-2).
*/

//JavaScript 2022 is supported in all modern browsers since March 2023

//property Access []

let text4 = "Hello World";
let char2 = text4[0];
console.log(char2);

/*Note
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
*/
//for example
let text5 = "Hello World";
text5[0] = "A";
console.log(text5); //Gives no error, but does not work
