//     remove()

//  The remove() method is used to remove an element
//  from the webpage.

//  First select the element.
//  Then call remove() on that element.


// HTML Structure

//     <div class="container">
//         <h1 id="thnku">Thank You</h1>
//     </div>


// Select an element
let element = document.querySelector('#thnku');

// Remove the element
element.remove();


/*
Before:

<h1 id="thnku">Thank You</h1>


After:

(The h1 element is completely removed)
*/

//                                  OR

//   for removeChild()

//  The removeChild() method removes a child element
//  from its parent element.

//  Syntax:
//  parentElement.removeChild(childElement)


// Select parent element
let parent = document.querySelector('.container');

// Select child element
let child = document.querySelector('#thnku');

// Remove child from parent
parent.removeChild(child);


/*
Before:

<div class="container">
    <h1 id="thnku">Thank You</h1>
</div>


After:

<div class="container">
</div>
*/
