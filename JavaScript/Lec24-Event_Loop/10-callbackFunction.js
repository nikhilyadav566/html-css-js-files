// ==========================================
// CALLBACK FUNCTION IN JAVASCRIPT
// ==========================================

// Definition:
// A callback function is a function that is passed
// as an argument to another function and is executed
// later by that function when needed.

// In simple words:
// A callback is a function that you give to another
// function so that the other function can call it later.

// Why is it called Callback?
// You provide a function now
//         ↓
// Someone else calls it back later
//         ↓
// Callback Function

// Common Examples:
// addEventListener()
// setTimeout()
// setInterval()
// forEach()
// map()
// filter()

// ==========================================
// EXAMPLE 1: BASIC CALLBACK FUNCTION
// ==========================================

function greet(name) {
console.log("Hello " + name);
}

function processUser(callback) {
let username = "Nikhil";

```
callback(username);
```

}

processUser(greet);

// Understanding the Code:
//
// greet() -> Function Definition
// name -> Parameter
//
// processUser() -> Function Definition
// callback -> Parameter that stores a function
//
// processUser(greet)
// greet -> Argument
//
// This means:
// callback = greet

// Step-by-Step Execution:
//
// Memory Creation Phase:
// greet       -> function
// processUser -> function
//
// Execution Phase:
//
// Step 1:
// processUser(greet)
//
// Call Stack:
// Global()
//    ↓
// processUser()
//
// callback = greet
//
// Step 2:
// username = "Nikhil"
//
// Step 3:
// callback(username)
//
// Since callback = greet
//
// callback(username)
// becomes
//
// greet("Nikhil")
//
// Step 4:
//
// Call Stack:
// Global()
//    ↓
// processUser()
//    ↓
// greet()
//
// Step 5:
//
// console.log("Hello " + name)
//
// name = "Nikhil"
//
// Output:
// Hello Nikhil
//
// Step 6:
// greet() removed from stack
//
// Step 7:
// processUser() removed from stack
//
// Final Output:
// Hello Nikhil

// ==========================================
// CALLBACK WITH ANONYMOUS FUNCTION
// ==========================================

function process(callback) {
callback();
}

process(function () {
console.log("Hello Nikhil");
});

// What Happens?
//
// The anonymous function is passed as argument.
// callback stores that function.
//
// callback();
//
// executes the function.
//
// Output:
// Hello Nikhil

// ==========================================
// CALLBACK WITH PARAMETERS
// ==========================================

function calculate(a, b, callback) {
callback(a, b);
}

function add(x, y) {
console.log(x + y);
}

calculate(10, 20, add);

// Execution:
//
// calculate(10,20,add)
//
// a = 10
// b = 20
// callback = add
//
// callback(a,b)
//
// becomes
//
// add(10,20)
//
// Output:
// 30

// ==========================================
// CALLBACK MAKES FUNCTIONS FLEXIBLE
// ==========================================

function calculateOperation(a, b, operation) {
operation(a, b);
}

function addition(a, b) {
console.log(a + b);
}

function multiplication(a, b) {
console.log(a * b);
}

calculateOperation(5, 10, addition);
calculateOperation(5, 10, multiplication);

// Output:
// 15
// 50
//
// Same function.
// Different behavior.
// Only callback changes.
//
// First Call:
//
// operation = addition
//
// operation(5,10)
// becomes
//
// addition(5,10)
//
// Output:
// 15
//
// Second Call:
//
// operation = multiplication
//
// operation(5,10)
// becomes
//
// multiplication(5,10)
//
// Output:
// 50

// ==========================================
// SYNCHRONOUS CALLBACK
// ==========================================

function display(callback) {
console.log("Start");

```
callback();

console.log("End");
```

}

display(function () {
console.log("Inside Callback");
});

// Step-by-Step:
//
// display(callback)
//
// Call Stack:
//
// Global()
//    ↓
// display()
//
// console.log("Start")
//
// Output:
// Start
//
// callback()
//
// Call Stack:
//
// Global()
//    ↓
// display()
//    ↓
// callback()
//
// Output:
// Inside Callback
//
// callback removed
//
// console.log("End")
//
// Output:
// End
//
// Final Output:
//
// Start
// Inside Callback
// End
//
// Callback executes immediately.
// Therefore it is a synchronous callback.

// ==========================================
// ASYNCHRONOUS CALLBACK
// ==========================================

console.log("Start");

setTimeout(function () {
console.log("Callback Executed");
}, 2000);

console.log("End");

// Understanding setTimeout:
//
// Parameter 1:
// Callback Function
//
// Parameter 2:
// Delay = 2000ms
//
// Step-by-Step:
//
// Step 1:
// Print Start
//
// Step 2:
// setTimeout()
// Browser receives:
// Callback Function
// Delay = 2000ms
//
// Timer starts.
//
// Step 3:
// Print End
//
// Step 4:
// Global code finishes.
//
// Call Stack:
// Empty
//
// Step 5:
// After 2 seconds callback moves to
// Callback Queue
//
// Step 6:
// Event Loop checks:
//
// Is Call Stack Empty?
//
// YES
//
// Step 7:
// Callback Queue
//      ↓
// Call Stack
//
// Step 8:
// Callback executes
//
// Output:
// Callback Executed
//
// Final Output:
//
// Start
// End
// Callback Executed

// ==========================================
// CALLBACK IN EVENT LISTENER
// ==========================================

button.addEventListener("click", function () {
console.log("Button Clicked");
});

// Callback Function:
//
// function () {
//     console.log("Button Clicked");
// }
//
// Step-by-Step:
//
// addEventListener()
// registers callback.
//
// Browser stores:
// Event Type = click
// Callback Function
//
// No execution yet.
//
// User clicks button.
//
// Callback enters Event Queue.
//
// Event Loop checks stack.
//
// Callback moves to Call Stack.
//
// Output:
// Button Clicked

// ==========================================
// CALLBACK VS NORMAL FUNCTION
// ==========================================

function normalFunction() {
console.log("Hello");
}

normalFunction();

// Normal Function:
// You call it yourself.

function execute(callback) {
callback();
}

function greetUser() {
console.log("Hello");
}

execute(greetUser);

// Callback Function:
//
// greetUser passed as argument.
//
// callback = greetUser
//
// callback()
//
// executes greetUser()
//
// Output:
// Hello

// ==========================================
// INTERVIEW DEFINITION
// ==========================================

// A callback function is a function passed as an
// argument to another function and executed later
// by that function after a specific task, event,
// or operation is completed.

// ==========================================
// QUICK REVISION
// ==========================================

// 1. Function passed as an argument.
// 2. Executed later by another function.
// 3. Used in:
//    - addEventListener()
//    - setTimeout()
//    - setInterval()
//    - forEach()
//    - map()
//    - filter()
// 4. Can be synchronous or asynchronous.
// 5. Makes code reusable and flexible.
//
// Formula:
//
// Function passed as argument
//             +
// Executed later
//             =
// Callback Function
