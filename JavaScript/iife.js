let a = ()=>{
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(456);
    },4000)
})  }
let n = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(564);
    },3000)
})
// let c = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve(645);
//     },2000)
// })  

(async () => {
    let b = await a()
    console.log(b)
    let c = await n
    console.log(c)
    let d = await a()
    console.log(d)
})()
