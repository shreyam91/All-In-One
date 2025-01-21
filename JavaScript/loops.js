//  for loop 
for(let i=0;i<34;i++)
{
    console.log(i)
}

// add first n natural number 
let sum = 0
let n = prompt("Enter the value of n ")
n = Number.parseInt(n)
for(let i = 1; i < n; i++)
{
    sum += i
}
console.log("Sum of first"+ n + "natural number" + sum)

// for in loop 
let obj={
    misha:97,
    june:98,
    shrey:95,
    anjali:80,
    taniya:81
}
for (let a in obj ){
    console.log("Marks of " + a + "are" + obj[a])
}

// for of loop
for (let b of "shrey")
{
    console.log(b)
}

// while loop
let n1 = prompt ("Enter the value of n")
n1 = Number.parseInt(n1)

let i = 0;
while(i<n1){
    console.log(i)
    i++;
}

// do while loop
let n2 = prompt ("Enter the value of n")
n1 = Number.parseInt(n2)

let i1=0;
do{
    console.log(i1)
    i++;
}while(i<n2)
