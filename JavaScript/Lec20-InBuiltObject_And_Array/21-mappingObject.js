//   Mapping with Objects

 let arr = [10,20,-4,-53];

 let mapWithObject = arr.map(function(num){
    return {value: num}

 });

 console.log(mapWithObject);

 //  Output :->  [ { value: 10 }, { value: 20 }, { value: -4 }, { value: -53 } ]



 //  By Arrow function

// let mapWithObject = arr.map(num => ({value:num}));
//         console.log(mapWithObject);
