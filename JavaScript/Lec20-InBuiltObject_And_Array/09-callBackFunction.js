// Callback function OR Predicate function  OR Comprision Function   
// Callback Function:- 
//                      A callback function is a function passed into another function as an argument, which 
//                        is then invoked(call) inside the outer function to complete some kind of action.

//  Array Object.


let students = [
    {name:'Nikhil'},      // object creation
    {name:'Naveen'},        // object creation
    {name:'Suraj'},       // object creation
    {name:'Aditya'}         // object creation
];

console.log(students);


//  To check (or find) objects exist in an array . 

//  Syntax:
//          arrayName.find(_____)   inside find() there is callback function



let studentName = students.find(function(student){    //  find() is a function and inside it there is a callback function i.e 'function(student)' which is passed inside the find() or function where student is a parameter of callback function.
    return student.name == 'Nikhil';      

});
 console.log(studentName);          //  Output :-> { name: 'Nikhil' }

   //     The find() method is used to search for the first object in the array that matches a certain condition.
   //     It takes a callback function as an argument. This function will be called for each element in the array (in this case, each object representing a student).
  //      In the callback, we check if the name property of the student object is equal to 'Nikhil'.
 //       find() will return the first match (if found) or undefined if no match is found.
 
