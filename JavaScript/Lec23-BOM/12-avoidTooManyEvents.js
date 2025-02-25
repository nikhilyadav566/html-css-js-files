//    Avoid too many events:->
//            instead of giving individual element give parent element event.


let myDiv = document.createElement('div');    // create <div> element in memory but does not add it to the page yet.

for(let i=1; i<=5; i++){                 
    let newElement = document.createElement('p');     //  create  a new <p> element during each iteration of the loop.
    newElement.textContent = 'This is para' + i;      // Text is set(e.g., "This is para 1", "This is para 2").

    newElement.addEventListener('click',function(event){    //  adding an EventListener to each <p> element means Every <p> element gets its own event listener.
        alert('I have clicked on Para');         //  This creates 10 separate event listeners, which is unnecesary.
    });
    myDiv.appendChild(newElement);      //  The newly created <p> element is added inside myDiv
}
document.body.appendChild(myDiv);   // Now, the <div> (which contains 10 <p> elements ) is added to the <body>.
                               //  All <p> elements become visible on the page.

//   Note:->>

//             ⚠️ Problem: Too Many Event Listeners
// The current code adds 10 separate event listeners (one for each <p>).
// This is inefficient if you have many elements (e.g., 100 or 1000).
// Instead, use event delegation by adding one event listener to <div>.


//  So we have to optimized this code.  Here used single listener for div

//  1st method

let myDiv2 = document.createElement('div');   //  create a new <div> element

myDiv2.addEventListener('click', function(event){       //   Add a click listener to the div
    alert('I have clicked on :  '+ event.target.textContent);
});

for(let i =1; i<=5; i++){                         //  Create 10 <p> elements and append them to the <div> 
    let newElement = document.createElement('p');
    newElement.textContent = "This is para"+i;

    myDiv2.appendChild(newElement);        //  Apppend the <div> to the document body
}
document.body.appendChild(myDiv2);


