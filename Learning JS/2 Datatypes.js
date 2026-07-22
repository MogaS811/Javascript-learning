"use strict" // Treat all code as a newer version.
// alert(3+3) can not use unless you use console in browser or in html, node.js karne ke liye different syntax is there.

// Use semi colon when writing 2 statements in a single line

/* Data types par discussion.
1. number => 2 to power 53 (range of a number)
2. bigint
3. string => "" i.e use double commas for it
4. Boolean (true/false)
5. Null - standalone value
6. Undefined - Abhi value define nahi hui hai
7. symbol - uniqueness ke liye use these
*/

let name1 = 18
let name2 = "Amogh"
let name3 = true

console.log(typeof name1)
console.log(typeof name2)
console.log(typeof name3)

// Type of null is object but it is not an object, it is a primitive value. It is a bug in JS.

// typeof name and typeof (name) are same but typeof name() is different because it is a function call.  

// to convert a string to number we can use Number() function but N must be capital. 

// Agar kisi ko Number mea convert kiya Number() function ka use karke lekin vo number nahi hai to Uski jagah NaN store ho jayega i.e Not a Number

// Null ka Number is 0. Undefined ka Number is NaN. Bool ka 1 if true and 0 if false.

// Like Number(), there are Boolean() and String(). [Keep first alphabet capital.]

// "" ka boolean conversion is false. "Amogh" ka boolean is true.