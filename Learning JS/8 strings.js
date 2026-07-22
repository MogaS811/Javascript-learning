// For cocatenation we ab tak used "ghj" + "vbn" vali cheej but from now don't use that, it is not used instead use `` (back ticks) and ${}. See example below. This is called String interpolation.

let name="Amogh"
let age = 18

console.log(`Hello my name is ${name} and my age is ${age}`) // { } ke andar variable naam likho.

// Another way to declare a string is :
const stringname = new String('Moga-S')

console.log(stringname)

// Is stringname ko agar browser mea console par jaakar print karvao to bahut kuch or bhi milta hai like lenght, index by value, prototype etc. -

console.log(stringname[0])
console.log(stringname.__proto__) // For prototype
console.log(stringname.length)
console.log(stringname.toUpperCase()) // There are many more such prototypes, this toupperCase is alsoa prototype
console.log(stringname.charAt(2)) // Pass index
console.log(stringname.indexOf('o')) // upper case mea convert karne ke bavjood small o ko bhi bata diya sahi answer.

const stringname2 = stringname.substring(0, 2) // stringname2 becomes a substring of stringname from index 0 to 2 i.e outputs Mog

const stringname3 = stringname.slice(2,-1)
console.log(stringname3) 
// Negative values use kar skte hai isme to make substring from last. Think as start se indices are 0,1,2,3,4,5,.... jabki last se are -1,-2,-3,-4,..... Think as -
// 0  1  2  3  4  5  
// M  o  g  a  -  S
//-6 -5 -4 -3 -2 -1
// NOTE - Always put (start_index,end_index) but if start_index<end_string, empty string output dega i.e "  ". Same for substring()

// .substring() mea nahi de sakte negative index, usme vo use 0 hi smjhega.

let example = "  Hitesh  "
console.log(name) // outputs   Hitesh  
console.log(name.trim()) // outputs Hitesh i.e no spaces left. Works only on white spaces and line terminators (like /n).

console.log(example.replace('t','-')) // Replace t anywhere by -

console.log(example.includes('H')) // Checks if H hai ya nahi in example string

let example2 = "Moga-Loves-Kanu"
console.log(example2.split('-')) // i.e - ke basis par example2 ko break kar do into array i.e array=["Moga" "Loves" "Kanu"]