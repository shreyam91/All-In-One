message = "Gud Global"
function hello1(){
    let message = 'Gud mrng ' 
    {
        let message = 'gud evng'
        console.log("Hello1 "  + message) ;
    }
    // console.log("Hello2 " + message) ;
    let c = function hello2(){
        console.log("I am C" + message) ;
    }
    return c
}

c = hello1()
c()