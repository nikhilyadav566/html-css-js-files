  //  insertAdjacentHTML():-
  //                it has to be called 2 arguments
  //   1.             location / Position  -> where
  //   2.            HTML text / content to be inserted -> what


  //  Now, There are four location where we can insert.
  //   1.  beforebegin      ->   Inserts before the parent element itself.
  //   2.  afterbegin       ->   Inserts at the beginning inside the parent.
  //   3.  before end       ->   Inserts at the end inside the parent (this is what you're using).
  //   4.  after end        ->   Inserts after the parent element itself.
 


   //  Suppose it is given in html file

    // <div id="container">
    //    <p>Existing Paragraph</p>
    // </div>

    // js code.

    let parent = document.querySelector('#container'); // Selecting the parent element

    let newElement1 = document.createElement('p'); // Creating a new <p> element
    newElement1.textContent = 'Before Begin'; 
    // Inserting before the parent element (outside)
    parent.insertAdjacentElement('beforebegin', newElement1);


    let newElement2 = document.createElement('p');
    newElement2.textContent = 'After Begin';
    // Inserting at the beginning (as the first child inside parent)
    parent.insertAdjacentElement('afterbegin', newElement2);
    

   let newElement3 = document.createElement('p');
   newElement3.textContent = 'Before End';
   // Inserting at the end (as the last child inside parent)
   parent.insertAdjacentElement('beforeend', newElement3);

   let newElement4 = document.createElement('p');
   newElement4.textContent = 'After End';

   // Inserting after the parent element (outside)
   parent.insertAdjacentElement('afterend', newElement4);



//  Output:

/* <p>Before Begin</p>  <!-- Inserted before the parent (outside) -->

<div id="container">
    <p>After Begin</p>   <!-- Inserted at the beginning inside the parent -->
    <p>Existing Paragraph</p>
    <p>Before End</p>   <!-- Inserted at the end inside the parent -->
</div>

<p>After End</p>  <!-- Inserted after the parent (outside) --> */
