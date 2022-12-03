// **While Loop**

// for loop 👉 when the number of iteration is known
// while loop 👉 when the number of iteration is not known or until some condition is true/false

// let num = 0

// while (num < 5) {
//     console.log("looping", num)
//     num++
// }

// **addEventLister**
document.addEventListener("keydown", (pressedKey) => {
    // if (pressedKey.key == "q") {

    // } else {
    //     console.log('NOT Q!!')
    // }

    console.log(`you've pressed ${pressedKey.key}`)
    document.getElementById('punch').play()
})

// **<audio> Tags**