//  Actually Objects in js have their property that is called constructor property.
//  And every object has constructor
//  Function is also an object.


function Rectangle(len , bre){
    this.length=len;
    this.breadht=bre;
    this.Area=(len*bre);
    this.area=function(){
        console.log(`Area = ${this.Area}`);
    };
}

let Area1 = new Rectangle(5 , 4);   //  here Rectangle is the constructor of (Area1) object.

console.log(Area1.constructor);   //  Retrieves the constructor function for the object.

//  Area = 20


Area1.area();   // Calls the 'area' method to log the area.



//  But find out the constructor of rectangle. which are in-built or (default)
//  We can see here how did work and what is it's constructor.

let Rectangle2 = new Function(`len`,`bre`, `this.length=len;         //  // here in Function (F) letter should be capital.
    this.breadth=bre;
    this.Area=(len*bre);
    this.area=function(){    
        console.log(\`Area = ${this.Area}\`);
    };`
);
  
//  object creation using Area2

let Area2 = new Rectangle2(5,4 );  //  Rectangle2 becomes a constructor function that is equaivalent to Relctangle
                                   // Create an object using the function constructor.
console.log(Area2);
//  output:
//          anonymous {
//            length: 5,
//            breadth: 4,
//            Area: 20,
//            area: [Function (anonymous)]
//           }


console.log(Area2.constructor);

//   [Function: anonymous]
