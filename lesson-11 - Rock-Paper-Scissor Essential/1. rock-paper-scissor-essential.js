// Select an element randomly from an array
const fruits = ['🍌', '🍊', '🍐', '🍎', '🍓']

const randomFruit = (fruits) => {
    let randomNumber = Math.floor(Math.random() * fruits.length)

    console.log(randomNumber)
    
    return fruits[randomNumber]
}

// console.log(randomFruit(fruits))

// if else if else

const weatherScore = (weather) => {
    let score = 0
    if (weather === 'rainy'){
        return score += 1
    } else if (weather === 'sunny'){
        return score -= 1
    } else if (weather === 'overcast'){
        return score
    } else {
        return {weather}
    }
}

const weather = prompt('weather')
console.log(weatherScore(weather))
