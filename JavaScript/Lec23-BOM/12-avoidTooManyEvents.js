//    Avoid too many events:->
//            instead of giving individual element give parent element event.


let myDiv = document.createElement('div');    // create <div> element in memory but does not add it to the page yet.

for(let i=1; i<=5; i++){                 
    let newElement = document.createElement('p');     //  create  a new <p> element during each iteration of the loop.
    newElement.textContent = 'This is para' + i;      // Text is set(e.g., "This is para 1", "This is para 2").

    newElement.addEventListener('click',function(event){    //  adding an EventListener to each <p> element means Every <p> element gets its own event listener.
        alert('I have clicked on Para');         //  This creates 5 separate event listeners, which is unnecesary.
    });
    myDiv.appendChild(newElement);      //  The newly created <p> element is added inside myDiv
}
document.body.appendChild(myDiv);   // Now, the <div> (which contains 5 <p> elements ) is added to the <body>.
                               //  All <p> elements become visible on the page.

//   Note:->>

//             ⚠️ Problem: Too Many Event Listeners
// The current code adds 5 separate event listeners (one for each <p>).
// This is inefficient if you have many elements (e.g., 100 or 1000).
// Instead, use event delegation by adding one event listener to <div>.
// This technique is called Event Delegation, and it works because of event bubbling.

//  So we have to optimized this code.  Here used single listener for div

//        1st method

let myDiv2 = document.createElement('div');   //  create a new <div> element

myDiv2.addEventListener('click', function(event){       //   Add a click listener to the div (parent element)
    alert('I have clicked on :  '+ event.target.textContent);
});

for(let i =1; i<=5; i++){                         //  Create 5 <p> elements and append them to the <div> 
    let newElement = document.createElement('p');
    newElement.textContent = "This is para"+i;

    myDiv2.appendChild(newElement);        //  Apppend the <p> to the element to the <div>
}
document.body.appendChild(myDiv2);     // Append the <div> to the document body



// Note:->

// Event Delegation:
// Instead of adding separate event listeners to each child element,
// add a single event listener to the parent element.
//
// When a child element is clicked, the event bubbles up to the parent.
// The parent listener can identify the clicked child using event.target.
//
// Benefits:
// 1. Less memory usage.
// 2. Better performance.
// 3. Works for dynamically added elements.

//   For Event Delegation, the listener is attached to a parent element, not to each child element.


//           To make Event Delegation work, remember these points:

//   1.  Attach the listener to a Parent Element
//   2. Event Bubbling Must Happen
//   3. 3. Use event.target
//   4. Parent Must Exist
//   5. Don't Stop Bubbling



// event.target is not mandatory for event delegation,
// but it is commonly used to identify the actual child
// element that triggered the event.
// Usually necessary if you want to know which child element was clicked.