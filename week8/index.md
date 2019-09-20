<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Hybrid Apps
* A web app inside a native app
* Uses same tools we've already learned
* Bundled into an app installer
* Uses a web view to show web content like a native app


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### WebView
* Shows web content in app
* A special browser window that is embedded in an app
* May not have the same feature set as a standard browser



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Apache Cordova
* Open source hybrid framework
* Previously Adobe PhoneGap
	* Adobe now provides a cloud service
* Runs on Node.js
* Used by frameworks like Ionic


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
![Cordova Architecture](https://cordova.apache.org/static/img/guide/cordovaapparchitecture.png)
From [Archetectual overview of Cordova platform](https://cordova.apache.org/docs/en/latest/guide/overview/)



	
<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Cordova for Android
* Android SDK is free and cross platform
* You can build for iOS but need XCode on an OSX machine
* You can also build for iOS on Adobe Cloud


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Requirements
* OpenJDK (included with Android Studio)
* Android SDK (included with Android Studio)
* Android Studio (optional but easier)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Android Studio
Instructions for installing Android Studio are available at [https://developer.android.com/studio/install](https://developer.android.com/studio/install)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Setup a virtual device
* Open the device manager in Android Studio (search for device manager)
* Select "Create Virtual Device"
* Select "Phone" and device you want to clone then click next
* Select system image. You can download one if you need. Then click "Next"
* Enter device name and click "Finish"
* Try launching the new device


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Set Paths
These are bash commands. To follow along use git bash


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Set JAVA_HOME and ANDROIDHOME
* You can get the Java and Android home from `File -> Other Settings -> Default Project Structure`
* Check JAVA_HOME is correct

```
$ echo $JAVA_HOME
```

* Set ANDROID_HOME environment variable (You will need to use the path you installed the Android SDK to)

```
$ export ANDROID_HOME=$ANDROID_SDK_PATH/Sdk
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Ensure gradle and ANDROID SDK are in your path
```
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/emulator
```
* Gradle may be bundled with Android Studio but if you cannot find it you will need to [install](https://gradle.org/install/) it and add it to your path
```
export PATH=$PATH:$GRADLE_PATH
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Setup your SDK
```
sdkmanager --update
sdkmanager --list
sdkmanager "build-tools;29.0.2" "platforms;android-28"
sdkmanager --licenses
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Now you're ready to go
* Create a virtual device
* Run the device and explore android



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Cordova


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Cordova Project
* Managed through cordova command
* Uses npm
* Project settings in config.xml
* Exposes contents of www directory
* Launches index.html
* No serviceworkers


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install Cordova
```
npm install -g cordova
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create a cordova project
```
$ cordova create hello com.example.hello HelloWorld
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/cordova-create.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install a platform
```
$ cordova platform add android
$ cordova platform ls
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/cordova-platform.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Check the requirements
```
$ cordova requirements
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/cordova-requirements.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Build your app
```
$ cordova build android
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/cordova-build.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Run your app on an emulator
You need to have a virtual device setup to do this
```
cordova emulate android
```
You may need to start the virtual device before running this


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/cordova-emulate-android.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Run on your device
If your devices is [setup to connect from adb](https://developer.android.com/studio/run/device) you can run directly on your device
```
cordova run
```

It can be tricky to get your device working. You will need to disable MTP and can list available devices using the following commands
```
$ cordova run --list
$ adb devices
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Create a new cordova project for your app
* Copy the build code to the www directory in the cordova project
* Examine config.xml
* Build your app and emulate it on an android device



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Cordova Plugins
* Access sensors using plugins
* You should explain what you need sensors for in your privacy policy
* There are a number of [core sensors](https://cordova.apache.org/docs/en/latest/guide/support/index.html#core-plugin-apis)
* Many more [external plugins](https://cordova.apache.org/plugins/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Installing a plugin
```
cordova plugin install [plugin-name]
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/cordova-plugin-install.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### List installed plugins
```
cordova plugin ls
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/cordova-plugin-ls.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Core Plugins
* Camera
* Media
* Battery
* Notification
* File
* Storage
* Vibration
* Geolocation


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Camera
[cordova-plugin-camera](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/)
* Take a picture or load an image from device
* Exposes a navigator.camera object

```
navigator.camera.getPicture(
	(image) => {
		// Got image
	},
	(error) => {
		// Failed
	},
	options
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Media Capture
[cordova-plugin-media-capture](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media-capture/)
* Capture audio, video or an image
* Exposes navigator.device.capture

```
navigator.device.capture.captureAudio(
	(mediaFiles) => {
		// Got an array of media files
	},
	(error) => {
		// Failed to get audio
	),
	options
};
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Battery
[cordova-plugin-battery-status](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/)
* Events and objects describing battery status
* Adds `batterystatus`, `batterycritical` and `batterylow` events to `window`
* Events trigger with a status object with a `level` and `isPlugged` properties.

```
window.addEventListener(
	'batterystatus',
	(status) => {
		var statusString = "Level: " + status.level + " isPlugged: " + status.isPlugged;
	}
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Notification
[cordova-plugin-dialogs](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-dialogs/)
* Expose native UI dialogs
* Exposes navigator.notification
* Provides the following functions
	* alert
	* confirm
	* prompt
	* beep

```
navigator.notification.alert('Hello');
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Storage
[Storage APIs](https://cordova.apache.org/docs/en/latest/cordova/storage/storage.html)
* Existing web storage is exposed
	* WebSQL (deprecated)
	* LocalStorage
	* IndexedDB


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### GeoLocation
[cordova-plugin-geolocation](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/)
* Exposes existing web geolocation API
* Location is potentially sensitive data
	* Should address in privacy policy
	* Must include plist entries for IOS


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Vibration
[cordova-plugin-vibration](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-vibration/)
* Vibrate the device
* Exposes navigator.vibrate
* Same API as web [vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install a core plugin
* Select a core plugin and enable it in your app



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Third Party Plugins
* There are a lot of external third party plugins available
* You can search them at [https://cordova.apache.org/plugins/](https://cordova.apache.org/plugins/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### SQLite
* IndexedDB and LocalStorage have data limits
* SQLite has no storage limit
* Exposes an internal SQLite database
* Many use the now deprecated WebSQL specification

[Cordova-sqlite-storate](https://github.com/litehelpers/Cordova-sqlite-storage)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Native GeoLocation
* Only retreive accurate GPS locations
* Can provide better accuracy information
* Can run in the background

[cordova-plugin-gpslocation](https://www.npmjs.com/package/cordova-plugin-gpslocation)
[cordova-background-location-services](https://www.npmjs.com/package/cordova-background-location-services)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Notifications
* Create OS level notifications

[cordova-plugin-local-notifications](https://github.com/katzer/cordova-plugin-local-notifications)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### ServiceWorkers
* Service workers only work from a secure domain (no HTTP or File domains)
* Be default service workers cannot work from Cordova
* Plugins can help (although may be a bit hacky)\

[phonegap-plugin-service-worker](https://github.com/phonegap/phonegap-plugin-service-worker)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Push Notifications
* Without proper serviceworker support push notifications should be handled natively

[cordova-plugin-push-notification](https://www.npmjs.com/package/cordova-plugin-push-notification)
[goooal-cordova-plugin-firebase](https://www.npmjs.com/package/goooal-cordova-plugin-firebase)


### Activity
* Discuss why you would or would not choose to use an SQLite plugin for your application
