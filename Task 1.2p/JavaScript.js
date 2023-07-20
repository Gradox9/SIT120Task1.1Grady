/* JavaScript String Length
The length property returns the length of a string: */
let text = "This is to test string length =";
let length = text.length;


/* JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: start position, and end position (end not included). */
let extract = "Extracts part of a string =";
let part = text.slice(10, 17);


/* Replacing String Content
The replace() method replaces a specified value with another value in a string: */
let old = "Please check out Ontrack for more info.";
let newText = old.replace("Ontrack", "DeakinSync");


/* Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():
A string is converted to lower case with toLowerCase(): */
let text1 = "toUpperCase() would be good for database information.";
let text2 = text1.toUpperCase();


/* JavaScript String trim()
The trim() method removes whitespace from both sides of a string: */
let text3 = "      Trim, ()Also good for database information     ";
let text4 = text3.trim();


console.log(text, length);
console.log(extract, part);
console.log(old, newText);
console.log(text1, text2);
console.log(text3, text4);