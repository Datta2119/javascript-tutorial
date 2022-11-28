const API_KEY = "b0a0752445d6281ed418660570fb3354"
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`

fetch(url)
.then(response => response.json())
.then(json => console.log(json))


// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}