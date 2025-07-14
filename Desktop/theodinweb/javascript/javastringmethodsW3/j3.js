//A string is converted to upper case with: toUpperCase()
//A --------------------to lower case with: toLowerCase()

//toUpperCase()
let text1 = "Hello, World";
let text2 = text1.toUpperCase();
console.log(text2); //HELLO, WORLD

//toLowerCase()
let text3 = "Hello, World";
let text4 = text3.toLowerCase();
console.log(text4); //hello, world



//Javascript string concat()
//concat() joins two or more strings:

let text5 = "Hello";
let text6 = ", World";
let text7 = text5.concat("", text6);
console.log(text7); //Hello, World

//concat() can be used instead of the plus operator.
/* text = "Hello" + ", " + "World";
   text = "Hello".concat("", ", World");
*/


//javascript string trim()
//the trim() method removes whitespaces from both sids of a string
let text8 = "       Hello, world!      ";
let text9 = text8.trim();
console.log(text9); //Hello, World!

//trimstart()
 let text10 = "       Hello, world!      ";
 let text11 = text10.trimStart(); //removes whitespace only from the start
 let text12 = text10.length;
 let text13 = text11.length;
 console.log(text12); //26
 console.log(text13); //19

 //trimEnd()
 let text14 = "       Hello, world!      ";
 let text15 = text14.trimEnd(); //remove whitespaces only from the end
 let text16 = text14.length;
 let text17 = text15.length;
 console.log(text16); //26
 console.log(text17); //20



 //Javascript string padding

 //padstart()
 let text18 = "5";
 let padded = text18.padStart(4, "$"); //pad a string at start with "$" until it reaches the length 4
 console.log(padded); //$$$5

 //padEnd()
let text19 = "5";
let padded1 = text19.padEnd(4, "$"); //pad a string at end with "$" until it reaches the length 4
console.log(padded1); // 5$$$


//JavaScript string repeat()

let text20 = "Hello, World!"
let result = text20.repeat(2);
console.log(result); //Hello, World!Hello, World!

//Replacing String Content

let text21 = "Please visit Microsoft!";
let newText = text21.replace("Microsoft", "W3Schools");
console.log(newText); //Please visit W3Schools!

//replace() replace only the first match
let text22 = "Please vist Microsoft and Microsoft!";
let newText1 = text22.replace("Microsoft", "W3Schools"); //remember replace() is case sensitive
console.log(newText1); //Please visit W3Schools and Microsoft!

//to replace case insensitive, use a regular expression with an /i flag(insensitve)
let text23 = "Please visit Microsoft!";
let newText2 = text23.replace(/MICROSOFT/i, "W3Schools");
console.log(newText2);

//to replace all matches, use a regular expression with a /g flag(global match)
let text24 =  "Please visit Microsoft and Microsoft";
let newText3 = text24.replace(/Microsoft/g, "W3Schools");

//JavaScript String ReplaceAll()

let paragraph = "I love Cats. Cats are cute. Cats are friendly."
let alter = paragraph.replaceAll("Cats", "Dogs");
console.log(alter); //I love Dogs. Dogs are cute. Dogs are friendly.

//It's recommended to use /g (global flag) with replaceAll() to avoid unwanted errors
let paragraph1 = "I love Cats. Cats are cute. Cats are friendly."
let alter1 = paragraph1.replaceAll(/Cats/g, "Dogs");
console.log(alter1);

//Converting a String to an Array
//split()
//A string can be converted to an array with the split() method

//ex1
let arr = "a, b, c, d, e, f";
const myArray = arr.split(","); //converts arr into an array which are split on commas
console.log(myArray[0]); //displays the 1st array element, which is- a

//ex2
let arr1 = "a b c d e f";
const myArray1 = arr1.split(" "); //split on spaces
console.log(myArray1[1]); //displays the 2nd array element, which is - b

//ex3
let arr2 = "a|b|c|d|e|f";
const myArray2 = arr2.split("|");
console.log(myArray2[2]);