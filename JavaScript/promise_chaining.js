let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Resolved after 2 seconds")
            resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve("Promise 2") }, 2000)
    }) 
}).then((value) => {
    console.log("We are done")
    return 2
}).then((value)=>{
    console.log("Now we are pakka done")
})


//<--- load script function ---> 

const loadScript = (src)=>{
    return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src =  "src" //"https://ajax.googleapis.com/ajax"
    document.body.appendChild(script)
    script.onload = () => {
        //console.log("script loaded")
        resolve(1)
    }
    script.onerror = () =>{
        reject(0)
    }
})
}

let p3 = loadScript("https://github.com/shreyam91/js")
p1.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log("We are sorry we are having problem in loading a page/script")
})