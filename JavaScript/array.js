//------------------- Array--------------------
let a = [1, 2, 3, 4]
console.log(typeof a)

let b = [1,2, 'alpha',true]
console.log(b[3])
console.log(b[4]) // undefined 
b[3]=45 // add new value to the array
console.log(b.length)
console.log(b)

// ---- tostring convert array to string
let str = a.toString()
console.log(typeof str)

// ---- join() join array element
let c = [1,5,9,34]
let d = c.join("_")
console.log(d)

// ---- pop() remove last element from array
let e = c.pop()
console.log(e)

// ---- push() push array element in array
c.push(89)
console.log(c)

// ---- shift() remove first element and return it.
c.shift()
console.log(c)

// ---- unshift() add element to the beginning of the array and returns new array length.
c.unshift(0)
console.log(c)

// ---- delete 
delete c[1]
console.log(c)

// ---- concat()
let a1=[1,6,98,56]
let a2=[87,4,54,34]
let a3=[23,65,97,47]
let z = a1.concat(a2,a3)
console.log(z)

// --- sort() 
// let compare = (a,b) =>{
//  return a-b ( descending ) { for ascending order b-a}
//}
let o = [90,45,43,76,34,55,132]
let p = o.sort()
console.log(p)

// ---- splice()
let num = [554, 656, 644, 33, 23, 552, 434, 56, 35]
num.splice(2,3, 23,24,25)
//console.log(num)

// ---- slice ()
let num1 =num.slice(3)
console.log(num1)

// -- reverse 
let q = o.reverse()
console.log(q)
