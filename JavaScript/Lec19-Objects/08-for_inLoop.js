 //  Iterating through Objects

 let rectangle={
    length:2,
    breadth:4,
 };

 //  for-in loop
 for(let key in rectangle){
  // keys are reflected through key variable
  // keys are reflected throught rectangle[key]
   console.log(key , rectangle[key]);
 }

 // output:->
 //   length    2
 //   breadth   4

 // By for-in loop :-> we get all key and their value of objects.
