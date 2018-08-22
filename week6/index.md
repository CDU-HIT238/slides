<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Service Workers


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Web Workers
* A background process
* Runs in a different thread
* Different context to [window object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
* Cannot access DOM
* Can access [a lot of other functions](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Service Workers
* Has access to cache
* Can act as a network proxy
* Can talk to the page with postMessage()


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->S
### Offline Web Apps
* Can save data in cache
* Can intercept requests and load data from cache when offline


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Stages of a Service Workers
* Download
* Install
* Activate

Notes:
* A service worker is downloaded the first time is is found for a page and at regular intervals
* A service worker is installed in the background. If there is an existing service worker it will remain active. This is a good time to prepare caches
* Once there is no work remaining for the old service worker the new one is activated. This is a good time to clean up old caches


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


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Service worker scope
* Service workers scope includes their path on
	* `/sw.js` can access anything from the root
	* `/pages/sw.js` can access anything after /pages
	* `./sw.js` can access anything under the current path


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Creating your service worker
```
var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + 'CACHE_VERSION';
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
### Check your cache
* You can check the contents of your cache using chrome dev tools.
* Check the applications tab -> cache storage -> cache name


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Clone the dictaphone repository
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
* Increase the promise version number
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
	name: "CDU Assignment Scheduler",
	short_name: "CDU Scheduler",
	icons: [
		{
			src: "images/icons/icon-128.png",
			sizes: "128x128",
			type: "image/png"
		},
		{
			src: "images/icons/icon-512.png",
			sizes: "512x512",
			type: "image/png"
		}
	],
	start_url: ".",
	display: "standalone",
	background_color: "#FFF",
	theme_color: "#123557"
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
	* standalone - no browser UI elements in a seperate window from the browser
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
### Your turn
* Add a manifest to your app
* Deploy to github pages
* Examine the manifest in the dev tools application tab
* Run a lighthouse report on your page



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Progressive Web Apps
* You have now build a progressive web app
	* works offline
	* Can install to android


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### But what about IOS
* [PWAs Are Now Available for Apple Devices with iOS 11.3](https://www.monterail.com/blog/pwa-for-apple-ios)
* [Progressive Web Apps on iOS are here](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some limitations on iOS
* Only 50Mb storage
* App gets cleared out if not used
* No background sync or push notifications
* No notification to install the app


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### So how do you install it?
* Click share -> add to home screen


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### iOS doesn't use the manfest icons
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
* See if someone with iOS 11.3 can install your app
