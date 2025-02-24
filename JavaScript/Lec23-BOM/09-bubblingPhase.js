//          3. Bubbling Phase (Going Up)
//  a.    Bubbling Phase: The event bubbles upward from the target element to the root of the DOM tree.
//          This is the default phase when you add an event listener.
//                Or
//  b.     Return event from target to root.

//      1st Method
let heading = document.querySelector('h4');

heading.addEventListener('click',function(event){
    event.target.style.fontSize = "40px"; 
},false);

//       2nd Method

document.querySelector('h5').addEventListener('dblclick',function(event){
    event.target.style.fontSize = "20px";
    event.target.style.color = "red";
    event.target.style.backgroundColor="gray";
},false);

//        3rd Method
