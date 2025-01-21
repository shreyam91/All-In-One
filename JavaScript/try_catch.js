/***************************************
*                                      *
*           try and catch              *
*                                      *
***************************************/

// try & catch used to prevent error in the code but not in the setTimeout function..

setTimeout(() => {
    console.log("hello connecting to the server.......");
}, 1000);
// try{
// console.log(data)  //throw new Error
// }
try{
    setTimeout(() => {
        console.log(hello) //throw new Error but catch function cannot catch this exception happeningin scheduled code.....
    }, 100);
}
catch(error){
        console.log("error occured");  // catching error here
}
setTimeout(() => {
    console.log("Connection establish with the server.......");
}, 2000);

setTimeout(() => {
    console.log("fetching  data from the server.....");
}, 3000);

setTimeout(() => {
    console.log("data fetched from the server");
}, 4000);

