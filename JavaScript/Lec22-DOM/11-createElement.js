newElement = document.createElement('h1') //create <h1> element
// add content in h1 
let content = document.createTextNode("This is Heading");  // create text which is used inside element
newElement.appendChild(content);   // Insert the text node inside the <h1> element
console.log(newElement)       //  now prints it

//  Out will be 
//  <h1> This is Heading </h1>