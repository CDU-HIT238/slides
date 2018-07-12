<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Unit Overview
* 4 hour lecture/tutorial every friday
	* Expected to attend
	* Will arrange regular contact with remote students
* You will need to already know basic HTML, CSS and Javascript


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Assignments
You will each develop your own application over the unit.

* 2 assignments
	* Assignment 1 - The Design Phase. 20%
	* Assignment 2 - The Development Phase. 30%


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Agile development
The assignments are structured around an agile model.

* 3 sprints in each assignment
* Sprints are 2 weeks each except for the final sprint of assignment 2
* You must submit your work at the end of each sprint
* Assignments are individual although some work will require a partner to complete



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Web Development Recap
* What can you remember?
* Grab a sheet of paper and see if you can answer these questions


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 1. What is semantic HTML?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 2. How do you import a stylesheet in to a HTML document?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 3. How do you import javascript in to a HTML document


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 4. What meta tag can you use to fix the mobile screen width?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 5. How do you apply CSS only to certain screen sizes?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 6. What does mobile first mean when writing CSS?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 7. How does a browser decide the order to apply CSS?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 8. Name three javascript best practices.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 9. How do you run a javascript function when a button is pressed?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* 10. What is the difference between == and === in javascript?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Mobile Applications
What do you think of when you think mobile apps?

What makes them "mobile"?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is a mobile app?
* Can be accessed anywhere
* optimised for mobile devices
	* small screen
	* smaller attention span
	* may access sensors



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Types of mobile applications
* Web applications
* Hybrid applications
* Cross-platform applications
* Native applications


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Web Applications
* What is a web application?
* More than a web site
	* Interactive
	* It *does* something (doesn't just _tell you_ something)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Mobile web applications
* Can you name some web applications?
* Can you name some mobile web applications


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Mobile web applications
* Until recently it was difficult to make web applications work offline
* Many organisations prefer users to install their app
* Gmail and facebook messenger push users to install their app on mobile


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Why make mobile web applications
* Knowledge of web technologies is enough to build an app
* No installation required
* Easy to update
* Quick to prototype
* Typically cheaper to develop
* no app store registration or review


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Disadvantages of mobile web applications
* Not as fast as native code
* Less access to device sensors
* Less exposure?
* Different browsers may provide different experiences


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### I &#x2764; web apps
* How many apps do you have that you needed for one task and never needed again?
* How many apps require a 40Mb download to do something trivial?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Progressive Web Apps (PWAs)
* Reliable - work offline
* Fast - No jank
* Engaging - Feel like a native application

https://developers.google.com/web/progressive-web-apps/


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Google &#x2764; web apps
https://developers.google.com/web/showcase/2017/twitter
https://developers.google.com/web/showcase/2017/olx
https://developers.google.com/web/showcase/2016/flipkart


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some clever mobile web apps
* Get our your phones and try out some mobile web apps
* https://pwa.rocks/



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Hybrid Apps
* Typically a thin &quot;app&quot; wrapper around a web app
* Builds like a web app
* Installs like a native app
* Use a web view to display the web app


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using a web view
* Wraps the web application in an native application wrapper that displays the apps

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Advantages
* Put your app in the app stores
* Easy to develop with existing web technologies
* Single code base works on multiple platforms
* Better access to sensor and other devices features


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Disadvantages
* Can be slower
* Installs like a native app but may not feel native
* Cannot access all native functionality
* Users may be out of date if they have to update through the app store


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Something to look forward to
* We will learn more about hyrbid apps in week 8
* You will learn how to make a hybrid app using cordova



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Cross platform apps
* Write app in one langage but compile to native code
* Some platforms like Appcellerator and React Native use web plafroms
* Other platforms like Unity and Xamarin use different languages


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
“We’ve tried in the past to just build web apps that we could wrap in thin native wrappers, but it doesn’t work. […] Anytime somebody tries to reimplement a native widget using HTML, CSS and JavaScript it always feels like shit.”
- Tom Occhino, React Native, Facebook


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Advantages
* Target multiple platforms with a single code base
* Get performance benefits of native code
* Better access to sensors and device API
* Often a more native interface


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Disadvantages
* May not be as performant as native apps
* Some platforms may not create a native-like experience
* Need to be installed and updated through the app store


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### More to come
* We will talk more about cross-platform apps at the end of the course



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Git, GitHub and GitHub Pages
* Hopefully everyone is familiar with GitHub
* You *must* use GitHub for this course so we will spend some time getting up to speed
* You will also need to use GitHub Pages to host your content


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What's the difference
* Git is a source control system
* Github is a public git repository (there are others)
* GitHub pages is a hosting platform like spinetail
* They are connected but are not the same


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Git
* Distributed
* Source Control
* Version Control


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Why use git
* Share code
* Track changes
* Allow people to work together without breaking things


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Git functions
* Clone - Copy a repository to our local machine
* Add - Stage a file to commit
* Commit - Store a code change in git
* Push - send our code changes to the server
* Fetch - Get code from the server
* Merge - Mix new code in with ours or vice versa
* Rebase - Like merge but different

Note:
This are some common git functions. Don't worry, you don't need to learn them all now. You might also hear git pull. This is a shortcut command to fetch and merge


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### WinGit client
* Lots of clients available
* Download from [https://git-scm.com/](https://git-scm.com/)
* GUI with Git GUI and command prompt with Git Bash

Note:
There are a lot of git clients about. For those of you on windows, I'd suggest using Git GUI for windows or the git client built in to Atom


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Clone a repository
<div class="grid-3">
![Git GUI open menu with "Git GUI here" highlighted](images/gitgui-open.png) <!-- .element: class="fragment grid-left-col" data-fragment-index="1" -->
![Git GUI new repoitory and clone options](images/gitgui-menu-new.png) <!-- .element: class="fragment grid-start-middle-top grid__col-span-2" data-fragment-index="2" -->
![Git GUI clone menu](images/gitgui-menu-clone.png) <!-- .element: class="fragment grid-start-middle-bottom grid__col-span-2" data-fragment-index="3" -->
</div>

Note:
To clone an existing repository to your computer, right click where you want to clone it and select "Git GUI here". Select "Clone existing repository" and enter the git address in "Source Location". Enter the path you want to clone to in "Target directory". Note that the final directory in target directory should not exist as git will create it for you.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Fetch changes
![Git GUI remote menu](images/gitgui-fetch.png) <!-- .element: class="fragment" data-fragment-index="1" -->
![Git GUI merge menu](images/gitgui-merge.png) <!-- .element: class="fragment" data-fragment-index="2" -->

Note:
To get the latests changes from the server open Git GUI, select "Remote" from the menu, "Fetch from" then "origin". This downloads the latests changes from the server. To mix the changes in with your code select the "Merge" menu then "Local merge". Now your code is up to date.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Commit and Push
![Git GUI buttons with rescan highlighted](images/gitgui-rescan.png) <!-- .element: class="fragment" data-fragment-index="1" -->
![Git GUI commit menu with stage selected](images/gitgui-stage.png) <!-- .element: class="fragment" data-fragment-index="2" -->
![Git GUI buttons with commit selected](images/gitgui-commit.png) <!-- .element: class="fragment" data-fragment-index="3" -->
![Git GUI buttons with push selected](images/gitgui-push.png) <!-- .element: class="fragment" data-fragment-index="4" -->

Note:
When you finish you'll need to commit to save your work and push to send them to the server. From Git GUI select "rescan" to search for changed files. You should see a list of modified files appear. Now open the Commit menu and select "Stage to commit". Now your files are staged you can commit them to the repository. Enter a description of what has changed in the "Commit Message" field and click the "commit button". Your changes are now saved". Click the push button to send your changes to the server.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Git local repository
* Clone the project to your local machine
	* You can get the address from the green clone button on github
* Copy your html and any required files to the week one directory
* Add the new files to git
* Commit the staged files with the comment "Add week one files"
* Push your code and check it appears on the github website


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Setup a git repository
* Register for github
* Create a new repository for HIT238 with a readme and gitignore file
* Clone the repository to your local machine
* edit README.md to add a description of the repository
* Commit and push your changes
* Push your changes and check they appear on the github website


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some tips
* Fetch from the server before you start writing
* Push whenever you finish writing
* A commit should be self-contained
	* If you are editing multiple files, include them all
	* Keep them small so it is easy to see what has changed
	* It is better to commit too much rather than not enough
	* Try not to break things



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## GitHub Pages
* Free webhosting for your github project



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Setup GitHub pages on your repository
* Open your repository on the github website
* Scroll down to GitHub Pages
* Ensure the branch is set to master
* Click select a theme
* Pick any theme
* Select commit
* Browse to [username].github.io/[repository name]
* [GitHub guide](https://guides.github.com/features/pages/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Jekyll
* When you commit GitHub compiles your markdown files to html
* The theme is used to decide how to render them
* If you don't have an index.html or index.md README.md will create your index page
* It can take a short time to update your content


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Adding new content
* Modify your README.md to include some details about yourself
* Commit and reload your GitHub pages URL (this may take a moment)
* Now create an index.html file and create a more detailed personal profile
	* Commit your changes and see how they appear
	* The theme is only used to markdown content
* Make your personal profile responsive and mobile first



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Get ready for next week
* Have a look at some mobile applications and think about what you would like to make
* Post three application ideas on the class discussion board
* If you have a genius idea don't keep it a secret
	* People don't buy an app because it is a great concept
	* People buy an app because it is great to use