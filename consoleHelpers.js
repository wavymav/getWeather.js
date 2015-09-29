var exports = module.exports = {};

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

// message() logs the message of the current weather in a specific location
exports.message = function(cityName, cureentTemperature) {

	var temp = removeDecimalAndDigits(cureentTemperature),
			message = 'The current temperature in ' +
								cityName + ' is ' +
								temp + '°F';

	console.log(message);
};

// errorMessage() logs the error message
exports.errorMessage = function(error) {
	console.error('There was an error: ' + error.message);
};
