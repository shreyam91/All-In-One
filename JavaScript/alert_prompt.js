alert("Enter the value of a!")
let a = prompt("Enter a here...", "232")
alert("You entered a type of type " + (typeof a));

let write = confirm("Do you want to write in the page?")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write");
}
document.write(a)