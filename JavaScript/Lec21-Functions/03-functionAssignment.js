//  Function assignment :->
//                      Function assignment is the process of assigning a function (either named or anonymous) to a variable, 
//                           allowing the function to be invoked through that variable.


//     There are two types of functions.

//    1.  Function assignment OR Named function assignment
//    2.  Function Anonymous



// 1. Named function assignment
let stand = function walk(){   // The function is assigned to the variable stand, so you can invoke the function using stand().
    console.log('walking');
};

// To call the funciton, use stand()
stand();   //  invoke function

// Output walking


// Or 
let jump = stand;
jump();     // output walking
