//      The Event Object:->
//                When an event occurs, the browser creates an Event Object
//      and passes it to the event handler function.
//
// The Event Object contains information about the event,
// such as:
// - event type
// - target element
// - mouse position
// - keyboard key
// - timestamp
// etc.

//        document.addEventListener('click', function(e) {
 //           console.log(e);
//        });

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event) {
    console.log(event);
});

// output :
// Hello Everyone