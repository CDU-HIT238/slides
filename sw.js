var CACHE_TITLE = "cduhit238slides"
var CACHE_VERSION = "v1";
var CACHE_NAME = CACHE_TITLE + '_' + CACHE_VERSION;
var urlsToCache = [
	'/slides/',
	'/slides/week6/',
	'/slides/week6/index.md',
	'/slides/week6/git-branches.svg',
	'/slides/week6/pwa-screenshot.png',
	'/slides/week6/under-construction.jpg'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log(`opened cache ${CACHE_NAME}`);
				return cache.addAll(urlsToCache);
			})
	)
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if(response) {
					return response;
				}
				return fetch(response);
			})
	)
});


