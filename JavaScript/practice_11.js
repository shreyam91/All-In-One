
// 1. Create a javascript class to create a complex number. Create a constructor to set the real and the complex part..
class complex{
    constructor( real, imaginary){
    this.real = real
    this.imaginary = imaginary
    }
    add(num){
        this.real= this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
        // return new complex(r,i)
    }
    // 5. Use getters and setters to set and get the real and imagining parts of the complex number.

get real(){
    return this._real
}
get imaginary(){
    return this._imaginary
}
set real(newReal){
    this._real = newReal
}
set imaginary(newImaginary){
    this._imaginary = newImaginary
}
}

let a = new complex(2,4)
a.real = 10
let b = new complex(6,2)
a.imaginary = 10

a.add(b)
// console.log(a.real ,a.imaginary)
console.log(`${a.real} + ${a.imaginary}i`)

// 3. Create a class student from a class human. Override a method and see changes..
class Human{
    constructor(name, favfood){
        this.name = name
        this.favfood = favfood
    }
    walk(){
        console.log(this.name + 'Human is walking')
    }
}

class Student extends Human{
    walk(){
        console.log(this.name + ' :Student is walking')
    }
}

let o = new Student('Mukesh')
o.walk()

// 4. See if student is an infrance of human using instanceof keyword.
console.log(o instanceof Human)


