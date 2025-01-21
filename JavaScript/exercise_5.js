let a =[
    "Initializing Hack tool........",
    "username not found...........",
    "retrying.............",
    "username found...........",
    "connection established............",
    "extracting from server.............",
    "extraction complete...............",
    "fetching data........",
    "data ready........",
    "try to login........",
    "login failed........",
    "try again........",
    "login successfull........",
    "downloading data........",
    "data downloaded........",
]

const sleep = async(seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)},seconds * 1000)

    })
}
const showHack = async(msg) => {
    await sleep(2)
    // console.log(msg)
    text.innerHTML = text.innerHTML + msg + "<br>"

}

(async () => {
    for (let i = 0; i <a.length; i++) {
        await showHack(a[i])
    }
})()