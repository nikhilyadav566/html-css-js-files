//  There are two ways to creat Object through function.

//  1. Factory Function
//  2. Constructor Function

//  1. Factory Function:- 
                        //  It is a design pattern in programming where a function is used to create and return new objects.
                        //  It should be in camelCase.
//          function createRect(){
//           const obj = 24,
//           return obj;
//           }
//            let rect = createRect();

    function createSquare(){
        const obj = 24;
        return obj;
    }
        // Access

    let sqrObj = createSquare();
    console.log(sqrObj);


    //    2nd Type

    function createRectangle(){
        let rectangle = {
            lenght : 50,
            breadth : 60,

            draw: function(){      // or we can write in this form draw()
                console.log('drawing rectangle');
            }
        };
        return rectangle;
    }

    // object creation using factory function.
    let rectObj1 = createRectangle();
    console.log(rectObj1);
    console.log(rectObj1.length);
    console.log(rectObj1.breadth);
    console.log(rectObj1.draw());

    //  3rd Type 

    function createCar(brand, model) {
        return {
            brand,
            model,
            start() {
                console.log(`${brand} is starting...`);
            }
        };
    }
    
    // object creation using factory function.
    const car1 = createCar("Tesla", "Model 3");
    const car2 = createCar("Ford", "Mustang");
    
    car1.start(); // Output: Tesla is starting...
    car2.start(); // Output: Ford is starting...
