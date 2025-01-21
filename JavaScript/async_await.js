/***************************************
*                                      *
*              async/await             *
*                                      *
***************************************/

async function code (){
let puneWeather =  new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("27 degrees")
    },1000)
})

let kanpurWeather =  new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("45 degrees")
    },2000)
})
    // puneWeather.then(alert)
    // kanpurWeather.then(alert)

    console.log('fetching pune weather please wait...')
    let puneW = await puneWeather
    console.log('fetched pune weather:' + puneW)

    console.log('fetching pune weather please wait...')
    let kanpurW = await kanpurWeather
    console.log('fetched kanpur weather:' + kanpurW)

    return[puneW, kanpurW]
}

        //---- if async removed then it will throw an error.
// code().then((x) =>{
//     alert(x)
// })

const javascript = () => {
    console.log('I am a function which runs/executes parlialy .')
}
const mainP = async() => {
console.log('welcome to weather control room')
let a = await code()
let b = await  javascript()

//console.log(a)

// a.then((value)=>{
//     console.log(value)
// })
}

mainP()

// can't create a function using main name.