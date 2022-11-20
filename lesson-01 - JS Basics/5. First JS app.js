// Prompt => prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog

// TIP CALCULATOR
food = Number(prompt('food price: '))
tipPercentage = Number(prompt('tip %: ')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log(total)