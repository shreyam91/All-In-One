//let a = document.getElementsByClassName("container")[0]
//a.onclick = () => {
   // let b = document.getElementsByClassName("container")[0]
  //  b.innerHTML = "Hello duniya";
//}


                    // events_handling //


let x = function(e) {
    alert("hello world") }

let y = function(e){
    alert("hello world from another planet")    
    //var btn = e.target;
    //var btn_id = btn.id;
    //var btn_name = btn.textContent;
    //var btn_class = btn.className;
}

btn.addEventListener('click', x);
btn.addEventListener('click', y);

let a = prompt("Enter a number ");
if(a==2){
    btn.removeEventListener('click', x)
}