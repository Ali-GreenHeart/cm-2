// 1.
// 1. 


// function makeFormal(name, gender) {
//     if (gender === 'm') {
//         return `mr ${name}`
//     } else if (gender === 'w') {
//         return `mrs ${name}`
//     }
// }


// console.log(makeFormal('ali', 'm')) // mr ali
// console.log(makeFormal('pakize', 'w')) // mrs pakize



// lyricsFinder("freedom")
// lyricsFinder("kio")

// function lyricsFinder(songName) {
//     if (songName === 'freedom') {
//         return "give me freedom give me fire...."
//     } else if (songName === 'kio') {
//         return 'aynadan gozel....'
//     }
// }



// capitalFinder("aze") // baku
// capitalFinder("tr") // ankara
// capitalFinder("ru") // moscow

// function capitalFinder(country) {
//     if (country === 'aze') {
//         return 'baku'
//     } else if (country === 'tr') {
//         return 'ankara'
//     }
// }



// xos gelmisiniz

// translate('en') // welcome
// translate('ru') // dobro pojalavt
// translate('az') // xos gelmisiniz


// const translate = (lang) => {
//     switch (lang) {
//         case "en":
//             return "welcome";
//         case "az":
//             return 'xos gelmisiniz'
//         default:
//             return 'daxil etdiyiniz dil movcud deyil!'
//     }
// }

// const a = translate('az')





// const greaterThan100 = (ed) => ed > 100

// console.log(greaterThan100(20))//  false
// console.log(greaterThan100(200)) //  true
// console.log(greaterThan100(100)) //  false


// function passportNameGenerator(name, surname, fatherName, gender) {
//     let _surname = (gender === 'w' ? surname + 'eva' : surname + 'ev')

//     return `${_surname} ${name} ${fatherName} ${gender === 'w' ? "qizi" : "oglu"}`
// }


// console.log(passportNameGenerator('jale', 'ali', 'arif', 'w'))  // alieva jale arif qizi
// console.log(passportNameGenerator('ali', 'hamza', 'adil', 'm'))  // hamzayev ali adil oglu



// tr ->  oglu, kizi
// ru ->  ev, eva
// pr ->  zade

function surnameGenerator(surname, lang, gender) {
    switch (lang) {
        case "pr":
            return surname + 'zade'
        case "tr":
            return gender === 'w' ? surname + ' kizi' : surname + ' oglu'
        case "ru":
            return gender === 'w' ? surname + 'eva' : surname + 'ev'
    }
}

console.log(surnameGenerator("ali", "tr", "w"))  // aliev
console.log(surnameGenerator("ali", "ru", "m"))  // alizade



// 15 tasks
