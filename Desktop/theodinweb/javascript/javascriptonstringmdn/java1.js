//declaring strings
const single = 'Single quotes';
console.log(single); //Single quotes

//or 
const double = "Double quotes"; //use the same quote for start and end, single with single quotes, double with double, backtick with backtick.
console.log(double); //Double quotes

//or
const backtick = `Backtick`; //backticks are special, called- template literal
console.log(backtick);  //1. you can embed javascript in them. 2. you can declare template literals over- multiple lines.
//Backtick

//but declaring a string without a quote will result in an error
/* for example

const badstring1 = This is a test;
const badstring2 = 'This is a test; //undetermined string literal
const badstring3 = This is a test';
console.log(badstring1);
console.log(badstring2);
console.log(badstring3);

will show error*/

//however this will work if you define the veriable as a string
//not recommended



//embedding javascirpt- 

// you can wrap js variables or expression inside template literal(``) inside ${}.

const name = "Shohan";
const greeting = `Hello, ${name}`;
console.log(greeting); //Hello, Shohan

//you can combine two variables

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`; //joining strings together is called- concatenation
console.log(joined); //Hello, how are you?