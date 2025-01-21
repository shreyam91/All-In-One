let arr=[3,5,7,9,1,]
// let [a, b,c, ...rest] = arr
// no need to do this 
// let a= arr[0]
// let b= arr[1]

// console.log(a,b,c,rest)

let{a,b,c}={a:1,b:2,c:3}
console.log(a,b,c)

//spread operator
let arr1 = [1,2,3,4,5,6,7]
let obj1 = {...arr1}
console.log(obj1)
 
function sum(v1,v2,v3){
    return v1 + v2 + v3
}

console.log(sum(...arr1))


let obj2 = {
    name:'Monu',
    company: 'Cognizant',
    address:'india'
}

console.log({...obj2,name:'Sonu'}) // overwrite name 
console.log({name:'Sonu',company:'TCS',...obj2}) // no overwrite