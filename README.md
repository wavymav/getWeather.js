# getWeather.js
A command line app that retrieves the current tempature for a specified location using the OpenWeatherMap API.

*Note: program will not work without an OpenWeatherMap API Key of your own.*

**This is a demonstration of how the program works**
- Open the command line and travel to the `/getWeather.js` directory and call the following:
```bash
node app.js zipecode
```
- You would replace the 'zipcode' with any zipcode you like

**For example I want to know the current temperature in College Park, MD (20740)**
```bash
node app.js 20740
```
Returns:
```bash
200
OK
The current temperature in College Park is 76°F
```
