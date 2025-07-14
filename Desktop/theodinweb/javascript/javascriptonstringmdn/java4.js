//while concatenating string and number, the browser converts the number as a string, concatenating two strings

const name = "Front ";
const number = 242;
console.log(name+number); // Front 242

//you can convert a number into a string and a string into a number

const myString = "123"; //by quoting numbers, converts it into a string
const myNum = Number(myString); //using Number(variable), converst the string into a number
console.log(typeof myNum); //number //typeof operator displays the type of a variable

//coversely or on the otherhand
const myNum2 = 123;
const myString2 = String(myNum2); //String() converts numbers into a string
console.log(typeof myString2);