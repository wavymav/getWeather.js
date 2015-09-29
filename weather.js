// Requiring one of Node's built in modules 'http'
// Requiring my OpenWeatherMapAPI
// Requiring my both message() & errorMessage()
var http = require('http'),
		apiKey = require('./apiKey');
		consoleLog = require('./consoleHelpers');

// =======================================================================

var get = function(zipcode) {
	// Setting up the http .get() method
	var req = http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial=' + apiKey, function(res) {
		console.log(res.statusCode);
		console.log(http.STATUS_CODES[res.statusCode]);

		// =====================================================================

		// declaring and empty string called bodyData to store the enitre reponse body data
		// form the stream chunks.
		var bodyData = '';
		// Using the 'data' event handler to pass in the chunks of data from the response.
		res.on('data', function(data) {
			// Concats the each data chunk to the bodyData var
			bodyData += data;
		});

		// =====================================================================

		// Using the 'end' event handler to access the data stored in bodyData after the
		// concatenation of data complets in the 'data' event handler.
		res.on('end', function() {

			// If the response statusCode is 200 (OK)
			if (res.statusCode === 200) {
				// Using the try catch block to find any parsing errors
				try {
					// Parsing the JSON data & storing it in weatherData var
					var weatherData = JSON.parse(bodyData);

					// storing the weatherData property values for current temperature & location
					var temperature = weatherData.main.temp,
							location = weatherData.name;

					// Invoking the consoleMessage() with the property values of weatherData
					consoleLog.message(location, temperature);

				} catch (err) {
					// Cating the parse error
					// Invoking the errorConsoleMessage()
					consoleLog.errorMessage(err);
				}
			} else {
				// logging out the response status code description if it's not 200 (OK)
				consoleLog.errorMessage({message: 'There was an error with the reponse! ('+ http.STATUS_CODES[res.statusCode] +')'});
			}
		});
	});

	// Handles any errors that may occur on the request object for the connection
	req.on('error', consoleLog.errorMessage);
};


module.exports.getWeather = get;
