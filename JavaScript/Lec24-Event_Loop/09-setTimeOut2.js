console.log('Hii');

setTimeout(function(){
    console.log("Hello Nikhil");
},8000);

console.log("Hey");

//        Step-by-Step Execution (Event Loop in Action)
//  1️. console.log("Hii"); → Executes immediately (Synchronous).
//       Output: Hii

// 2️. setTimeout(function(){ console.log("XYZ"); }, 8000);
//  a. Registers the callback in the Web API with a delay of 8000ms (8 sec).
//  b. Does not block execution (moves to the next line).

// 3️. console.log("Hey"); → Executes immediately after setTimeout.
//      Output: Hey

// 4. After 8 seconds, the function inside setTimeout() moves from the Callback Queue to the Call Stack (when it's empty).
//      Output: XYZ