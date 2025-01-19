// 1.Iteration
// Object cloning in JavaScript refers to the process of creating a copy of an object. 

let rectangle={
    length:5,
    breadth:4,
};

let rectangle2={};  // initialize an empty object

// Cloning rectangle1 into rectangle2
for(let key in rectangle){
    rectangle2[key]=rectangle[key];
}

console.log(rectangle2);  //  { length:5, breadth:4 }
