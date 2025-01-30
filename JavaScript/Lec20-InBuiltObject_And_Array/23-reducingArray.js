 //  Reducing Array 

 //  reduce Method :->    The reduce method processes each element of the array by calling the provided callback function.
 //  There are two parameters in reduce method. 1. accumulator    2. currentValue
//   1. accumulator:->  It keeps track of the cumulative result.
//   2. currentValue:->  It represents the current element being processed in the array.

//  Note :-> Initial Value:
//        0 is passed as the second argument to reduce, specifying the starting value for the accumulator.




 let  arr = [1,2,3,4];
//  let total = 0;

//  for(let value of arr)    //  we can get same value from this loop 
//     total =total+value;    // but instead of it we use reduce method.
//     console.log(total)  // output :-> 10
 

let accumulator = 0;
let sum = arr.reduce(function(accumulator , currentValue){
    return accumulator+currentValue;
},0);
   console.log(sum);     //  10

   //   Or by using Arrow function

let totalsum = arr.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
console.log(totalsum);            //   10

