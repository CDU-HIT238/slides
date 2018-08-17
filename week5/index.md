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
* Import/Concatanate Javascript
* Prepare images


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Automate all the things


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Many build toolkits
* Gulp
* Grunt
* Webpack


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Gulp
* Easy
* Clean
* Well Supported
* Uses node


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### A caveat on Gulp
* Gulp 3 does not work with Node 10
* Gulp 4 is not fully released
* We will use Gulp 4 with the @latest tag
	* This is not best practice with most packages
* Most gulp documentation is for Gulp 3
	* This will be outdated in the next few months


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Node / NPM
* A javascript runtime environment
* Based on Chrome's V8 JS engine
* Runs on the server (or your computer)
* Includes Node Package Manager (NPM)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Initialize a node project
```
npm init
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install Gulp globally
```
npm install -g gulp-cli
npm install -g gulp@next
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
To run a globally installed gulp you can use the gulp command

```
gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install Gulp for your project
```
npm install --save-dev gulp-cli
npm install --save-dev gulp@next
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
If you install gulp for your project you will need to add the following to package.json
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

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', gulp.series('js'));
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Use the gulpfile from the previous slide
* Install gulp and plugins using npm`
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
## WebRTC
Web Real Time Communication


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* API to capture media
* Can stream media
* Only available over https (or localhost)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### getUserMedia
* Gets a media connection

```
navigator.mediaDevices.getUserMedia(options)
  .then(successFunction)
	.catch(errorFunction);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Options
Options specifies what media you want

```
{
	video: true
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Success Function
Handle the media stream
```
function successFunction(mediaStream) {

	// Video element to show stream
	var videoElement = document.querySelector('video');

	// Attach media stream to the video element
	videoElement.srcObject = mediaStream;

}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Open the pen [https://codepen.io/elvey/pen/RBOjBX](https://codepen.io/elvey/pen/RBOjBX)
* Write code to show video in the video player


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## WebRTC & Audio
* You can also capture audio with the WebRTC API

```
navigator.mediaDevices.getUserMedia({
		 audio: true
})
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Cool Examples
* [MDN Voice Change-o-matic](https://mdn.github.io/voice-change-o-matic/)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## MediaRecorder
* The [Media Stream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API) allows you to record
	* Data from a media stream. e.g. from a WebRTC capture
	* From a [HTML Media Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
* Capture data at regular intervals or at the end of recording


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create a media recorder
```
var mediaRecorder = new MediaRecorder(stream);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Capture recorded data
```
var chunks = [];

mediaRecorder.addEventListener('dataavailable', function(evt) {
	chunks.push(evt.data);
})
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Listen for the end of recording
```
var audioSrc = null;
mediaRecorder.addEventListener('stop', function() {
	// Convert data to a binary ogg file
	var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });

	// Reset chunks
	chunks = [];

	Convert the blog to a data URL
	audioUrl = window.URL.createObjectURL(blob);
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Start recording
```
mediaRecorder.start();
```

Or specify the data intervals

```
// Recording interval in ms
var timeslice = 500;
mediaRecorder.start(timeslice);
```

Note:
The default behaviour of start is to record until a stop signal is recieved. Then the dataavailable event is called with the data from the whole recording. 
Alternativly you can specify a timeslice recording interval. If you set a timeslice, the data will be split in chunks and dataavailable will be called at each interval. You can use this for streaming or if you want to manage your buffer size.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Stop recording
```
mediaRecorder.stop();
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Use blobs to store binary data
```
var blob = new Blob(
	chunks,
	{ 'type' : 'audio/ogg; codecs=opus' }
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Binary data can be represented as a data URL
```
var audioUrl = window.URL.createObjectURL(blob);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Data URLs can be used in place of normal URLs
```
var audioElem = document.createElement('audio');
audioElem.controls = true;
audioElem.src = audioUrl;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Record audio
* Open the pen [https://codepen.io/elvey/pen/xJoEga](https://codepen.io/elvey/pen/xJoEga)
* Can you record audio clips when Start/Stop is pressed?
* Add code at the _Code:_ comments
* Add a new audio element for each audio clip recorded



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## IndexedDB


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Storage API for large amounts of data
* NoSQL Database
* Can storage complex data
* Can store files (as blogs)
* Is low level and complicated
	* Lots of libraries available to make it more user friendly


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using IndexedDB
This one is pretty complex so take it slowly.

Ask questions if you get lost


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Check if it is supported
```
if ('indexedDB' in window) {
	// We have indexedDB
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Connect to a database
```
var connReq = indexedDB.open(
  dbName,
  dbVersion
);
```

[IDBFactory.open()](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open) returns an [IDBOpenRequest](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest) immediately but asyncronouly connects using events


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
var conn = indexedDB.open('test-db', 3);

conn.addEventListener('success', function(evt) {
  var db = evt.result.target;
  console.log('connected event', evt);
});

conn.addEventListener('error', function(evt) {
  console.log(
    'error connecting',
    evt.target.error
  );
});

conn.addEventListener('upgradeneeded',function(evt) {
  console.log('upgrade needed', evt)
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Error events
* The error should not be too common
* Usually means
	* Your version is too low
	* User denied permission to the DB


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Creating or updating your database
* The onupgradeneeded events triggers an [IDBVersionChangeEvent](https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeEvent)
* This happens when you increase the version number (or first create the database)
* Create or delete any required object stores with [IDBDatabase.createObjectStore()](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore)
* If the event finishes without erorrs the onsuccess event is triggered


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Object stores
* IndexedDB uses object stores
	* A bit like tables
* Stores a variety of data
* If you use a keypass the object key is stored in the object
	* Note that if you use a keypass you can only store objects
* [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Structuring_the_database) has a great breakdown on the structure


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
conn.addEventListener('upgradeneeded',function(evt) {
  console.log('upgrade needed', evt)
  var db = evt.target.result;

  // Create an objectStore for this database
  var objectStore = db.createObjectStore(
    "users",
    { keyPath: "id" }
  );
  objectStore.createIndex(r
    'name',
    'name',
    {unique: false}
  );

  // Listen for the completed transaction
  objectStore
    .transaction
    .addEventListener('complete', function(evt) {
   console.log('Store created');
  });
});

```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Transactions
* All IndexedDB work is done in transactions
* Transactions have a limited life
	* If you don't use them they expire
	* They last as long as there are pending requests
	* You can extend a transaction by adding more requests
		* even in a completed request event callback
	* An inactive transactions triggers a TRANSACTION\_INACTIVE\_ERR

Note:
Transactions have a very specific lifetime. Their life is tied to the event loop. If the code returns to the javascript event loop without any pending transactions they will become inactive. You stop this by giving them work to do. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Create a transaction
* Call transaction on the database
* Pass the stores you want to access
* Specify the type of access you require

```
var transaction = db.transaction(
  ['users'],
  'readwrite'
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Add some data
```
var objectStore = transaction.objectStore('users');
var request = objectStore.add({
  id: 123,
  name: 'Elvey'
});
request.addEventListener('success', function(evt) {
  console.log(
    'Successfully added data',
    evt.target.result
  );
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Update data
* Add only creates a new record
* Throws an error if the key already exists
* To update use put

```
var transactiong = objectStore.put({id: 123, name: 'Elvey', role: 'teacher'});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Delete a record
```
var transaction = objectStore.delete('123');
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Getting data
```
var transaction = objectStore.get('123');
transaction.addEventListener('success', function(evt) {
  var data = evt.target.result;
  console.log('Loaded', data);
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
But what if you don't know the ID?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Cursors
```
  var store = db.transaction(['users']).objectStore('users');
  var cursor = store.openCursor();
  cursor.addEventListener('success', function(evt) {
    var thisCursor = evt.target.result;
    if(thisCursor) {
      console.log('key', thisCursor.key);
      console.log('value', thisCursor.value);
      thisCursor.continue();
    } else {
      console.log('No more items');
    }
  });
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### getAll keys
* IndexedDB 2.0 includes a getAll function to get a list of all keys from the store
* However the support [isn't quite as strong yet](https://caniuse.com/#feat=indexeddb2)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Open the pen [https://codepen.io/elvey/pen/GBbKJW](https://codepen.io/elvey/pen/GBbKJW)
* Connect to a database
* Create a new store to store users ID and their name in upgradedneeded
* Log an error to the console if there is a problem connecting
* If connection is successful
	* Add data from inputs when saveBtn is clicked
	* Load data from the store into the table
	* Update the list when you save data


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Is it slow to update the list when you save?
	* Why? How can you speed it up?
* Can you add a delete button to the table?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Camera App: putting it all together
* Spent the rest of the class building a camera app
* Use WebRTC to [take a still photo](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos)
* Save photos in IndexedDB
* Allow users to load and delete their photos
* If you finish early
	* Can you add filters using [CSS filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
	* How about [adding text](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)

