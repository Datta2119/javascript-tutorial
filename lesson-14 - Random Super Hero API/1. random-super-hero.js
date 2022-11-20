/*

Description:
This is a Super Hero application which will display their name and some of their power stats.

Functionality:
The application has two functionalities -

Random Picked 👉 There will a button which will pick a hero randomly using the super hero api
Search Based  👉 There will a search box where user will input their desired hero name and their desired hero's information will be displayed.

Resources: 

Main website  👉 https://superheroapi.com
Random Picked 👉 https://superheroapi.com/api/access-token/character-id
Search Based  👉 https://superheroapi.com/api/access-token/search/name

*/

// Global variables [These variables will be used for both the functionalities]
const ACCESS_TOKEN = 855274955917641
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`

const heroNameDiv = document.getElementById('heroName')
const heroImageDiv = document.getElementById('heroImage')

// =========== Pick up your super hero by clicking Random Hero Button ===========

// "getRandomSuperHero" is a function which will pick a random number from "idArray"
// It'll then search in the API with that id and fetch the relevant super hero data against the id
// It has 0 argument
const getRandomSuperHero = () => {
    let idArray = []

    // This for loop is looping through 1 to 731 and pushing each value to the array
    for (let id = 1; id <= 731; id++) {
        idArray.push(id)
    }

    let randomId = Math.floor(Math.random() * idArray.length)
    console.log(randomId)

    fetch(`${BASE_URL}/${randomId}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        heroNameDiv.innerHTML = `<span> ${json.name} </span>`
        heroImageDiv.innerHTML = `<img src="${json.image.url}" height=300 width=250/>`
    })
}

const randomHeroButton = document.getElementById('randomHeroButton')
randomHeroButton.onclick = () => getRandomSuperHero()


// =========== Pick up your super hero by searching ===========
const searchInputBox = document.getElementById('searchInput')

// "getSearchSuperHero" is a function which will take an input from user
// It'll then search in the API by that name and fetch the relevant super hero data against the name
// It has 1 argument 👉 "name"
const getSearchSuperHero = (name) => {
    console.log(searchInputBox.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        console.log(hero)
        heroNameDiv.innerHTML = `<span> ${hero.name} </span>`
        heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=300 width=250/>`
    })
}

const searchButton = document.getElementById('searchButton')
searchButton.onclick = () => getSearchSuperHero(searchInputBox.value)