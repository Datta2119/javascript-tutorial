// let title = document.getElementById('title')
// title.innerHTML = 'Lesson-09: DOM Manipulation'

const timesClicked = {'red': 0, 'green': 0, 'yellow': 0}

const squares = document.querySelectorAll('.colorSquare')

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
        // console.log(square.value)
    }
})

function clearScores (){
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0

    squares.forEach(square => {
        square.innerText = ''
    })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()