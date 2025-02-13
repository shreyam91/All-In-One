// let a =10;
// {
//     var a =10;
//     console.log(a); // Can't declare (a) again.
// }
// console.log(a);

// left -> right

var a =10;
{
    let a =20;
    console.log(a); // 20
}
console.log(a); // 10

console.log("1"-1); // 0
console.log("javascript" +'10');  // javascript10
console.log(1-"sid"); // NaN
console.log("2"+"1"+1);    // 211 
console.log(2+1+"1"); //31
console.log("2"+"1"-1); //20

console.log("sid"%1); // NaN
console.log("2"-"1"); // 1

console.log(NaN==NaN); //false
console.log(NaN === NaN); //false
console.log(NaN.isNaN); //undefined

let c = NaN;
console.log(isNaN(c)); // true
let b = NaN;
console.log(isNaN(c) && isNaN(b));

let n =10;
let m =10;
console.log(++n); // 11
console.log(n++); // 10
console.log(n); //11
console.log(++m+m++); // 22

// if there is one string and one number and there is any operator except then + the answer is always NaN.