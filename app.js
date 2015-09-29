//  requiring the weather.js file
var weather = require('./weather');

// process.argv stores the user input from the command line
/**
* process is a Node.js Host object
*
* To run the app.js in node you would type the following
* 	$ node app.js 20740
*
*   proocess {} holds the property argv: [ 'node', 'app.js', '20740' ]
*
*
*   so in this case I want to grab the only the items that comes after the first two
*   items
*   .slice(2) will give me ['20740']
*/


// storing the value of the item stored after the first two indexes of the argv array property
var zipcode = process.argv.slice(2);

weather.getWeather(zipcode);
