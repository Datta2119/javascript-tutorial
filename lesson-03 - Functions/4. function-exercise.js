const add = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mul = (num1, num2) => num1 * num2
const divide = (num1, num2) => {
    if(num2 === 0){
        console.log("can't divide by 0")
    } else {
        return num1 / num2
    }
}

console.log(add(0, 0))
console.log(sub(0, 0))
console.log(mul(0, 0))
console.log(divide(0, 0))