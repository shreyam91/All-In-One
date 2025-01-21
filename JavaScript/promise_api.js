let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success 1");
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success 2");
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success 3");
    }, 3000);
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success 4");
    }, 4000);
})

// p1.then((value) =>{
//     console.log("value")
// })
// p2.then((value) =>{
//     console.log("value")
// })
// p3.then((value) =>{
//     console.log("value")
// })
// p4.then((value) =>{
//     console.log("value")
// })

let promise_all = Promise.allSettled([p1,p2,p3,p4]);
promise_all.then((value) => {
    console.log(value)
})

// let promise_all = Promise.all([p1,p2,p3,p4]);
// promise_all.then((value) => {
//     console.log(value)
// })

// let promise_all = Promise.race([p1,p2,p3,p4]);
// promise_all.then((value) => {
//     console.log(value)
// })

// let promise_all = Promise.any([p1,p2,p3,p4]);
// promise_all.then((value) => {
//     console.log(value)
// })

// let promise_all = Promise.resolve([p1,p2,p3,p4]);
// promise_all.then((value) => {
//     console.log(value)
// })


// let promise_all = Promise.rejected([p1,p2,p3,p4]);
// promise_all.then((value) => {
//     console.log(value)
// })

