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
class Human extends Animal {
    constructor(name, gender, job) {
        super(name, gender)
        this.job = job
    }
}
class Test extends Human {
    constructor(name, gender, job, test) {
        super(name, gender, job)
        this.test = test
    }
}
const test = new Human('test', 'k', 'de')
console.log(test)



// class Shape {

// }
// class Circle extends Shape {

// }
// class Rectangle extends Shape {

// }
