// // const sheytan = {
// //     name: 'eshgin',
// //     age: -1,
// //     doing: () => {
// //         console.log('danisiyoring.... always!!!')
// //     }
// // }
// // // sheytan.doing()

// // sheytan.name = 'sheitan'
// // console.log(sheytan)

// // product obyekti yaradin (name, price) olsun. price-dan 200 cixib ozune menimsedin. !

// const product = {
//     name: 'Honor',
//     price: 2400,
//     owner: 'ali',
//     ownerCountry: {
//         name: "Azerbaijan",
//         capital: 'Baku'
//     },
//     key: 'azer'
// }

// // console.log(product.price)
// // let key = prompt('ureyin hansi key-i isteyir? (name, price, owner)')
// // console.log(product[key])
// // console.log(product.key)
// // for (let key in product) {
// //     // console.log(product.key)
// //     console.log(product[key])
// // }


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130,
//     ali: 20
// }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key]
// }

// console.log(sum)




// let n1 = 'ali'
// let n2 = n1

// n1 = 'ahmad'

// console.log(n1) // ahmad
// console.log(n2) // ali

// // value [primitive] -> string, number, boolean, undefined
// // referance (non-primitive) -> object, array, function

// let d1 = { ad: 'ali' }
// let d2 = d1

// d1.ad = 'ahmad'
// console.log(d1.ad)
// console.log(d2.ad)




// let ad = { adi: 'ali' }

// function changeName(a) {
//     a.adi = 'ahmad'
// }

// changeName(ad)

// console.log(ad.adi)



// let n1 = 'ali'
// let n2 = 'ahmad'


// let obj1 = {}
// let obj2 = {}
// console.log(obj1 === obj2)


// let o1 = {}
// let o2 = o1

// console.log(o1 === o2)



const sezar = {
    name: 'sezar',
    age: 2005
}

// spread
// const sezar2 = Object.assign({}, sezar)
const sezar2 = { ...sezar }

sezar.name = 'yuli'

console.log(sezar2)

