// // synchronous

// // A  -> backend-en data getirir (5san-10san)
// // B -> header-in kodlari 
// // C -> side menu

// // asynchronous




// // setTimeout(() => {
// //     console.log('salam')
// // }, 0);
// // console.log('salam2')




// axios.get(url).then(({ data }) => {
//     console.log(data)
// })

// // console.log('heyyyy')

// // boilerplate  -> 




// Promise -> soz vermek

// 3cu gun saat 9da dersimiz olacaq
// 1. pending
// 2. fulfilled
// 3. rejected



// fetch(url)
//     .then((resp) => resp.json())
//     .then((users) => {
//         users.forEach((user) => {
//             document.write(
// `<p>${user.id} Name: ${user.name} email:${user.email} Company:${user.company.name}</p>`)
//         });
//     })


// function getName(callback) {
//     axios.get(url)
//         .then(({ data }) => {
//             callback(data)
//         })
// }

// getName((datum) => {
//     console.log(datum)
// })

// async function getData(_url) {
//     const { data } = await axios.get(_url)
//     return data
// }
// const BASE_URL = `https://jsonplaceholder.typicode.com`
// async function writeUsers() {
//     const users = await getData(BASE_URL + `/users`)
//     users.forEach((user) => {
//         document.write(`<p>${user.username}</p>`)
//     })
// }
// async function writePosts() {
//     const posts = await getData(BASE_URL + `/posts`)
//     posts.forEach((post) => {
//         document.write(`<p>${post.title}</p>`)
//     })
// }
// writeUsers()
// writePosts()
