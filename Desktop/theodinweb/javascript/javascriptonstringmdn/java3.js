const greet = "Hello";
const nam = "Chris";
console.log(greet + "," + nam); //Hello, Chris

//however template literal usually give you more readable code

console.log(`${greet}, ${nam}`); //Hello, Chris



//Including expressions in a string
/*you can include js expressions in template literals, as well
 as just veriables, and the result will be included in the result*/

const song = "Fight the Youth";
const score = 9;
const highestscore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score/highestscore)*100}%.`;
console.log(output); //I like the song Fight the Youth. I gave it a score of 90%.



//Multiline Strings
//Template literals respect the line breaks in the source code, 
//so you can write strings that span multiple lines

const newline = `One day you finally knew 
what you had to do, and began,`;
console.log(newline); /* One day you finally knew 
                         what you had to do, and began, */

//or, using normal string use \n

const newline1 = "One day you finally knew \nwhat you had to do, and began,";
console.log(newline1);

//including quotes in strings

const goodQuotes1 = 'She said- "I think so!"';
const goodQuotes2 = `She said- "I'm not going in there!"`; //use backticks for multiple quotes inside
console.log(goodQuotes1);
console.log(goodQuotes2);
//or
const bigmouth = 'I\'ve got no right to take my place...'; //use of backslash(\) make the next character recognize as text
console.log(bigmouth);