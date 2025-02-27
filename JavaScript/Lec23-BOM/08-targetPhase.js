//               2. Target Phase (At the Target)
//        Target Phase:-> The event reaches the target element where it was originally triggered

//  a. The Target Phase occurs when the event reaches the target element (the element where the event was triggered).
//  b. It happens after the event has traveled through the capturing phase (if capturing is enabled) and before the bubbling phase begins.
//  c. During the Target phase, the event handler attached to the target element will be executed.
  //     OR 
  //   in simple word:-> Event function run on target item.


//    The event moves in Capturing and Bubbling Phases, (towards down and up directiion)
//      but in the Target Phase, it stops and executes the event at that element.

  //  1st Method
  let para = document.querySelector('.first');

  para.addEventListener('click',function(){
    para.style.backgroundColor = "lightblue";
    para.style.color ="red";
  });

  //    2nd Method

  document.querySelector('h2').addEventListener('click',function(){
    document.querySelector('h2').style.backgroundColor ="gray";
});

//    3rd Method

  document.querySelector('h3').addEventListener('click',function(event){
    document.body.style.backgroundColor = "orange";    //  Change the backgroundColor of the body
    event.target.style.backgroundColor = "green";        //   change the background color of element
    event.target.style.color = "white";     // change the color of the text.
  });


  //  Note:-> event.target refers to the element
  //  But The body property is part of the document object, not individual HTML elements.
  //  so to change body background we have to use document to change body background color instead of event.target .