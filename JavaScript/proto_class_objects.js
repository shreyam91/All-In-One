/***************************************
*                                      *
*           Proto & Prototype          *
*                                      *
***************************************/

let a ={
    name1:'shrey',
    languages:'javascript',
    run: () =>{
        alert('self run');
    }
}
console.log(a);

let p = {
    run: () =>{
        alert('run');
    }
}

p.__proto__ = {
    name2:'Shreyam'
}

a.__proto__ = p

console.log(a.name2)


/***************************************
*                                      *
*            Class & Object            *
*                                      *
***************************************/

class Railwayform {
    submit(){
        alert('The form is submitted.');
    }
    cancel(){
        alert(this.name  + ' The form is cancelled.');
    }
    fill(givenName) {
        this.name = givenName;
    }
}

let monu = new Railwayform();
monu.fill('Monu')
let sonu = new Railwayform();
sonu.fill('Sonu')

monu.submit();
sonu.submit();
sonu.cancel();