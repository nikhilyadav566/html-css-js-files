//    1.  add Event Listener()
//         =>     Listen to events
//     =>     Respond to events
//     =>     Hook into events.

//    windows :-> It is a global object 
//    event-target : -> It is an interface 

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