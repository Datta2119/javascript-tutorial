/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
 const getWeatherData = (city) => {
	//CODE GOES HERE
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f8b9123609msh43bd173fb634994p1e354ajsn6304e89db187',
			'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
		}
	};
	
	return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
		.then(response => response.json())
		// .then(response => console.log(response.name))
		.then(response => console.log(response))
		.catch(err => console.error(err));
  }
  
  /**
   * Retrieve city input and get the weather data
   * HINT: Use the promise returned from getWeatherData()
   */
  const searchCity = async () => {
	const city = document.getElementById('city-input').value;
	// CODE GOES HERE
	console.log(city)
	const data = await getWeatherData(city)
	showWeatherData(data)
  }
  
  /**
   * Show the weather data in HTML
   * HINT: make sure to console log the weatherData to see how the data looks like
   */
  const showWeatherData = (weatherData) => {
	//CODE GOES HERE
	console.log(weatherData, "🍪")
	console.log(weatherData.main[0])
	document.getElementById('temp').innerText = "86.6" 
  }