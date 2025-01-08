// Logical Operator with Non-Booleans

// . Concept of False and Truth
//    1.Falsey     :-  undefined, null , 0, false, ' ', NaN         
//    2. Truthy    :-  Anything that is not falsy.

// Always print truth value in OR Operator

console.log(false||true);            //  Output  true
console.log(false||'nikhil');        //  nikhil
console.log(false||1);               //  1
console.log('shiv'||'shambhu')       //   shiv
console.log(false||1||2);             //  1

// Here in last OR operator where only 1 print except 2 because 
// it's need only truthy value which comes after falsey value that is known as Short Circuiting.

//    Now by AND Operator

console.log(false&&true);                    //  false
console.log('yadav'&&true);                  // true
console.log('yadav'&&'akhil');               // akhil
console.log(false&&'radhe');                 //  false
console.log(false && 1 && 2);                //  false
