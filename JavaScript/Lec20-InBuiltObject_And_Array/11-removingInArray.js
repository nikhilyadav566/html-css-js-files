//  Removing element in Array. 

//  There are three method that is used to remove element in Array.

//  1.  END -> arrayName.pop()  : ->  it is used to remove element from end side.

let num = [1,2,6,5];

num.pop();             
console.log(num);      //  [ 1, 2, 6 ]


//    2. Begin -> arrayName.shift() : ->  it is used to remvoe element from front side.

let students = ['Nikhil', 'Shayam', 'Abhishekh'];

students.shift();
console.log(students);     // Output  [ 'Shayam', 'Abhishekh' ]


//     3. Middle -> arrayName.splice(_ _)  : ->  it is used to remove data from middle .
//     In the splice method there are two parameters where 1st in index no of that element which you want to remove 
//     And 2nd is how many elements you wanted to delelted.

let numbers = [ 45, 65, 55, 98];

numbers.splice(2 , 1);
console.log(numbers);   //  Output  [ 45, 65, 98 ]
