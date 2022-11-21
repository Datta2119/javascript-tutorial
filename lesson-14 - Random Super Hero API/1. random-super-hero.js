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
const heroPowerStatsDiv = document.getElementById('heroPowerStats')
const heroPower = document.getElementById('heroPower')
const heroIntelligence = document.getElementById('heroIntelligence')
const heroCombat = document.getElementById('heroCombat')

// const img = document.getElementById('img');
// img.innerHTML = `<img src="https://png.pngtree.com/png-clipart/20211014/ourmid/pngtree-ninja-assassin-game-logo-clothing-gray-png-image_3981078.png" />`

// img.addEventListener('error', function handleError() {
//   const defaultImage = 'https://png.pngtree.com/png-clipart/20211014/ourmid/pngtree-ninja-assassin-game-logo-clothing-gray-png-image_3981078.png';

//   img.src = defaultImage;
//   img.alt = 'default';
// });


const statToEmoji = {
    intelligence: "🧠",
    strength: "💪",
    speed: "⚡",
    durability: "🏋️",
    power: "📊",
    combat: "⚔️",
}

const superHeroStat = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p> ${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]} </p>`
    })

    console.log(stats.join(''))
    return stats.join('')
}

// =========== Pick up your super hero by clicking Random Hero Button ===========

// "getRandomSuperHero" is a function which will pick a random number from "idArray"
// It'll then search in the API with that id and fetch the relevant super hero data against the id
// It has 0 argument
const getRandomSuperHero = () => {
    // const idArray = []

    // for(let id = 1; id <= 731; id++){
    //     idArray.push(id)
    // }

    // let randomId = Math.floor(Math.random() * idArray.length)
    // console.log(randomId)

    const numberOfHeros = 731

    let randomId = Math.ceil(Math.random() * numberOfHeros)
    console.log(randomId)

    fetch(`${BASE_URL}/${randomId}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const stats = superHeroStat(json)
        heroNameDiv.innerHTML = `<h2> Super Hero: ${json.name} </h2>`
        heroImageDiv.innerHTML = `<img src="${json.image.url}" height=300 width=250/>${stats}`
        // heroPower.innerHTML = `<p> 💪 Power: ${json.powerstats.power} </p>`
        // heroIntelligence.innerHTML = `<p> 🧠 Intelligence: ${json.powerstats.intelligence} </p>`
        // heroCombat.innerHTML = `<p> 🥷 Combat: ${json.powerstats.combat} </p>`
    })
}

const randomHeroButton = document.getElementById('randomHeroButton')
randomHeroButton.onclick = () => {
    // img.style.display = "none"
    getRandomSuperHero()
}


// randomHeroButton.onclick = () => {
//     // img.style.visibility = "hidden"
//     img.style.display = "none"
//     getRandomSuperHero()
// }


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
        const stats = superHeroStat(hero)
        heroNameDiv.innerHTML = `<h2> Super Hero: ${hero.name} </h2>`
        heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=300 width=250/>${stats}`
        // heroPower.innerHTML = `<p> 💪 Power: ${hero.powerstats.power} </p>`
        // heroIntelligence.innerHTML = `<p> 🧠 Intelligence: ${hero.powerstats.intelligence} </p>`
        // heroCombat.innerHTML = `<p> 🥷 Combat: ${hero.powerstats.combat} </p>`
    })
}

const searchButton = document.getElementById('searchButton')
searchButton.onclick = () => {
    // img.style.display = "none"
    getSearchSuperHero(searchInputBox.value)
}