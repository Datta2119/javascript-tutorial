// const orderSoup = () => console.log('soup is ready')
 
// console.log('I have started my conversation')
// setTimeout(orderSoup, 2000) //2000 => 2000 mili second => 2 second
// console.log('conversation continues')

// The new Promise() constructor returns a promise object.
// The constructor function takes a function as an argument. This function is called the executor function
// The executor function takes two arguments, resolve and reject. 
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         ifReady = false
//         ifReady ? resolve('soup is ready'): reject('no soup today')
//     }, 2000)
// })


// async and await

const orderMySoup = () => {

    const ifResolved = () => {
        console.log("✅ You're soup is ready 🍲")
        const tipAmount = 10

        return `You have paid the tip: $${tipAmount}`
    }

    const ifRejected = () => {
        console.log("❌ Sorry!! No soup for today 😔")
        const badReview = "Service is very poor"
        const tipAmount = 0

        return `Review: ${badReview}
        You have paid the tip: $${tipAmount}`
    }


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ifReady = [true, false] [Math.floor(Math.random() * 2)]
            ifReady ? resolve(ifResolved()) : reject(ifRejected())
        }, 2000)
    })
}

const getMySoup = async () => {
    console.log("Your soup is getting ready 🍳")

    try{
        const result = await orderMySoup()
        console.log(result)
    } catch (error){
        console.log({error})
    }
}

console.log(getMySoup())