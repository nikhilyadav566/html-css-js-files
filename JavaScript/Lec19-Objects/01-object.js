// while multiple linked variable  added in single  variable.
// in object there are two points 1. it's Property  and 2 . Behaviour
//  {}  :-  it is called object litral.

let rectangle = {
        length:1,     // The lenght and breadth are the properties of rectangle object.
        breadth:2,  
};

// now given above there is a rectangle object has formed whose length & breadth are (1,2).

//  But now 

let square={
    side:9,    // it is the properties of square.

    // draw function is showing the behaviour of square.
    draw: function(){         //   it is a function but while function is declared inside Object then it's known as Method or method of that object.
        console.log('drawing square');
    }
};
//  Access values:
    console.log(rectangle.length);
    console.log(rectangle.breadth);
    console.log(square.draw);
    console.log(square.draw());

// All these process is known as Object Oriented Programming.

//  Objects have both [properties and behaviour]. otherwise there is no any way to create object without it.
