// // // function User(name, age) {
// // //     this.name = name
// // //     this.age = age
// // // }

// // // static -> class-a bagli
// // // instance  -> obyekte baglidir
// // class User {
// //     say = 0
// //     constructor(name, age) {
// //         this.say++
// //     }
// // }

// // const ali = new User()
// // console.log(User.say)

// // const ali2 = new User()
// // console.log(User.say)


// // // Car class-i yaradin. {model, year, owner} constructor-dan alsin. 
// // // * {speed} olsun. qazVer +10, tormozVer -10, logSpeed (log-a speed-i cixar)

// class Car {
//     speed = 0
//     constructor(model, year, owner) {
//         this.model = model
//         this.year = year
//         this.owner = owner
//     }
//     qazVer() {
//         this.speed += 10
//     }
//     tormozVer() {
//         this.speed -= 10
//     }
//     logSpeed() {
//         console.log(this.speed)
//     }
// }

// const zapi = new Car('zapi', 1968, 'ali')
// zapi.qazVer()
// zapi.qazVer()
// zapi.qazVer()
// zapi.qazVer()
// zapi.logSpeed()

// const vilis = new Car('vilis', 1969, 'fazil')
// vilis.qazVer()
// vilis.qazVer()
// vilis.logSpeed()



// inherit -> inheritance
class Animal {
    constructor(name, gender, age) {
        this.name = name
        this.gender = gender
        if (age) {
            this.age = age
        }
    }
}
// HUman -> derived, Animal -> super class
// class Human extends Animal {
//     constructor(name, gender, job) {
//         super(name, gender)
//         this.job = job
//     }
// }
// class Test extends Human {
//     constructor(name, gender, job, test) {
//         super(name, gender, job)
//         this.test = test
//     }
// }
// const test = new Human('test', 'k', 'de')
// console.log(test)



// class Shape {

// }
// class Circle extends Shape {

// }
// class Rectangle extends Shape {

// }

// String

// class NewString extends String {
//     toCapitalCase() {
//         return this.replace(this[0], this[0].toUpperCase())
//     }
// }

// let ad = new NewString('ali')
// ad = ad.toCapitalCase()
// console.log(ad) //Ali

String.prototype.toCapitalCase = function () {
    return this.replace(this[0], this[0].toUpperCase())
}
let ad = 'ali'
ad = ad.toCapitalCase()
console.log(ad)

Array.prototype.clear = function () {
    this.length = 0
}
const arr = [1, 2, 3, 3, 45, 6]
arr.clear()
console.log(arr)

// String    hide
String.prototype.hide = function () {
    return this.slice(0, 3) + '*'.repeat(this.length - 3)
}
let soz = 'javascript'
soz = soz.hide() // jav*******
let soz1 = 'alion'
soz1 = soz1.hide() // ali**

Number.prototype.isEven = function () {
    return this % 2 === 0
}
// Number
const ed = 13
console.log(ed.isEven()) // false
const ed2 = 12
console.log(ed2.isEven()) // true



