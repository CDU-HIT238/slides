<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## React Native Continued



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## State
* Tracks the internal state of your component
* Only visible to the current component
* Stored in this.state
* Should be initialized in the constructor
* Updated with this.setState
	* NEVER update the state object directly
* Component is re-rendered when state changes


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```jsx
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class ToggleText extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: false};

		this.buttonPressed.bind(this);	// enusre this is available

  }

	buttonPressed() {
		this.setState(previousState => {
			return { isShowingText: !previousState.isShowingText };
		});
	}

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
			<Button onPress={this.buttonPressed}>Toggle</Toggle>
    );
  }
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Global State
* State is limited to just your component
* External libraries like [redux](https://redux.js.org/) can provide global state


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Input
```
	<TextInput
		style={{height: 80}}
		onChangeText={(text) => this.setState({text})}
		multiline="true"
	/>
```

Note: Text input takes an onChangeText event that is fired whenever the user modifies the inputted text. You can also listen of onSubmitEditing to wait until the user submits the text. onSubmitEditing listens for the go button on the android soft keyboard and does not fire on multiline inputs


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Touches
```
<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
```

Note: React Native provides a button for basic input touch events. There are also a number of [touchable](https://facebook.github.io/react-native/docs/handling-touches) components that you can use to construct buttons with different feedback. You can build more complex gestures using the [gesture responder system](https://facebook.github.io/react-native/docs/gesture-responder-system)


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
## Finishing Up
* We've covered a lot this semester
* You don't have to remember how do to everything
	* But remember what tools there are and how to find them
* You don't learn from lectures
	* Go out and make things


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### This world keeps changing
* The WebAPIs that we have learned are well established and should be around for a while
* The tools we've learned will not
	* We don't know what the next big tools will be
	* Experiment with lots of things and use your favourites


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Next Week: Revision
* General Recap of the past semester
* Any requests?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Make stuff
* Spend the rest of the class working on your apps
* I'll be available to help troubleshoot

