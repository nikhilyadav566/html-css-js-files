//  Promise :-
//           A Promise in JavaScript is an object that handles asynchronous operations. It allows code to run without blocking execution and can be in one of three states: pending, fulfilled, or rejected.

//            States of a Promise

// A promise can be in one of three states:

// 1.  Pending –   The initial state; the promise is neither fulfilled nor rejected.
// 2.  Fulfilled or (Resolve) – The operation was completed successfully, and the promise has a resolved value.
// 3.  Rejected –  The operation failed, and the promise has a reason for failure (error).


//    In Synchrounous 
//  But  Promises  are only used for asynchronous operatoion

  //  1st Type
  let prom = new Promise(function(resolve,reject){     //  new Promise(...) creates a new Promise object.
    resolve(69);
});


//     2nd Type

let mypromise = new Promise (function(resolve, reject){
 console.log('I am inside promise');
  resolve(2004);
});

console.log('first');

//  1.  The first promise (prom) is created but not used anywhere (so it does nothing in this example).
//  2.  The second promise (mypromise) is created:
//       a. The executor function runs immediately.
//       b. console.log('I am inside promise'); executes first.
//       c. Then resolve(2004); is called, but since there is no .then() attached, nothing happens with the resolved value.
//   3.  Synchronous console.log('first'); runs next.

//        Output
//    I am inside promise
//    first
