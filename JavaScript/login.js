var u_name = document.myForm.u_name
var u_pwd = document.myForm.u_pwd

var UserName = "misha"
var Password = "123"

function runMe(){
    if(u_name.value == UserName && u_pwd.value == Password)
    {
        //console.log("login success")
        alert("login success",1000)
    } else{
        confirm("Please enter correct username and password")
    }
}