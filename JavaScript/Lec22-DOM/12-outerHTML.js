//     outerHtml

//   The outerHTML property in JavaScript allows you to get or set the
//   entire HTML content of an element, including the element itself.

// Select an element
let codingEX = document.querySelector('.code-example');

// Get the outerHTML of the element
console.log(codingEX.outerHTML);
/* Output Example:
<div class="code-example">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#" style="display:none;">Item 3</a></li>
</div>
*/

// Set a new value for the outerHTML
codingEX.outerHTML = '<p>This is a new paragraph replacing the element!</p>';

// The original element (with class "code-example") is now replaced by the paragraph.