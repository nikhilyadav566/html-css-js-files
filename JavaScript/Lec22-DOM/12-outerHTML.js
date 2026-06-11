//     outerHtml

//   The outerHTML property in JavaScript allows you to get or set the
//   entire HTML content of an element, including the element itself.

//    HTML Structure

    // <div class="code-example">
    //     <h1>Welcome</h1>
    //     <p>This is a paragraph.</p>
    // </div>


// Now by the using of .outerHTML we retrive these codes

// .outerHTML

// Select the element
let codingEX = document.querySelector('.code-example');

// Get the content inside the element
console.log(codingEX.outerHTML);

/*
Output:
<h1>Welcome</h1>
<p>This is a paragraph.</p>
*/

// Replace only the content inside the div
codingEX.innerHTML = '<section>Hello Nikhil</section>';


// Before

/* 
<div class="code-example">
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</div> */


// After

// <section>Hello Nikhil</section>

// The entire <div> is removed and replaced.

// NOTE:=> outerHTML- The entire element including its tag affects.

