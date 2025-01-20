// Object cloning by  Spread 

let rectangle1={
    length:15,    
    breadth:7,
};


// Cloning rectangle1 into rectangle2 usingn spread operator

let rectangle2={...rectangle1};  // (...):-> it is spread operator.
console.log(rectangle2);

// Output : { length: 15, breadth: 7}
