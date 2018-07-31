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
* We can provide this functionality manually using a [polyfill](https://github.com/github/fetch)
* You can find a CDN of this polyfill at https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.4/fetch.js


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Implement the fetch polyfill
* Include the CDN in your fetch exercise
* Examine the fetch object in your debugger or console
* Is it any different?
	* Why? Why not?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Lots of polyfills
* [Promises](http://bluebirdjs.com/docs/api-reference.html) (arguably not a true polyfill)
* [Picture](http://scottjehl.github.io/picturefill/)
* [ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Polyfill)
* [MathML](https://wet-boew.github.io/wet-boew/demos/mathml/mathml-en.html)
* [Video](https://www.mediaelementjs.com/) (more of a wrapper than a polyfill)
* Heaps more


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Modernizr
* [Modernizr](https://github.com/Modernizr/Modernizr) checks what functionality is available
* Can load polyfills when required
* [Simple Syntax](https://modernizr.com/docs/#using-modernizr-with-javascript)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Don't overdo polyfills
Read the section "Is there a CSS Grid Polyfill" in https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/

Why is a grid polyfill a bad idea? Does this apply to other features?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Progressive Enhancement
* Progressive enhancement and graceful degredation suggest
	* A site should work without newer features
	* Add functionality as it becomes available
* Only polyfill what is absolutely necessecary



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Geolocation API


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Get the user's current position
* Watch for changes in the position


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some caveats
* The location API is only available on HTTPS connections
* The user must grant access to geolocation
* No guarantee that geolocation is available


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check if geolocation is available
* Check for navigator.geolocation
	* If it is truthy than geolocation services are available

```js
if("geolocation" in navigator) {
	// location services are available
} else {
	// location services are not available
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Getting the current position
* navigator.geolocation.getCurrentPosition(successFunc, errFunc, options)
	* Get's the current position and calls a callback function
	* Calls successFunc when the location is successfully retrieved
	* successFunc takes a [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) parameter
	* Calls the optional errFunc when an error occurs
	* errFunc takes a [PositionError](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) parameter
	* The optional [options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) parameter provides configuration 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using getCurrentPosition
```js
navigator.geolocation.getCurrentPosition(
	function(position) {
		console.log('Success', position);
	},
	function(err) {
		console.error('Error', err);
	}
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Reading the location
* The position object holds the [coordinates](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) and a timestamp
```
{
	coords: {
		accuracy: 30,
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		latitude: -12.388257999999999,
		longitude: 130.872771,
		speed: null
	},
	timestamp: 1532945280233
}

```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Coordinates
* Accuracy - the accuracy of the location in metres
* Altitude - The altitude from sea level in metres
* Altitude Accuracy - The accuracy of the altitude in metres
* Heading - The direction of motion in degrees from true north
* Latitude - The current latitude in degrees
* Longitude - The current longitude in degrees
* Speed - The current velocity in metres per second


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Location accuracy
* By default getCurrentLocation tries to get a fast low-accuracy location
	* Usually from network location
* You can request a high accuracy location
	* Usually from GPS
	* Takes longer
	* May not be available


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
navigator.geolocation.getCurrentPosition(
	successFunc,
	errorFunc,
	{
		enableHighAccuracy: true
	}
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Add a marker to the map
* Open the pen [https://codepen.io/elvey/pen/BPJppR](https://codepen.io/elvey/pen/BPJppR)
* Add a marker at the current location using the addMarker() function
* Try with both high and low accuracy
	* Do not notice any difference
	* Why or why not?
* Test on a mobile device if you can
* Save your changes. You'll need them shortly


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Watching the location
* You can watch the current position for changes with watchPosition()
* Same input parameters as getCurrentLocation()
* The success callback gets called each time the position is updated
* You can stop watching using clearWatch()


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```js
var watchID = navigator.geolocation.watchPosition(
	successFunc,
	errorFunc
);
navigator.geolocation.clearWatch(watchID);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Update the map marker
* Go back to the code from your last activity
* Use watchLocation to move the marker when the position changes
* Use moveMarker() to update the marker position


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Checking permission
* The geolocation API does not allow you to check if a user has granted permission or not
* The new [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) does
	* But it [isn't fully supported](https://caniuse.com/#feat=permissions-api)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using the permissions API
```
navigator.permissions.query({
	name: 'geolocation'
})
	.then(function(permissions) {
		if(permissions.state === 'granted) {
			// permission granted
		} else if(permissions.state === 'denied') {
			// permission was denied
		} else if(permissions.state === 'prompt') {
			// we can prompt for permission
		}
	});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Asking for permission
* It is a good practive to notify users before asking permission
* It can be confusing when a page unexpectedly asks for your location
* People are more likely to allow permission if they know why



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Touch Events



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Use event listeners
* Just like mouse events
* Four event types
	* touchstart
	* touchend
	* touchmove
	* touchcancel


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: try them out
* Open the pen [https://codepen.io/elvey/pen/ZjvyMw](https://codepen.io/elvey/pen/ZjvyMw) on a touch device
* Try touching the window area
	* Can you see the touch events?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Event properties
* timeStamp - the timestamp when the event was fired
* touches - all the current touches
* changedTouches - all touches that have changed since the last event
* targetTouches - all touches that triggered this event


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Touch objects
* Touches are represented as touch objects
	* identifier: The unique identifier for this touch point
	* radiusX - The width of this touch
	* radiusY - the height of this touch
	* rotationAngle - The degrees this touch has rotated
	* force - the amount of force applied in this touch
	* pageX & pageY - coordinate from the edge of the document including scroll offset
	* screenX & screenY - coordinates from the edge of the screen
	* clientX & clientY - coordinates from thd edge of the viewport


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: How would you track movement
* Discuss in your table how to identify the following gestures
	* double tap
	* pan
	* pinch
	* twist
* Write some pseudo code for a gesture
* Can you implement it in javascript


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Help is available
* There are libraries like [HammerJS](https://hammerjs.github.io/) to handle gestures for you
