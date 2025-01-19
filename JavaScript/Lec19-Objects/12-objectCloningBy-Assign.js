//  By Assign

let rectangle1={
    length:10,
    breadth:5,
};

// Cloning rectangle1 into rectangle2
let rectangle2=Object.assign({},rectangle1);

console.log(rectangle2);
// Output: {length: 10, breadth: 5}
