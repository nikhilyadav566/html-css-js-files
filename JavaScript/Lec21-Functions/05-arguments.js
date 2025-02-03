//  Arguments:->
//                All the arguments of a function stores in argument Object.

function sum(x,y){
    console.log(arguments);
}

let ans = sum(1,2);          // Output : [Arguments] { '0': 1, '1': 2 }
let num = sum(6,5,4,9,8);    // Output : [Arguments] { '0': 6, '1': 5, '2': 4, '3': 9, '4': 8 }



// Output : ->  [Arguments] { '0': 1, '1': 2 }    //  output :-> object created.
//  Output : -> [Arguments] {'0' : 6, '1' : 5, '2' : 4, '3' : 9 '4' : 8}

// Note :-> here we can see that Arguments like as array i.e [Arguments].
// But that is not array  But inside it there is an object created in first output i.e { '0': 1, '1': 2 }.
//   In which ('0' and '1' are the keys and 1 , 2  are the values of the object. )
//     in which '0' is mapped with 1 and '1' is mapped with 2. 

//   So we can say that these are the key-value pairs of an object.



//    OR

function sum2(a,b){
    let total = 0;
    for(let value of arguments)
        total = total+value;
    return total;
}

let result = sum2(6,5,4,9,8);
console.log(result);     // Output : 32
