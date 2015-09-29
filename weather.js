// Requiring one of Node's built in modules 'http'
var http = require('http'),
		apiKey = require('./apiKey');

// Converts the number data type into a string data type
var convertToString =  function(number) {
	var string = number.toString();

	return string;
};

// removes the deciaml and digits from the temperature string passed in
var removeDecimalAndDigits = function(number) {
	var	string = convertToString(number),
	// finds the index of the deciaml or ('.' character) in the string
			endIndex = string.indexOf('.'),
	// uses the number value in endIndex as the endpoint of the slice method
			value = string.slice(0, endIndex);

	return value;
};

// consoleMessage() logs the message of the current weather in a specific location
var consoleMessage = function(cityName, cureentTemperature) {

	var temp = removeDecimalAndDigits(cureentTemperature),
			message = 'The current temperature in ' +
								cityName + ' is ' +
								temp + '°F';

	console.log(message);
};

// logging out the error message
var errorConsoleMessage = function(error) {
	console.error('There was an error: ' + error.message);
};

// =======================================================================

// Setting up the http .get() method
var req = http.get('http://.openweathermap.org/data/2.5/weather?zip=20740,us&units=imperial=' + apiKey, function(res) {
	console.log(res.statusCode);

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
		// Using the try catch block to find any parsing errors
		try {
			// Parsing the JSON data & storing it in weatherData var
			var weatherData = JSON.parse(bodyData);

			// storing the weatherData property values for current temperature & location
			var temperature = weatherData.main.temp,
					location = weatherData.name;

			// Invoking the consoleMessage() with the property values of weatherData
			consoleMessage(location, temperature);

		} catch (err) {
			// Cating the parse error
			// Invoking the errorConsoleMessage()
			errorConsoleMessage(err);
		}
	});
});

// Handles any errors that may occur on the request object for the connection
req.on('error', errorConsoleMessage);
