//Extracting String Parts
//There are three methods for extracting a part of a string:
//1. slice(start, end)
//2. substring(start, end)
//3. substr(start, Length)



//1. slice()
let text = "Apple, Banana, Kiwi"; //slice() extracts a part of a string and returns the extracted part in a new string
let part = text.slice(7, 13); //the method takes 2 parameters: start positon, and end position(end not included)
console.log(part); //Banana

//if you omit the second parameter, the method will slice out the rest of the string
let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(7);
console.log(part1); //Banana, Kiwi

//if a parameter is negative, the position is counted from the end of the string:
let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(-12);
console.log(part2); //Banana, Kiwi

//this example slices out a portion of a string from position -12 to position -6:
let text3 = "Apple, Banana, Kiwi";
let part3 = text3.slice(-12, -6);
console.log(part3); //Banana



//2. substring()
//the difference is that start and end values less than 0 are treated as 0 in substring()
let str = "Apple, Banana, Kiwi";
let part4 = str.substring(7, 13);
console.log(part4); //Banana

//3. substr()
// the differnce is that the second parameter specifies the length of the extracted part.
//the substr() method is removed in the latest javascript standard.
//use substring() or slice() instead