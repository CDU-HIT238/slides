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
var jsonString = JSON.parse(data);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Create and load JSON data
* Open the pen [https://codepen.io/elvey/pen/XBjOZe](https://codepen.io/elvey/pen/XBjOZe)
* Write a function to save data from the form to the textarea
* Write a function to load JSON data from the textarea to the form
* Can you save multiple records in the JSON data?
