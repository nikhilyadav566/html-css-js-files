//    getter :-> Access properties
//    setter :-> Change or mutate properties


//    getter :-> (get) 
//                    A getter is a method used to retrieve the value of a property. It is called when you access the property without 
//    invoking it like a function (i.e., without parentheses).

//    Purpose:->   To compute or manipulate the value of a property before returning it.

let person = {
    fName : 'Nikhil',
    lName : 'Yadav',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){                     //   Setter (set):-> A setter is a method used to update the value of a property. It is called when you assign a value to the property.
        let parts = value.split(' ');        //  Pupose :-> To validate, process, or split the value begin set before updating teh internal property.
        this.fName = parts[0];
        this.lName = parts[1];  
    }
};

console.log(person.fullName);     //   Output: Nikhil Yadav


              //     OR

let student={
    name: 'Abhishek',
    result: 'pass',
    grade: 'A',
    
    get studentDetails(){
        return`${this.name} ${this.result} ${this.grade}`;   //  this :-> it represent current object.
    },

    set studentDetails(value){
        let std = value.split(' ');   //  here split value on the basis of ' '. After it (std) will be an array[Abhishek, Pass, A]
        this.name = std [0];             //  then we can get and update in their  values on the basis of index no.
        this.result = std[1];         //  this : -> it represent current object.(studens) 
        this.grade = std[2];
    }
};

console.log(student.studentDetails);  //  Output : Abhishek pass A 
console.log(typeof student.studentDetails);    // string

//  Now,
student.name = 'Kajal';      // updates name to 'Kajal'
student.result = 'Fail';     //  updates result to 'Fail'
student.grade = 'E';         //   updates grade to 'E'

console.log(student.studentDetails);     //  Output : Kajal Fail E

//  Key Points

//  1. Getters allow you to define logic for how properties are retrieved.
//  2. Setters allow you to define logic for how properties are mutated.
//  3. They are used like regular properties, not as methods.
//  4. Getters and setters can help encapsulate and protect the internal state of an object.
//  5. Both get and set methods are optional; you can use one without the other.

