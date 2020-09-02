<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## More react native functionality
* A lot of the Web API functionality is available in react native
* Additional packages provide more functionality


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Fetch
* React native supports the fetch API
	* iOS will block non-SSL requests
	* You can add transport security exceptions for domains you require
* Also supports the WebSocket API


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Location
* The geolocation API is available in react native
* You must request permission in your final build
	* Enable `NSLocationWhenInUseUsageDescription` in plist for iOS
	* Add `<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />` to AndroidManifest.xml
* Some [additional native options](https://facebook.github.io/react-native/docs/geolocation)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### AsyncStorage
* Use in place of LocalStorage
* Uses native options depending on OS
* Details at [https://facebook.github.io/react-native/docs/asyncstorage](https://facebook.github.io/react-native/docs/asyncstorage)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
import { AsyncStorage } from "react-native"

AsyncStorage.setItem('testkey', 'value')
	.then(() => Alert('Set'));

AsyncStorage.getItem('testkey')
	.then((value) => Alert(`Got ${value}`));
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
The offical examples are the same but look different

```
import { AsyncStorage } from "react-native"

storeData = async () => {
  try {
    await AsyncStorage.setItem('testkey', 'value');
  } catch (error) {
    // Error saving data
  }
}

retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('testkey');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}

storeData();
retieveData();

```

Note:
The official examples use the async/await features. These are just shortcuts to convert promises to return values and wait until they complete to continue running. This code is in practice exactly the same as the first example


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### SQLite
* There is also a sqlite plugin available at [https://github.com/andpor/react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Third Party Libraries
* Lots of extra resources on github
* Have a look at [https://codingislove.com/top-15-react-native-libraries/](https://codingislove.com/top-15-react-native-libraries/)
* For those of you using firebase [https://medium.com/@anum.amin/react-native-integrating-push-notifications-using-fcm-349fff071591](https://medium.com/@anum.amin/react-native-integrating-push-notifications-using-fcm-349fff071591)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## JavaScript Web Notifications
* Back into progressive web apps
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
* Add notifications to [a countdown timer](https://codepen.io/elvey/pen/MqbeVg?editors=1111)
* Show a notification when the timer reaches zero
	* Remember to first check for permission


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
