//  Mapping Array:->
//                  It is used to map each elements of arrays to something else.

let numbers = [7,8,9,10];

let mapping = numbers.map(function(value){
      return 'student_no'+ value;
});

console.log(mapping);       

// Output :-> [ 'student_no7', 'student_no8', 'student_no9', 'student_no10' ]



//    By Arrow Function

// let mapping = numbers.map(value => 'student_no'+value);
//    console.log(mapping);
