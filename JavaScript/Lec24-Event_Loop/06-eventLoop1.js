//  Synchronous:->
 //              Tasks execute one by one, waiting for each to finish.
//  Asynchronous: 
//                Tasks can run in the background without stopping the execution flow.
//   :=>    Uses Web APIs, Callback Queue, and Event Loop to handle tasks later.

//  Event Loop:-> 
//   The Event Loop is a mechanism in JavaScript that manages asynchronous operations and ensures that tasks are executed in the right order.
//   Since JavaScript is single-threaded (it executes one task at a time), the Event Loop helps handle callbacks, promises, and async functions
//             by managing tasks from the Call Stack and Callback Queue. 

//    How the Event Loop Works (Step by Step)
//   1️.  Call Stack → Executes synchronous code first (one task at a time).
//   2️.  Web APIs → Handles asynchronous tasks (like setTimeout, fetch, DOM events).
//   3️.  Callback Queue & Microtask Queue → Stores async callbacks that are ready to run.
//   4️.  Event Loop → Checks if the Call Stack is empty and moves pending tasks from the queue to the stack for execution.


console.log("Hii");   // execute 1st (Synchronous)

Element.addEventListener('click',function(){   // execute 2nd (Registers Event listener)
    console.log('6299');
});

console.log('Hello');   //  execute 3rd (Synchronous)

//         Step-by-Step Execution Using the Event Loop

// 1️. console.log("Hii");
//      a. This is a synchronous operation.
//      b. It executes immediately and prints → "Hii".

// 2️. Element.addEventListener("click", function () {...});
//      a. The `addEventListener` is an asynchronous operation.
//      b. It is registered with the Web API and does not block execution.
//      c. JavaScript does NOT execute the function immediately—it waits for a "click" event on `Element`.

// 3️. console.log("Hello");
//      a. This is another synchronous operation.
//      b. It executes immediately after `addEventListener` and prints → "Hello".

//            What Happens When a Click Event Occurs

// After the initial script execution is complete:

// 1️. If the user clicks on `Element`, the callback function (`console.log("6299");`) 
//      is placed in the **Callback Queue**.

// 2️. The **Event Loop** checks if the Call Stack is empty (i.e., all synchronous code is done).

// 3. Since the Call Stack is now empty, the Event Loop moves the callback function to the Call Stack.
//      a. "6299" is printed to the console.