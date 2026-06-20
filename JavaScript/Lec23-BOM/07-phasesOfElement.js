 //   Phases of an Event
//      There are three main phases of event propagation in the Event Flow Model.

 // 1. Capturing Phase (Trickling Down)
 // 2. Target Phase (At the Target)
 // 3. Bubbling Phase (Going Up)

 //  Note: -> By default addEventListener occur in Bubbling phases.

//                  1. Capturing Phase (Trickling Down):->
//   a. The event start at the window object and moves down through the DOM tree towards the target element.
//   b. This allows parent elements to capture the event before it reaches the target.

//  1st Method

let paragraph = document.querySelector('p');

function show(){       //  event object
    alert('Hii! Welcome To Capture Phase');
    console.log('I have clicked ');     // shows the clicked element
    paragraph.style.color="red";
}
if(paragraph){
    paragraph.addEventListener('click',show,true);
}

//   note : -> true value is used in captured pahase to capture. it is an argument.
//    a.  The third argument (true) ensures the event is handled in the capturing phase (instead of the default bubbling phase).
//    b.  The event starts at the window and trickles down through parent elements until it reaches the <p>.

//     After applying an event on an event target in a document, we also use a function to define what happens after the event occurs.
//              That function is called an event handler.
//           PROCESS OF EXECUTION.
//     The click event starts from window → travels down the DOM tree → reaches <p> which is used in html file.
//     The event is captured at <p> because we used true.

//   2nd Method

document.querySelector('.wrapper').addEventListener('click',function(){
    alert("Event at Capture phase");
    console.log("Capture Element ");
    document.querySelector('.wrapper').style.color = "blue";   
},true);  //  'true' enables capturing phase


//    3rd Method 

document.querySelector('span').addEventListener('click',function(event){     //   here it is an event object.
    alert("This Event at Captured Phase");
    event.target.style.color = "green";  // event.target refers to the actual element clicked. OR Change the color of the clicked element.
},true);


// Note :-> true enables Capturing Phase.
//
// Without true,
// addEventListener() uses Bubbling Phase by default.


//   NOTE :-> structure of dom tree like this work

// <!DOCTYPE html>
// <html>
// <head>
//     <title>DOM Tree Example</title>
// </head>
// <body>
//     <div id="parent">
//         <p class="child">Hello, Nikhil!</p>
//     </div>
// </body>
// </html>

//  1️⃣ When an event occurs, the event flow starts from window,then document, then html, body, and continues down to the target element.
//  2️⃣ It moves downward (Capturing Phase) until it reaches the Target Element (event.target).
//  3️⃣ If capturing is enabled (true), it executes the event handler in the capturing phase.
//  4️⃣ At the Target Element, the Target Phase occurs.
//  5️⃣ After the Target Phase,the event normally continues into the Bubbling Phase.


// Downward  → Capturing Phase
// At Target → Target Phase
// Upward    → Bubbling Phase


// Another Example Simple way Understand it

let parent = document.querySelector('#parent');
let btn = document.querySelector('#btn');

parent.addEventListener('click', function(){
    console.log('Parent');
}, true);

btn.addEventListener('click', function(){
    console.log('Button');
});

//  output 
//        Parent
//        Button

// because capturing runs first

//  If true is remove.

parent.addEventListener('click', function(){
    console.log('Parent');
});

btn.addEventListener('click', function(){
    console.log('Button');
});

// Output :
// Button 
// Parent
// because bubbling is the default