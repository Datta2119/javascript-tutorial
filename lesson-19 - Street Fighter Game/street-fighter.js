/*
🌟 APP: Fighting Game

Create an updateGame() function that will update the DOM with the state of the game 👇
========================================

- updateGame()

These are the 2 classes you must create and their methods 👇
========================================

class Player {
  - strike()
  - heal()
}

class Game {
  - play()
  - checkIsOver()
  - declareWinner()
  - reset()
}

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'play' = Button to run simulation
#2 ID 👉 'result' = Div that holds the winner of the match
#3 ID 👉 'p1Name' = Div that holds player 1's Name
#4 ID 👉 'p2Name' = Div that holds player 2's Name
#5 ID 👉 'p1Health' = Div that holds player 1's health
#6 ID 👉 'p2Health' = Div that holds player 2's health
*/

const playButton = document.getElementById("play")
const resultDiv = document.getElementById("result")
const player1NameDiv = document.getElementById("p1Name")
const player2NameDiv = document.getElementById("p2Name")
const player1HealthDiv = document.getElementById("p1Health")
const player2HealthDiv = document.getElementById("p2Health")

class Player {
    constructor(name, health, attachDamage){
        this.name = name
        this.health = health
        this.attachDamage = attachDamage
    }

    strike(){
        pass
    }

    heal(){
        pass
    }
}

class Game {
    play(){
        pass
    }

    checkIsOver() {
        pass
    }

    declareWinner() {
        pass
    }

    reset() {

    }
}