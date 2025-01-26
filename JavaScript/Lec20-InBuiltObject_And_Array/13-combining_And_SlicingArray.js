 //  Combining & Slicing Arrays

 //   1. Combining:- 
 //                 concat() -> The concat() method merges two or more arrays into a new array.
 //                 It does not modify the original arrays (first and second remain unchanged).


 let first = [1,2,3,4,5];
 let second = [6,7,8,9,10];          // Output = [1,2,3,4,5,6,7,8,9,10]

 //  Combining arrays using 'concat'
 let combined = first.concat(second);
 console.log(combined);
 




 //  2.  Slicing:- 
 //                slice(start, end) : ->  The slice(start, end) method extracts elements from the array starting at start and ending before end.
//                 it is used to extract a portion of an array without modifying the original array.


 let numbers = [1,2,3,4,5,6,7,8,9];
 let num2 = numbers.slice(3,7);

//   start = 3 -> Start slicing at index 3 (value 4).
//   end = 7 ->  Stops slicing before index 7 (value 8).


 console.log(num2);    //  Output :-> [4,5,6,7]



 //  Full Slicing

 let num3 = numbers.slice();
 console.log(num3);       // Output:-> [1,2,3,4,5,6,7,8,9]
