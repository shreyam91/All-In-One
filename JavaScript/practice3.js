// to print the marks of a student in an object using for loop 
// obj = {harry:98, rohan:78, akash: 78}

let marks ={
    harry:98,
    rohan:78,
    akash: 78
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("the marks of " +Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])

}

// above que using for in loop
for (let key in marks){
    console.log(key)
    console.log("The marks of " + key + "are"  + marks[key])
}

// print "try again" until the user enters the correct numbers
let cn = 5
let i 
while(i!=cn )
i = prompt("Enter a number")

//function to find mean of 5 number
const mean = (z,y,x,w)=>{
    return (z+ y+ x+ w)/4
}

console.log(mean(5,6,7,8))