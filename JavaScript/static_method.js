// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     walk(){
//         console.log('animal:' + Animal.captialize(this.name) + ' is walking')
//     }
//     static captialize(name){
//         return name.charAt(0).toUpperCase() + name.substring(1, name.length)
//     }
// }

// j = new Animal('tiger')
// j.walk()

/***************************************
*                                      *
*           getters & setters          *
*                                      *
***************************************/

class Animal{
    constructor(name){
        this._name = name
    }
    fly(){
        alert('animal is flying')
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log('eating carrot')
    }
}
let a = new Animal('Monkey')
a.fly()
a.name = 'Elephant'
console.log(a.name)

let c = 98

console.log(a instanceof Animal) //true
console.log(a instanceof Rabbit) //true
console.log(c instanceof Animal) //false
//It allows us to check whether a instance is in a class or not. 
// It returns true if obj belongs to the class or any other class inheriting from it.
