// // const ad = prompt('adinizi daxil edin: ')

// // // syntax error
// // // runtime errorlari!
// // let test = 12
// try {
//     console.log(test)
// } catch (err) {
//     console.log('error cixdi! ad null ola bilmez!')
//     console.log(err.message)
//     console.log(err.stack)
// } finally {
//     console.log('sonda .... ')
// }
// // pollute
// console.log('heyat davam edir')

// // // exception (error) handling





// 1. configuration files 
// 2. data alis-verisi

// number, boolean, string, null, [], {}


// const obj = {
//     name: 'test',
//     gender: true,
//     age: 12,
//     friends: [
//         "ali",
//         "aydan"
//     ],
//     car: null,
//     enemies: undefined,
//     doing: () => {
//         console.log('coding...')
//     }
// }

// const dataFromFe = JSON.stringify(obj)
// console.log(dataFromFe)

// // BackendSide

// const dataInBe = JSON.parse(dataFromFe)
// console.log(dataInBe)



// // Asynchronous JavaScript And XML  [data format]

// REST API
// Application Programming Interface

const url = `https://jsonplaceholder.typicode.com/users`

axios.get(url).then((response) => {
    console.log(response.data)
})

// fetch(url)
//     .then((resp) => resp.json())
//     .then((users) => {
//         users.forEach((user) => {
//             document.write(`<p>${user.id}-${user.name}</p>`)
//         })
//     })

