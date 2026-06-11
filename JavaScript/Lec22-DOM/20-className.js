//     className

//  The className property is used to
//  get or set the class of an element.

//  It returns the class as a string.


// HTML Structure

/*
<h1 id="thnku" class="head">
    Thank You
</h1>
*/


// Select the element
let element = document.getElementById('thnku');


// Get the class name
console.log(element.className);

/*
Output:

head
*/


// Check the datatype
console.log(typeof element.className);

/*
Output:

string
*/


// Add a new class
element.className += ' superHead';

/*
Before:

<h1 id="thnku" class="head">
    Thank You
</h1>


After:

<h1 id="thnku" class="head superHead">
    Thank You
</h1>
*/