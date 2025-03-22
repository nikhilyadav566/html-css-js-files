//  Closures :-> 
//     //     1. Function bundled with lexical scope is called closure.
//     2. Even if we return the function, it still remembers its original lexical environment and local storage so it can access values.
//     3. If we write return function x(){.....} --- this automatically returns the value.
//     4. The function that is returned is reference so any change in value of that variable inside function will be reflected as such.


function outer() {
    let name = "Nikhil"; // Parent function variable
                    
    function inner() {
        console.log(name); // Inner function remembers 'name'
    }

    return inner;  //  returning function 'y' , which forms the closure
}

let result = outer(); // Calls outer, returns inner function
result(); // Outputs: "Nikhil"


//  Execution process

// 1.   While we invoke 'outer()' , it returns 'inner()' , And the value store in 'result' variable.
// 2.   After it 'result()' invoke and execute 'inner()'
// 3    inner() can access the variable a from outer() even though outer() has finished executing.