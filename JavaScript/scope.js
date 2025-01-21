let p = 34; //act as global variable
{
    let a = 8; // throw an error 
    var b = 9; // run successfully
}
// console.log(a);
console.log(b);
console.log(p);

// let is a block level scope & const also is a block level scope ...
// var is a global level scope 


function ab(){
    let c = 19
    console.log(c);  // function level scope
    console.log(p); 
}
ab() // initialize function 
console.log(c) // throw an error 


// function & block level scope both are comes under local scope ...