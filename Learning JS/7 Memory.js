// Memories of 2 types - Stack(Primitive) and Heap(Non-Primitve) i.e Stack mea stored memory ki copy milti hai bas jabki heap mea stored memory is by reference i.e jo changes karoge vo direct original value mea hoga.

let name1 = "Amogh S."
let name2 = name1 // Only name2 will be changed, name1 remains same.
name2 = "MogaS811"

console.log(name1) // Same as old
console.log(name2)

// This happened because string is a primitive datatype and hence in stack memory, only copy will be transferred.

let name3 = {
    email: "Moga@gmail.com",
    age: 18,
}

name4=name3

name4.age = 19 // Value will be changed in name3 too since actual value ko change kar rahe hai in non primitive data type.

/*
+-------------------+       +-----------------------------------------+
|     name4   |------------>| {                                       |
+-------------------+       |          email: "user@google.com",      |
|     name3   |------------>|     upi: "user@ybl"                     |
+-------------------+       |  }                                       |
|    name1(copy)|             +-----------------------------------------+
+-------------------+                         Heap
|    name2    |
+-------------------+
|    name1    |
+-------------------+
        Stack
*/