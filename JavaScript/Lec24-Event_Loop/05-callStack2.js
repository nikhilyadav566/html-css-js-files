//  CallStack :->
     //  The Call Stack is a fundamental part of JavaScript’s execution model. It is a data structure that keeps track of function calls in a Last In, First Out (LIFO) manner.

//      How the Call Stack Works

//  When a function is called, it is pushed onto the stack.
//  When a function completes, it is popped off the stack.
//  JavaScript runs functions one at a time (single-threaded execution).
//  If a function calls another function, the new function is added to the stack and must complete before the previous function resumes.

function a(){
    console.log("Hii");
    b();   //  Calling function b
}
function b(){
    console.log("Hello");
}

a();  // Calling funcion a

//  Step-by-Step Execution in the Call Stack

// 1.  a() is called, so it is pushed onto the Call Stack.
// 2.  Inside a(), console.log("Hii") is executed and prints:
// 3.  b() is called, so it is pushed onto the Call Stack.
// 4.  Inside b(), console.log("Hello") is executed and prints:
// 5.  b() finishes execution and is popped from the stack.
// 6.  a() finishes execution and is popped from the stack.


//   Call Stack Lifecycle

// 1.  Initially Empty → Before the script starts executing, the Call Stack is empty.
// 2.  Execution Begins → Functions are pushed onto the stack as they are called.
// 3.  Execution Ends → Once a function completes, it is popped from the stack.
// 4.  Stack Becomes Empty Again → After all function calls finish, the Call Stack is empty.



//  Note :-> 

//        Call Stack Behavior in JavaScript
// 1.  When a function is called, it is added (pushed) to the Call Stack.
// 2.  When a function finishes execution, it is removed (popped) from the Call Stack.
