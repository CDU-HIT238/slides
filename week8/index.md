<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## React Native Continued



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## ES6 Classes
* ES6 introduced a new class syntax
* Alternative way to writing class prototypes


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  computeArea() { return Math.PI * this.radius * this.radius }
}
var c = new Circle(4)
c.computeArea()
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### We can write components using classes
```jsx
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class BodyText extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Text>{this.props.text}</Text>
    );
  }
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Why use classes?
Classes are useful if we need to keep track of data in the component



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
### Access state without a class
* You don't need a class to access the component state
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) may be simpler to use



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
		onChangeText={(text) => this.setState({text})}
		multiline={true}
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
### Activity
* Make an application to write secret messages
* User enters text and the encoded text appears below their input
* Use the [rot-13](https://www.npmjs.com/package/rot-13) package to encode
	* From the command line run `npm install rot-13`
	* In your component load the module with `import rot13 from 'rot-13';`
	* Then you can encode text with `this.state.ciphertext = rot13(this.state.plaintext)`



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Javascript Template
* We can use templates to reuse HTML
* Easier to use from JavaScript
* Less duplication
* Easier to maintain 
	* change/fix only one place


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Native JavaScript Templates
We can use backticks for quotes to create template strings

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
### Using template libraries
* There are lots of templating libraries around
	* [ejs](https://ejs.co/)
	* pug
	* handlebars


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
* `<%-` An output tag that does not escpae the text and injects it into HTML
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
