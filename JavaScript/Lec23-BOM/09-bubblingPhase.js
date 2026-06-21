//          3. Bubbling Phase (Going Up)
//  a.    Bubbling Phase: The event bubbles upward from the target element to the root of the DOM tree.
//          This is the default phase when you add an event listener.
//                Or
//  b.     Return event from target to root.

//      1st Method
let heading = document.querySelector('h4');

heading.addEventListener('click',function(event){
    event.target.style.fontSize = "40px"; 
},false);

//       2nd Method

document.querySelector('h5').addEventListener('dblclick',function(event){
    event.target.style.fontSize = "20px";
    event.target.style.color = "red";
    event.target.style.backgroundColor="gray";
},false);


// Define :- The Bubbling Phase is the phase in which the event travels upward from the target element through its parent elements back toward the document.

// Direction :- target ↑ parent ↑ body ↑ html ↑ document

// Example:
//         After the button receives the click event, the event bubbles up to its parent elements.

// Capturing Phase = Event travels from document to the target.

// Target Phase    = Event reaches the clicked element.

// Bubbling Phase  = Event travels from the target back to document.

//                  Complete Flow

//                     document          (document means :- whole webpage)
//                         ↓
//                Capturing Phase
//                          ↓
//                     Target Phase
//                         ↓
//                  Bubbling Phase
//                         ↑
//                    document