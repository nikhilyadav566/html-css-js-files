//  EventTarget :->  It is a interface implemented by Object that can receive events may have listeners for them
//      It is top level entity.
//    There are three methods of EventTarget.
//    1. addEventListener()
//    2. removeEventListener()
//    3. dispatchEvent()
//    Classes :-> Classes are like blueprint.
//    Objects :->  Objects are like  reality. 
//    interface:-> interface are like blueprint.
//    Listener :->  A listener in JavaScript is a function that waits for a specific event
//                  (like a click, keypress,or scroll) to happen on an element and runs when that event occurs.

//    EventTarget => Node  => Element

//    EventTarget is a top level interface
//    Here Node inherited from EvenTarget and Element  inherited from node. 

//    In simple words, an event target is the thing that triggers an event.

//    For example, if you click a button on a webpage, the button is the event target because it is the thing that received the click event.

document.querySelector('button');
document.addEventListener('click',function(){
    document.body.style.backgroundColor = "orange";
});

document.addEventListener('dblclick',function(){
    alert('Hii Welcome to my webpage' );
});
