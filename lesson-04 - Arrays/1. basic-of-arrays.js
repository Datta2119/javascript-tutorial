/*
## Array Indexing: The index gives you the location of a value within an array. It is similar to a street number.

## Push Method: Adds one or more elements to the end of an array and returns the new length of the array.

## Slice Method: The slice() method returns the portion of the array you want in a new array. 

## Array Length: Length is an array property that returns the number of elements you have in a given array.
*/


const groceries = ['🍌', '🍎', '🍊', '🍐',]
// Grab the 3rd index/item of the array
// console.log(groceries[3])
groceries.push('🍫')
groceries.push('🍪')
groceries.push('🍓')

// console.log(groceries)

// start from 0 index INCLUSIVE and Up to 2nd index/item
// console.log(groceries.slice(0, 2))
// console.log(groceries.slice(3, 7))
// console.log(groceries.slice(1, 4))

// console.log(groceries.indexOf('🍫'))
// console.log(groceries.length)