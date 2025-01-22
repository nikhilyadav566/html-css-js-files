// There are three ways to insert in array

// 1. End:-> arr.push(--)         2.Begin:-> arr.unshift(--)       3.Middle:-> arr.splice(---)


//     1st End:-> .push() : Adds elements to the end of the array.

let students = [`Rohan`, `Mohan` , `Shayam`];
students.push(`Abhishekh`)
console.log(students);
// Output: [ 'Rohan', 'Mohan', 'Shayam', 'Abhishekh' ]



//     2nd Begin:-> .unshift() :  Adds elements to the beginning of the array.
students.unshift(`Narayan`)
console.log(students);
// Output:  [ 'Narayan', 'Rohan', 'Mohan', 'Shayam', 'Abhishekh' ]


//      3rd Middle:-> .splice() : Inserts, removes, or replaces elements in the array at a specified position.
students.splice(1, 0, `Krishana`)
console.log(students);
//  Output: [ 'Narayan', 'Krishana', 'Rohan', 'Mohan', 'Shayam', 'Abhishekh' ]


//    Position where the new element is inserted (here, 1). where 1 is index no.
//    Number of elements to remove (here, 0, meaning no elements are removed).
//    The element to be inserted ('Krishana'). means value insert at index.
