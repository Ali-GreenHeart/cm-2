// // DOM -> Document Object Model
// // API -> Application Programming Interface 

// // alert()

// // DOM API

// // const rootElem = document.getElementById('root')
// // rootElem.innerHTML = `<img src=${prompt('shekili secin: ')} alt="this is me, alion!">`

// // const rootElem = document.getElementById('root')
// // rootElem.onclick = () => {
// //     navigator.clipboard.writeText("data")
// // }


// // A, B, C


// // 3 eded button olacaq, her buttona clickleyende hemin herfi : 
// // 1. console-a cixarsin
// // 2. *clipboarda yazdirsin!

// // const btnA = document.getElementById('btnA')
// // const btnB = document.getElementById('btnB')
// // const btnC = document.getElementById('btnC')

// // btnA.onclick = () => {
// //     navigator.clipboard.writeText('A')
// // }
// // btnB.onclick = () => {
// //     navigator.clipboard.writeText('B')
// // }
// // btnC.onclick = () => {
// //     navigator.clipboard.writeText('C')
// // }

// // const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// // const rootElem = document.getElementById('root')
// // arr.forEach((letter) => {
// //     rootElem.innerHTML += ` <button onclick="copyText('${letter}')">${letter}</button>`
// // })

// // function copyText(txt) {
// //     navigator.clipboard.writeText(txt)
// // }


// const rootElem = document.getElementById('root')
// const btnElem = document.getElementById('btn')


// btnElem.onclick = () => {
//     rootElem.classList.toggle('active')
// }
// console.dir(rootElem)
// // rootElem.className = rootElem.className + 'active'


// const btn = document.querySelectorAll('#root')
// console.log(btn)




// const input = document.querySelector('input')
// const button = document.querySelector('button')


// button.onclick = () => {
//     console.log(input.value)
// }




const n1Elem = document.getElementById('n1')
const n2Elem = document.getElementById('n2')
const btnSumElem = document.getElementById('btnSum')
const btnSubElem = document.getElementById('btnSub')
const btnDivElem = document.getElementById('btnDiv')
const btnMulElem = document.getElementById('btnMul')
const resultElem = document.getElementById('result')


btnSubElem.onclick = () => {
    resultElem.textContent = +n1Elem.value - +n2Elem.value
}
btnSumElem.onclick = () => {
    resultElem.textContent = +n1Elem.value + +n2Elem.value
}
btnDivElem.onclick = () => {
    resultElem.textContent = (+n1Elem.value / +n2Elem.value).toFixed(2)
}
btnMulElem.onclick = () => {
    resultElem.textContent = +n1Elem.value * +n2Elem.value
}

