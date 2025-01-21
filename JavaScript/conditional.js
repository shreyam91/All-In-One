// conditional operator 
let a = prompt("Enter your age");
a = Number.parseInt(a); // converting the string to a number
if(a>0){
    alert("This is a valid age")
}
else if(a<9){
    alert("you are not ready to drive")
}
else if(a<18 && a>9){
    alert("You think to drive")
}
else{
    alert("this is not valid age to drive")
}

console.log("you can", a<18? "not drive" : "drive")