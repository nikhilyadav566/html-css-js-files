//  Function assignment :->
//                         Function assignment is the process of assigning a function (either named or anonymous) to a variable,
//           allowing the function to be invoked through that variable.


//        There are two types of function expressions.
//    1.  Named function Assignment
//    2.  Function Anonymous




// 1. Named function Expression
let stand = function walk(){   // The function is assigned to the variable stand, so you can invoke the function using stand().
    console.log('walking');
};

// To call the functon, use stand()
stand();   //  invoke function

// Output walking


// Or 
let jump = stand;
jump();     // output walking
