//  Searching In Array on Reference data type.
//  here now created object in array.
//  This is a Array of Object.


let courses = [
    {no:1, name:'Nikhil'},  // object creation
    {no:2, name:'Rahul'}    // object creation
];

//  these two objects are the elements of the array.

console.log(courses);



//   Here indexOf() and includes() methods don't work with Objects or Reference type. 
//      instead of these we used Callback Function 

console.log(courses.indexOf({no:1, name:'Nikhil'}));    //  -1


console.log(courses.includes({no:2, name:'Rahul'}));     // false
