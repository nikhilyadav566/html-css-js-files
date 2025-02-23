let parent = document.querySelector('#list');

let newElement = document.createElement('h2') //create h2 
// add content in h2 
let content = document.createTextNode("This is Heading");
newElement.appendChild(content);     // to add we should use .appendChild()
parent.appendChild(newElement);

// suppose it is given in html file
// <div id ='list'></div>

//  The output of that above js code after execution will be 

//  <div id = 'list'>
//     <h2>This is Heading</h2>
//   </div>