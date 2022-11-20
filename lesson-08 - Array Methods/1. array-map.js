/*
👉 map() creates a new array from calling a function for every array element.

👉 map() calls a function once for each element in an array.

👉 map() does not execute the function for empty elements.

👉 map() does not change the original array.
*/

// let result = [1, 2, 3, 4].map(number => number *2)
// console.log(result)

const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
}

console.log(doubleMap([1, 2, 3]))