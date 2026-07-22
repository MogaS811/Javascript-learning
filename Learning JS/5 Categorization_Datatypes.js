// Datatypes ko kaise memory mea rkha jata hai and kaise acess kiya jata hai us basis pe do categorization hai datatypes ka. Primitve and non primitive.

// Primitive (Call by Value)

// 7 Types : String, Number, Boolean, null, undefined, Symbol(Uniqueness), BigInt(For very big values)


// Non-Primitive (Reference type)

// Array, Objects, Functions

// NOTE - Yaha koi aise float,int nahi hota, bas number hota hai.

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2) // false because symbol ka kaam hi hai uniqueness lana.

const number = 123456789n 

console.log(typeof(number)) // bigint because agar kisi number ke aage n laga diya jaaye to vo bigint ban jata hai.
