/*
// by using logical operator find whether the age of person lies bw 10 & 20?

let age = prompt("What is your age ");
if (age>10 && age<20)
 {
    console.log("your age lies bw 10 & 20");
 }
else{
    console.log("your age doesn't lie bw 10 & 20");
}

// explore switch statement in JS
let age1 = prompt("What is your age?");
switch(age1){
    case 12:
        console.log("your age is 12");
        break
    case 20:
        console.log("your age is 20");
        break
    case 16:
        console.log("your age is 16");
        break
    case 22:
        console.log("your age is 22");
        break
    default:
        console.log("your age is unknown");
}

// to find whether a number is divisible by 2 & 3 

let num = prompt("What is your age");
num = Number.parseInt(num);
if(num%2 == 0 && num%3 == 0)
{
    console.log("your age is divisible by 2 & 3");
}
else
{
    console.log("your age is not divisible by 2 & 3");
}

// either 2 or 3

let num1 = prompt("What is your age");
num = Number.parseInt(num1);
if(num1%2 == 0 || num1%3 == 0)
{
    console.log("your age is divisible by 2 & 3");
}
else
{
    console.log("your age is not divisible by 2 & 3");
}
*/

// using ternary operator check you can drive or not ???

let age2 = 19
let a = age2 >18? "you can drive " : "you can not drive"
console.log(a)