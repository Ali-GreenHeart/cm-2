const url = 'https://restcountries.com/v3.1/name/' //Ali-GreenHeart

const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const user_name = document.getElementById('user_name')
const user_location = document.getElementById('user_location')
const followers_count = document.getElementById('followers_count')
const repos_count = document.getElementById('repos_count')
const img = document.querySelector('img')


search_btn.onclick = async () => {
    const { data } = await axios.get(url + input.value)
    user_name.textContent = data[0].name.common
    user_location.textContent = data[0].capital[0]
    img.src = data[0].flags.png
}
