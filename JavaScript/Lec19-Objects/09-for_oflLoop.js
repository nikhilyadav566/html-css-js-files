//  for-of :-> it is only applied on iterables.
// Iterables : Iterables are iterable objects (like Arrays,map,set , string).

let rectangle={
    length:5,
    breadth:7,
    name:"Nikhil",
};

// Object.keys() :-> it gives array of keys
for(let key of Object.keys(rectangle)){   // here Object.keys(rectangle) returns an array of the object's keys: ['length','breadth'] because it store group of  datatypes.
    console.log(key);
}

// Output: -> length
//             breadth
//              name


// Object.entries() :-> it gives an array of key-value pairs, which are iterated as arrays.
for(let key of Object.entries(rectangle)){
    console.log(key)
}

// Output: ->
//     [ 'length', 5 ]
//     [ 'breadth', 7 ]
//     [ 'name', 'Nikhil' ]


