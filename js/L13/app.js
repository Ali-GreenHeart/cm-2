// const audio = document.querySelector('audio')

// const bombId = setTimeout(() => {
//     audio.src = "./Counter Terrorists Win - CS GO - QuickSounds.com.mp3"
//     audio.play()
//     console.log('💣')
// }, 3000);


// let mesaj = ''
// window.addEventListener('keydown', (e) => {
//     mesaj += e.key
//     console.log(mesaj)
//     if (mesaj === 'defuse') {
//         clearTimeout(bombId)
//         console.clear()
//         audio.src = "./Bomb Has Been Defused - CS GO - QuickSounds.com.mp3"
//         audio.play()
//     }
// })





const button = document.querySelector('button')

if (localStorage.getItem('mode') === 'dark') {
    button.innerHTML = '☀'
    document.body.classList.add('darkMode')
} else {
    button.innerHTML = '🌙'
    document.body.classList.remove('darkMode')
}

button.onclick = () => {
    document.body.classList.toggle('darkMode')
    if (document.body.classList.contains('darkMode')) {
        button.innerHTML = '☀'
        localStorage.setItem('mode', 'dark')
    } else {
        button.innerHTML = '🌙'
        localStorage.setItem('mode', 'light')
    }
}
