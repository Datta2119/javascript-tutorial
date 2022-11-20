/*
Function:
-----------
@calculateFoodTotal is a function. It has 2 arguments named '@food' & '@tip'.
@tipPercentage will calculate the percentage upon given tip value.
@tipAmount will calculate the amount of tip user wnats to provide.
@total will retun the total value of bill by dealing with '@foodPrice' & '@tipAmount'.
*/

function sum(a, b){
    return a + b
}

function calculateFoodTotal(food, tip){
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    return total
}

console.log(calculateFoodTotal(150, 30))