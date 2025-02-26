//    1.  add Event Listener()
//         =>     Listen to events
//     =>     Respond to events
//     =>     Hook into events.

//    Windows :-> It is a global object 
//    Event-Target : -> EventTarget is an interface in JavaScript that allows elements, documents, and other objects to handle events.
//      It provides methods like addEventListener(), removeEventListener(), and dispatchEvent() to work with events

//   Interface :-> An interface is a blueprint that defines what methods or properties an object should have,
//                  but it does not provide the actual implementation.

//   An interface tells what will happen (what methods or properties an object must have), but not how it will happen (the actual implementation).

//    Imagine a gaming controller :
//    It has buttons: Jump, Run, Shoot (these are like methods in an interface).
//    But each game decides what happens when you press them (this is the implementation).

//  Pseudocode for apply Event

//  <event-target>.addEventListner(<event-to-listen-for>,<function-to-run-when-event-happend>);

//  Needed:-
//  event-target:-> Component (document,p,h1,__ etc.)
//  event-type :->  (click,doubleClick.. etc.)
//  function :->    Define what to do when event happen.
//  ex:->



let content = document.querySelector('h1');
console.log(content);

// here addEventListener
content.addEventListener('click',function(){
    content.style.background = 'red';
});

// output

//  After clicking at the content the background becomes red due to applying eventlistener.