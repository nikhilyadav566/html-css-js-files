function z(){
    var b = 900;         // Variable 'b' is defined in function 'z'
    function x(){     
        var a = 7;         // Variable 'a' is defined in function 'x'
        function y(){
            console.log(a,b);         // 'y' can access 'a' from 'x' and 'b' from 'z' due to lexical scope
        }
        y();         // Calling 'y' inside 'x'
    }
    x();         // Calling 'x' inside 'z'
}
z();      // Calling 'z'
//  Output :-> 7 900

//  Execution Process 
// 1. Calling z():-
//   a. The z() function is called first. Inside z(), a variable b = 900 is defined.
//   b. The function x() is defined inside z().

// 2.  Calling x():-
//   a. Inside z(), the function x() is invoked. This creates the variable a = 7 inside x().
//   b. The function y() is defined inside x(). It has access to both a from x() and b from z() due to lexical scoping.

// 3.  Calling y():-
//   a. Inside x(), y() is called.
//   b. When y() executes, it logs the values of a and b.
//   c. Output: 7 900

//  NOTE :-> a comes from x()'s scope, and b comes from z()'s scope. Both are accessible due to lexical scoping.
