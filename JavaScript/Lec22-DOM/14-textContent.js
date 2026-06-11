//     innerText

//  The innerText property in JavaScript is used to
//  get or set the visible text of an element.

//  It returns only the text that is visible on the webpage.
//  It ignores HTML tags and hidden content.

//  HTML Structure

//     <div class="code-example">
//         <h1>Welcome</h1>
//         <p>This is a paragraph.</p>
//     </div>



// Select an element
let codingEX = document.querySelector('.code-example');


// Get the visible text of the element
console.log(codingEX.innerText);

/*
Output Example:

Welcome
This is a paragraph.
*/


// Set new text
codingEX.innerText = 'Hello Nikhil!';

/*
Result on webpage:

<div class="code-example">
    Hello Nikhil!
</div>
*/