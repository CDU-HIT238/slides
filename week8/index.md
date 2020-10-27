<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## React Native Continued



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Props
* Parameters for components
* Makes components more versatile and reusable
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
### Height and Flex
* Unit-less dimensions
* flex to grow
* flex direction defaults to column


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Activity
* Style your profile
* Move some sections to reusable components



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## State
* Tracks the internal state of your component
* Only visible to the current component
* Stored in this.state or a [hooks](https://reactjs.org/docs/hooks-intro.html)
* Updated with a setter
	* NEVER update the state object directly
* Component is re-rendered when state changes


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```jsx
import React, { useState, } from 'react';
import { AppRegistry, Text, View } from 'react-native';

function ToggleText(props) {
	const [showText, setShowText] = useState(false);

	// If the showText state is true use text from props otherwise use an empty string
	const display = showText ? props.text : ' ';

	// When the button is clicked toggle show text from true to false or vice versa
	const onClick = () => setShowText(!showText);

	return (
		<Text>{display}</Text>
		<Button onPress={onClick}>Toggle</Toggle>
	);
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Access state with a class
* If you use a class you can use `this.class` and the `setState` function



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## User input
* Input components take callback functions
	* Callback is called when the event fires
* Just like event listeners


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Input
```
	<TextInput
		style={{height: 80}}
		onChangeText={(text) => setText(text)}
		multiline={true}
	/>
```
* Note the arrow function is used inline. This is the same as declaring it elsewhere and passing it as a property.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Text input takes an onChangeText event that is fired whenever the user modifies the inputted text.
* You can also listen to onSubmitEditing to wait until the user submits the text.
* onSubmitEditing listens for the go button on the android soft keyboard and does not fire on multiline inputs


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


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* React Native provides a button for basic input touch events.
* There are also a number of [touchable](https://facebook.github.io/react-native/docs/handling-touches) components that you can use to construct buttons with different feedback.
* You can build more complex gestures using the [gesture responder system](https://facebook.github.io/react-native/docs/gesture-responder-system)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Make an application to write secret messages
* User enters text and the encoded text appears below their input
* Use the [rot-13](https://www.npmjs.com/package/rot-13) package to encode
	* From the command line run `npm install rot-13`
	* In your component load the module with `import rot13 from 'rot-13';`
	* Then you can encode text with `const encoded = rot13(plaintext)`


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Summary
* React Native is a powerful platform
* It is _very_ popular
	* Lots of support documentation
	* Lots of employers want React Native skills
* It is a new skillset but is very similar to existing web skills
* React has a very specific style that may not translate to other platforms


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Some more resources
* https://facebook.github.io/react-native/docs/getting-started.html
* https://facebook.github.io/react-native/docs/tutorial



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Back to web apps: Web Templates
"A template is a chunk of HTML that you need to inject onto the page"

- [CSS Tricks](https://css-tricks.com/video-screencasts/127-basics-of-javascript-templating/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* We can use templates to reuse HTML
* Easier to use from JavaScript
* Less duplication
* Easier to maintain 
	* change/fix only one place


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Native JavaScript Templates
* We can use backticks for quotes to create template strings
* These are called [template literals](https://css-tricks.com/html-templates-via-javascript-template-literals/)

```
var myString = `This string was created with backticks`
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Interpolation in template strings
* We can easily interpolate (inject) values using ${}

```
var title = "My page";
var headingHTML = `<h1>${title}</h1>`
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Formatting in template strings
* Template strings can also have new line characters

```
var title = "My page";
var headingHTML = `<header>
	<h1>${title}</h1>
</header>`;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Putting it together
* So now we can create complex HTML using javascript variables
* If we put the templates in a function we can reuse them

```
function createNotification(message) {
	return `<div class="notification">
		<span class="notification__msg">${message}</span>
		<button class="notification__close">Close</button>
	</div>`
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Shorthand
* Small templates can be written using lambda function shorthand

```
const menuItem(item) => `<a class="menu__item" href="${item.href}">${item.text}</a>`;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Open codepen and create a new pen
* Make a pop-up dialog using template strings
* Add a button to open the dialog
* How would you add a close button to the dialog?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using template libraries
* There are lots of templating libraries around
	* [ejs](https://ejs.co/)
	* [pug](https://pugjs.org/api/getting-started.html)
	* [handlebars](https://handlebarsjs.com/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### EJS
* EJS is nice because it is very similar to HTML syntax
* It also allows you to include JavaScript logic
* You can write EJS as a string in JavaScript
* We can also load EJS template files using [browserify](https://github.com/hughsk/ejsify) in gulp


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### EJS syntax
* We use EJS tags to inject logic and content
* `<%` A scriptlet tag for JS logic
* `<%=` An output tag that escapes the text and injects into the HTML
* `<%-` An output tag that does not escape the text and injects it into HTML
* `%>` Closing tag to finish logic or output


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### A menu example
```ejs
const menuTemplate = `<ul class="menu">
	<% menuItems.forEach(function(item) { %>
	  <li class="menu__item"><a href="<%=item.href%>"><%=item.text%></a></li>
	<% } %>
</ul>`
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Using EJS
* We render the template by passing data to it

```
const menu = ejs.render(menuTemplate, menuItems);
document.body.appendChild(menu);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Compiling EJS
* We can also compile an EJS template that we will often use
* This is what the browserify plugin will do
* Compiled templates return a function that you can call and pass your data

```
const menuTmpl = ejs.compile(menuTemplate);
const menu = menuTmpl(menuItems);
document.body.appendChild(menu);
```
