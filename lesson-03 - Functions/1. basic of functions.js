/*
Basic of Functions:

## Function: A JavaScript function is a block of code designed to perform a particular task and is executed when "something" call it.

## Function Arguments: Function arguments are the values received by the function when it is called, they behave as variable, however they only live within the function and can not be accessed outside.

## String Concatenation: Adding two or more strings together

## Template Literals: Template literals provide an easy way to interpolation variables and expressions into string.

## Interpolation: Referencing a variable within a string

## Return Statement: The return statement stops the execution of a function and returns a value. The 'return' statements makes the function reusable. So we can use the same function in multiple places
*/



// This is a function called 'sayMyName'
// Function with 0 argument [Traditional Function]
// does: It logs out the name into the console


function sayMyName(){
    console.log('Bishway')
}

// sayMyName()

function calculateFoodTotal(food, tip){
    let tipPercentage = tip / 100
    let tipAmount = food * tipPercentage
    let total = food + tipAmount

    return total
}

calculateFoodTotal(100, 20)