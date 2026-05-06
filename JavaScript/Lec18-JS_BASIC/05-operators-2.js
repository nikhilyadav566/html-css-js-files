// 2. Assignment Operator
   let a = 5;
   console.log(a);

// let x=x+5;  or x+ =5;
// let a=a*3;  or a* =3;
// let num=53; or num = num/2 ; or num/ =2;

//  3. Comparison

let x = 5;
let y = 6;

console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x===y);    // (===:- is known as strict equality)
console.log(x!==y);

//  Note:-
//          There are two types of Equality Operator.

//   1.   Loose equality (==) here:- only value will be same.
//   2.   Strict equality (===) here:- data and value both will be same.
//  ex:-

let num = 3;
let str = '3';
console.log(num==str);
console.log(num===str);
  
// Here (num & str) are played role as data which are not same 
// because ( num store integers ) where ( str store strings ) but thier values are same i.e 3
// so first will be true because it is a loose equality but second will be false because
// datas are not same only values are same so it's will be false.
