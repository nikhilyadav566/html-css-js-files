//  Functions : -> 
 //  It is a block of code that fulfill a specific task.
 //  Increase Reusebility.
//   It is a subprogram which linked to specific task.


//       Syntax:->

//            function functionName(input parameters){
//                    Function body
//                    Write your code here
//                    console.log(parameters);
//                    return;            optional : Return a value if needed
//             }

 // e.g 

    function run(){
        console.log('running');
    };
     // function call or invoke
      run();     // output : -> running


      //     OR

      function add(x,y){
           let sum = x+y;
           return sum;
      };

      let addition = add(2,5);
      console.log(addition);     //  Output: -> 7
