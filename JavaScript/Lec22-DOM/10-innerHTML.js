//    Update Existing Content 

//    There area four properties to Update Existing Content on webpage.

//     1. innerHTML  :->  get/set HTML content
//     2. outerHTML
//     3. textContent
//     4. innerText


//  Note : -> There are two works of innerHTML.
//  1.   Get an element / all of its descended means(hierarchical) HTML content.
//  2.   Set an element's HTML content.

//    HTML Structure

    // <div class="code-example">
    //     <h1>Welcome</h1>
    //     <p>This is a paragraph.</p>
    // </div>

// Now by the using of .innerHTML we retrive these codes

// innerHTML

// Select the element
let codingEX = document.querySelector('.code-example');

// Get the content inside the element
console.log(codingEX.innerHTML);

/*
Output:
<h1>Welcome</h1>
<p>This is a paragraph.</p>
*/

// Replace only the content inside the div
codingEX.innerHTML = '<h2>Hello Nikhil</h2>';


// Before

/* 
<div class="code-example">
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</div> */


// After

/*
<div class="code-example">
    <h2>Hello Nikhil</h2>
</div> */


// The <div> remains.

//  NOTE:-> innerHTML - Only the content inside the element affects.