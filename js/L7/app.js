// // 2 prompt-da adini ve soyadini daxil etsin ali greenheart

// // .concat

// // let name = prompt("Adinizi daxil edin :")
// // let surname = prompt("Soyadinizi daxil edin :")
// // let fullName = name.concat(' '.concat(surname))
// // console.log(fullName)


// // const cumle = "bu cumlede gizli soz var."
// // const cumle2 = 'bu cumle her sey aciqdir.'
// // // funksiya yaradin, verdiyim cumlede "gizli" sozu varsa true, yoxsa false cixarsin

// // // isHidden(cumle) // true
// // // isHidden(cumle2) // false

// // const isHidden = (sentence) => sentence.includes("gizli")

// // console.log(isHidden(cumle))
// // console.log(isHidden(cumle2))



// // ali_test

// // bosluqlari _ ile evezleyin
// // Advanced*: 
// const fixClassName = (className) => className.replaceAll(' ', '_')
// const fixClassNameV2 = (className, s) => className.replaceAll(' ', s)

// console.log(fixClassName("green btn")) // green_btn
// console.log(fixClassName("green btn button")) // green_btn_button

// console.log(fixClassNameV2("green btn", "-")) //green-btn
// console.log(fixClassNameV2("green btn button", "-")) //green-btn-button




// const validateGmail = (gmail) => gmail.endsWith('@gmail.com') && gmail.length >= 15

// console.log(validateGmail('alion@gm.com'))
// console.log(validateGmail('ali@gmail.com'))
// console.log(validateGmail('alion@gmail.com'))



// const nameFormat = (str) => str.slice(0, str.indexOf(' ') + 2).concat('.')

// console.log(nameFormat("Alion GreenHeart"))// -=> Alion G.
// Asiq Elesger -> Asiq E.



/*
1. Fazil: split, array, ayirmaq, birlesdirmek +
2. Sehla: index of space,  slice


*/




// 



// const months = {
//     0: 'yanvar',
//     1: 'fevral',
//     2: 'mart',
//     3: 'aprel',
//     4: 'may'
// }

// const date = new Date()
// const month = months[date.getMonth()]



// Ezrail proqrami: user - den yasini sorusun.Ve omrune nece il qalib ona alert - le bildirin.Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)


// let age = prompt('yasi daxil edin :')

// let num = 77 - age;

// if (num <= 0) {
//     alert("salam iolsun yaxsi oglanlara")
// } else {
//     alert(`omrune ${num} il qalib`)
// }




// MMC

// const isCompany = (str) => str.toLowerCase().endsWith('mmc')


// console.log(isCompany('alion MMC')) // true
// console.log(isCompany('alion prodakshn')) // false
// console.log(isCompany('fazil mmc')) // true
// console.log(isCompany('fazil mMc')) // true
// console.log(isCompany('fazil Mmc')) // true
// console.log(isCompany('fazil mmC')) // true



// while, 


/*
0  contact elave et [name (5 herfli), phone (4 herfli)]
1  contact goster
2  contact sil
q  quit (while break etsin!)
*/

// ali 0908
// esqin 0104
// azer 0220

// let secim = prompt('secin: (0,1,2,q)')
// while(secim !== 'q'){

// }




const emojis = 'ASDFGHJK'

// Her proqrami refresh edende bize random emoji cixarsin. 

const randomIndex = Math.floor(Math.random() * emojis.length)
document.write(emojis[randomIndex])

// 1. random eded tapmaq lazimdir, 0 ile emojis stringinin son indexi arasinda (Math.random)
// 2. 
