//  constructor function: -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//  constructor function -> prop/methods -> intialise/Define

function Rectangle(){
    this.lenght=1;
    this.breadth=2;       //  this keyword is refering to show current object.
    
    this.draw=function(){
        console.log('drawing rectangle');
    };
}

// object creation using constructor function .
let rectangleObject = new Rectangle();    // new :-> it is such type of keyword which return empty object.

console.log(rectangleObject.lenght);
console.log(rectangleObject.breadth);
rectangleObject.draw();



//        2nd Type 

function AreaOfRectangle(l , b){
    this.lenght=l;
    this.breadth=b;
    this.area=l*b;
    this.find=function(){
        console.log(`Area of rectangle is ${this.area}`);
    };
}

// object creation using contructor function.
let rectObject1 = new AreaOfRectangle(6 , 5);
let rectObject2 = new AreaOfRectangle(8,5);

rectObject1.find();
rectObject2.find();


//       3rd Type 

function Car(brand,model){
    this.brand = brand;
    this.model = model;
    this.start = function(){
        console.log(`${this.brand} car ${this.model} model is coming soon in the market...`);
    };
}

//  object creation

let car1 = new Car("Tesla" , "X");
let car2 = new Car("Ford" , "Mustang");

car1.start();   // Output:->  Tesla car Model 3 model is coming soon...
car2.start();  //  Output:->  Ford car Mustang model is coming soon...
