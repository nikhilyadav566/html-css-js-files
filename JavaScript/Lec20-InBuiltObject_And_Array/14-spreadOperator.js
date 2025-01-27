// Spread Operator :->  The spread operator (...) provides a concise way to combine arrays and works similarly to concat().

//  Now, Combine Using Spread Operator

let first = [1,2,3]
let second = [4,5,6]

// Using the spread operator to combine arrays
let combined = [...first, ...second];
console.log(combined);   //  Output :-> [1,2,3,4,5,6] 
