//    1.  add Event Listener()

           // => Listen to events
// Means: Wait for a specific event to happen.
// Example: Wait for a button click.

            // => Respond to events
// Means: Perform an action when the event occurs.
// Example: Show an alert or change a color after a button click.

            // => Hook into events
// Means: Attach (connect) a callback function to an event
// so that the function runs whenever that event occurs.

//    Windows :-> It is the global object in the browser

//    Event-Target : -> EventTarget is DOM interface that allows elements, documents, and other objects to handle events.
//      It provides methods like addEventListener(), removeEventListener(), and dispatchEvent() to work with events

//   Interface :-> An interface is a blueprint that defines what methods or properties  an object should have,
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

// event is an Event object.
// target is a property of the Event object.
// event.target returns the object on which the event occurred.
// The returned object implements the EventTarget interface.



let content = document.querySelector('h1');
console.log(content);

// here addEventListener
content.addEventListener('click',function(){
    content.style.background = 'red';
});

// output

//  After clicking at the content the background becomes red due to applying eventlistener.

// content -> Event Target
// click -> Event Type
// function() -> Callback Function
// red color -> Response/Action


// Concept :->
//           HTML Element
//               ↓
//          DOM Object
//              ↓
//         DOM Interfaces           DOM Interfaces are built into the browser,DOM objects implement these interfaces.
//              ↓                       Because the interfaces themselves are not created during object creation; they already exist in the browser.
//      Properties & Methods              DOM Interfaces-> It Provide 1. Properties 2. Methods
//              ↓
//      addEventListener()                         Method provided by EventTarget interface
//            style                                 style → Property (provided by HTMLElement interfaces)     
//         innerText                                innerText → Property (provided by HTMLElement interface)   
//             ↓
//        Event Occurs
//             ↓
//       event.target




//  Note:->
// DOM Interfaces:
//
// DOM interfaces are built into the browser.
//
// When the browser creates DOM objects,
// those objects implement one or more   // implement means (follow, inherit)
// DOM interfaces and get properties
// and methods from them.

//  Ex :-
//  These are DOM interfaces
// DOM Interfaces

// Interface = A set of rules that provides properties and methods to DOM objects.

// EventTarget Interface
// Methods: addEventListener(), removeEventListener(), dispatchEvent()

// Node Interface
// Properties/Methods: parentNode, childNodes, appendChild(), removeChild()

// Element Interface
// Properties/Methods: classList, getAttribute(), setAttribute(), querySelector()

// HTMLElement Interface
// Properties: style, innerText, hidden, title

// Document Interface
// Methods: getElementById(), querySelector(), querySelectorAll()

// Interface Chain Examples:

// <h1>
// HTMLHeadingElement → HTMLElement → Element → Node → EventTarget

// <input>
// HTMLInputElement → HTMLElement → Element → Node → EventTarget

// <button>
// HTMLButtonElement → HTMLElement → Element → Node → EventTarget

// Easy Memory:

// EventTarget → addEventListener()
// Node        → parentNode
// Element     → classList
// HTMLElement → style, innerText
// Document    → getElementById(), querySelector()

// The element that triggers the event is called
// the Event Target.