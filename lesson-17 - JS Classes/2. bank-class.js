class Bank {
    constructor(accountName, balance){
        this.accountName = accountName
        this.balance = balance
    }

    deposit(){
        let amount = Number(prompt("Your amount: "))
        this.balance = Number(this.balance) + amount
        console.log(`You've deposit ${amount} in your account`)
        console.log(`Your current balance is ${this.balance}`)
    }

    withDraw(){
        let amount = Number(prompt("Your amount: "))
        this.balance = Number(this.balance) - amount
        if (this.balance <= 0) {
            return console.log("Sorry!! You don't have sufficient money in your account")
        }else {
            console.log(`You've deposit ${amount} in your account`)
            console.log(`Your current balance is ${this.balance}`)
        }
    }
}

const cityBank = new Bank("Bishway", 100)
// cityBank.deposit()
// console.log(cityBank.balance)
cityBank.withDraw()

