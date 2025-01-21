let promise = new Promise(function(resolve, reject) {
    alert('Alert in promise');
    resolve(56);

})

console.log("hello world");
setTimeout(function() {
    alert("hey!")
}, 1000);

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        alert('I am Promise and I am fullfiling')
        resolve(true) // for resolve 
        //reject(new Error('I am an error')) // to throw error 
    },5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        alert('I am Promise and I am fullfiling')
        //resolve(true) ---- for resolve 
        reject(new Error('I am an error')) // to throw error 
    },5000)
})
// to get the value
p1.then((value) => {
    console.log("value")
})

// to catch the error
p2.catch((error) => {
    console.log('some error happened in p2')
})

//p2.then((value) => {
  //  console.log("value")
//})
