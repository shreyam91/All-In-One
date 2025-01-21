class Password{
    constructor(){
        console.log("Welcome to password Generator");
        this.pass = " "
    }
    generatePassword(len){
    let char ="abcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let special = "@!#$&+*?/"
    // let i; 
    if(len<3){
        console.log("your password should be at least 3 characters long");
    }
    else{
        let i = 0;
        while(i<len){
            this.pass += char[Math.floor(Math.random()*char.length)];
            this.pass += number[Math.floor(Math.random()*number.length)];
            this.pass += special[Math.floor(Math.random()*special.length)];
            i+= 3;
    }
    this.pass = this.pass.substr(0,len);
    return this.pass
}
}
}

let p = new Password()
console.log(p.generatePassword(17))