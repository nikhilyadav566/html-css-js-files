/*
====================================================
DOM vs BOM (Document Object Model vs Browser Object Model)
====================================================

JavaScript interacts with two main things:

1. DOM (Document Object Model)
2. BOM (Browser Object Model)

----------------------------------------------------
1. DOM (Document Object Model)
----------------------------------------------------

Definition:
DOM represents the HTML document (web page).

Purpose:
Used to access, read, modify, add, or remove HTML elements.

Root Object:
document

Examples:
- document.getElementById()
- document.querySelector()
- element.classList
- element.innerHTML
- element.textContent

HTML Example:

<h1 id="title">Hello</h1>

JavaScript Example:

let heading = document.getElementById("title");
heading.textContent = "Welcome";

Result:
The text changes from "Hello" to "Welcome".

This is DOM because we are modifying the webpage.

----------------------------------------------------
2. BOM (Browser Object Model)
----------------------------------------------------

Definition:
BOM represents the browser window and browser features.

Purpose:
Used to interact with the browser itself.

Root Object:
window

Examples:
- alert()
- setTimeout()
- location
- history
- navigator
- screen

Example:

alert("Welcome");

This opens a browser popup.

Another Example:

console.log(window.innerWidth);

This shows the browser window width.

This is BOM because we are interacting with the browser.

----------------------------------------------------
DOM Objects
----------------------------------------------------

document
document.body
document.head
document.getElementById()
document.querySelector()
document.querySelectorAll()

Example:

let element = document.querySelector("h1");
console.log(element);

----------------------------------------------------
BOM Objects
----------------------------------------------------

window
location
history
navigator
screen

Examples:

console.log(location.href);      // Current URL
console.log(navigator.userAgent); // Browser information
console.log(screen.width);        // Screen width

----------------------------------------------------
Relationship Between DOM and BOM
----------------------------------------------------

window
  |
  └── document
          |
          └── HTML Elements

The document object is inside the window object.

Example:

console.log(window.document);

Output:
#document

----------------------------------------------------
DOM vs BOM Comparison
----------------------------------------------------

DOM:
- Represents HTML document.
- Root object: document.
- Used to manipulate webpage content.
- Standardized by W3C.

Examples:
document.getElementById()
document.querySelector()
classList
innerHTML

----------------------------------------------------

BOM:
- Represents browser window.
- Root object: window.
- Used to interact with browser features.
- Managed by browser.

Examples:
alert()
location.href
history.back()
navigator.userAgent

----------------------------------------------------
Easy Trick To Remember
----------------------------------------------------

DOM = Page

Think:
"Anything related to HTML elements = DOM"

Examples:
document.getElementById()
document.querySelector()
classList
innerHTML

----------------------------------------------------

BOM = Browser

Think:
"Anything related to browser window = BOM"

Examples:
window
alert()
location
history
navigator
screen

----------------------------------------------------
Real-Life Examples
----------------------------------------------------

DOM Example:

let heading = document.getElementById("title");
heading.style.color = "red";

Changes the webpage.

----------------------------------------------------

BOM Example:

alert("Hello User");

Interacts with browser.

----------------------------------------------------

DOM Example:

document.body.style.backgroundColor = "yellow";

Changes page background.

----------------------------------------------------

BOM Example:

console.log(location.href);

Shows current page URL.

----------------------------------------------------

DOM Example:

document.querySelector("p").textContent = "New Text";

Changes paragraph text.

----------------------------------------------------

BOM Example:

history.back();

Moves browser to previous page.

----------------------------------------------------
Summary
----------------------------------------------------

DOM = HTML Page

document -> HTML Elements

Examples:
getElementById()
querySelector()
classList
innerHTML

----------------------------------------------------

BOM = Browser Window

window -> Browser Features

Examples:
alert()
location
history
navigator
screen

----------------------------------------------------

Remember:

DOM = Control Webpage
BOM = Control Browser

====================================================
*/