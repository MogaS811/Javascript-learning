const name1 = 12345
let name2 = "amogh@gmail.com"
var name3 = "12345"
name4 = "Panipat"
let name5

// name1 = 1122334455 Not allowed to change const variable man, gives error.
name2="amogh2@gmail.com"
name3="213"
name4="Bengaluru" 

/*
Baar baar console.log(...) likhne ki jagah use console.table([variable names separated by commas]), it will print all in tabular form
*/ 

console.table([name1,name2,name3,name4,name5])

/*
Can declare a variable in 3 ways i.e by using let or by using var or directly like name4. But, Never use var because of issue in block scope and functional scope. Also, direct declaration like name4 is bad practice.
*/