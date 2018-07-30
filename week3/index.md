<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



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


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Exercise: Your turn
* See if you can load notes from the provided endpoint to the table
* [HIT238 Fetch Exercise](https://codepen.io/elvey/pen/qyXrMQ?editors=1111#)
* Save your solution, you will need it shortly


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Sending data with fetch
* Fetch takes a second argument for options
* Can set the following data
	* Method
	* Mode
	* Headers
	* Body


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Send JSON Data
* Set method to put or post
* Set content-type header to application/json
* Set body to JSON string
* Set mode to cors if required


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
fetch(url, {
	method: 'post',
	mode: 'cors',
	headers: {
		'Content-Type', 'application/json'
	},
	body: JSON.stringify(data)
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add a form to your solution to  [HIT238 Fetch Exercise](https://codepen.io/elvey/pen/qyXrMQ?editors=1111#)
* Add a button to submit the form data to the server
	* This should be a post request
	* You will need to enable cors
* Show the success (or error) message to the user



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## CORS
* Cross Origin Resource Sharing


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Same Origin Policy
* Browser restricts HTTP requests to resources within the same origin
* A domain is
	* Some host (subdomains are also excluded)
	* Same port
	* Same protocol
* Embedded resourecs are not restricted (images, CSS, scripts, etc...


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is CORS
* CORS allows a resource to permit additional domains to access it
* The response header defines the pages that are permitted to access the resource
	* Defined in the Access-Control-Allow-Origin header
* For modify requests (not GET) the broswer makes a preflight request
	* Can see OPTIONS request in dev tools
* Server also declares if credentials may be sent with requests


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using CORS
* The browser will automatically handle CORS for your requests
* You get an invalid request error if CORS fails
* You may need to set credentials to include if authentication is required


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### User CORS on the server
* If writing a server-side API you will need to set the Access-Control-Allow-Origin header
* The * directive is not well supported so it is best to specify the required domain name
* You can read the requestor domain from the Origin header in the request
* Look up CORS implementation for your language of choice


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Watch it happen
* Open up your solutions to the fetch activity
* Open the network tab and watch the requests get made
* Click on the requests and examine the headers
* Change the domain from notes.php to notes-nocors.php
	* What happens?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Polyfills
* Implement newer functionality in older browsers


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Polyfill fetch
* [Fetch is not supported by IE browsers](https://caniuse.com/#search=fetch)
* We can provide this functionality manually using a [pollyfill](https://github.com/github/fetch)
* You can find a CDN of this pollyfill at https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.4/fetch.js


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Implement the fetch pollyfill
* Include the CDN in your fetch exercise
* Examine the fetch object in your debugger or console
* Is it any different?
	* Why? Why not?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Lots of pollyfills
* [Promises](http://bluebirdjs.com/docs/api-reference.html) (arguably not a true pollyfill)
* [Picture](http://scottjehl.github.io/picturefill/)
* [ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Polyfill)
* [MathML](https://wet-boew.github.io/wet-boew/demos/mathml/mathml-en.html)
* [Video](https://www.mediaelementjs.com/) (more of a wrapper than a pollyfill)
* Heaps more


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Modernizr
* [Modernizr](https://github.com/Modernizr/Modernizr) checks what functionality is available
* Can load pollyfills when required
* [Simple Syntax](https://modernizr.com/docs/#using-modernizr-with-javascript)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Don't overdo pollyfills
Read### Don't overdo pollyfills
Read the section "Is there a CSS Grid Pollyfill" in https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/

Why is a grid pollyfill a bad idea? Does this apply to other features?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Progressive Enhancement
* Progressive enhancement and graceful degredation suggest
	* A site should work without newer features
	* Add functionality as it becomes available
* Only polyfill what is absolutely necessecary
