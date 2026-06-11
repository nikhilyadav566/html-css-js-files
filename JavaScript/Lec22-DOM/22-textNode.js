//     Add Text to an Element

//  There are two ways to add text to an element.

//  Method 1: Using createTextNode()

// Create a <p> element
let newPara = document.createElement('p');

// Create a text node
let textPara = document.createTextNode('I am the text');

// Add text inside <p>
newPara.appendChild(textPara);

// Add <p> to the webpage
content.appendChild(newPara);

/*
Output:

<p>I am the text</p>
*/

//  Method 2: Using textContent (Mostly Used)

// Create a <p> element
let myPara = document.createElement('p');

// Add text directly
myPara.textContent = 'I am the text';

// Add <p> to the webpage
content.appendChild(myPara);

/*
Output:

<p>I am the text</p>
*/