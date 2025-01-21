// write a program using prompt to take value from the user and tell them if they can drive or not.

let age = prompt("Enter your age")
age.Number.parseInt(age)

const canDrive = (age)=>{
    return age>= 18?true:false;
}
if(canDrive(age)){
    alert("yes u ca drive")
}
else{
    alert("no u can't drive")
}

let a = prompt("Enter your age");
if(a>18){
    console.log(" you r able to drive");
}
else{
    console.log(" you r not able to drive");
}

// In Q1 use confirm to ask the user if he wants to see the prompt again.

let runAgain1 = true;

const canDrive1 = (age)=>{
    return age>= 18?true:false;
while(runAgain1){
    let age = prompt("Enter your age")
    age.Number.parseInt(age)
    if(canDrive1(age)){
     alert("yes u ca drive")
        }
    else{
    alert("no u can't drive")
    }
}
runAgain1=confirm("u want to play again?")
}

// in the above question use console.error to log the error if they entered the negative value.


let runAgain2 = true;

const canDrive2 = (age)=>{
    return age>= 18?true:false;
while(runAgain2){
    let age = prompt("Enter your age")
    age.Number.parseInt(age)

    if(age < 0){
        console.error("Plz enter valid age");
        break;
    }

    if(canDrive2(age)){
     alert("yes u ca drive")
        }
    else{
    alert("no u can't drive")
    }
}
runAgain2 = confirm("u want to play again?")
}

// wap to change the url to google if user enters a numbers greater than 4 .

let number = prompt("Enter a number")
number = Number.parseInt(number)

if(number>4){
    location.href = "https://www.google.com/search?q="
}

// chng the background of the page to yellow red or any other color base on user input through prompt.

let color = prompt("Enter a background color")
document.body.style.backgroundColor = color 