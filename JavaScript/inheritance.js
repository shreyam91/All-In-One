// // extends keyword is used to extend another class. 
// class Animal{
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
// }
// run(){
//     console.log(this.name + " is running")
// }
// shout(){
//     console.log(this.name + " is Shouting")
// }
// }

// class Monkey extends Animal{        //Monkey -> child class , Animal -> parent class ...
//     eatBanana(){                    //Child class is written first then parent class...
//         console.log(this.name + " is eating Banana")
//     }
//     hide(){
//         console.log(`${this.name } +  is hiding `)
//     }

// }

// let ani = new Animal("Lion","White");
// let m = new Monkey("chiku","Orange");

// ani.shout()
// m.eatBanana()
// m.shout()
// m.hide()
// ani.hide() // throw an error  
 

class Employee {
    constructor(){
    console.log('Employee constructor');
}
    login(){
        console.log("Employee has logged in.")
    }

    logout(){
        console.log("Employee has logged out.")
    }

    requestLeave(leaves){
        console.log(`Employee has requesting for ${leaves} leaves.`)
    }
}

class programmer extends Employee {
    // constructor(...args){ // If there is no constructor in this class JS engine automatically create a new constructor instance in child classes.
    //     super(...args) // as well as arguments passed from the parent class.
    // }
    requestCoffee(x){
        console.log(`Employee requesting  ${x} coffees.`)
    }

    requestLeave(leaves){
        super.requestLeave(4)
        console.log('One extra leave is granted')
        //console.log(`Employee has requesting for ${leaves+1} leaves (one extra leave).`) // method overriding.
    }
}

let e = new programmer() // if we call programmer() output of programmer class will print. but {Employee, Programmer} both run without making any error.
e.login()
e.requestLeave(3)


