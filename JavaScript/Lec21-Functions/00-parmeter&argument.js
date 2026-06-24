// ==========================================
// PARAMETERS VS ARGUMENTS IN JAVASCRIPT
// ==========================================

// Definition:
//
// Parameter:
// A parameter is a variable declared in the
// function definition. It acts as a placeholder
// for the value that will be received later.
//
// Argument:
// An argument is the actual value passed to
// a function when the function is called.

// ==========================================
// EXAMPLE 1
// ==========================================

function greet(name) {
console.log("Hello " + name);
}

greet("Nikhil");

// Parameter:
// name
//
// Argument:
// "Nikhil"

// ==========================================
// UNDERSTANDING THE FLOW
// ==========================================

// Step 1:
// Function is created.

function greetUser(name) {
console.log(name);
}

// Here:
//
// name
//
// is a Parameter because it is declared in the
// function definition.

// Step 2:
// Function is called.

greetUser("Nikhil");

// Here:
//
// "Nikhil"
//
// is an Argument because it is the actual value
// supplied to the parameter.

// ==========================================
// MEMORY VIEW
// ==========================================

// Function Definition

function add(a, b) {
console.log(a + b);
}

// Parameters:
// a
// b

add(10, 20);

// Arguments:
// 10
// 20

// ==========================================
// STEP-BY-STEP EXECUTION
// ==========================================

function multiply(x, y) {
console.log(x * y);
}

multiply(5, 10);

// Step 1:
// multiply(5,10)
//
// Arguments:
// 5
// 10

// Step 2:
// JavaScript creates a new execution context.
//
// Parameter Assignment:
//
// x = 5
// y = 10

// Step 3:
//
// console.log(x * y)
//
// becomes
//
// console.log(5 * 10)

// Output:
// 50

// ==========================================
// CALLBACK EXAMPLE
// ==========================================

function execute(callback) {
callback();
}

function greetAgain() {
console.log("Hello");
}

execute(greetAgain);

// Parameter:
// callback
//
// Argument:
// greetAgain

// ==========================================
// EASY TRICK TO REMEMBER
// ==========================================

// Parameter
// = Placeholder
//
// Argument
// = Actual Value

// Example:

function introduce(name, age) {
console.log(name, age);
}

// Parameters:
// name
// age

introduce("Nikhil", 22);

// Arguments:
// "Nikhil"
// 22

// ==========================================
// INTERVIEW DEFINITION
// ==========================================

// Parameter:
// A parameter is a variable listed in the
// function definition.

// Argument:
// An argument is the actual value supplied
// to the function when it is called.

// ==========================================
// QUICK REVISION
// ==========================================

// Function Definition
//
// function add(a,b){}
//
// Parameters:
// a, b

// Function Call
//
// add(10,20)
//
// Arguments:
// 10, 20

// Formula:
//
// Function Definition
//        ↓
//     Parameters
//
// Function Call
//        ↓
//     Arguments
