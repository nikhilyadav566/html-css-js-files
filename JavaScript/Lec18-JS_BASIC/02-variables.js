// There are three ways to create var in js

// #1.(var :-> it is a global type and in it two var with same name)

var a = 5;
console.log(a);

var a = 20;
console.log(a);

{
    var a = 30;
}
console.log(a);



// # 2. (let :-> it is a local scope variable)

let b = 8;
console.log(b);

let c = 'lord Shiva';
console.log(c);

let d = true;
console.log(d);

{
    let e = 56;
    console.log(e);
}

{
    let f = 25;
}
console.log(f);  // it does print the value of 'f' because it is local scope variable.




// #3. (const:-It can't be Changed and Deassigned)

const n = 15;
console.log(n);


const num = 35;
num=95;    //user can't change after once declare it's value is always constant
console.log(num);



