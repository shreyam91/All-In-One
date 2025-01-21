/***************************************
*                                      *
*     error objects & custom error     *
*                                      *
***************************************/


try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age >150){
        throw new Error("this is not a valid age")
    }
    //variable_error
    //throw new Error("Pune's weather is good!"); // throw new error
    //console.log(error)
    //throw new ReferenceError ("Pune's weather is  not good!"); // throw new Refrence error
}
catch(error){
    //console.log("error:-", error);
    console.log(error.message); // show error message
    console.log(error.name); // show error name
    console.log(error.stack);
}

console.log("script is still running......")