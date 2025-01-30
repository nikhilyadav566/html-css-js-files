//  Chaining 

let numbers = [2,8,-8,-4];

let filtered = numbers.filter(function(num){       // The filter method creates a new array containing only the numbers that satisfy the condition num >= 0 (non-negative numbers).
       return num>=0;                              //  Result of filtered: [2,8]
});

let mapping = filtered.map(function(number){       //  The map method transforms each number in the filtered array into an object with a value property.
      return {value:number}                        //   Result of mapping: [ { value: 2 }, {value: 8}]
});                                                

console.log(mapping);    //     [ { value: 2 }, { value: 8 } ]


                  // OR


//   By the using of Arrow function.

//    let filtered = numbers.filter(num => num>=0  );
//    let mapping = filtered.map(number => ({value:number}));

//    console.log(mapping);
