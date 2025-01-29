// Filtering Arrays :- 
//                   It is used to filter the elements from array on a condition.


 let numbers = [1,2,3,4,5];

let filtered = numbers.filter(function(value){   // Using callback function or predicate function
        return (value%2===0);
});

   console.log(filtered);    //  Output :->  [ 2, 4 ]





//  By Arrow function

// let filtered =numbers.filter(value => value%2===0);

//     console.log(filtered);




   
//      2nd Question 

let numbers2 = [1,2,-1,-4];

let filtered2 = numbers2.filter(function(num){     // using callback function or predicat function
        return num>=0;
});

console.log(filtered2);    // Output  [ 1, 2 ]



// By  Arrow Function

// let filtered2 = numbers2.filter(num2 => num2>=0);

//     console.log(filtered2);
