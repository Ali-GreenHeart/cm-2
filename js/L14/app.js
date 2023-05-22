// // // // const arr = ['azer', 'tariyel', 'cavidan', 'ayla', 'aytac', 'shehla', 'zeyneb']
// // // // const [az, tr, ...qizillar] = arr
// // // // console.log(az, tr, qizillar)





// // // // const p0 = arr[0]
// // // // const p1 = arr[1]
// // // // const p2 = arr[2]
// // // // const qizlar = [arr[3], arr[4], arr[5]]

// // // let human = {
// // //     // ad: 'ali',
// // //     age: 22,
// // //     job: 'fe',
// // //     car: 'zapi',
// // //     country: 'malasia',
// // //     school: {
// // //         ad: 'aiPlane mmc',
// // //         nomre: 'n sayli',
// // //         place: {
// // //             lat: 41.5669,
// // //             lng: 46.3189
// // //         }
// // //     }
// // // }


// // // function writeInfo({ ad = "--yoxdur--", age, school: { ad: schoolName, nomre, place: { lat, lng } } }) {
// // //     console.log(schoolName, nomre, lat, lng)
// // //     console.log(`My name is ${ad}, I'm ${age} years old....`)
// // // }

// // // // laptop  {name, model, country:{name, capital:{name, address}}, year }

// // function a() {
// //     let b = 0
// // }


// // a()

// // a()
// let ad = 'ali'

// // higher ordered function (HOC)
// function makeCounter() {
//     let count = 0;
//     return () => ++count;
// }

// let counter = makeCounter()
// counter = null
// counter() // 1
// counter() // 2
// console.log(counter()) // 4



// let ali = 'ali'
// {
//     console.log(ali)

//     let eshqin = 'eshqin'

// }

// console.log(eshqin)


// IIFE -> Immediately Invoked Function Expression

// const returnedFromFunction = ((ad) => {
//     console.log('salam ' + ad)
//     return 'oldu bas uste'
// })("ali")

// console.log(returnedFromFunction)


"use strict"
// const a = () => {
//     console.log(this)
// }
// a()

// function b() {
//     console.log(this)
// }
// b.bind(window)()
// b.bind({ ad: 'ali' })()




function sayName() {
    console.log(this.ad)
    console.log(this.age)
    console.log(this.gender)
    console.log(this.job)
}

// sayName.bind({ ad: 'hamza', age: 12, job: 'biden' })()

