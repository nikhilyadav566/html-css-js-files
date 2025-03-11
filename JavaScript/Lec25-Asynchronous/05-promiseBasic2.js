//   Promises apply on Asynchoronous


let mypromise = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('I am inside Promise');
    },5000);
    resolve(1998);
    //  instead of resolve(1998) we can use reject state also while it's needed like as
    //  reject(new Error('There is a technical error' ));
});

console.log('first');


//  To find out th Type of Promise

// console.log(mypromise);
// console.log(typeof mypromise);   // output :-> Object