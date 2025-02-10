//    Update Existing Content 

//    There area four properties to Update Existing Content on webpage.

//     1. innerHTML  :->  get/set HTML content
//     2. outerHTML
//     3. textContent
//     4. innerText


//  Note : -> There are two works of innerHTML.
//  1.   Get an element / all of its descended means(hierarchical) HTML content.
//  2.   Set an element's HTML content.


//  Retrieve and log the HTML content
let codingEX = document.querySelector('.code-example');
  console.log(codingEX.innerHTML);      // Here we retrieve (get) the HTML content of the `.code-example` element.

// Output 
/* <li><a href="#">Item 1</a></li>
<li><a href="#">Item 2</a></li>
<li><a href="#" style="display:none;">Item 3</a></li> */

codingEX.innerHTML = ' '   // Here we set (update) the HTML content to an empty string.
                    //  output : ' '