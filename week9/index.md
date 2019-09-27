<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Cross Platform Apps
* Write a single code base
* Compiles into multiple native platforms


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Advantages of Cross Platform
* Faster than web and hybrid apps
* Supports multiple platforms with a single codebase
* UI is consistant with native apps


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Disadvances of Cross Platform
* Limited _native_ components
* May need to mix with native code
* Unique platforms - tied to a vendor


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Major Cross Platform Environments
* Flutter
* Xamarin
* React Native
* Unity
* Adobe Air
* many many more



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### React Native
* Developed by Facebook
	* Based on ReactJS
* Native UI implementation
* Logic is executed with javascript
* Development is very similar to ReactJS

Note:
Unlike hybrid apps, react native is closer to a native app than a web app. React Native has a native implementation of the DOM which renders to native components. Unlike web apps, the UI runs in an independant process. A seperate process runs the logic on a javascript engine. React Native handles communication between these two processes. This can give native-like performance. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Expo
* A platform to build react native apps
* Much easier to setup than Android SDK
* Provides some great libraries to help development
* You can develop React Native apps without it and use the Android SDK directly
	* But we won't because expo is easier to setup


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### The state of things
* Last year Airbnb and Udacity stopped using React Native
	* Udacity wrote up [a retrospective](https://engineering.udacity.com/react-native-a-retrospective-from-the-mobile-engineering-team-at-udacity-89975d6a8102) on their experience
	* Airbnb wrote a [five part blog on their experience](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c)
	* They have different reasons but both found they were spending too much time on native development


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some lessons
* If your app is very complex you need a native app
* If you have a huge development budget, a native app is better
* If not, Hybrid Apps are still suitable


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Create a React Native Project
* Follow the guide at [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)
* Connect your phone to wifi, Install Expo and test your app
* Start your Android emulator and run `npm run android`
* You may need to allow access in your firewall



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## New Javascript
* ES6
* JSX

Note: React Native uses some new javascript features and some non-standard javascript extensions. You've used some ES6 javascript in class, especially when we disucssed build tools and using babel and browserfiy to add new features. We'll go in to them in a bit more detail now.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## ECMAScript6 (ES6)
* Version 6 of ECMAScript (JavaScript) released in 2015
* [Lots of new features](http://www.reactnativeexpress.com/es6)
* Backwards compatable with ES5
* Used in React Native Development
* [Supported by modern broswers](https://caniuse.com/#feat=es6)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Imports
* Same principle as browserify
* Write reusable module
* Import them when required
* We'll use ES6 style imports (different to node style)
* MDN Provides resources on [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Export object you want to export
```
export default data;
```

* Import
	* External modules (from NPM) have no path
	* Local modules must use a relative path
```
import React from 'react';
import data from './data';
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Named Import/Exports
* You can export multiple objects from a module
```
export {someData, otherData};
```

* You import by specifying the name
```
import {someData} from './data';
```

* Your modules should _always_ include a default export


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## JSX
* Facebook introduced JSX for React
* Syntax extension to JavaScript
* Looks like HTML or a template language
* Used to represent view structure
* More details are available from [Facebook](https://reactjs.org/docs/introducing-jsx.html)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```jsx
const text = 'Welcome to HIT238';
const heading = <Text>{text}</Text>;
```



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Components
* React uses modular components
	* Reusable modules
	* Contains both view structure and logic
	* Get rendered to react elements
	* Is updated whenever anything changes
* ReactJS has a [good overview](https://reactjs.org/docs/components-and-props.html)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```jsx
export default function Heading(props){
  render() {
    return <Text>{props.text}</Text>;
  }
}
```

```jsx
import Heading from './Heading';
const heading = <Heading text="Welcome to HIT238" />;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### React Native Components
* Base components come from native code
* A number of [build in components](https://facebook.github.io/react-native/docs/components-and-apis.html)
* Many [different](https://nativebase.io/) [community developed components](http://www.awesome-react-native.com/)
* When in doubt search [npm](https://www.npmjs.com/search?q=react-native&page=1&ranking=optimal)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Basic Components
* View - Basic UI component. Like a div
* Text - Display text. Like a p, h1, h2, etc...
* Image - Display an image. Like img
* TextInput - Text input field. Like textarea or input
* ScrollView - Scrollable area. Like a div with overflow set to scroll
* StyleSheet - Holds styling. Like a CSS stylesheet


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Render Function
* Each component should return (or define) a render function
* Called when React _renders_ a component
	* When a component is first drawn
	* When props change
	* When state changes
* Returns a react element



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Modify your app to display some basic information about yourself


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Props
* Parameters for components
* Makes components more versitile and reusable
* Passed like html properties
* Access from variable passed to constructor
	* Often saved in this.props
* Your component is re-rendered whenever props change


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```jsx
export default function Heading(props){
  render() {
    return <Text>{props.text}</Text>;
  }
}
```

```jsx
import Heading from './Heading';
const heading = <Heading text="Welcome to HIT238" />;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### StyleSheets
* No CSS on native
* Use JavaScript styles
* Core components accept style prop
	* Can be an object or an array
* Can create CSS like styles with StyleSheet.create


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

```
<View style={styles.container}></View>
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
Height and Flex
* Unitless dimensions
* flex to grow
* flex direction defaults to column


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Activity
* Style your profile
* Move some sections to resuable components



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Summary
* React Native is a powerful platform
* It is _very_ popular
	* Lots of support documnetation
	* Lots of employers want React Native skills
* It is a new skillset but is very similar to existing web skills
* React has a very specific style that may not translate to other platforms


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Some more resources
* https://facebook.github.io/react-native/docs/getting-started.html
* https://facebook.github.io/react-native/docs/tutorial
