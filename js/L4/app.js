// create (define)
// function showMessage() {
//     console.log('test bir bir bir')
// }

// showMessage() // invoke, call


// parameter
// function sayHi(ad) {
//     console.log('hi ' + ad)
// }

// sayHi('ayla') // argument
// sayHi('ali')
// sayHi('fazil')

// default parameters
// function cem(num1 = 0, num2 = 0) {
//     num1 + num2
//     console.log('olunmaz')
// }

// let netice = cem(12, 4)
// console.log(netice)

// singleton  (SOLID)

// return -> void funksiyalar!



// function pow(n1, n2) {
//     return n1 ** n2
// }

// console.log(Math.pow(2, 10))





// function expression

// function (){}

// pow2(3)
// // hoisting!
// // utilities, utils!
// function pow2(n1) {
//     console.log(n1 ** 2)
// }
// // pow2=2


// console.log(a)

// var a = 7

// console.log(a)





// task 
// checkEvenOrOdd(4) // 4 is even number
// checkEvenOrOdd(3) //3 is odd number




// let ed = 15
// let m = ''
// if (ed % 3 === 0) {
//     m += 'fizz'
// }
// if (ed % 5 === 0) {
//     m += 'buzz'
// }



// if (ed % 5 === 0 && ed % 3 === 0) {
//     console.log('fizzbuzz')
// } else if (ed % 5 === 0) {
//     console.log('buzz')
// } else if (ed % 3 === 0) {
//     console.log('fizz')
// }







// // callback function
// function test(a) {
//     a('ali')
// }

// test(
//     function (ad) {
//         console.log(`salam ${ad}`)
//     }
// )





// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     'Do you agree?',
//     () => alert('You agreed.'),
//     () => alert('You canceled the execution.')
// );
// ask(
//     'learning js??',
//     () => alert('Allah sebr versin'),
//     () => alert('bextever!')
// );



// const cem = (a = 0, b = 0) => a + b
// const hasil = (a = 1, b = 1) => a * b

// console.log(cem(12))
// console.log(hasil(18, 4))


// const formalMeet = (ad, cins) => {
//     if (cins === 'm') {
//         console.log(`Hi, Mr. ${ad}`)
//     } else if (cins === 'w') {
//         console.log(`Hi, Mrs. ${ad}`)
//     }  
// }


// formalMeet('ali', 'm') // Hi, Mr. ali
// formalMeet('pakize', 'w') // Hi, Mrs. pakize



// let c = 'test'  // closure

// function a(n1, n2) {
//     let b = 'salam'
//     console.log(c)
//     console.log(n1, n2)
// }



// TDZ   -> 





function a() {
    return () => {
        console.log('men qayitdim!')
        console.log('novbeti setir!')
    }
}
// HOC
const b = a()
b()
