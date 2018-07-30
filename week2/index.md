<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Your websites & best practices
* 10 minutes review your website
* Install the [chrome lighthouse plugin](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
* Generate report on your site
* Share a screenshot and your notes on the discussion board


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Remember to write quality code
* Always assume that someone else will read your code
* Review the [code guidelines](https://hit226.github.io/Assessment-Code-Style-Guide/) from HIT226
* Do you follow best practices for [HTML](https://www.themelocation.com/best-html5-practices/), [CSS](https://webdesign.tutsplus.com/articles/css-documentation-best-practices--cms-30139)? Are there other best practices you have learned?
* Look at your code and make some notes about the quality
	* What did you do well
	* What can be improved
* Share your notes on the discussion board



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Some mobile apps
* What did you find?
* What did you like about them?
* What didn't you like?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Types of mobile apps
* Last week we talked about
	* Web apps
	* Hyrbid apps
	* Cross platform apps

Note:
We talked about web apps, hybrid apps and cross platform apps. Take a momemnt to recap on what their differences are.
Web Apps: Quick to develop, update and small to download. Work across the most devices
Hybrid Apps: Thin app wrapper around a web app. Quick to develop and can install from the app store
Cross Platform: Single code base that can be compiled into native code for different platforms. Faster than web and hybrid apps.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Native Apps
* Platform specific API
	* In a platform specific language
* Need to build a new version for each supported platform

Note:
Let's look at native applications now. 
A native application is developed in a specific language and API/SDK for the platform it targets,
They cannot run on other platforms so you need to write and maintain a seperate code base for each platform you support.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Advantages of native apps
* Full access to device features through native API
* Faster because they are optimised for the platform
* Fully installed before use - interet connection is not required

Note:
Native applications are fully optimised for the targeted platform.
This means they are faster and have full access to device sensors.
By targeting a platform specifically a developer can further optimise the code and interface for the device and users.
A more targeted platform also means developers can be more confidant that the application will look the same for all users. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Disadvantages of native apps
* Need to build a new version for each platforms
	* Which platforms to support?
	* More specialised skills are required
	* More expensive
	* More difficult to maintain multiple code bases

Note:
Because native platforms are so specialised the skills to develop them are less common.
They are also often more complex to develop. This makes them usually more expensive to develop.
It is necessecary to decide which platforms are going to be supported. Usually only one platform is supported first with a second being added after the first platform is established.
Making changes are more costly when they need to be made in multiple code bases.



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Android
* Developed by google but many different vendors
* The most popular mobile operating system
	* [88.7% of mobile devices run android](https://www.mobiloud.com/blog/native-web-or-hybrid-apps/)
* Many vendors and price points means many different devices to support
* [Many old versions still on the market](https://www.statista.com/statistics/385001/smartphone-worldwide-installed-base-operating-systems/)
	* How many do you need to support?
* [Lots of applications on the play store](https://www.statista.com/statistics/266210/number-of-available-applications-in-the-google-play-store/)
	* More competition but many are low quality

Note:
Android is the most popular mobile operating system and is available on a huge range of devices.
There are also many versions available, new applications do not always run on old versions.
This makes it hard to support all the different devices and versions available.
Android has a reputation for having more apps but of a lower quality


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Android development
* Developed in Java (or Kotlin)
* Requires Android SDK
* Android Studio is an IDE dedicated to Android development

Note:
Android developed in the Java language. Kotlin may also be used as it runs on the Java Virtual Machine.
The Android SDK provides an API which can be used to access Android specific functionality. 
The SDK also provides the build tools to create an APK package file from your code.
Android Studio is a popular IDE that is make specifically for Android development.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### IOS
* Developed by Apple and only released on the iPhone / iPad / iPod range
* Has [wealither](https://www.comscore.com/Insights/Data-Mine/iPhone-Users-Earn-Higher-Income-Engage-More-on-Apps-than-Android-Users), [more educated](https://theappsolutions.com/blog/development/ios-vs-android/) users who spend more on apps
* Requires a Mac to develop for
* More controlled environment - easier to develop for

Note:
IOS is the main compeditor to Android. It is used only on Apple mobile devices.
It has a smaller install base than android but a different demographic of users.
IOS users are more educated, wealthier and are more comfortable paying for an application.
The build environment, XCode, is only available on OSX so an Apple computer is required to build an IOS application.
There is a much smaller range of devices making it much easier to ensure an application works for all users.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### IOS Development
* Requires XCode to build images
* Uses Swift or Objective C

Note:
IOS applications are developed in Swift of Objective C.
Apple provide the XCode IDE to assist developers to write and build IOS applications


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Android vs IOS
* End of 2017
	* 2696 million android installs
	* 612 million IOS installs
	* 8 million other installs
* Many more android apps but lower standard
* Different demographics

[OS install base](https://www.statista.com/statistics/385001/smartphone-worldwide-installed-base-operating-systems/)

[IOS vs Android](https://theappsolutions.com/blog/development/ios-vs-android/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Discussion
* You have been asked to develop an application for a new ride sharing service
* User research suggest most users are:
	* 16 - 35
	* Technologically savvy
	* Cost conscious
* Which do you think is the best platform do use?
* Share your thoughts on the discussion board


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Discussion continued
* Your client has identified a second demographic of elderly people who have trouble with traditional phone booking systems
	* Does this change your recommendation?
* Add your thoughts to the disucssion board



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Mobile Context
* How is mobile different from other platforms?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Mobile != Desktop
* When we use a desktop or laptop we usually sit down and focus on the application we are using
	* Often in an office setting
* Where do you use your phone?
* What are you doing when you use phone apps?

Note:
Mobile applications are differnt to desktop applications.
The biggest different is that they are... mobile. That is, they can be used anywhere.
When we use desktop applications we are usually sitting down and focusing mainly on the application.
Mobile applications instead can be used in a wide variety of settings.
This usually means more distractions and shorter user interactions.
When do you use your phone? How is it different to when you use desktop applications?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What I do when I use my phone apps
* Watching a movie and want to know who an actor is
* In a car trying to find out where I'm going
* In a restaurant and my partner has just gone to the toilet
* Have friends around for drinks and need to pick a cool song to impress everyone
* Dripping wet, trying to work out how to replace the washer on a tap I just pulled apart


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Mobile considerations
* Mobile is mobile: context keeps changing
* More distractions
	* Shorter, simpler interactions
* Privacy concerns. e.g. easily lost
* Different input interfaces
* Internet connection may be intermittant


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some reading
* [The important differences from desktop](https://www.interaction-design.org/literature/article/mobile-usability-research-the-important-differences-from-the-desktop)
* [ The context of mobile usage](https://www.interaction-design.org/literature/article/the-context-of-mobile-usage-the-big-picture)
* [Designing for mobile: some simple guidelines](https://www.interaction-design.org/literature/article/designing-for-the-mobile-environment-some-simple-guidelines)
* [iPhone app design mistakes](https://www.smashingmagazine.com/2009/11/iphone-apps-design-mistakes-disregard-of-context/)

Note:
Read at least one of the above articles


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Discussion
* What are some important considerations when designing for mobile?
* Share your thoughts on the discussion board



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## User Research
[What is user research](https://www.interaction-design.org/literature/topics/user-research)

Note:
Read the brief overview of user research at the attached link


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is user research
* Answer some key questions about your product
	* What problem does this really solve?
	* Do people want/need this?
	* Will this benefit and integrate into people's lives?
	* Does the way it works make sense to people?

Note:
User research is a process to answer important questions about your product. 
Who are your users? Do they want this/What do they want? How do they want it?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Why do user research?
* Test your assumptions
* Identify hidden problems
* Saves going back and changing things later

Note:
When we come up with a great idea, it is held up by assumptions.
Assumptions are fine, if we didn't have them we could never come up with an idea in the first place.
But we need to be careful to check how well they are grounded in reality.
I have worked on many many projects where someone has had an amazing idea that everyone is going to love.
They hire developers and insist things have to be the way they imagine them.
But if they never go and test those ideas and their assumptions with real users the final application often misses the mark.
I honestly have no idea how many applications I have developed were released only to find nobody actually wanted to use them.
This either means throwing out all the time and money that went into developing the product or spending more to change it.
Put simply, user testing stops you from wasting time and money in developing something that nobody will use.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Types of user research
* Observational vs Experimental
* [Lab vs Journal vs Field](https://www.interaction-design.org/literature/article/getting-into-the-mobile-app-user-s-mind-user-research-for-mobile-applications)

Note:
There are many types of user research. One broad way of categorising them is as overservational and experimental.
Overservational looks to identify what happens in the real world while experimental tests a hypothesis
Lab is conducted in a controlled environment to test a key feature, journal involves a user writing down their thoughts and field involves going out and seeing what happens in the real world. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### User research tools
* Interviews
* Surveys
* Focus groups
* Diary study
* Card sort
* Prototyping
* Co-creation

Note:
There are many tools that you can use for user research. These are some of the more common types. Many of these can be applied in different ways and so could be considered broad catagories for multiple tools.



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Conducting user research
* No one way to conduct user research
* Recommend [5 step process](https://www.smashingmagazine.com/2013/09/5-step-process-conducting-user-research/)
	* Objectives
	* Hypotheses
	* Methods
	* Conduct
	* Synthesize

Note:
There are many many ways to conduct user research. One of the simplest plans I have seen is the 5 step process that David Sherwin writes about in Smashing Magazine. It has 5 broad stages. The first three focus on planning your research while the last two focus on doing the research itself. 
Have a read of the provided article to understand the basic process.
Let's have a look at the different stages.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### 1. Objectives
* What questions are you trying to answer?
* What with who, what , where, when, why and how
	* Who are your users?
	* What do they want to do?
	*	What else are they doing?
	* Where do they use your product
	* When would they use your product
	* Why would they use your product
	* How do they use your product?

Note:
One of the most important things to be clear about when conducting user research is to know what you want to find out. What are your questions?
An easy way to do this is to think about the who, what, where, when, why and how questions. Ask a questions for each question word. You may have multiple questions for one word. Now try and condense them in to one or two key questions.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### 2. Hypothesis
* What do you think you know?
* Acknowledge your bias
* Sketch answers to your objective questions

Note:
What is your hypothsis about this question? This is important to identify biases in your own thinking.
An easy way to do this is to try and answer your questions from the objective stage. This is your expectation. 
This is important for two reasons. One is to avoid letting your bias influence your testing, make sure you are not just trying to confirm your hypothsis. The second is to acknowledge your hypothesis so that you can test it and update your thinking if you find you are wrong or re-affirm it if you are right.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### 3. Methods
* How to find answers to your questions
* Identify methods to use for each question

Note:
How do you find the answers to your questions? What tools can you use to find them? Have a look at the different user research tools that people use and see which ones work for your questions.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### 4. Conduct
* Conduct user research and gather data

Note:
Go out and do the research. Make sure you have written up a test plan including your questions, methods and who you are going to test with.
This can be as simple as going to a coffee shop to conduct an interview with someone in the queue. Or advertising to recruit some users in your demographic to come in and do a cart sort.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### 5. Synthesis
* Go over your data and answer your questions
* Did you answer your questions?
* Did you prove or disprove your assumptions?
* Do you need to change methods/activities to get better data
* Are there any new questions that have been raised?

Note:
Now that you have data from real users you need to turn that in to answers.
Don't just answer your questions but also reflect on how effective your user research process was.
Did your research effectively answer your questions? Did the methods you use work?
Now look at your hypothesis, did it prove or disprove your hypothsis?
Finally are there are any questions that you need to ask in the next phase of user research?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create a plan document
* Document what you want to test and how you will test it
* Allows you to communicate your plans with stakeholders and team members
* Formalises the process and ensures you address all criteria

Note:
It is important to create a plan document before you conduct your user testing.
It includes the questions you want to answer and the methods you will use to try and answer them. 
This is important to ensure that you can communicate what you are testing (or have tested) and how with your team and clients.
It also formalises the process to ensure that you don't miss any steps.
It should not restrict your testing though. If something isn't working during a test you should go off script and see what you can do that works. Be sure to record any changes in your notes though.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Research plan sections
* Title
* Author
* Date
* Background
* Goals
* Research Questions
* Methodology
* Participants
* Schedule
* Script

From [The UX Research Plan That Stakeholders Love](https://www.smashingmagazine.com/2012/01/ux-research-plan-stakeholders-love/)

Note:
In an article for Smashing Magazine Tomer outlines a basic structure for user research. You should create a research plan that includes each of the listed sections. We have created a template to help you create your research plans.
You don't need to test with a lot of people. [Jackob Nielson suggests that it is better to run a lot of tests with very few users rather than big expensive tests with a lot of users](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create a test plan
* Imagine you have been asked to conduct user testing on LearnLine
* Your client is concerned that mobile usage is low and is concerned there are problems with the mobile experience
* Create a test plan to help your client
* Upload your test plan to the discussion board



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Personas
* You should have learned about personas in HIT226
* We will use them as a product of our user research
* They don't have to be perfect
	* They should reflect your user research
	* They should get you thinking about your users

Note:
You will need to create some personas in the first sprint of your assignments.
You should have already learned about personas in HIT226
We won't go into much detail here but they are an important product from your user research


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Why make a persona
* To give your users a face
* To help understand your user research
* To make lessons from your user research easy to reference


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some reading
[https://www.uxpin.com/studio/blog/ux-designers-5-minute-guide-lean-personas/](https://www.uxpin.com/studio/blog/ux-designers-5-minute-guide-lean-personas/)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## JSON
* JavaScript Object Notation


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some History
* For a long time we used XML to send data between web pages
* Big, clunky and complex to parse
* Douglas Crockford proposed JSON in the early 2000s
	* Based on JavaScript Syntax
	* Easily converted to/from javascript objects


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is JSON
* A string representation of nested data
* Modeled off JavaScript objects
* Has .json extension
* Has application/json MIME type
* Allows for data to easily be sent between server/client


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Permitted data
* String
* Number
* Boolean
* Null
* Array
* Object


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What does it look like?
```json
{
	"name": "Beatrice",
	"age": 72,
	"pets: [
		{
			"name": "Tobias",
			"type": "dog"
		},
		{
			"name": "Delilah",
			"type": "cat"
		}
	]
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Writing JSON
* All strings and keys must be quoted with "
* Comma must be used between array elements but a hanging comma is not permitted
* Write objects with {} and arrays with []
* Any valid value is also a valid JSON string


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using JSON: Convert JSON to JS
* JSON.parse() will parse a JSON string to a JavaScript Object
```
var data = JSON.parse(jsonString);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using JSON: Convert JS to JSON
* JSON.stringify() will convert your JavaScript object to a JSON string
```
var jsonString = JSON.stringify(data);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Create and load JSON data
* Open the pen [https://codepen.io/elvey/pen/XBjOZe](https://codepen.io/elvey/pen/XBjOZe)
* Write a function to save data from the form to the textarea
* Write a function to load JSON data from the textarea to the form
* Can you save multiple records in the JSON data?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Assignment 1
* You should have been thinking about your app ideas
* Are you ready to go out and get some user feedback?
* The first sprint is due at the end of week 3
