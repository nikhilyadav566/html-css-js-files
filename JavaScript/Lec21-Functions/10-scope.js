// Three wAys to create variable

// #1

console.log("var");   // var
var a = 10;
console.log(a);       // 10

a = 20;
console.log(a);        // 20

{
  var a = 30;
}
console.log(a);         // 30

// #2 - Let

console.log("Let");     // Let
let b = 10;             
console.log(b);         //  10

// let b = 20; - Error      
b = 20;
console.log(b);          // 20

{
  let ba = 40;
  console.log(ba);       // 40
}
// console.log(ba); - Error

// #3 
console.log("const");        // const

const c = 10;
console.log(c);             // 10

// c = 20; //Error
console.log(c);             // 10
