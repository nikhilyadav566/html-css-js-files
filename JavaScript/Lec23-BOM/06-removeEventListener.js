// Type Coercion:
//             Type coercion is the process of converting different data types into a common type (similar type)
//             to compare their values. If the values become similar after conversion, 
//             the comparison returns true; otherwise, it returns false.

// loose equality (==) :-> it allows Type Coercion.
     let a = 5;
     let d = '5';
     console.log(a == d); // true


// strict equality (===) :-> where it doesn't allow Type Coercion.(it only prevent from it  ).
     let e = 9;
     let f = '9';
     console.log(e === f); // false


// function print(){
//     console.log('Hii Nikhil');
// }
// document.addEventListener('click',print);
// document.removeEventListener('click',print);



// document.addEventListener('click',function(){
//     document.body.style.backgroundColor = "lightblue";
//     console.log('I have clicked on the document');
// });

function eventFunction(){
    document.body.style.backgroundColor = "red";
}
document.addEventListener('click',eventFunction);
document.removeEventListener('click',eventFunction);


 //   There are three conditions are needed to remove events.
 // 1. Same target :-> (document,p,h1, div, article,video etc)
 // 2. Same type   :-> (click,dbclick,scroll etc)
 // 3. Same function :-> (define:-> what to do when event happen)
 //    and here eventFunction is a function.