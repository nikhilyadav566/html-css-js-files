// Date Object
// There are 5 ways to create date Object.

//  1st
let date = new Date();

console.log(date);

//   2nd
let date2 = new Date('January 07 2025 07:40');
console.log(date2);

//   3rd
let date3 = new Date(2004, 3, 7, 10);
console.log(date3);

   // Or

   let date4 = new Date(1999,10,19,9);

   date4.setFullYear(2004);   //  Using set we can set :-> Date, Hours, Milliseconds, Months, Minutes , Time etc.
   date4.getFullYear( );      // though get we can receive the value
   console.log(date4);
