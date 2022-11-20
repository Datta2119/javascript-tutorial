// const letterCounter = () => {
//     const phrase = 'hey, are you alright?'

//     for (let letter of phrase) {
//         console.log(letter)
//     }

//     for (let letter = 1; letter <= phrase.length; letter++) {
//         console.log(letter)
//     }
// }

// letterCounter()

// const nums = [1, 2, 3, 4, 5]

// const sumArray = (numbers) => {
//     let result = 0
//     for (const number of numbers) {
//         // console.log(number)
//         result += number
//     }

//     return { result }
// }

// console.log(sumArray(nums))

// const max = (numbers) => {
//     let result = numbers[0]

//     for (let number of numbers){
//         if(number > result){
//             result = number
//         }
//     }

//     return {result}
// }

// console.log(max([1, 2, 3, 4, 5, 1, -1]))

const letterFrequency = (phrase) => {
    // letterFrequency('haha') 👉 {'h': 1, 'a': 1}
    console.log(phrase)
    // make a `frequency` object

    let frequency = {}

    for(const letter of phrase){
        // check if letter exists in frequency
        if (letter in frequency) {
            // increment the value by +1
            frequency[letter] = frequency[letter] + 1
        } else {
            // otherwise, set the value by 1
            frequency[letter] = 1
        }  
    }

    return frequency
}

// console.log(letterFrequency('Sumon Paul'))

const wordFrequency = (phrase) => {
    console.log(phrase)
    const wordArray = phrase.split(' ')
    let frequency = {}

    for(const word of wordArray){
        if (word in frequency) {
            frequency[word] += 1
        } else {
            frequency[word] = 1
        }
    }

    return frequency
}

// console.log(wordFrequency('lol what lol'))

const wordCounter = (phrase) => {
    const wordArray = phrase.split(' ')

    return letterFrequency(wordArray)
}

console.log(wordCounter('hello not hello'))