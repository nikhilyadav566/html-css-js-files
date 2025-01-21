
//  In Js there are two types of string.
//  1.  String  primitive         2.  String object.


//typeof lastName: The variable lastName is assigned a string primitive 'Yadav'.
//  The typeof operator returns "string". 

// 1.  String primitive
let lastName = 'Yadav';
console.log(typeof lastName);    //  Output: string

// We can convert String primitive to String object by using .dot notation like as (.length , .endWith() etc).
console.log(lastName.length);                //  5
console.log(lastName[0]);                    // here 0 zero is index no.
console.log(lastName.includes(`dav`));            // true  include: that (dav) is present in lastName or not.
console.log(lastName.startsWith(`Yad`));         // true
console.log(lastName.startsWith(`Nikhil`));     // false
console.log(lastName.endsWith(`av`));           // true
console.log(lastName.toUpperCase());            // YADAV
console.log(lastName.toLowerCase());            // yadav
console.log(lastName.trim());                    // Yadav :-> remove whitespacefrom end & start if there is avaible.
console.log(lastName.replace(`av`,`uvanshi`));   // Here in Yadav (av) letter replace and added (uvanshi) after this it became Yaduvanshi.

//  Similarly Also applied in String object.


//  2. String Object 

// typeof firstName: The variable firstName is assigned a String object using the new String() constructor.
//  Unlike a string primitive, this creates a complex object that wraps the primitive value.
//  The typeof operator returns "object" for objects. 
let firstName = new String('Nikhil');
console.log(typeof firstName);    //  Output: object

// like as
console.log(firstName.length);   // 6 




//  Note: 
let message = 'This is my first message';

let words = message.split(' ');   //   The .split(' ') method splits the string into an array at every space character (' ').
console.log(words);               //The result is an array of words from the string.

// Output : [ 'This', 'is', 'my', 'first', 'message' ]
