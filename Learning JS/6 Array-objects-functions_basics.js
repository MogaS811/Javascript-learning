// Array is defined by square brackets i.e following is array of strings

let sports = ["Cricket","Football","Basketball"]

// Objects are defined by curly braces i.e {} and key value pairs mea likha karte hai.

let user = {
    name: "Amogh S.",
    age: 18,
    city:"Panipat"
}; // an object but remember ki if (let user =) nahi likhenge i.e direct {} start krenge to error dega because use lagega ye ek code bloack hai aur ; expect krega. A ";" is expected only after object ends.

// Object ke andar kuch access karne ke liye . operator ka use kiya jata hai i.e user.name = "...." etc. etc.

console.log(typeof user) // outputs object i.e typeof array is object.

// Functions are defined as : function(){...}

let name = function(){
    console.log("Hello World!")
}

console.log(typeof name) // output = fuction (vaise ise object function bolte hai.)

// NOTE - Js is a dynamically typed language i.e yo don't need to explicilty specify the datatype of a variable, variable types are determined at runtime.