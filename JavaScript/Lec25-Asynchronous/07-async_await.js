//  await:-
//         await is a keyword used inside an async function to pause execution until a Promise resolves. It makes asynchronous code look and behave like synchronous code, improving readability.

//  async & await :-
//             The async and await keywords in JavaScript are used to work with asynchronous code in a cleaner and more readable way than using Promises with .then() and .catch().

//                 1.async
//  a.  async is used before a function to make it return a Promise.
//  b.  It allows you to use await inside that function.
//  c.  The function automatically returns a Promise, so we use await keyword instead .then() and .catch() method

//   The await keyword in JavaScript is used inside an async function to pause the execution of the function until a Promise is resolved or rejected. 
//   It simplifies working with asynchronous code, making it look and behave more like synchronous code.


 


//     1st Type
async function nam() {
    return "Hello, Nikhil";
}

nam().then((result) => console.log(result));
// Output: "Hello, Nikhil"

//  The function nam() is marked as async, so it automatically returns a Promise that resolves with the value "Hello, Nikhil".
//   You can then use .then() to access the resolved value.



//  2nd.   Using Promise Without await

async function utility() {
    let Patnatemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Patna temperature is above 25 degree");
        }, 3000);
    });

    let Bhabuatemp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bhabua temperature is above 30 degree");
        }, 5000);
    });

    let PT = Patnatemp;      // PT holds the Promise itself
    let BT = Bhabuatemp;     // BT holds the Promise itself

    return [PT, BT];         // Returns an array of unresolved Promises
}

// Patnatemp and Bhabuatemp are both Promises that will resolve after 4 and 5 seconds, respectively.
//  Since we didn't use await, the variables PT and BT are simply assigned the Promise objects—not their resolved values.
//  When we call utility(), it returns an array of Promises rather than the actual temperature messages.

//  Output after 9 sec: ["Patna temperature is above 25 degree", "Bhabua temperature is above 30 degree"]

//  Benefit of Promise.all(): ->
//   Both Promises start at the same time, so the total execution time is 5 seconds instead of 9 seconds.
//   Instead of waiting one after another, it works in parallel.
