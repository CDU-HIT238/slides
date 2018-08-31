<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Event Loop
* Single threaded
* Call Stack
* Event Queue
* WTF???


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### The call stack
* List of all the work to do
* Last In First Out (LIFO)
	* Can only add jobs to the top
	* Can only take jobs off the top
* You can see it in those long error messages


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### The event queue
* Keeps track of events
	* DOM events (loaded)
	* Input events (button clicks)
	* timeouts


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
setTimeout(
	() => console.log('Run now... or after the call stack is empty'),
	0
);
```

Note:
This code looks like it should run immediately but actually has to wait for the call stack to empty


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Event loop
* Picks the top job off the call stack
* If the call stack is empty


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Repainting
* Every 16ms or so the browser wants to repaint
* It has to wait for the call stack to clear (but not the event queue)
* If your code takes too long it can't render


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
myButton.addEventListener(
	'click',
	() => {
		while(true) {
			console.log('NO RENDER FOR YOU!!!');
		}
	}
);
```

Note:
When this code enters the call stack it will never finish and stops the browser from doing anything else. Including repainting


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some extra resources
[Jake Archibald: In The Loop - JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0&vl=en)
[Philip Roberts: What the heck is the event loop anyway? | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## RequestAnimationFrame
* Why did we just talk about the event loop?
* Because it screws up some stuff <!-- .element class="fragment" data-fragment="1" -->
* What if we just want to update things for rendering? <!-- .element class="fragment" data-fragment="2" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### The problem
* You have some nice animation or a timer
* You update it in the regular callstack
* Some other javascript takes a while to work
* Your calculations are out of date by the time the page is repainted
<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### The solution
* RequestAnimationFrame allows us to run code just before the page is repainted
* It give us a timestamp to tell us when it's running
* The values we select will be what gets rendered


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Janky vs Smooth animation
[Janky vs Smooth animation on codepen](https://codepen.io/elvey/pen/dqOXGO)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Open the pen [https://codepen.io/elvey/pen/MqbeVg](https://codepen.io/elvey/pen/MqbeVg)
* Use getAnimationFrame to update the clock
* Keep your answer for the next activity



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Notifications
"The Notifications API lets a web page or app send notifications that are displayed outside the page at the system level; this lets web apps send information to a user even if the application is idle or in the background. This article looks at the basics of using this API in your own apps."
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Permissions
* You need permission to send notifications
* Check permission with [Notification.permission](https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission)
* Three values
	* granted
	* default
	* denied
* May not always be defined


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Get permission with [Notification.requestPermission()](https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission)
	* Returns a promise with response
	* Remembers previous responses

```
	Notification.requestPermission()
		.then((response) => {
			if(response === 'denied') {
				console.log('permission was denied');
			} else if(response === 'default') {
				console.log('The dialog was dismissed');
			} else if(response === 'granted') {
				console.log('We have permission!!');
			}
		}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Send a notification
* Use the Notification constructor to send a notification

```
if(Notification.permission === 'granted') {
	var notification = new Notification(
		'My Notification Title',
		{
			body: 'The text that I want to show in the notification',
			icon: 'path/to/an/icon/image.png'
		}
	)
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Close a notification
```
notification.close();
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add notifications to your countdown timer
* Show a notification when the user clicks a button
	* Remember to first check for permission
* If you've lost your timer show a notification when a button is pressed


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Don't be annoying!!
* Don't ask for permission straight away
* Indicate what sort of notifications you will send
	* Don't give the user notifications they don't expect
* Don't spam
* *Be timely, relevant and precise*



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Push notifications
* You can send notifications from a service worker
* With the [push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API) you can get server updates
* Together, you can show notifications even when the app is closed


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Common uses
* New message received
* Appointment reminder
* Weather notification


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Adding Push Notifications to a Web App
* The google codelabs guide [Adding Push Notifications to a Web App](https://developers.google.com/web/fundamentals/codelabs/push-notifications/) is a great hands on introduction
* This requires server side infrastructure but you can use [Firebase cloud messaging](https://firebase.google.com/docs/cloud-messaging/js/client)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## You know mobile web apps!!
* Now go and make cool stuff
* Spent the rest of the class working on the final tasks from the past few weeks
	* Camera app
	* Shopping list
* Work in pairs if you can
