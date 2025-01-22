//   Serarching In Array  on Primitive Data Types.
//  Here in Array there are numbers store which are primitive like as 4 , 6 , 7, 8
//  There are two ways to search array on primitive data Types.
//  1. .indexOf()                     2.  .includes()



let numbers = [4,6,7,8];

console.log(numbers.indexOf(7));  // 2

console.log(numbers.indexOf(15));  // -1



//  we want to check if a number exist in an array.

// numbers.includes(6);
console.log(numbers.includes(6));     // true
console.log(numbers.includes(20));    // false

//  (.includes():-> is used to find that number is available in the given array or not if available then return true otherwise false.)


//  array.indexOf(searchElement, fromIndex)

console.log(numbers.indexOf(4 , 2));  // -1   //  here 4 means to serach that it is present in the array or not. AND 2 show that start searching from index no 2.
console.log(numbers.indexOf(6 , 1));   // 1   //   similarly same as above 


//  The typeof :-> operator is not sufficient to check specifically for arrays, as it returns "object" for both objects and arrays.

console.log(typeof numbers);          // object
console.log(Array.isArray(numbers));   // true

//  Array.isArray() :-> returns true if the value is an array and false otherwise.
