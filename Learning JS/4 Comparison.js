// <,>,==,!=,>=,<=

// Different datatypes ko compare karna is bad habit. 

console.log(null > 0) // False
console.log(null == 0) // False
console.log(null >= 0) // True

// NOTE - Actually operators >,<,<=,>= convert value to number jabki == doesn't do so that why those chutiya results.

console.log(undefined >= 0) // False, gives false in all <,>,<=,>=,==

// === - This is used for strict checking i.e value ke saath datatype bhi check hoga.