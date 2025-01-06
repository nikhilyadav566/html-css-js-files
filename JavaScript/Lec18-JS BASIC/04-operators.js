// Basically There are five types of Operators.

//  1. Arithmetic           2. Assignment           3. Comparison
//  4. Bitwise              5. Logical


//  1. Arithmetic

let a=1;
let b=2;
let c=a+b;
console.log(c);

let d=12;
let e=5;
console.log(d%e);

let f=2;
let g=3;
let h=(f**g);  // **it means power
console.log(h);


//    note:- 
//           Actually these two operators are more important  i.e...
// a. Pre-increment    b. Post-increment

// a. Pre-increment :- It means users should be first increment the value and after it use the value.
// ex:- let x = 10;
// console.log(++x);  
// now it's value will be 11.

// b. Post-incremetn :- It means users should be first use the value and after it increment the value.
// ex:- let a = 21;
// console.log(x++);
// now it's value will be 21 but after it's value will be increment .
// and if right now print once more then will it's value will be increase and become 22.
// console.log(a);
// 22


// Similarly same process are used in 
// Pre-decrement and Post-decrement


let x=5;
let y=10;
 
let ans1 =(++x)*(--y);
let ans2 =(x++)*(--y);
let ans3 =(x++)*(y--);
let ans4 =(++x)*(y--);

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);



 
