//  It is standard way to measure how long your code takes to run.

//  performance.now() method provive time span.
  
// adding 5para

const t1 = performance.now();  //  performance.now() records the precise timestamp (in milliseconds) at the moment it is called
                                  //   here t1 stores the starting time to measure how long the upcoming code takes to run.

let myDiv = document.createElement('div');

for(let i=1; i<=5; i++){    //  fix the loop
    let newElement = document.createElement('p');    //  creates a new <p> element
    newElement.textContent = 'This is Para' +i;       //  Sets the text inside the <p>.

    myDiv.appendChild(newElement);             //  Add the <p> to the page
}
document.body.appendChild(myDiv);
const t2 = performance.now();   //  Records the current time in t2 after the loop finishes. And Computes execution time: (t2 - t1).
console.log("this took "+(t2-t1) + "ms");    //   logs the time in milliseconds to the console.
//  Output:-> this took 0.3999999761581421ms


//             2nd method
//  Optimizing the Code: Using a div to Reduce Reflows

const t3 = performance.now();

let myDiv2 = document.createElement('div');

for(let i = 20; i<=25; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para '+i;

    myDiv2.appendChild(newElement);

}
document.body.appendChild(myDiv2);
const t4 = performance.now();
console.log("this took "+(t4-t3)+"ms");

//  Output :-> this took0.10000002384185791ms

// Similarly same process happend during optimizing the code 
