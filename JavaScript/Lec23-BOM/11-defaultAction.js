//      The Default Action:->
//          All element have some default action we can prevent it by.

//       prevent.Default();

let link = document.querySelector('.def');
link.addEventListener('click',function(event){
    event.preventDefault();
    alert('maza aaya default Action applied here');
});
