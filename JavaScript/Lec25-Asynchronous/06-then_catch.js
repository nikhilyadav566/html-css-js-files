// .then()  and .catch() are method which are used to handle the results of a Promise.

//           1. .then() Method

//  a.  It is used to handle the resolved (fulfilled) state of a Promise.
//  b.  It takes a callback function as an argument, which executes when the Promise is successfully resolved.

let mypromise = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('I am inside Promise');
    },2000);
    resolve('Success!');
});

mypromise.then(value => { console.log(value);});  

 // Output after 5 sec: "Success!"



 //       2.    .catch() Method

 //   a.  It is used to handle the rejected (failed) state of a Promise.
 //   b.  It takes a callback function that executes when an error occurs or the Promise is rejected.


 let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error occurred!"), 5000);
});

promise.catch(error => {console.log(error);});  

// Output after 2 sec: "Error occurred!"