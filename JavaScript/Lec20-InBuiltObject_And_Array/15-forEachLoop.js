//  Iterating an Array:

// syntax :

//  arrayName.forEach()(callback function)
// like as:-

let arr = [60,50,98,70];

let num = arr.forEach(function(number){
    console.log(number);
});
//  Output:
//  60 
//  50 
//  98 
//  70

//                  OR


//  we can use arrow function.

let marks =[45,60,90,85,75];

let mrks = marks.forEach(studentmark=> console.log(studentmark));
// Output :
// 45 
// 60 
// 90 
// 85 
// 75
