function play(){
    const audioElement = new Audio("alarm.wav");
    audioElement.play();
}

setInterval(() =>{
    let d = new Date()
    time.innerHTML = d.toDateString() + " " + d.toTimeString()
}, 1000)

const setAlarm =(seconds) =>{
    setTimeout(() => {
        play();
    }, seconds*1000);

}
setAlarm(500)

let s = prompt("Please enter after how many seconds you want to play alarm: ")
setAlarm(parseInt(s))