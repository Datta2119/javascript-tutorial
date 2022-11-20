/*
API: API stands for 'Application Programming Interface' and it lets your app communicate with other services to fetch data

fetch(): The fetch() method in JavaScript is used to request data from a server. The request can be of any type of API that return the data in JSON or XML. The fetch() method requires one parameter, the URL to request, and returns a promise.

Promise: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Asynchronous Operation: Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.
*/

const dogImageDiv = document.getElementById('dogImageApi')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(
        json => {
            console.log(json.message)
            dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
        }
    )
}

dogButton.onclick = () => getNewDog()