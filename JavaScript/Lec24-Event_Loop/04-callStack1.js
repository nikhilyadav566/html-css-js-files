//  The Call Stack

//  JavaScript is a single threading language
//  it means processing of one command at a time.

function addPara(){
    let para = document.createElement('p');        // Creates a new <p> element.
    para.textContent = 'Js is Single threading language';           // Sets its text to 'Js is Single threading language'.
    document.body.appendChild(para);             // Appends it to the document body.
}

function appendNewMessage(){
    let para = document.createElement('p');     // Creates another <p> element.
    para.textContent = 'Hii welcome';             // Sets its text to 'Hii welcome'.
    document.body.appendChild(para);            //  Appends it to the document body.
}

addPara();    // output :-> Js is Single threading language  
appendNewMessage();    // output :-> Hii welcome

//   JavaScript is a single-threaded and synchronous language by default. This means:

//   Single-threaded: It executes one command at a time in a single sequence (one operation must complete before the next starts).
//   Synchronous: Code is executed line by line, in the order it appears.

// Example of Synchronous Execution:
// Above codes are also the example of Synchronous Execution. But also given below another example

console.log("Start");    // Output :-> Start
console.log("Middle");           //  Middle
console.log("End");           // End

//   Each statement waits for the previous one to complete before running.


//                     Objservation

//   run-to-complete nature to code.
       //  means :-> Each function in JavaScript runs completely before another function starts executing. JavaScript does not stop a function midway to execute another one.

//   Js does not execute multiple lines/Function at a time.

