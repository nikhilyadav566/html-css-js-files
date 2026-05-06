// Logical Operator with Non-Booleans

// . Concept of False and Truth
//    1.Falsey     :-  undefined, null , 0, false, ' ', NaN         
//    2. Truthy    :-  Anything that is not falsy.

// Rule : 
//      1. If the first value is truthy, it stops and return it .
//      2. If the first value is falsy, it moves to the next value.
//      3. The OR Operator (||) checks values from left to right.


// Always print truth value in OR Operator

console.log(false||true);           // true
console.log(null||'JavaScript');        //  javaScript
console.log(0||100);             //   100
console.log(''||'shiv');               //  shiv
console.log(undefined||"Code");           // Code
console.log(NaN||"Nikhil" );             // Nikhil
console.log(false||1||2);                   //1

// Here in last OR operator where only 1 print except 2 because 
// it's need only truthy value which comes after falsey value that is known as Short Circuiting.

//   Note:->  All these above are falsy value while these come before then it moves to next to get next truth value.


//    Now by AND Operator

console.log(false&&true);         //  false
console.log('yadav'&&true);             //  true  :-> If all both value are truthy then it returns last value.
console.log('yadav'&&'akhil');         //  akhil   :-> Similarly in it
console.log(false&&'radhe');              // false
console.log(false && 1 && 2);       // false

// while falsy value will get it stops immediately and print falsy value 
// But while both are not falsy then it print last value.