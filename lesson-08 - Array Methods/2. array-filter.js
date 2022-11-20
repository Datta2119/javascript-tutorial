/*
👉 The filter() method creates a new array filled with elements that pass a test provided by a function.

👉 The filter() method does not execute the function for empty elements.

👉 The filter() method does not change the original array.
*/

// const ages = [32, 33, 16, 40]

// function checkAdult(age) {
//     return age >= 18
// }

// const result = ages.filter(checkAdult)

// console.log(result)

const numberFilter = (numbers, greaterThan) => {
    let result = []
    for(const number of numbers){
        if(number > greaterThan){
            result.push(number)
        }
    }
    return result
}

// console.log(numberFilter([1, 2, 3, 4, 5, 6, 7], 3))

const actors = [
    {
        name: 'Johnny',
        netWorth: 100000
    },
    
    {
        name: 'Amber',
        netWorth: 10
    },

    {
        name: 'Leonardo',
        netWorth: 200000000
    },
]

let result = actors.filter(actor => actor.netWorth > 10)
console.log(result)
let root = document.getElementById('root')
let names = result.map(actor => actor.name).join(', ')
root.innerHTML = `<h1> ${names} </h1>`


    