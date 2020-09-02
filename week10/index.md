<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Troubleshooting
Lets work through how we troubleshoot programming problems


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Use comments
* console.log
* console.warn
* console.error
* Use them often


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### This code has problems
```js
/**
* Create an unordered list of the array items
* @TODO: This function doesn't work. It just returns an empty list
*        I think there are more errors too
* @param {string[]} The items to place in a list
* @return string Unordered list HTML string
*/
function createList(items) {
	var myList = '<ul>';
	for(i = 0; i > items.length; i++) {
		myList = '<li>'+items+'</li>'
	}
	myList += '<ul>';
	return myList;
}
var list = createList(['one', 'two', 'three']);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Comments help us find the problems
```js
/**
* Create an unordered list of the array items
* @TODO: This function doesn't work. It just returns an empty list
*        I think there are more errors too
* @param {string[]} The items to place in a list
* @return string Unordered list HTML string
*/
function createList(items) {
  console.log('Create list items', items);
	var myList = '<ul>';
	console.log('My list');
	for(i = 0; i > items.length; i++) {
	  console.log("List item " + i, item[i])l
		myList = '<li>'+items+'</li>'
		console.log('my list', myList);
	}
	myList += '<ul>';
	console.log('my list', myList);
	return myList;
}
var list = createList(['one', 'two', 'three']);
console.log('Final list', list);
```


### Use breakpoints in the debugger
* Click on a line number to set a break point
* Refresh the page
* Step over the code
* Hover over a variable to see the current value


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/debug-tools.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* The video shows us that we are putting the whole array into the list item
	* We should be only inserted the item at the current index
* We can also see it runs multiple times but never changes
	* We should append the new HTML instead of assigning it


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Break your code up
* It is much easier to troubleshoot a 10 line function than a 50 line function
* Can you break your 50 line function into 5 10 line sections?
* You can pass dummy values into a function just to test if it works
* In industry we automatically pass dummy data with unit test
	* This helps us find errors we didn't know we created



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
