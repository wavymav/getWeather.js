// Requiring one of Node's built in modules 'http'
var http = require('http'),
		apiKey = require('./apiKey');

// Setting up the http .get() method
var req = http.get('http://api.openweathermap.org/data/2.5/weather?zip=20721,us=' + apiKey, function(res) {
	console.log(res.statusCode);
});
