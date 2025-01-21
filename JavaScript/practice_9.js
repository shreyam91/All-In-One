//1. Write a program to load a JS file in a browser using promise. Use then() to display an alert when the file is loaded.

const loadScript = async(src) => {
    return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () =>{
        resolve(src + 'Done successfully');
    }
    document.head.append(script);
});
}

let a = loadScript('https://www.youtube.com/watch?v=y1j2FL9d31w&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=63&ab_channel=CodeWithHarry')

a.then((value) =>{
    console.log(value);
})


//2. Write the same program from previous question and use async/await syntax.


const main = async() => {
    console.log(new Date().getSeconds()) // we also print seconds, Milliseconds,
    let a = await loadScript('https://www.youtube.com/watch?v=y1j2FL9d31w&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=63&ab_channel=CodeWithHarry')

    console.log(a);
}
main()


//3. Create a promise which rejects after 3 seconds use an async/await to get its value. Use a try catch to handle this error ..

let p = () => {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject(new Error('Failed to run promise'))
    },3000);
})
}

let b = async () => {
    try {
        let c = await p()
    console.log(c);
    }
    catch (err) {
        console.log('This error has been caught')
    }
}
b()


//4. Write a program using Promise.all() inside an async/await to await 3 promises. Compare its result with the case where we await these promises one by one. 

let p1 = async() => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(10)
            
        }, 2000);
    })
}
let p2 = async() => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(20)
            
        }, 1000);
    })
}
let p3 = async() => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(30)
            
        }, 3000);
    })
}

const run = async() => {
    console.time('run')

    // let a1 = await p1() // pick any product from the database
    // console.log(a1)

    // let a2 = await p2()// pick any product from the database
    // console.log(a2)

    // let a3 = await p3()// pick any product from the database
    // console.log(a3)
    
    
    let a1 = p1() // pick any product from the database
    console.log(a1)

    let a2 = p2()// pick any product from the database
    console.log(a2)

    let a3 = p3()// pick any product from the database
    console.log(a3)

    let a1a2a3 = await Promise.all([a1, a2, a3]) // run in parallel with most of the time taken process.
    console.log(a1a2a3)
    console.timeEnd('run')
    }

    run()