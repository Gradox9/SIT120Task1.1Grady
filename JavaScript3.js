/* Creating Date Objects
Date objects are created with the new Date() constructor.
new Date() creates a date object with the current date and time: */
const a = new Date();
console.log(a);

/* new Date(date string)
new Date(date string) creates a date object from a date string: */
const b = new Date("October 13, 2014 11:13:00");
console.log(b);
/* OR */
const c = new Date("2022-03-25");
console.log(c);

/* new Date(year, month, ...)
new Date(year, month, ...) creates a date object with a specified date and time.
7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order): */
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);

/* Previous Century
One and two digit years will be interpreted as 19xx: */
const e = new Date(99, 11, 24);
console.log(e);

/* new Date(milliseconds)
new Date(milliseconds) creates a new date object as milliseconds plus zero time: */
const f = new Date(100000000000);
console.log(f);