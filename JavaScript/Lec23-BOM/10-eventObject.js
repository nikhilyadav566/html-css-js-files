//      The Event Object:->
//           When an event occur that time addEventListener function receive event object which have lot of information.
//       And event receive from browser's.

//  document.addEventListener('click',Function(){
//        console.log(e);});

const content = document.querySelector('#wrapper');  // fetch element from idx.html file
content.addEventListener('click',function(event){   //  event object
    console.log(event);
})