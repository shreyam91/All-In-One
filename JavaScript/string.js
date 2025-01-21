let name = "Monu" // double quotes
console.log(name.length)

let friend = 'Shiva' // single quotes
console.log(friend)

console.log(name[1])

// template literals 
let boy1 = "monu"
let boy2 = "sonu"

// sonu is a brother of monu

//let sentence = `boy1 is a brother of boy2` // print same at is now 
let sentence = `${boy1} is a brother of ${boy2}` 
console.log(sentence)

// Escape Sequence Characters

let fruit = 'bana\'na'
console.log(fruit)

let cars = "fortun\"er"
console.log(cars)

let vegetable = 'potato'
console.log(vegetable.length)
console.log(vegetable.toUpperCase())
console.log(vegetable.toLowerCase())
console.log(vegetable.slice(2,4))
console.log(vegetable.slice(2))
console.log(vegetable.replace('po','to'))

console.log(vegetable.concat("is a valid", fruit))

let word = "       ram is a boy"
console.log(word.trim())