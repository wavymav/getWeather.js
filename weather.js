// Requiring one of Node's built in modules 'http'
var http = require('http'),
		apiKey = require('./apiKey');

// Setting up the http .get() method
var req = http.get('http://api.openweathermap.org/data/2.5/weather?zip=20721,us=' + apiKey, function(res) {
	console.log(res.statusCode);

	// declaring and empty string called bodyData to store the enitre reponse body data form the stream chunks.
	var bodyData = '';
	// Using the 'data' event handler to pass in the chunks of data from the response.
	res.on('data', function(data) {
		// Concats the each data chunk to the bodyData var
		bodyData += data;
	});

	// Using the 'end' event handler to access the data stored in bodyData after the concatenation of data complets in the 'data' event handler.
	res.on('end', function() {
		console.log(bodyData);
	});
});

// Handles any errors that may occur on the request object
req.on('error', function(err) {
	// Logs the error to the command line
	console.log('Got an error: ' + err.message);
});
