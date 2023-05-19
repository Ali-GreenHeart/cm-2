// const cm2 =  'ali ibrahim eshqin shehla';
// coxluq anlayisi

// const cm2 = ['ali', 'ibo', 'eshqin', 'shehla'] // new Array -> constructor, [ a,b ]->literal 

// console.log(cm2[cm2.length - 1])
// console.log(cm2)


// const arr = [
//     12,
//     'test',
//     {
//         name: 'ali'
//     },
//     function () {
//         console.log('adi function')
//     },
//     (a, b) => a + b,
//     [
//         '12', 23,
//     ]
// ]

// console.log(arr[2].name)
// arr[3]()




// const arr = []
// arr[0] = 'ali'
// arr[1] = 'test'
// arr[2] = 'eshgin'
// arr[99] = 'test'

// arr[0] = 'bali'
// console.log(arr)
// // olsa -> mutable , obyekt kimi
// // olmasa -> immutable, string kimi


// 3 elementli bir massiv yaratmaq. elementler obyekt olmalidir, her obyektin {name, age, job}

// const people = [
//     { name: 'azer', age: 12, job: 'dev' }
// ]
// people[0].name = 'fazil'
// people[0].job = 'frontend dev'

// 2-ci obyekt (index 1 olan)-in adini 'fazil' olaraq deyisin, `job`-na `frontend dev` qoyun



// forin -> obyektlerde (object, string, array) key-leri iterate etmek ucundur. 
// forof -> iterable objectlerde (string, array) value-lari iterate etmek ucundur. 






// const cm2 = ['ali', 'ibo', 'eshqin', 'shehla']
// const obj = {
//     name: 'ali',
//     age: 12
// }

// for (const elem of obj) {
//     console.log(elem)
// }



// Data Structure
// Queue -> shift (ilk elementi cixarir)
// Stack -> yigin, bosqablar, ot tayasi, "paltar tayasi" -> 
//  Set, Map

// const cm2 = []

// cm2.push('fazil')
// cm2.push('tariyel')
// cm2.push('azer')
// cm2.push('esqin')
// cm2.push('ali')

// const fir = cm2.shift()
// const last = cm2.pop()
// unshift -> evvelinden elave etmek
// push -> sonundan elave etmek
// pop -> sonundan goturmek
// shift -> evvelinden goturmek

// queue -> novbe      ali esqin azer tariyel 🍴
// novbeye ilk giren Fazildir, ilk yemeyi alan (novbeden cixan) Fazil olacaq
// First In , First Out  -> FIFO

// Stack -> 
// LIFO -> Last In, First Out


// massiv yaradin. elementi olmadan. 
// 3 eded elave edin. Push-la edin. prompt-la goturulmelidir. 
// hemin ededlerin cemini ekrana cixarin. (massivi loop ederek)


// const cm2 = ['ali', 'zamin', 'ahmad', 'bali']
// cm2.sort()
// console.log(cm2) // unicode, ascii

// const ar = [12, 1, 2, 23, 35] // string kimi baxir
// ar.sort((a, b) => b - a)
// console.log(ar)


// const arr = ['ali 12', 'eshqin 19', 'fazil 8']
// arr.sort((a, b) => b.slice(-2) - a.slice(-2))
// console.log(arr)

// const arr2 = [
//     "zeyneb 1798",
//     "esqin 2000",
//     "cavidan 1879",
//     "ali 1978",
// ]
// arr2.sort((a, b) => b.slice(-4) - a.slice(-4))

// console.log(arr2) //  ["esqin 2000" , "ali 1978","cavidan 1879","zeyneb 1798"]



// splice -> swiss knife
// massive elemnt elave et, sile bilersen, evez ede bilersen
// const cm2 = ['ali', 'zamin', 'ahmad', 'bali']

// // cm2.splice(2, 1, 'ayla')
// cm2.splice(1, 0, 'esqin', 'cavidan')

// console.log(cm2)






// rest operator  (qalanlari demekdir.)
// function cem(...arr) {
//     let sum = 0
//     for (let ed of arr) {
//         sum += ed
//     }
//     return sum;
// }
// console.log(cem(12, 23, 34, 45, 56, 67, 78, 89, 90))

// function familySentence(momName, dadName, ...childName) {
//     let children = childName.join("-");
//     let sentence = `${momName} and ${dadName} have ${childName.length} children: ${children}.`;
//     return sentence;
// }

// console.log(familySentence("leyli", 'majnon', 'asif', 'agasif', 'balasif'))
// // Our family consists of 5 people. Mother name leyli, father name majnon. Children are: asif-agasif-balasif.
// console.log(familySentence("leyli", 'majnon', 'asif'))
// // Our family consists of 5 people. Mother name leyli, father name majnon. Children are: asif.




// // ... -> spread

// const obj = {}
// const obj2 = { ...obj }

// const arr = [1, 2, 3, 4, 5]
// const arr2 = [...arr]
// arr2[0] = -1

// console.log(arr)
// console.log(arr2)
// // ... -> rest 



// // indexFinder(name)

// const indexFinder = (name) => {
//     let index = cm2.indexOf(name)
//     if (index !== -1) {
//         return index
//     }
//     return 'not found'
// }


// console.log(indexFinder('ayla')) // 2
// console.log(indexFinder('aytac')) // 4
// console.log(indexFinder('ahmad')) // "not found"

const cm2 = ['ali', 'eshqin', 'ayla', 'zeyneb', 'aytac', 'tariyel', 'shehla']



function convertFirstSymbolAndUppercase(arr) {
    let newArr = []
    for (let elem of arr) {
        newArr.push(elem[0].toUpperCase())
    }
    return newArr;
}


console.log(convertFirstSymbolAndUppercase(cm2))// ['A', 'E', 'A', 'Z', 'A', 'T', 'S']








// function filterByStartsWith(text) {
//     const arr = []
//     for (const elem of cm2) {
//         if (elem.startsWith(text)) {
//             arr.push(elem)
//         }
//     }
//     return arr;
// }

// console.log(filterByStartsWith('a')) // [ali, ayla, aytac]
// console.log(filterByStartsWith('e')) // [eshqin]
// console.log(filterByStartsWith('za')) // []


/*
1. func yaratmaq+
2. bos massiv yarat (hansi ki, doldurub return edeceksen)
3. doldurmaq merhelesi.(for, forof*)
4. massivi return et. 


*/
