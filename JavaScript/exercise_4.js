// create a digital second clock using setInterval and Date object in Javascript.
// The date can be used to get the current date and time hours and minutes and seconds which can be updated using setInterval..
            //namy.ai

setInterval(() => {
    let d = new Date()
    time.innerHTML = d

    },1000)