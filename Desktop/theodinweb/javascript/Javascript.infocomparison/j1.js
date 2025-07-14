alert(2>1); //true
alert(2==1); //false
alert(2!=1); //true

let result = 5>4;
alert(result); //true

//String Comparison
//to see wheather a string is greater than another, JavaScript uses the so-called "dictonary" or "lexicographical" order.
//In other words, strings are compared letter-by-letter

alert('Z' > 'A'); //true
alert('Glow' > 'Glee'); //true
alert('Bee' > 'Be'); //true
alert('Be'>'Be'); //false

/*The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
*/



//Comparison of different types

//when comparing values of different types, Javascript converts the values to numbers

alert('2'>1); //true
alert('01' == 1); //true

//for boolean values, true becomes 1 and false becomes 0.

alert(true == 1); //true
alert(false == 0); //true


/*A funny consequence
It is possible that at the same time:

Two values are equal.
One of them is true as a boolean and the other one is false as a boolean.
*/

let a = 0;
alert(Boolean(a)); //false

let b = "0";
alert(Boolean(b)); //true

alert(a == b); //true!

/*From JavaScript’s standpoint, this result is quite normal. 
An equality check converts values using the numeric conversion (hence "0" becomes 0), 
while the explicit Boolean conversion uses another set of rules.*/