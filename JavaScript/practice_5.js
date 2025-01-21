// create an array of numbers & take input from the user to add numbers to this array
/* let arr = [16, 92, 23, 08, 55]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr) */

// keep adding numbers to the array until 0 is added to the array.
/* while (arr.includes(0)) {
  let a = prompt("Enter a number")
  a = Number.parseInt(a)
  arr.push(a)
  console.log(arr)
} */

// -- keep adding numbers to the array until 0 is added to the array -- //
/* let arr1 = [1, 2, 33, 12, 90]
let b;
do{
    let b = prompt("Enter a number")
    b = Number.parseInt(b)
    arr.push(b)
}while(b!= 0)
console.log(arr) */

// -- filter for number divisible by 10 from a given array --//
let arr2 = [1, 2, 33, 12 , 90]
let a2 = arr2.filter((b)=>{
    return b % 10 === 0
})
console.log(a2)

// -- create an square of an given array --//
let arr3 = [1, 2, 33, 12, 90]
let a3 = arr3.map((b)=>{
    return b * b
})
console.log(a3)

// -- use reduce to calculate factorial of a given number from an array of first n natural number -- //
let arr4 = [1, 2, 3, 4, 5, 6]
let a4 = arr4.reduce((a,b)=>{
    return a * b
})
console.log(a4)

