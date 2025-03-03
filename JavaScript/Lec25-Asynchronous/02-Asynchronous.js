setTimeout(function() {
    console.log('third');
},3000)

function sync(){
    console.log('first');
}
sync();

console.log('second');

//  Output 

//   first    (immediate)
//   second   (immediate)
//   third (after 3 minute)


//   Feauters of Asynchronous Code.

//   Clean & concise  :->   Makes code more readable and structured (especially with async/await).

//   Better error handling  :-> Easier to catch errors with try...catch.

//   Easier bugging   :->  Debugging is more manageable with async/await than with callbacks.

//   Non-blocking execution  :->   Code doesn’t stop execution while waiting for slow tasks.