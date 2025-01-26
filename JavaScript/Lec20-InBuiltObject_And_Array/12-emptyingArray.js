// Emptying an Array:

// There area three ways to Emptying an Array.

//  1. arrayName = []

let numbers = [1,2,3,4,5];
numbers = [];               //    copy  by address
console.log(numbers);      //   Output []


// But here
let num = [6,7,8,9];
let num2 = num;            //   here num2 it is copy by address
console.log(num2);        //  Output [6 ,7, 8, 9]


 

//    2.  arrayName.length = 0;

let num3 = [25,26,27,28];
num3.length=0;             //  Modifying the length property of an array to 0 removes all its elements.
console.log(num3);         //  []


//    3.  arrayName.splice( index , arrayName.length)  ;

let num4 = [91,92,93,94,95];
num4.splice(0 ,num4.length);       //  here 0 zero show the index no. And (num.length) show the how many elements should be deleted.
console.log(num4);       // output []

//   splice(startIndex, deleteCount) removes deleteCount elements starting from startIndex.

//   In this case, 0 is the starting index, and num4.length specifies that all elements should be removed.

