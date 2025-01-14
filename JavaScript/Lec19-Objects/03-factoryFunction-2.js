function createMarks(maths , science){
        return {
            maths,
            science,

            marks(){
                console.log(`You got ${maths}  and ${science} marks in maths and science`);
            }
        };
}

// object creation using by factory function.
let Obj1 =  createMarks(60 , 80 );
let Obj2 =  createMarks(90 , 70);
let Obj3 =  createMarks(50 , 40);

Obj1.marks();                 //  You got 60 and 80 marks in maths and science
console.log(Obj1.maths);         //    60

Obj2.marks();                     //  You got 90 and 70 marks in maths and science
console.log(Obj2.maths);                  //     90

Obj3.marks();                     //    You got 50 and 40 marks in maths and science
console.log(Obj3.science);                   //  40
console.log(Obj3) ;                     //  { length: 3, breadth: 2, area: [Function: area] }


//   2nd Type

function areaOfRectangle(len , bre) {
    let rectangle = {
         length:len,
         breadth:bre,

        area(){
            console.log(`The area of rectangle is ${len*bre}`);
        }
    };
    return rectangle;
}

let ar = areaOfRectangle(3,2);

ar.area();             //  The area of rectangle is 6
console.log(ar);          //  { length: 3, breadth: 2, area: [Function: area] }
