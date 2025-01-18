//  To check property which are present in the object or not.

let rectangle={
    length:2,
    breadth:5,
};

if('color' in rectangle){
    console.log(`present`);
}
else{
    console.log(`absent`);
}

//  Output : -> absent 

if(`height` in rectangle){
    console.log(` height is present`);
}
else{
    console.log(`height is not present`);
}


// Output : -> height is not present
