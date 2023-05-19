const rootElem = document.getElementById('root')


window.addEventListener('keydown', (e) => {
    console.log(e)
    if (e.key === 'Backspace') {
        const lastSpaceIndex = rootElem.textContent.lastIndexOf(' ')
        rootElem.textContent = rootElem.textContent.slice(0, lastSpaceIndex)
    }
    else if (e.keyCode >= 65 && e.keyCode <= 122 || e.keyCode === 32) {
        rootElem.textContent += e.key
    }
})
