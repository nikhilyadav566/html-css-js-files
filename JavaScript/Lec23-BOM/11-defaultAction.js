// The Default Action:
// Many HTML elements have a default action.
//
// Examples:
// <a>    -> Opens a link
// <form> -> Submits the form
// <input type="checkbox"> -> Checks/Unchecks itself
//
// We can prevent the default action using:
// event.preventDefault();

let link = document.querySelector('.def');

link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Maza aaya! Default action prevented.');
});

// Note:-> preventDefault() is a method of the Event Object.
// preventDefault() is a method of the Event Object.
// Therefore, it must be called using:
// event.preventDefault();

// instead of 'event' we can use only 'e'.