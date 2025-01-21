// synchronous programming 
let a  = prompt("what is your name");
let b = prompt("what is your age");
let c = prompt("what is your favorite car?");

console.log(a+"is",+ b + "years old and has" + c + " favorite car.");

// Asynchronous programming
setTimeout(function(){
    console.log("Hey I am gud")
},3000
)

    // callback
function loadScript (src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded")
        callback(null, src);
    }
    // script.onerror = function () {
        //console.log("Error loading");
        //callback(new Error("Error loading in src: " + src));
//}
    document.body.appendChild(script);
}

function hello(src){
    alert("Hello" + src);
}

//function hello(error , src){
    //if(error){
       // console.log("Error: ");
        //sendEmergencyMessageToCeo(); //function.
       // return
    //}
  //  alert("Hello" + src);
//}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")