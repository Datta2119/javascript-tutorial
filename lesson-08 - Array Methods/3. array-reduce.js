/*
👉 The reduce() method executes a reducer function for array element.

👉 The reduce() method returns a single value: the function's accumulated result.

👉 The reduce() method does not execute the function for empty array elements.

👉 The reduce() method does not change the original array.
*/

// const num = [1, 2, 3]
// const result = num.reduce((prev, curr) => prev + curr)

// console.log(result)

// const nums = [1, 2, 3, 4]
// const result = nums.reduce((prev, curr) => prev * curr)

// console.log(result)

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

let result = actors.map(actor => actor.netWorth)
const totalNetWorth = result.reduce((prev, curr) => prev + curr)
console.log(totalNetWorth)