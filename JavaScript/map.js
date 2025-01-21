// map , reduce, filter 
// -- map -- //
let arr = [45,23,87]
let a = arr.map((value, index, array) => {
    console.log(value,index, array)
    return value * 2
})
console.log(a)

// -- reduce -- //
let arr1 = [23,78,20,28,43]
let a1 = arr1.reduce((a,b)=>{
    return a+b
})
console.log(a1)

// -- filter -- //
let arr2=[34,1,29,10,12]
let a2 = arr2.filter((b)=>{
    return b<10
})
console.log(a2)
