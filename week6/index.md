<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Build Tools
![Under Construction Sign](images/under-construction.jpg) <!-- .element class="half-height centre no-border" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Many tasks to automate
* Minimise javascript
* Minimise CSS
* Linting
* Testing
* Import/Concatenate Javascript
* Prepare images


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Automate all the things


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Many build toolkits
* Grunt
* Parcel
* Webpack


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Gulp
* Easy
* Clean
* Mature
* Well Supported
* Uses node


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Node / NPM
* A javascript runtime environment
* Based on Chrome's V8 JS engine
* Runs on the server (or your computer)
* Includes Node Package Manager (NPM)

Note:
You can use yarn instead of NPM but for this course we're going to use NPM


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Initialize a node project
```
npm init
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install Gulp globally
```
npm install -g gulp-cli
npm install -g gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
To run a globally installed gulp you can use the gulp command

```
gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Global is not the best
* Lots of guides suggest installing globally
* But it has problems
	* What if you have different projects with different versions of gulp?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install Gulp for your project
```
npm install --save-dev gulp-cli
npm install --save-dev gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
To run a locally installed gulp you can use the gulp command

```
npx gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
You can also setup a build script for your project by adding the following to package.json
```
"scripts": {
	"build": "gulp"
}
```

To run use the npm run command

```
npm run build
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Gulpfile
* Uses gulpfile.js
* Written in javascript
* Uses streams to pass files between plugins
* Import plugins with require
* Install plugins with NPM
* Calls default task by default


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

function js() {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
}

exports.default = js;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Use the gulpfile from the previous slide
* Install gulp and plugins using npm`
	* npm install --save-dev gulp gulp-cli gulp-concat gulp-sourcemaps
* Create the directory src/js
* Add some javascript from a previous week


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### A more complex gulpfile
* You can use gulp to automate lots of things
       * build and minimise your styles
       * convert _new_ javascript to work with older browsers
       * Smarter linking of javascript files using require/import
* This includes some extra tools
* Download the project template from [https://github.com/CDU-HIT238/project-template](https://github.com/CDU-HIT238/project-template) and see if you can get it to build


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Babel
* Use next generation javascript


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Browserify
* Import javascript modules
* Smarter than concatenate

```
const importedFunction = require('./myFunc.js');

function newFunction() {
...
}

modules.exports = newFunction;
```


#### Babel
* Use next generation javascript

```
import myModule from './path/to/file';
import externalModule from 'npm-name';

export default myFunctionToExport;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### SaSS
* CSS preprocessor
* Adds
	* Imports
	* Variables
	* Nesting
	* Mixins


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Let me know if you want a gulpfile to do something else
* I'm happy to help address a specific task
* I'll share one in the discussion board if you want it
* You don't have to use one, but it may help structure your code



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Service Workers

Note:
Service workers are a special type of web worker that can act as a proxy for offline caching. It can also perform background sync and push notifications like other web workers.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Web Workers
* A background process
* Runs in a different thread
* Different context to [window object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
* Cannot access DOM
* Can access [a lot of other functions](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)

Note:
Until now we've learned that javascript is asynchronous because it runs in the same thread. Web workers however let us run some scripts in an independent thread. This means they do not have access to the same window object (although they can access some window functions) and have no access to the DOM.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Service Workers
* Has access to cache
* Can act as a network proxy
* Can talk to the page with postMessage()

Note:
A service worker is a special type of web worker. They have access to cache and can act like a network proxy. This means they can sit in between the HTTP requests your browser makes and decide how to handle them. The cache lets them store some requests for later so they can respond to a HTTP request without loading data from a server.
If you need to communicate between a service worker and your regular javascript you can use postmessage.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Offline Web Apps
* Can save data in cache
* Can intercept requests and load data from cache when offline

Note:
Because a service worker can save HTTP data and respond with it later, this means, once your page has been loaded in cache it can work without an internet connection.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Stages of a Service Workers
* Download
* Install
* Activate

Note:
Before we get too deep into implementation specifics it is worth having a quick look at the service worker lifecycle. When a new service worker is found it is first downloaded. After the download is completed it gets installed, this is when it can perform any setup it needs like preparing the cache. It then sits there waiting for any existing service workers to finish. As long as an old service worker has work to complete, a new one will not be activated. It will generally be activated after waiting a while, but sometimes it might take a refresh. You would usually clear out old caches after the service worker has activated as you know the old service worker has finished.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Register a Service Worker
```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
```

Note:
To load a service worker you need to tell the browser to load it. The service worker must be in a separate script which we direct the browser to load.
Here we can see we check if service workers are supported and wait for the page to finish loading. We then register the service worker using the function navigator.serviceWorker.register which returns a promise


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Service worker scope
* Service workers scope includes their path on
	* `/sw.js` can access anything from the root
	* `/pages/sw.js` can access anything after /pages
	* `./sw.js` can access anything under the current path

Note:
As service workers can act as a proxy we need to be clear on their active scope. They can only intercept requests from their current path onwards. They cannot get requests from their parent directory. So be careful, if you place your service worker in a scripts directory you will only be able to intercept your scripts.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Creating your service worker
```
var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
```

Note:
The follow code will create a service worker. It will need to be saved in the file you referenced from navigator.serviceWorker.register(). In the example above this would be sw.js.
We'll break down the key functions in the following slides


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### caches.open(cacheName)
Opens the given cache and returns a promise that resolves to the cache


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### cache.addAll(arrayOfUrls)
Saves the provided files in the cache


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check your service worker
* You can check your service workers using chrome dev tools
* Check the application tab -> Service Workers


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/devtools-serviceworker.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check your cache
* You can check the contents of your cache using chrome dev tools.
* Check the applications tab -> cache storage -> cache name


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/devtools-cache.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Clone one of your repositories
	* You can use https://github.com/melvey/camera-pwa if none are suitable
* Add a service worker
* Identify files to cache form the network tab
* Load the page and check your cache in dev tools


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Load from the cache
```
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```

Note:
To load data from the cache you need to catch HTTP requests. Each HTTP request fires a fetch event that we can listen for.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Fetch event
* The fetch event is triggered on each outgoing http request
* The event contains the request in FetchEvent.request
* You can resolve the event with FetchEvent.respondWith()
	* Takes a promise that resolves to a response object


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Searching the cache
* [Cache.match()](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
	* Resolve a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) for the first matching Request in the cache
	* Takes a request as an argument
	* If there is no match the promise resolves undefined


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Now your page works offline


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/serviceworker-network-tab.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/serviceworker-offline.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add a fetch event listener to load responses from the cache
* Watch your network tab
* Disable the network and reload the page


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Update a Service Worker
```
self.addEventListener('activate', function(event) {

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
					if(cacheName !== CACHE_NAME && cacheName.indexOf(CACHE_TITLE) === 0) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* [ExtendableEvent.waitUntil()](https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil) tells the event manager that work is still going
* Iterate through all the cache names
* If a cache name matches ours but with a different version, delete it
* If you use multiple caches you can use a whitelist


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add the activate listener
* Increase the cache version number
* Reload and examine the cache in chrome dev tools


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Extra resources
* Google have a great [introduction to service workers](https://developers.google.com/web/fundamentals/primers/service-workers/)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Manifest
* JSON file describing how your app should work when installed


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
{
	"name": "CDU Assignment Scheduler",
	"short_name": "CDU Scheduler",
	"icons": [
		{
			"src": "images/icons/icon-128.png",
			"sizes": "128x128",
			"type": "image/png"
		},
		{
			"src": "images/icons/icon-512.png",
			"sizes": "512x512",
			"type": "image/png"
		}
	],
	"start_url": ".",
	"display": "standalone",
	"background_color": "#FFF",
	"theme_color": "#123557"
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### name & short_name
* short_name is used where space is limited
	* app launcher
* name is used where it is not
	* install prompt
	* loading screen
* Google recommends keeping short_name to less than 12 character


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### start_url
* The URL to load when launching the app
* Make sure this is cached by your service worker
	* If you cache / and your start_url is index.html it will not resolve


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### display
* How you want your app to open
	* fullscreen - no browser UI elements and take up the full screen
	* standalone - no browser UI elements in a separate window from the browser
	* browser - Open in the browser


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### orientation
* Force the app to open in a particular orientation
	* landscape: force to landscape view
	* portrait: force to portrait view


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### background_color
* The app background colour
* Used on splash screen when launching your app


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### theme_colour
* The colour to set the toolbar and the task switcher
* Should match the theme-color meta tag
```
    <meta name="theme-color" content="#123557">
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### icons
* Array of icons to use for the the app launcher, loading screen, etc..
* Set src, type and sizes
* The browser will scale icons to fit if required so you can just target key sizes


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Adding the manifest
* Add a reference to the manifest in the head html

```
<link rel="manifest" href="manifest.json">
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Now it installs
![PWA install prompt](images/pwa-screenshot.png) <!-- .element class="centre no-border half-height" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add a manifest to your app
* Deploy to github pages
* Examine the manifest in the dev tools application tab
* Run a lighthouse report on your page



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Progressive Web Apps
* You have now built a progressive web app
	* works offline
	* Can install to android


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### But what about iOS
* [PWAs Are Now Available for Apple Devices with iOS 11.3](https://www.monterail.com/blog/pwa-for-apple-ios)
* [Progressive Web Apps on iOS are here](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some limitations on iOS
* Only 50Mb storage
* App gets cleared out if not used
* No background sync or push notifications
* No notification to install the app

* [What is the service worker cache storage limit](https://love2dev.com/blog/what-is-the-service-worker-cache-storage-limit/)
* [PWAs on iOS 12.2 beta](https://medium.com/@firt/pwas-on-ios-12-2-beta-the-good-the-bad-and-the-not-sure-yet-if-good-a37b6fa6afbf)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### So how do you install it?
* Click share -> add to home screen


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### iOS doesn't use the manifest icons
* Need to set the icon meta tags
* Good idea to set all the fancy apple tags

```
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Assignment Scheduler">
    <link rel="apple-touch-icon" href="images/icons/icon-152.png">
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add the apple tags to your app
* Deploy to github pages
* See if someone with iOS >= 11.3 can install your app



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Activity: Make a shopping list
* Create a new git repository
* Create a form to save shopping items and quantity
* Save them to IndexedDB or LocalStorage
* Show items in a list
* Check off items
* Add a serviceworker and manifest to work offline
