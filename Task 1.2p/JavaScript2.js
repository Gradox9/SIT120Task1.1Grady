/* At least 2 array variables (one string array and one number array) */

/* JavaScript Arrays
An array is a special variable, which can hold more than one value: */
const Orangefruits = ["Mandarin", "Orange", "Mango"];
console.log(Orangefruits)

/* Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
But, JavaScript arrays are best described as arrays. */

/* Arrays use numbers to access its "elements". In this example, person[0] returns Grady: */
const person = ["Grady", "Ramsay", 23];

/*Objects use names to access its "members". In this example, person2.lastname returns Ramsay: */
const person2 = {firstname:"Grady", lastname:"Ranmsay", age:23};

/* Number array */
const Numbers = [1, 2, 3, 4, 5.12345];



/*5 array methods (you can use either string array or number array, or you can use both */

/*string array methods */

/*JavaScript Array length
The length property returns the length (size) of an array:*/
let size = Orangefruits.length;
console.log(size);

/*Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.
This is what popping and pushing is:
Popping items out of an array, or pushing items into an array. */
Orangefruits.pop();
console.log(Orangefruits)

let onefruit = Orangefruits.pop();
console.log(onefruit);

/* JavaScript Array push()
The push() method adds a new element to an array (at the end): */
Orangefruits.push("apricots");
console.log(Orangefruits);


/*number array methods */

/* The toString() Method
The toString() method returns a number as a string.
All number methods can be used on any type of numbers (literals, variables, or expressions): */
console.log(Numbers.toString());

/* The toFixed() Method
toFixed() returns a string, with the number written with a specified number of decimals: */
console.log(Numbers[4].toFixed(3))