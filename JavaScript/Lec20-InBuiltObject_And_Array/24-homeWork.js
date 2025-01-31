// Q.1  ->  Apply combining and Slicing on a Object.
// Q.2  ->  Object Sort using callback function.
// Q.3  ->  Sort Array By callback function.


//  Q.1  Combining Objects
//  To combine two or more objects, you can use the spread operator (...) or Object.assign.

let player = {name:'Virat',player:'India',game:'Cricket'};
let player2 = {name2:'Ramandeep',player2:'India',game2:'Hockey'};

//  concat is only applicable for array.

     let combined = {...player,...player2};      //  by spread operator
//    let combined = Object.assign(player ,player2);     // by Object.assign()
console.log(combined);

//  Output :-   {name:'Virat',player:'India',game:'Cricket'name2:'Ramandeep',player2:'India',game2:'Hockey'}



//     Now Slicing: ->
//                  Slicing an object refers to extracting specific key-value pairs from it. You can achieve this using destructuring or utility functions.



//  Q.1 (IInd) For Slicing.

//   Slice object: Extract specific key-value pairs from the combined object.

let {name, game} = combined;     // Extract 'name' and 'game'

let sliced = {name, game};
console.log("Sliced Object:", sliced);

//  Output : Sliced Object: { name: 'Virat', game: 'Cricket' }


//              OR  new example of slicing

let Marks = {Math:65, English:95, Science:68, Computer:85};

//  Extract specific properties
let{English,Science} = Marks;

//  now create a new object with the extracted properties.
let slicedMarks  = {English, Science};

console.log(slicedMarks);

//  Output: -> { English: 95, Science: 68 }
