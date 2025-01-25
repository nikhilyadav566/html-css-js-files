//  Arrow  Function :- 
//                    It is a short form of callback function it's increase readbility of code.


//  Here 
//  Write Callback Function in Arrow Function.

let students = [
    { name: 'Abhinav', age:21},    //  Object Creation
    { name: 'Sanoj', age:22},         //  Object Creation
    { name: 'Chandan', age:20},        // Object Creation
];

let studentName = students.find((student) => student.name === 'Chandan');   // for single parameter
console.log(studentName);    // Output : { name: 'Chandan', age:20}

//  students :-> ArrayName
//  student  :-> parameter of callback function.
// studentName :->  studentName is an object because the find() method returns the third object that satisfies the condition.
