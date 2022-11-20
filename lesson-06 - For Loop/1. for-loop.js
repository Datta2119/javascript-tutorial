const fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐',]


// for(let fruit = 0; fruit < fruits.length; fruit++){
//     console.log(fruits[fruit])
// }

// for(const fruit of fruits){
//     console.log(fruit)
// }


// sum up all numbers in array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = []

// for (const number of numbers){
//     result.push(number * 2)
// }

// console.log(result)

// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number * 2)
//     }
//     return result
// }

// console.log(double([1, 2, 3, 4, 5]))

const squareFunction = (numbers) => {
    let result = []
    for (const number of numbers) {
        result.push(number ** 2)
    }

    return result
}

console.log(squareFunction([1, 2, 3, 4, 5, 6]))
