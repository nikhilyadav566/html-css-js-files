//  There are two types in Js

//  Primitive or Value types  :->    ( Number, String, Boolean, Undefind, Null)
//  Reference types or Objects  :->  (Function, Objects, Arrays)  these are object   


//  1. Primitive types :- These are basic, immutable data types that store their values directly in variable.And it is copied by value.


let a = 10;
let b = a;

a++;
console.log(a);    // 11
console.log(b);    //  10

//  Or  

let x = 10;
let y = x; // y gets a copy of the value of x
y = 20;
console.log(x); //  (x is not affected by changes to y)
console.log(y);

// Output x:10 , y:20


// 2. Reference types :-> These are objects that store a reference (or address) to their data in memory.And Copied by reference
// means When we assign a reference type to another variable, both variables point to the same object.

// it is always copied by their refrences or address. 

let c = {value:10};
let d = c;

d.value++; 
console.log(c);  // 11
console.log(d);  // 11

//    Or

let obj1 = { name: "Nikhil" };
let obj2 = obj1;    // obj2 gets a reference to the same object
obj2.name = "Yadav";
console.log(obj1.name); // "Bob" (both obj1 and obj2 refer to the same object)
console.log(obj2.name);

//  Output : Yadav     and also second output is Yadav
