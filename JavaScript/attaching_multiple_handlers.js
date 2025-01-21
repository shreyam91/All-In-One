//--  Attaching multiple handlers to the promise.

let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        alert('Hey I am resolved')
        resolve(1)
    }, 2000);
})
p1.then(() => {
    console.log('Congratulations')
})
p1.then(() => {
    alert('hey!')
})