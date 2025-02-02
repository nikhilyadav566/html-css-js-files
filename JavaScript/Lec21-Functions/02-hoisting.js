//  Hoisting:->
//             All function declaration Comes at top of file is called "Hoisting".
//             Which is done by JS engine automatically.


run();            //  here call function

//  function declaration
function run(){
    console.log('hoisting');
}

//  Output: -> hoisting



//     OR


// function declaration
function add(x,y){
    let sum = x+y;
    return sum;
};

let addition = add(2,5);     //  // Invoke the function and store the result in the 'addition' variable.
console.log(addition);     //  Output: -> 7

