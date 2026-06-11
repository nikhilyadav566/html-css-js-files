//     classList

//  The classList property is used to
//  manage the classes of an element.

//  It can:
//  1. add()      -> Add a class
//  2. remove()   -> Remove a class
//  3. toggle()   -> Add or remove a class
//  4. contains() -> Check if a class exists

//  It returns a DOMTokenList object.


/* <h1 id="thnku" class="head">
    Thank You
</h1> */

let element = document.getElementById('thnku');
console.log(element.classList);
console.log(typeof element.classList);


// Here 'superHead' is a class name

element.classList.add('superHead');      // Add class
element.classList.remove('superHead');   // Remove class

// Toggle:
// If class exists -> remove it
// Otherwise -> add it
element.classList.toggle('superHead');

// Check whether the class exists

console.log(element.classList.contains('superHead')); //true
element.classList.toggle('superHead'); 
console.log(element.classList.contains('superHead')); //false  