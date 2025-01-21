// make a string and add one number to the given string
//Q1
let a = "hello"
let b = 2
console.log(a + b)


// Q2
//use typeof operator to find the datatypes of above string
console.log(typeof (a+b))

//Q3
//create a const object in js can u change it to hold a number later 

const c ={
    name : "Monu",
    sction :1,
    isPrincipal : true,
}
d ="Shreyam"
// answer of this ques is no we can't change the const value later.

//Q4
//try to add a new key in the above const statement

c['friend'] = "shreyam"
c['name'] = "Shreyam"
console.log(c)

//Q5
// create a JS program to creat a word meaning dictionary of 5 words.

const dict= {
    flag: "flag",
    flag: "flag",
    flag: "flag",
}
console.log(dict)