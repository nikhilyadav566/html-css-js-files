//  Default Parameter :-> 
//                       When we give default parameter then remaining must be -


function interest(p,r,y){
    return p*r*y/100;
}

console.log(interest(1000, 10,  5));  // Output : 500

// console.log(interest(1000, 10,));   //  output : NaN  :-> Not a Number
// console.log(interest(10,5));        //   output : NaN  :-> Not a Number

// console.log(interest(1000, undefined, 8));  // output : 8000
// console.log(interest(1000, 6, undefined));  // output : 6000
