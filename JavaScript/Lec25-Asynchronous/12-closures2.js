//   Closures :-
//     1. Function bundled with lexical scope is called closure.
//     2. Even if we return the function, it still remembers its original lexical environment and local storage so it can access values.
//     3. If we write return function x(){.....} --- this automatically returns the value.
//     4. The function that is returned is reference so any change in value of that variable inside function will be reflected as such.

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;    //  // Returning function 'y', which forms the closure
}
//   x();
//  here while 'x' invoked then it returns 'y' and that 'y' value store in 'x' so now we assign that x() to a variable.
//  like this 
//      let z = x();    // means Call 'x' and store the returned function 'y' in 'z'
//         z();  //    // Output: 7 (because 'z' is referencing the inner function 'y' which remembers 'a')

let z = x(); 
  z();


  //  Executation Process 

  //  1.  When you invoke x(), it returns y(), and z now holds the reference to that function.
  //  2.  Calling z() executes y().
  //  3.  Closure in action: y() can access the variable a from x() even though x() has finished executing.