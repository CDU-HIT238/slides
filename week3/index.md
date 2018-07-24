<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## JSON
* JavaScript Object Notation


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some History
* For a long time we used XML to send data between web pages
* Big, clunky and complex to parse
* Douglas Crockford proposed JSON in the early 2000s
	* Based on JavaScript Syntax
	* Easily converted to/from javascript objects


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is JSON
* A string representation of nested data
* Modeled off JavaScript objects
* Has .json extension
* Has application/json MIME type
* Allows for data to easily be sent between server/client


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Permitted data
* String
* Number
* Boolean
* Null
* Array
* Object


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What does it look like?
```json
{
	"name": "Beatrice",
	"age": 72,
	"pets: [
		{
			"name": "Tobias",
			"type": "dog"
		},
		{
			"name": "Delilah",
			"type": "cat"
		}
	]
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Writing JSON
* All strings and keys must be quoted with "
* Comma must be used between array elements but a hanging comma is not permitted
* Write objects with {} and arrays with []
* Any valid value is also a valid JSON string


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using JSON: Convert JSON to JS
* JSON.parse() will parse a JSON string to a JavaScript Object
```
var data = JSON.parse(jsonString);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using JSON: Convert JS to JSON
* JSON.stringify() will convert your JavaScript object to a JSON string
```
var jsonString = JSON.stringify(data);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Create and load JSON data
* Open the pen [https://codepen.io/elvey/pen/XBjOZe](https://codepen.io/elvey/pen/XBjOZe)
* Write a function to save data from the form to the textarea
* Write a function to load JSON data from the textarea to the form
* Can you save multiple records in the JSON data?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Promises
* Alternative to callbacks
* Handle completion (or failure) of an asynchronous operation
* Sometimes called syntastic sugar
	* They don't give new functionality - just make the code nicer
* Added with ECMAScript 2015 (ES6)
* [Largely supported](https://caniuse.com/#search=promises)

Note:
Promises are a semi-recent addition to javascript.
They were added with ECMAScript 2015 and have been adopted by all major browsers.
They don't actually allow you do do anything new but they can be chained to avoid nested callbacks.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Do this then that
```
asyncFunc()
	.then(function(response) {
		// Do stuff
	})
	.catch(function(error) {
		// Handle error
	});
```

Note:
Promises provide two key functions.
then: Run this code after the function completes successfully
catch: Run this code if the function fails


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Chain your promises
```
loadJSON()
	.then(function(response) {
		return JSON.parse(response);
	})
	.then(function(jsonData) {
		// Do stuff
	})
	.catch(function(error) {
		// Handle error
	});
```

Note:
A chain of promises is a much nicer alternative to nested callbacks.
The catch function will be exected if there is an error anywhere along the chain.
Be careful though, long promise chains can swallow your errors and make it difficult to debug


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Make a promise
```
function timeoutPromise(time) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, time);
	});
}
```

Note:
You usually consume existing promises.
But sometimes you may want to convert an existing callback function to use promises.
To do this you can return a new promise. To create a promise create a Promise object and pass it a function. The function takes two callbacks for arguments, resolve to call when it completes successfully and reject when it fails.
Resolve takes a completion object as an argument and reject takes an error object for the argument/


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Promise everything
You can wait for a group of functions to finish using Promise.all
```
Promise.all(arrayOfPromises)
	.then(function(responses) {
		// Everything is finished
	});
```



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## HTTP Requests


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Load data from a server
* Sometimes called [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) (Asynchronous Javascript And XML)
* Get updated data without reloading the whole page


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### XMLHttpRequest
* Previously used XMLHttpRequest
* Uses callbacks
* Was the standard for a long time
* Ugly and messy - many people used jQuery instead


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Fetch
* A modern solution
* Much nicer interface
* Uses promises


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using fetch
```
fetch('data.json')
	.then(function(response) {
		console.log(response);
	});
```
