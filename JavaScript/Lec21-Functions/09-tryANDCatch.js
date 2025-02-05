//  try ANd Catch :->
//                  In JavaScript, try...catch is a construct used for error handling
// Syntax:
//  try {
         // Code that may throw an error
//  } catch (error) {
         // Code to handle the error
//    }


let person = {
    fName : 'Nikhil',
    lName : 'Yadav',
    get fullName(){
        return `${this.fName} ${this.lName}`;
    },
    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error("You have not sent a string");   //  // Throwing an error if value is not a string 
        }
        let name = value.split(' ');     // Split the input string into an array
        this.fName = name[0];          
        this.lName = name[1];
    }
};


try{
    person.fullName = true;   // Trying to set fullName with a function. 
}
catch (e) {
    alert(e);           //  catching and displaying the error in an alert.
}

console.log(person.fullName);    //  Display teh fullName  Nikhil Yadav
