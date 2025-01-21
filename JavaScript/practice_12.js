// // Question 1 
// const a = (text) =>{
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, 2000);
//     })
// }

// (
//     async() =>{
//         let text = await a ("Hello")
//         console.log (text)
//         text = await a ("World")
//         console.log (text)
//     }
// )()

// Question 2
function sum (a,b,c) {
    return a+b+c;
}

let x = [1,4,8]
console.log (sum(...x))

//Question 3
const b = (text , n =2 ) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000 * n);
    })
}

(
    async() =>{
        let text = await b ("I am resolving after 1 second...", 1)
        console.log (text)
        text = await b ("I am resolving after 4 seconds...",4)
        console.log (text)
    }
)()

//Question 4 
function simple(p,r,t) {
    return (p * r * t)/100;
}
console.log (simple(1000,5,3))