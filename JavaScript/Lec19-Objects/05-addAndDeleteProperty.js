//  Dynamic Nature of Objects

function areaOfRectangle(length , breadth) {
    return rectangle = {
         length,
         breadth,

        area(){
            console.log(`The area of rectangle is ${length , breadth}`);
        }
    };
}

let ar = areaOfRectangle(3,2);

console.log(ar);      //  { length: 3, breadth: 2, area: [Function: area] }
ar.area();               //   The area of rectangle is 2
ar.length=4;   // length has added in the object
ar.breadth=5;   // breadth has added in the object
console.log(ar);                                   // { length: 4, breadth: 5, area: [Function: area] 
ar.color='yellow';   // color has added in the object
console.log(ar);       //       { length: 4, breadth: 5, area: [Function: area], color: 'yellow' }     

// Now delete from the object.

delete ar.color;
console.log(ar);     //  Now color has deleted from the object.   { length: 4, breadth: 5, area: [Function: area] }
 


//  2nd Type by Constructor Function.


function CreateStudentMarks(){
    this.maths=56;
    this.computer=93;
    this.english=65;
    this.marks=function(){
        console.log(`You got ${this.maths} , ${this.computer} and ${this.english} marks in maths, computer and english.`);
    };
}

let results = new CreateStudentMarks();

results.marks();    //   You got 56 , 93 and 65 marks in maths, computer and english.
results.science=78;    //  add new property
results. social_science=54;     //  addition of new property
results. sanskrit=97;   // addition of new property
console.log(results);      //  CreateStudentMarks { maths: 56, computer: 93, english: 65, marks: [Function (anonymous)],}

delete results.sanskrit;     // To delete new property.
console.log(results);                //  CreateStudentMarks { maths: 56, computer: 93, english: 65, marks: [Function (anonymous)], science: 78, social_science:54}


