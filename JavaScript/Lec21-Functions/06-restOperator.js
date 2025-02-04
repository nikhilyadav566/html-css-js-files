//    Rest Operator :-
//                    Rest parameter must be last parameter
//  e.g :            function add(a,b,...arg)  -> true
//                   function add(a, ...arg,b) -> flase

function sum(...args){
    console.log(args);
};

sum(1,2,3,4,5,6);   // Output : [ 1, 2, 3, 4, 5, 6 ] -> Arraytype

//              Or 
function sum2(num,value,...args){    //   here num and value are variable, where (1,2) goes inside num and value.
    console.log(args);
};

sum2(1,2,3,4,5,6);  // Output : [ 3, 4, 5, 6 ]

