/*
Baby Weather App: (Conditional Programming)

if the weather is rainy then grab your umbrella ☔
if the weather is sunny then wear your sunglass 😎

## Conditionals: Conditionals are used in statements to compare variables' values and/or data type. They always return a boolean value.

## Conditional Symbols and Meanings:

-> "==" => Checks for equality
-> "===" => Checks for qeuality and data type
-> ">" => Greater than
-> "<" => Less than
-> ">=" => Greater than or equal to
-> "<=" => Less than or equal to
-> "!=" => Not to
-> "!==" => Not equal value or type
*/

let weather = prompt('How is the weather:')

if (weather == "rain" || weather == "rainy") {
    console.log('grab your umbrella ☔')
} else {
    console.log('wear your sunglass 😎')
}