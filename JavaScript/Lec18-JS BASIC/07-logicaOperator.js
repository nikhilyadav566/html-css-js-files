//  Basically There are three types of logical Operator

//  1. AND (&&)       2. OR (||)         3. NOT (! )

//  These Operators are used for multiple conditions.

//  1. AND (&&) :- All conditions have to be true

let a = 15;
let b = 16;
let c = 17;

console.log(a<b && c>b && a<c);
console.log(b>a && a>c && b<c);

//  2. OR (||)  :- Any single condition have to be true.

let d = 3;
let e = 4;
let f = 5;

console.log(d<e || e<f || f>d);
console.log(d>e || f<d || e>f);

// 3. NOT :- it gives the opposite ans if result will be true then after applying this operator 
//  result become false similary false result become true. 

let num1 = 7;
let num2 = 8;
let num3 = 9;

console.log(!(num1>num2 && num2>num3 && num3<num1));
console.log(!(num1<num2 && num2<num3 && num3>num1));;
