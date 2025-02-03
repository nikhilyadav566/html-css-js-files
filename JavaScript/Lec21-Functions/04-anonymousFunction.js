//  2.  Function Anonymous :->
//                       An anonymous function is a function without a function name. Instead of giving it a function name,
//                             you can use it directly or assign it to a variable.

//  Named function assignemt
let student = function name(){         // function decleared
       console.log('Nikhil');
};

//  Now Anonymous function assignment
let student2 = function(){         //  Here, an anonymous function (a function without a name) is assigned to the variable
    console.log('Nikhil');          //   student2. You can invoke this function using the student2 variable.
};

student2();     //  // Output: Nikhil

//  The first function has a name (name), but it's not used outside its local scope.
//  The second function is anonymous, meaning it has no name and is only invoked using the variable it's assigned to.
//  In both cases, you can execute the function by calling the assigned variable (student() or student2()).



//    Note:->

//   Actually as we know that in function assignment functions there can be invoke the functions from the top of declaration of function which is called hoisting.
  //      But 
//    In function Anonymous cannot invoke functions from the top because functions are typically assigned to a variables . So we can say that it can't be hoisted.
//       Only invoke the function from the end of the function.
