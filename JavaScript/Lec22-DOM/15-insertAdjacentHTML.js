  //  insertAdjacentHTML():-
  //                it has to be called 2 arguments
  //   1.             location / Position  -> where
  //   2.            HTML text / content to be inserted -> what


  //  Now, There are four location where we can insert.
  //   1.  beforebegin      ->   It insert HTML text as previous sibling.       
  //   2.  afterbegin       ->   It insert HTML text as child.
  //   3.  before end       ->   
  //   4.  after end


  let parent = document.querySelector('#list');
// console.log(parent);

// Create Child 
let child1 = document.createElement('li');
let content1 = document.createTextNode("Before End");
child1.appendChild(content1);

// As a Element we can send our element 
parent.insertAdjacentElement('beforeend',child1);


let child2 = document.createElement('li');
let content2 = document.createTextNode("Before Begin");
child2.appendChild(content2);

// As a HTML Send - using string 
parent.insertAdjacentHTML('beforebegin','<li>BEfore Begin</li>');