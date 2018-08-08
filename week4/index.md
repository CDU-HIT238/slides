<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



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
	* Do you notice any difference
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
* [Update your location](https://developers.google.com/web/tools/chrome-devtools/device-mode/device-input-and-sensors)


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
## Web Storage


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is web storage
* Data stores for the server origin
* Session Storage and Local Storage
* Save name/value pairs
* Limited data on each
* Does not work on data: URIs


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Storage limits
* 5mb for each on iOS
* 10MB each on Chrome
* 10MB shared on Firefox



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Session Storage 
* Save data for the duration of the session
* Used for temporary data
* Lasts as long as the browser is open
* Is only accessable from the current tab
* Persists across refreshes
* Removed when the tab is closed


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Set data
```
sessionStorage.setItem(key, value);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Get data
```
var value = sessionStorage.getItem(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Remove a key
```
sessionStorage.remove(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Clear all data
```
sessionStorage.clear();
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Count keys
```
var count = sessionStorage.length;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Read key
```
var key = sessionStorage.key(index);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Putting it togther
Read all the key / values to an object

```
var data = {};
for(var i = 0; i < sessionStorage.length; i++) {
	var key = sessionStorage.key(i);
	var value = sessionStorage.getItem(i);
	data[key] = value;
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Your turn
* Open the pen [https://codepen.io/elvey/pen/MBBWPb](https://codepen.io/elvey/pen/MBBWPb)
* Add code to save data from the form to session storage
* Add code to load data from session storage and show it in the form
* Add code to remove a key from session storage
* Save your code and reload the page - what happens to your data
* Open a new tab and check your data



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Local Storage
* Persistant data storage
* Used for longer storage
* Lasts until deleted
* Is accessible from all windows
* Uses same API as sessionStorage


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Set data
```
sessionStorage.setItem(key, value);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Get data
```
var value = sessionStorage.getItem(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Remove a key
```
sessionStorage.remove(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Clear all data
```
sessionStorage.clear();
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Count keys
```
var count = sessionStorage.length;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Read key
```
var key = sessionStorage.key(index);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Your turn
* Open the pen [https://codepen.io/elvey/pen/MBBWPb](https://codepen.io/elvey/pen/MBBWPb)
* Implement the same functionality with localStorage
* Save your code and reload the page - what happens to your data
* Open a new tab and check your data



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Storing objects
* How can you store objects in web storage?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
localStorage.setItem(key, JSON.stringify(myObject));
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Private browsing
* Read [Private Browsing / Incognito Modes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#Private_Browsing_Incognito_modes)
* How do you think you should handle this?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Mobile performance


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
"The average time it takes to fully load a mobile landing page is 22 seconds, according to a new analysis.  Yet 53% of mobile site visitors leave a page that takes longer than three seconds to load."

From [Mobile page speed new industry benchmarks](https://think.storage.googleapis.com/docs/mobile-page-speed-new-industry-benchmarks.pdf) by Google


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Load time matters (although maybe not as much as we think)
* Mobile connections are highly variable
* Mobile devices are highly variable


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Page Sizes
* The average page size is over 3mb
* The average page size [probably doesn't matter much](https://speedcurve.com/blog/web-performance-page-bloat/)
* So what matters?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Load time
* Remember the quote from earlier?
	* The average load time is 22 seconds according to google
	* 53% of people leave a page that takes longer to three seconds to load
* But what is the load time?
	* Fully loaded includes all resources
	* What matters is perceived load time or time to an interactive page
* Recommended target is < 3s


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### So what matters
* Read [https://speedcurve.com/blog/web-performance-page-bloat/](https://speedcurve.com/blog/web-performance-page-bloat/)
* What do you think matters?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* What matters is time until a page feels loaded
* How long until you can start using the page?
* Minimise lag and loading time
* An [Ericsson study found video lag caused more stress than driving in heavy Jakarta traffic](https://www.ericsson.com/id/en/press-releases/7/2017/delay-in-video-streaming-creates-higher-stress-level-than-driving-in-heavy-jakarta-traffic)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Cost of your page
* Page size still matters
* It's just about more than loading time
* The median page costs [4 cents in Australia](https://whatdoesmysitecost.com/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What to do
* Reduce percieved loading time
* Defer loading javascript
	* Set the defer flag
	* Put at the end of yor page body
* Minimise your resources
* Delay anything you don't need at the time
* Try not to wait on the server
* Preload resouces if you have time and are confidant you will need them

Note:
The defer flag should be enough to prevent your script from blocking the DOM from loading but it is a good idea to still put your scripts at the bottom to also cater to older browsers. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Minify your resources
* You can reduce to size of your CSS and JavaScript by minifying (or uglifying) it
* Try compresing resources at https://www.minifier.org/
* Compress your images at http://webresizer.com/resizer/
* Combine your JavaScript and CSS to reduce the number of files
	* This is less important with HTTP/2 but is still useful


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Reduce this page
* Clone the repository https://github.com/CDU-HIT238/HIT238-performance-exercise
* Can you reduce the perceived loading time of this page?
* Use [throttling](https://developers.google.com/web/tools/chrome-devtools/network-performance/reference#throttling) in Chrome dev tools to simulate a slower connection


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Prepare for next week
* Next week we will learn about some tools to make this easier
* Can you install [node and npm](https://nodejs.org/en/) before next week?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Trello


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is Trello?
* A tool for managing lists
* You can create many boards
* Each board can have many lists
* Each list can have many cards
* Each card can have labels, comments and be assigned to users
* It can track almost anything


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### I use Trello at work
* Manage feature lists / user stories
* Map out sprints
* Track task progress
* Create to do lists
* Plan out the weekly topics for this class


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create a board
* A board is like a workspace
* You can have many lists on one board
* Usually all lists are related


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-create-board.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create lists
* A list is like a category
* You often move cards between lists


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-create-list.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create cards
* A card is an individual item
* These are the things we are really tracking
* There are often lots of cards in a project


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-create-cards.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Manage your cards
* Cards can be sorted into lists
* You can add labels to cards
* You can add attachments, checklists, comments and descriptions to cards
* You can assign cards to different people

 
<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-move-cards.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-add-labels.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check out the docs
* [Trello 101](https://trello.com/guide/trello-101) provides a basic introduction
* [Create a board](https://trello.com/guide/create-a-board) gives you a better walk through


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Register for Trello
* Create a new board called "Project MVP"
* Create some labels to sort your features by


