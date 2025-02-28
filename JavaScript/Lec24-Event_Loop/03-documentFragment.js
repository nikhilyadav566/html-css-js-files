//   Document Fragment :->
//      It is light weight document object.

//  DocumentFragment is a temporary in-memory container for DOM elements.
//  When you add elements to the DocumentFragment, these changes are not reflected on the page immediately.
//  While adding elements to the DocumentFragment, no reflow or repaint happens because the fragment is not part of the visible page yet.
//  Reflow and repaint only happen when the DocumentFragment is appended to the actual page (DOM).
//  This means you can make changes to many elements without affecting performance until you actually add the fragment to the page.
//  Once added to the page, the browser does a single reflow and repaint for all the changes at once.

// note:->  It's a temporary container that holds DOM elements in memory without directly affecting the page or browser layout.

let fragment = document.createDocumentFragment();    // create a DocuementFragment

for(let i=5; i<=10; i++){
    let newElement = document.createElement('p');    //  create new <p> element
    newElement.textContent = 'This is Para'+i;         //  set text content

    fragment.appendChild(newElement);           //  Append each new <p> to the fragment
}
    document.body.appendChild(fragment);        //  Append the entire fragment to the body so here creates 1 reflow and repaint.

    // Finally, it appends the entire DocumentFragment to the body at once,
    //      which causes only one reflow and repaint.