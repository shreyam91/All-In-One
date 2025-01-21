// Javascript only hoists declarations, not initializions. The variable will be undefined until the line where its initialized is reached.

greet()
function greet(){
    console.log('Hello')
}
// All the function declaration are on top 

console.log(a) // output is undefined
var a = 8
console.log(a) // output is value of a 

console.log(b) // output is error message (Cannot access 'b' before initialization)
let b = 7  // let & const throw an error
console.log(b) // output is 7

