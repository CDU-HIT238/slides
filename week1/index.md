<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-intro.ogg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-overview.ogg" -->
## Unit Overview
* 3 hour lecture/tutorial every friday
	* Internal students are expected to attend
	* External students should <a href="mailto:matthew.elvey@cdu.edu.au">email me</a> after catching up
* 1 hour online session after lecture
	* Internal students are expected to attend
	* External students are encouraged to attend if possible


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/expected-knowledge.ogg" -->
## Expected knowledge
* You will need to already know basic HTML, CSS and Javascript
* You should be familiar with Git
* You should know design steps from HIT226 (testing, personas, etc...)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-assignments.ogg" -->
## Assignments
You will each develop your own application over the unit.

* 2 assignments
	* Assignment 1 - The Design Phase. 20%
	* Assignment 2 - The Development Phase. 30%


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-assignments-agile.ogg" -->
### Agile development
The assignments are structured around an agile model.

* 3 sprints in each assignment
* Sprints are 2 weeks each except for the final sprint of assignment 2
* You must submit your work at the end of each sprint
* Assignments are individual although some work will require a partner to complete



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/recap-questions.ogg" -->
## Web Development Recap
* What can you remember?
* Grab a sheet of paper and see if you can answer these questions
* Save your answers, you will need them when you make a website later

Note:
How well do you remember web technologies like HTML, CSS, Javascript, etc...
Over the next few slides are some questions, have a go at answering them to the best of your knowledge. Make sure you write your answers down as you'll need them when you make a website later. Don't worry if you get stuck, it's ok to look them up if you need a refresher.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* What is semantic HTML?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* How do you import a stylesheet in to a HTML document?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* How do you import javascript in to a HTML document


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* What meta tag can you use to fix the mobile screen width?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* How do you apply CSS only to certain screen sizes?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* What does mobile first mean when writing CSS?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* How does a browser decide the order to apply CSS?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Name three javascript best practices.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* How do you run a javascript function when a button is pressed?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* What is the difference between == and === in javascript?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-applications.ogg" -->
## Mobile Applications
What do you think of when you think mobile apps?

What makes them "mobile"?

Note:
Spend 5 minutes thinking about what you think a mobile app is
How are they different from a website? How are they different from desktop apps?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-applications2.ogg" -->
### What is a mobile app?
* Can be accessed anywhere
* optimised for mobile devices
	* small screen
	* smaller attention span
	* may access sensors

Note:
A mobile app has some fundamental differences to a traditional application.
The biggest differences are largely in the context of use and the types of devices they run on. The devices might mean smaller screens and access to sensors like GPS, cameras, etc... The context of use might mean that people are in different locations when they use them and their attention might be divided between different tasks when they use them. If i'm sitting in the passenger seat of car trying to navigate, I really need my application to be mobile but it means I am also trying to talk to a driver who is frustrated when they don't know where to go. Or I might be watching plumbing videos but not paying full attention because I'm getting sprayed with water from a leaky tap.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/types-of-apps.ogg" -->
## Types of mobile applications
* Web applications
* Hybrid applications
* Cross-platform applications
* Native applications

Note:
There are different types of mobile applications depending on how they are developed. They fall into 3 or 4 broad categories depending on how they are developed. We'll look at each of these one by one.



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/web-applications.ogg" -->
## Web Applications
* What is a web application?
* More than a web site
	* Interactive
	* It *does* something (doesn't just _tell you_ something)

Note:
A web application is not the same as a web site. For example you go to the CDU homepage to get some information, while you can interact with applications like twitter or facebook. 
The big difference between a web site like CDU and an application like facebook is interactivity. Facebook will respond to your actions while the CDU homepage will show the same information no matter what you do. The line between a web side and a web application is not always clear, but as we are looking at applications we will be focusing in interactivity.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-web-applications1.ogg" -->
### Mobile web applications
* Can you name some web applications?
* Can you name some mobile web applications

Note:
Spend 5 minutes to see if you can think of some web applications that you use. Are they also mobile applications?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-web-applications2.ogg" -->
### Mobile web applications
* Until a few years ago it was difficult to make web applications work offline
* Many organisations prefer users to install their app
* Google docs and facebook messenger push users to install their app on mobile

Note:
While both Google and Apple originally imagined their mobile systems using web applications, for a long time many people did not consider them as competitive alternatives to applications installed on the mobile platform. Many organisations still feel it is important that their app is installed in order to get exposure. Incidentally, [research found in 2015 that users spend most of their time in only a couple of apps](https://techcrunch.com/2015/06/22/consumers-spend-85-of-time-on-smartphones-in-apps-but-only-5-apps-see-heavy-use/) so just having an "app" doesn't mean it will get used.
More recently service workers and PWA manifests have allowed web applications to work more like native apps with installable menus and offline functionality bridging the gap between web and native. It is now even possible to install progressive web applications through the Google Play Store


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/web-app-advantages.ogg" -->
### Why make mobile web applications
* Knowledge of web technologies is enough to build an app
* No installation required
* Easy to update
* Quick to prototype
* Typically cheaper to develop
* no app store registration or review

Note:
Mobile web applications are very popular. This is because they can be build with the same tools as for existing web platforms and work on all devices with a web browser. As a result they are much cheaper to develop since the skills are more common and there is not need to build a separate app for each platform. They also do not need to be installed to run which means they automatically update so everyone is running the same version of the app which makes it very easy to prototype or try an idea out quickly. Further nobody controls a web application marketplace so there is no registration or review process required to publish a web application.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/web-app-disadvantages.ogg" -->
### Disadvantages of mobile web applications
* Not as fast as native code
* Less access to device sensors
* Different browsers may provide different experiences
* No app store?

Note:
While web application performance has improved significantly in recent years they do not have access to the hardware optimisations that native applications do and as a result as not as performant. This is changing all the time but for the time being it is very difficult to compete with native performance.
Due to privacy and security concerns web applications do not have the same access to sensors as native applications. A web application has limited access to the filesystem and your location for good reasons. An improved permissions systems and emerging APIs are closing this gap but installed applications still have greater access to device sensors and hardware.
With Microsoft Edge moving to the Chromium engine there are now three major browser engines and a huge range of different browsers. As a result a single web application may appear slightly different in different browsers. This is the trade-off for the portability that web applications provide.
There is still a perception that it is important to have an application in the app stores. With the huge number of low quality applications in the stores now I do not believe there is much more exposure or prestige in having an app appear in the store. Further, Google now allow progressive web apps into the play store. In the past I have spent quite a lot of time convincing clients that this is not a reason to make an app.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/i-love-webapps.ogg" -->
### I &#x2764; web apps
* How many apps do you have that you needed for one task and never needed again?
* How many apps require a 40Mb download to do something trivial?

Note:
You've picked up a guitar and need to tune it. Install an app?
https://github.com/jbergknoff/guitar-tuner
You want to quickly convert pounds in an American recipe to grams. Do you need to install an app?
A native application seems excessive for these tasks. Installing apps that you use very rarely (or even just once) takes time and space on your phone and are better suited to web applications.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/pwas.ogg" -->
## Progressive Web Apps (PWAs)
* Reliable - work offline
* Fast - No jank
* Engaging - Feel like a native application

https://developers.google.com/web/progressive-web-apps/

Note:
Progressive web applications (PWAs) have been around for a while now and don't appear to be going anywhere
Google defines them as reliable, fast and engaging.
They should work offline and feel fast and responsive like a native application


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/googlelovespwas.ogg" -->
### Google &#x2764; web apps
* Read one of the following articles
	* https://developers.google.com/web/showcase/2017/twitter
	* https://developers.google.com/web/showcase/2017/olx
	* https://developers.google.com/web/showcase/2016/flipkart

Note:
Google have been promoting PWAs as an alternative to native applications.
Scan the provided articles to see some of the advantages some users have found with PWAs.
It is interesting to note that two of the applications come from India where network connections are heavily utilised and have historically suffered from congestion problems. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some clever mobile web apps
* Get our your phones and try out some mobile web apps
* https://pwa.rocks/



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Hybrid Apps
![Hybrid Car](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/VW_Jetta_Hybrid_WAS_2012_0714.JPG/640px-VW_Jetta_Hybrid_WAS_2012_0714.JPG)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/what-are-hybrid-apps.ogg" -->
### What are hybrid apps?
* Typically a thin &quot;app&quot; wrapper around a web app
* Builds like a web app
* Installs like a native app
* Use a web view to display the web app

Note:
A hybrid application is a web application that has been bundled into an installable mobile package. They use a web view to display the web application as if it was a native app.
Think of it as a thin native wrapper around a web application.
This means that you can use the same tools as you use when building a web application but users install it like a native application.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/what-is-webview.ogg" -->
### Using a web view
* Wraps the web application in an native application wrapper that displays the apps

Note:
A web view is a browser window provided by the mobile platform that can render web pages.
They are similar to the default browser provided by the OS but may have some limitations.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/hybrid-advantages.ogg" -->
### Advantages
* Put your app in the app stores
* Easy to develop with existing web technologies
* Single code base works on multiple platforms
* Better access to sensor and other devices features

Note:
Much like progressive web applications, Hybrid apps allow you to use common web technologies to develop an app and can target multiple platforms with a single code base. They also provide better hardware access than a web application and allow you to submit your application to all common application stores.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/hybrid-advantages.ogg" -->
### Disadvantages
* Can be slower
* Installs like a native app but may not feel native
* Cannot access all native functionality
* Users may be out of date if they have to update through the app store

Note:
Because they use a web-view, they have performance like a web application and can be slower than a native app. They also do you have access to native UI components so often do not look or feel like a native app. There are many plugins to provide access to native functionality but you are limited to what the plugins provide, unless you want to write your own native plugins. Finally, because the app-store does always automatically update, some users may be using an older version.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg"data-audio-src="audio/hybrid-today.ogg" -->
### Hybrid web applications today
* Very popular in the past
* Less popular today
* Largely replaced by PWAs and Cross-Platform apps

Note:
Hybrid web applications have been historically popular because they worked offline, provided more access to the hardware than a web application could and could be installed in the app store. They were also simpler to develop than native applications because they use common web technologies and a single code base could target multiple platforms.
Hybrid frameworks like Cordova and Ionic still see some popularity but these days progressive web applications have got much better offline functionality and hardware access which makes hybrid apps less appealing. Further, cross-platform application frameworks like React Native and Flutter have made cross-platform applications easier and more powerful which have taken the place of hybrid applications.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/hybrid-in-class.ogg" -->
### Do you want to learn hybrid apps
* I am currently reviewing the role hybrid apps play in this unit
* Their role has been largely replaced by Progressive Web Apps
* They are an easier step from PWAs to the native build tools
* Please let me know your thoughts

Note:
Previously we have covered both hybrid applications with Cordova and cross-platform applications with React Native. I have however received some feedback that we moved too quickly so I am considering dropping one of these. Students have found hybrid applications an easy stepping stone from progressive web applications, but the skills are not in much demand in the workplace these days. I'd like to know what you want to study.



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Cross platform apps
![Apple Android](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Android_made_out_of_an_Apple.jpg/618px-Android_made_out_of_an_Apple.jpg) <!-- .element class="centre" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/what-are-cross-platform.ogg" -->
### What are cross platform apps
* Write app in one language but compile to native code
* Some platforms like Appcellerator and React Native use web platforms
* Other platforms like Unity and Xamarin use different languages

Note:
A cross-platform application is written in a non-native language which a framework compiles into native components.
They can use a variety of languages including web languages.
Frameworks using web languages like Appcellerator have been called hybrid apps in the past so the line between cross-platform and hybrid is not always clear.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
"We've tried in the past to just build web apps that we could wrap in thin native wrappers, but it doesn't work. [...] Any time somebody tries to reimplement a native widget using HTML, CSS and JavaScript it always feels like shit."
-Tom Occhino, React Native, Facebook


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/cross-platform-advantages.ogg" -->
### Advantages
* Target multiple platforms with a single code base
* Get performance benefits of native code
* Better access to sensors and device API
* Often a more native interface

Note:
Cross platforms apps allow you to write in a single language and build your code for multiple platforms. Because they build into native code you get many native-like performance increases. Alike hybrid applications, plugins or modules allow you to access the hardware which may give you more functionality than a progressive web application. They also use native UI components giving your applications a much more native look and feel.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/cross-platform-disadvantages.ogg" -->
### Disadvantages
* May not be as performant as native apps
* Hardware access is restricted to the framework or plugins
* Need to be installed and updated through the app store

Note:
Because your logic must be interpreted or converted to native code, it may not be as performant as a native application. You are also bound by the functionality that your platform provides which may not suit all your needs. It is often possible to write your own native plugins or components to increase your access but then you must manage native code for each platform you support. Users also need to install your application through the app store which can result in much larger download sizes than a web application.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Do you want to learn cross-platform applications
* We have previously touched on React Native at the end of this unit
* I am looking at only including hybrid apps _or_ cross-platform applications
* This is a bigger step than hybrid apps but has more real-world applications
* Let me know your thoughts

Note:
As I've previously mentioned, I am looking at reducing the amount of content in this unit to give you more time. React Native is a very popular cross-platform application framework and uses Javascript (with some special HTML-like extensions) and CSS-like stylesheets. This is a great tool to learn but does have a bit more of a learning curve than the Hybrid platform Cordova. Please let me know what your preference is.



<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-intro.ogg" -->
## Git, GitHub and GitHub Pages
* Hopefully everyone is familiar with GitHub
* You *must* use GitHub for this course so we will spend some time getting up to speed
* You will also need to use GitHub Pages to host your content

Note:
You will have covered Git in HIT226. It is important you use Git for this unit. Your assignments should be submitted through the GitHub repository and we will look at your commit history when marking. Your first assignment will also need to be hosted on GitHub Pages.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-differences.ogg" -->
### What's the difference
* Git is a source control system
* Github is a public git repository (there are others)
* GitHub pages is a hosting platform like Spinetail
* They are connected but are not the same

Note:
There is often some confusion between Git, GitHub and GitHub Pages. Git is a system for managing your source code. GitHub is a public Git service, other public services include GitLab and BitBucket. GitHub Pages is a platform to host a web page... like what you have used Spinetail for in the past.



<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-concepts.ogg" -->
### Git
![Git]( https://imgs.xkcd.com/comics/git.png)

[xkcd](https://imgs.xkcd.com/comics/git.png)

Note:
Git is often intimidating to learn. But don't worry, once you get your head around the basic concepts it's not too hard to use.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-overview.ogg" -->
## What is Git?
* Distributed
* Source Control
* Version Control

Note:
Git is a distributed, versioned, source control system. 
It is distributed because it can synchronise many repositories together. You keep a local copy of the repository and synchronise it with a server copy. Other users can do the same allowing everyone to keep their code synchronised.
It is versioned because it tracks all your changes in commits. Each commit records what changed so you can go back and view any version of the application. You can also use tags and branches to flag major versions.
It is source control because it holds your source code


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-why.ogg" -->
### Why use git
* Share code
* Track changes
* Allow people to work together without breaking things

Note:
We use Git as a place to keep our source code. It has a number of advantages over keeping a folder of your code. Primarily, it is easy to share our code with other people and it can keep track of what we change so we can go back to an earlier version if we break something. Because it tracks the changes it is also really good to combining different people's work together so it makes it much easier to work together with other people. As a result, Git is used heavily in the workplace. I don't know any professional programmers that do not use Git.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-functions.ogg" -->
### Git functions
* Clone - Copy a repository to our local machine
* Add - Stage a file to commit
* Commit - Store a code change in git
* Push - send our code changes to the server
* Fetch - Get code from the server
* Merge - Mix new code in with ours or vice versa
* Rebase - Like merge but different

Note:
These are some common git functions. Don't worry, you don't need to learn them all now. You might also hear git pull. This is a shortcut command to fetch and merge


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-cli.ogg" -->
### Git command line
* Most sources recommend learning Git with the command prompt
* Available on [Windows](https://imgs.xkcd.com/comics/git.png), [macOS](https://imgs.xkcd.com/comics/git.png) and Linux
* [Lots of great resources available](https://learngitbranching.js.org/)

Note:
Most sources suggest learning Git from the command prompt. I am guessing most people here are probably not comfortable using the command prompt. That's OK, but I encourage all of you to spend some time getting comfortable with the linux/unix command prompt (also on MacOS and the Linux Subsystem for Windows) as it is used in almost every field of Computing. LearnGitBranching.js.org is an excellent resource to get familiar with the Git command prompt.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-gui.ogg" -->
### Sourcetree GUI client
* Lots of GUI clients available but not many with good instructions
* Install Git and Sourcetree following instructions from [https://www.atlassian.com/git/tutorials/install-git](https://www.atlassian.com/git/tutorials/install-git)
* GUI with Sourcetree and command prompt with Git Bash
* You will need to create an Atlassian account to use Sourcetree

Note:
There are a lot of Git GUI clients about. Most online instructions use the command prompt but Sourcetree is a simple GUI tool with excellent instructions that works on Windows, Mac and Linux. Most IDEs like Atom also have Git integration.


<!-- .slide: data-background-image="images/git-bg.jpg"data-audio-src="audio/git-clone.ogg"  -->
#### Clone a repository
[Sourcetree instructions to clone a repository](https://confluence.atlassian.com/sourcetreekb/clone-a-repository-into-sourcetree-780870050.html)

* Use method #1 to clone from github. 
* Use HTTP unless you are already familiar with SSH
* You can also [connect your github account](https://confluence.atlassian.com/get-started-with-sourcetree/connect-your-bitbucket-or-github-account-847359096.html)

Note:
Sourcetree provide instructions to clone a remote repository. When using github you will need to copy the HTTP URL into the repository URL dialog. You should remember how to fetch the URL from HIT226.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-commit.ogg" -->
### Commit, Push and Pull
[Commit, fetch and pull a repository on Sourcetree](https://confluence.atlassian.com/sourcetreekb/commit-push-and-pull-a-repository-on-sourcetree-785616067.html)

Note:
When you finish you'll need to commit to save your work and push to send them to the server. To do this you will need to save your changes in a "commit". Once your changes are committed you will then need to send them to the server by pushing them. Remember, I can't see any work that you haven't pushed.
Finally you can pull other changes from the server. A pull is the same as doing a fetch and a merge.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-activity1.ogg" -->
### Activity: Setup a git repository
* Register for github
* Create a new repository for HIT238 week 1 with a readme and gitignore file
* Clone the repository to your local machine
* edit README.md to add a description of the repository
* Commit and push your changes
* Push your changes and check they appear on the github website

Note:
If you do not already have a GitHub account, register one now. Then create a new repository for HIT239 week one. Be sure to initialize your repository with a README. Then open your Git client and clone the repository to your computer, edit the README.md file and create a new commit and push your changes back to the server. Once you've done this refresh the repository on the GitHub website to check that your changes appear.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-tips.ogg" -->
### Some tips
* Fetch from the server before you start writing
* Push whenever you finish writing
* A commit should be self-contained
	* If you are editing multiple files, include them all
	* Keep them small so it is easy to see what has changed
	* It is better to commit too much rather than not enough
	* Try not to break things


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/github-pages.ogg" -->
## GitHub Pages
* Free web hosting for your github projectS
* Used for lots of static websites (including these slides)

Note:
GitHub pages provides free web hosting for the files in your Git Repository. It is a great service that is used for lost of programming projects web pages. Even these slides are hosted on GitHub Pages. You will use GitHub pages to host your assignments.


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/github-pages-activity.ogg" -->
### Activity: Setup GitHub pages on your repository
* Open your repository on the github website
* Go to settings and scroll down to GitHub Pages
* Ensure the branch is set to master
* Click select a theme
* Pick any theme
* Select commit
* Browse to [username].github.io/[repository name]
* [GitHub guide](https://guides.github.com/features/pages/)


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/github-pages-jekyll.ogg" -->
### Jekyll
* When you commit GitHub compiles your markdown files to html
* The theme is used to decide how to render them
* If you don't have an index.html or index.md README.md will create your index page
* It can take a short time to update your content

Note:
GitHub pages will show your index.html file by default. If you do not have an index.html file it will convert your markdown files to HTML using a platform called Jekyll. It can take a short time to update and is a useful tool. 


<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-content-activity.ogg" -->
### Adding new content
* Modify your README.md to include some details about yourself
* Commit and reload your GitHub pages URL (this may take a moment)
* Now create an index.html file and create a more detailed personal profile
	* Commit your changes and see how they appear
	* The theme is only used to markdown content

Note:
Remember that your file needs to be called index.html and is case sensitive. Most web servers are case sensitive and so you need to use only lowercase characters in your index.html filename.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-content-activity2.ogg" -->
### Adding new content continued...
* Make your personal profile responsive and mobile first
* Add a page with your answers to the quiz earlier
* Share a link to your site on the discussion board



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/next-week.ogg" -->
### Get ready for next week
* Have a look at some mobile applications and think about what you would like to make
* Post three application ideas on the class discussion board
* If you have a genius idea don't keep it a secret
	* People don't buy an app because it is a great concept
	* People buy an app because it is great to use

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
* More consistant UX

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
	* [~88% of mobile devices run android](https://www.mobiloud.com/blog/native-web-or-hybrid-apps/)
* Many vendors and price points means many different devices to support
* [Many old versions still on the market](https://www.statista.com/statistics/385001/smartphone-worldwide-installed-base-operating-systems/)
	* How many do you need to support?
* [Lots of applications on the play store](https://www.statista.com/statistics/266210/number-of-available-applications-in-the-google-play-store/)
	* More competition but many are low quality

Note:
Android is the most popular mobile operating system and is available on a huge range of devices. This link is a bit older but newer stats suggest similar numbers (but are behind a paywall)
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
* 2019 numbers
	* [2.5 billion android installs](https://www.theverge.com/2019/5/7/18528297/google-io-2019-android-devices-play-store-total-number-statistic-keynote)
	* [1.4 billion IOS installs][https://www.theverge.com/2019/1/29/18202736/apple-devices-ios-earnings-q1-2019]
* Many more android apps but lower standard
* Different demographics

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
* A [linter](https://jsonlint.com/) is useful to finding errors


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

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## MVP
The smallest thing you can build that a customer can use


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### How not to build an MVP
* Develop for everyone
* Look at the program functionality
* What is the first functionality you need to write
* What is the easiest functionality to write


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
![MVP Example](https://public-media.interaction-design.org/images/uploads/9f7f5b30ed9905117b65572ab6949a9f.png)

Author/Copyright holder: Henrik Kniberg. Copyright terms and licence: All rights reserved <!-- .element class="attribution" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### How to build an MVP
* Develop just for your target audience
* Look at the user functionality
* What is the core functionality for the user
* What is the smallest product the customer can use


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
![Good MVP as a slice out of the whole development process](https://public-media.interaction-design.org/images/uploads/e110f6dc07d9e8ebe1ea8251eab2a359.png)

Author/Copyright holder: Jussi Pasanen. With acknowledgements to Aarron Walter, Ben Tollady, Ben Rowe, Lexi Thorn and Senthil Kugalur. Copyright terms and license: All rights reserved <!-- .element class="attribution" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Why develop an MVP
* You can get user feedback throughout the process
* Test your ideas work with users
* Assess if users actually want your product
* Can address problems quickly
	* Less time wasted building something nobody wants
	* Less time wasted fixing something nobody likes


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### An MVP does not have to be complete
* Many resources talk about MVP as the smallest product for each release
	* I disagree
	* MVP is a great way to release regularaly but an MVP is not a release
* Your MVP should be _usable_ not necessecary _complete_
* You don't release your first MVPs to public
* There should be a number of MVPs for each release


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What needs to be in an MVP
* Have some key feature(s) to test
* Have a clear target audience
* Be complete enough to test the feature(s)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some steps to develop an MVP
* Figure Out What Problem You're Solving, and For Whom
* Analyze Your Competitors
* Define the User Flow
* List All Necessary Features and Prioritize Them
* Build, Test, and Learn

From [How to Build a Minimum Viable Product](https://rubygarage.org/blog/how-to-build-a-minimum-viable-product)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### How I use MVPs
* I usually have x number of sprints - then release
* Spread features across the sprints until release
* Each sprint has an MVP, development, user testing and a client meeting
* After user testing and the client meeting, the features for the next sprint are updated


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
![Sprints from PhyAR exercises](images/physar-sprints.png)

Note:
While the MVPs are not explicitly specified this project started developing a satellite exercise first as an interactive model, then as a web page. Then after it was developed and tested a plane was model developed and then an AR experience was developed. This was continued for a more complecated diver activity


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### My steps to build an MVP
* Make a list of features to build
* Sort them in to core, important, desirable and unnecessary categories
* Sort the core category by priority
* Pick the most important - does it / do they depend on any others
* Sketch out wireframes and UX flows for those features
* Cut out anything unecessecary in the designs


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Reading
* The article [Minimum Viable Product and Design](https://www.interaction-design.org/literature/article/minimum-viable-product-mvp-and-design-balancing-risk-to-gain-reward) is an excellent resource
* There are lots of other great resources but be careful
	* Many are advising startups on their release products
	* They focus on what a user will buy - not how to get user feedback
	* The different uses of the term MVP can be confusing


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Design an MVP
* A restaurant has asked you to develop a mobile app to order take away
	* Their clientele is mostly 20 - 30 and often use their phones when waiting
	* Surveys indicate the clients would like to order from home and just pick up their food
	* Many would like to pay when they order but many also pay cash


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Continued
* Make a list of possible features
* What would be in an MVP
* Sketch out the UX flow for an MVP
* Share your MVP on the discussion board


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Bonus
<iframe width="560" height="315" src="https://www.youtube.com/embed/jHyU54GhfGs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## User Stories
![User story](images/user-story.jpg) <!-- .element class="centre" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### User stories are not the same as requirements
* Requirements are traditionally a list of features
* User stories are a list of functionality
	* They identify the user (or persona)
	* They state the function from the user perspective
	* They outline why it is important


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
As a &#95; I want to &#95; so that &#95;


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Get into the user perspective

Note:
Write from the perspective of your users. These are not developer requirements but user requirements. They should be worded like a user would write them, and concequently make sense to everyone, not just the developers.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Use Personas

Note:
Now is the time to get our your personas. Who wants this feature? You can list a group of personas but keep them grounded to your personas. If it doesn't match your personas, you probably don't need the feature (or your personas are wrong).


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Keep them simple
Break stories up if you have to

Note:
It is common to use user stories with epics in agile. An epic is like a really big user story that takes multiple sprints to develop. They are often broken down into many user stories. There will usually be many user stories in a sprint.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Examples: Gardener Application
* As a gardener I want to identify illness in my plants so I can treat them
* As a beginner I want to know when to plant tomatoes so they grow well
* As Max I want to know what plants grow well in the tropics

Note:
Personas can use broad user categories, specific categories or personas. You will find they are better grounded in your user research if you use your personas. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* I want an application to remind people when to take their medication
* In your tables write as many user stories as you can for this application
* There are personas on the next slide


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
#### Personas
* Beatrice, a 70 year old woman who has trouble with phones. She has high blood pressure and takes blood thinners. She recently had pneumona and had to take a prolonged course of antibiotics.
* Kevin, a 45 year old carer for his elderly father. His father is perscribed heart medication his father often forgets to take.
* Susan, A 12 year old diabetic. She has only recently been diagnosed and doesn't like having to take insular or check or blood sugar as she finds it disrupts her other activities.



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Promises
* Alternative to callbacks
* Handle completion (or failure) of an asynchronous operation
* Sometimes called syntastic sugar
	* They don't give new functionality - just make the code nicer
* Added with ECMAScript 2015 (ES6)
* [Supported everywhere expect IE](https://caniuse.com/#search=promises)

Note:
Promises are a semi-recent addition to javascript.
They were added with ECMAScript 2015 and have been adopted by all major browsers.
They don't actually allow you do do anything new but they can be chained to avoid nested callbacks.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Do this then that
With promises

```
asyncFunc()
	.then(function(response) {
		// Do stuff
	})
	.catch(function(error) {
		// Handle error
	});
```

Note:
Promises provide two key functions.
then: Run this code after the function completes successfully
catch: Run this code if the function fails


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Instead of callbacks
Without promises

```
asyncFunc(
	function(err, data) {
		if(err) {
			// Handle error
		} else {
			// Do stuff
		}
	}
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Chain your promises
```
loadJSON()
	.then(function(response) {
		return JSON.parse(response);
	})
	.then(function(jsonData) {
		// Do stuff
	})
	.catch(function(error) {
		// Handle error
	});
```

Note:
Promises really shine when we chain them together.  A chain of promises is a much nicer alternative to nested callbacks.
The catch function will be exected if there is an error anywhere along the chain.
Be careful though, long promise chains can swallow your errors and make it difficult to debug


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Beats callback hell
```
loadJSON(function(err, data) {
	if(err) {
		// handle error
		return;
	}
	doAsyncProcessing(data, function(err2, processedData) {
		if(err2) {
			// handle second error
			return;
		}
		// Do stuff
	});
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Make a promise
```
function timeoutPromise(time) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, time);
	});
}
```

You rarely need to do this as you usually use existing promises

Note:
You usually consume existing promises.
But sometimes you may want to convert an existing callback function to use promises.
To do this you can return a new promise. To create a promise create a Promise object and pass it a function. The function takes two callbacks for arguments, resolve to call when it completes successfully and reject when it fails.
Resolve takes a completion object as an argument and reject takes an error object for the argument/


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Promise everything
You can wait for a group of functions to finish using Promise.all
```
Promise.all(arrayOfPromises)
	.then(function(responses) {
		// Everything is finished
	});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Your turn
* Open the pen [Promises exercise](https://codepen.io/elvey/pen/PBRMBJ)
* Modify the function delayedUppserCase to
	* Return a new promise 
	* If the input is a string
		* Resolve the promise after 500ms with the input in upper case
	* If the input is not a string
		* Reject the promise after 500ms




<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## HTTP Requests
![HTTP Request](https://upload.wikimedia.org/wikipedia/commons/4/4f/Scheme_dynamic_page_en.svg) <!-- .element class="light-bg" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is a HTTP request
* A HTTP request is what your browser does when you view a web page
* Request data of the HTTP protocol and receive data in response
* All web resources are usually loaded over HTTP
* You can see the requests you browser makes in the developer tools


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### HTTP requests from JS
* Load data from a server
* Sometimes called [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) (Asynchronous Javascript And XML)
* Get updated data without reloading the whole page
	* Less jank
	* Less network traffic


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### XMLHttpRequest
* Previously used XMLHttpRequest
* Uses callbacks
* Was the standard for a long time
* Ugly and messy - many people used jQuery instead


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Fetch
* A modern solution
* Much nicer interface
* Uses promises


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using fetch
```
fetch('data.json')
	.then(function(response) {
		console.log(response);
	});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Handle the response
* Fetch results a [response object](https://developer.mozilla.org/en-US/docs/Web/API/Response)
* You can check status with response.status
* You can read the response body as text with response.text()
* You can read the response body as JSON with response.json()
* You can read file like data with response.blob()


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Exercise: Your turn
* See if you can load notes from the provided endpoint to the table
* [HIT238 Fetch Exercise](https://codepen.io/elvey/pen/qyXrMQ?editors=1111#)
* Save your solution, you will need it shortly


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Sending data with fetch
* Fetch takes a second argument for options
* Can set the following data
	* Method
	* Mode
	* Headers
	* Body


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Send JSON Data
* Set method to put or post
* Set content-type header to application/json
* Set body to JSON string
* Set mode to cors if required


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
fetch(url, {
	method: 'post',
	mode: 'cors',
	headers: {
		'Content-Type', 'application/json'
	},
	body: JSON.stringify(data)
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add a form to your solution to  [HIT238 Fetch Exercise](https://codepen.io/elvey/pen/qyXrMQ?editors=1111#)
* Add a button to submit the form data to the server
	* This should be a post request
	* You will need to enable cors
* Show the success (or error) message to the user



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## CORS
* Cross Origin Resource Sharing

![Apple cores](//c1.staticflickr.com/5/4047/4319953731_fa8659d820_b.jpg) <!-- .element class="centre half-height" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Same Origin Policy
* Browser restricts HTTP requests to resources within the same origin
* An origin is
	* Some host (subdomains are also excluded)
	* Same port
	* Same protocol
* Embedded resourecs are not restricted (images, CSS, scripts, etc...


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is CORS
* CORS allows a resource to permit additional domains to access it
* The response header defines the pages that are permitted to access the resource
	* Defined in the Access-Control-Allow-Origin header
* For modify requests (not GET) the broswer makes a preflight request
	* Can see OPTIONS request in dev tools
* Server also declares if credentials may be sent with requests


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using CORS
* Set mode to cors
* The browser will automatically handle CORS for your requests
* You get an invalid request error if CORS fails
* You may need to set credentials to include if authentication is required


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### User CORS on the server
* If writing a server-side API you will need to set the Access-Control-Allow-Origin header
* The * directive is not well supported so it is best to specify the required domain name
* You can read the requestor domain from the Origin header in the request
* Look up CORS implementation for your language of choice


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Watch it happen
* Open up your solutions to the fetch activity
* Open the network tab and watch the requests get made
* Click on the requests and examine the headers
* Change the domain from notes.php to notes-nocors.php
	* What happens?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Polyfills
* Implement newer functionality in older browsers

![Spray insulation](https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WALLTITE_spray_foam_insulation_being_applied.jpg/319px-WALLTITE_spray_foam_insulation_being_applied.jpg) <!-- .element class="centre half-height" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Polyfill fetch
* [Fetch is not supported by IE browsers](https://caniuse.com/#search=fetch)
* We can provide this functionality manually using a [polyfill](https://github.com/github/fetch)
* You can find a CDN of this polyfill at https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.4/fetch.js


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Implement the fetch polyfill
* Include the CDN in your fetch exercise
* Examine the fetch object in your debugger or console
* Is it any different?
	* Why? Why not?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Lots of polyfills
* [Promises](http://bluebirdjs.com/docs/api-reference.html) (arguably not a true polyfill)
* [Picture](http://scottjehl.github.io/picturefill/)
* [ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Polyfill)
* [MathML](https://wet-boew.github.io/wet-boew/demos/mathml/mathml-en.html)
* [Video](https://www.mediaelementjs.com/) (more of a wrapper than a polyfill)
* Heaps more


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Modernizr
* [Modernizr](https://github.com/Modernizr/Modernizr) checks what functionality is available
* Can load polyfills when required
* [Simple Syntax](https://modernizr.com/docs/#using-modernizr-with-javascript)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Don't overdo polyfills
Read the section "Is there a CSS Grid Polyfill" in [https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/#a-id-is-there-a-css-grid-polyfill-40-a-is-there-a-css-grid-polyfill)

Why is a grid polyfill a bad idea? Does this apply to other features?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Progressive Enhancement
* Progressive enhancement and graceful degredation suggest
	* A site should work without newer features
	* Add functionality as it becomes available
* Only polyfill what is absolutely necessecary

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Design Sprint 1 Recap
* Some great app ideas and fantastic data gathered

Note:


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Extensions
* If you need an extension please see be _before_ the due date
	* Tell me why you need an extension and when you need it until
	* Requests less than 24 hours before the due date will not be considered without a medical certificate
	* Good practices for the workplace

Note:
If you are running out of time and need an extension please let me know before the due date. I understand that sometimes things can get hectic and am happy to accomodate your needs but you need to contact me beforehand with the reason you are running late and when you want an extension until. I won't consider anything within 24 hours of the due date without a medical certificate. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Submission
* Please follow the sumibssion guidelines
	* Link to google document
	* Make document it public
	* Use a spell checker

Note:
Can you please submit your assignments as google documents (or through google drive)? I appreciate attaching a word document but it makes my job much easier if there is a link to your google doc and shows that you have read the assignment guidelines. Please also base your document off the provided template. If you haven't looked at the template please be sure to use it in your next submission.
If you are attaching images, please make sure they fit on the page and are the right way up.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Problem Statement:
* These were really good. Most provided a little bit of context for the problem and what they are trying to solve.

Note:
The problem statement should outline the user problems you want to solve. This is not the place to explain what your application will do, instead we want to look at the overall goal of our applications before we commit to a particular application idea.
Sometimes we get very attached to a particular application idea, which is not actually something our users are interested in. By stepping back from the app idea and first understanding how our users engage with the particular problem we can ensure our application idea is developed around their needs and environment.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Research Objectives
* A lot done really well
* Remember this are the goals for your *research* not your app or project
* What do you want to find out about your users
	* What is their experience of your problem?
	* What solutions have their tried
	* What are their frustrations?

Note:
Your objectives should be the questions you want to find out from your users in order to design your application. Who are they, what is their experience of your target problem, what are thir frustrations and what has worked fro them. This information will be used to build your personas and to reframe your application concept to ensure it is relevant to your users. The "5Ws and an H" questions are a great place to start, you can take these further by tailoring them to your application and reducing them to a couple of broader core questions you want to know about your users.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Research Hypotheis
* Again generally well done
* These are _your_ answers to the questions from your _objectives_
* A tool to help you critically evaluate your knowledge and results
* some went a little off topic

Note:
These are the answers you expect to the questions from your objectives. The purporse of this is to acknowledge your bias to prevent it from influencing your researc results, to better clarify how well you know your users and potentially identify area that may need more research. You are not looking to confirm your hypothesis but rather learn beyond it.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Research Methods
* Overall well done
* COVID-19 makes things difficult
* Could be more specific
	* Make sure to include your actual questions
	* Include how you will find/select participants

Note:
The methods were generally done well. These are the actual research methods you want to apply. You should be quite specific about what you are doing though. If you are doing a survey, the survey questions should be listed. If you are doing a card sort what cards are you asking people to sort and what criteria are they sorting them into? It is a bit premature for prototyping but if you prototype, what is the prototype you are showing participants and what are you asking them to do on it?
It is also important to outline how you are recruiting your participants. This can be as simple as going to the cafe and asking people or posting it on facebook. You should also outline how many particpants you aim to get. Recruiting methods can impact on the results and this is important in the workpace where you may have different people performing the research so the process needs to be as explicit as possible.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Research Notes
* Some great data collected
* Outline the results of your research
* Don't just confirm that your app is a good idea
	* What did you learn that is a surprise
	* Does it raise any new questions (further research)

Note:
This is where you outline the results from your research. Data is great to include but be careful not to include anything that can identify your participants. It is valuable to discuss how the results relate to your hypothesis but look at more than just if it support or contradicts your hypothesis. Are there any interesting observations? Are there any new questions your research has raised? Remember this information is the basis for your personas.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Personas
* Don't use a real person
* Don't _just_ make up a person
	* _Use the data from your research_
	* _Fit them in your target audience_
* Do their goals refelct your research data?

Note:
Be sure to structure your personas well and provide some relevant personal information to make them more relatable. The big thing I wanted to see was the process of using personas to represent your user research. There is no value in just making up a user if it isn't grounded in some real user data. Personas are a great way to turn the lessons from your user research in to hypothetical users that you can reference throughout development. If your data is limited than you need to make some assumptions but try to capture as much of your research data as possible. You personas also need to reflect your target audience.



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Trello


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is Trello?
* A tool for managing lists
* You can create many boards
* Each board can have many lists
* Each list can have many cards
* Each card can have labels, comments and be assigned to users
* It can track almost anything


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### I use Trello at work
* Manage feature lists / user stories
* Map out sprints
* Track task progress
* Create to do lists
* Plan out the weekly topics for this class


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create a board
* A board is like a workspace
* You can have many lists on one board
* Usually all lists are related


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-create-board.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create lists
* A list is like a category
* You often move cards between lists


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-create-list.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create cards
* A card is an individual item
* These are the things we are really tracking
* There are often lots of cards in a project


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-create-cards.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Manage your cards
* Cards can be sorted into lists
* You can add labels to cards
* You can add attachments, checklists, comments and descriptions to cards
* You can assign cards to different people


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-move-cards.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/trello-add-labels.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check out the docs
* [Trello 101](https://trello.com/guide/trello-101) provides a basic introduction
* [Create a board](https://trello.com/guide/create-a-board) gives you a better walk through


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Register for Trello
* Create a new board called "Project MVP"
* Create some labels to sort your features by



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Mobile performance
![Speed gauge](images/gauge.svg) <!-- .element class="centre half-height no-border" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
"The average time it takes to fully load a mobile landing page is 22 seconds, according to a new analysis.  Yet 53% of mobile site visitors leave a page that takes longer than three seconds to load."

From [Mobile page speed new industry benchmarks](https://think.storage.googleapis.com/docs/mobile-page-speed-new-industry-benchmarks.pdf) by Google


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Load time matters (although maybe not as much as we think)
* Mobile connections are highly variable
* Mobile devices are highly variable


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Page Sizes
* The average page size is over 3mb
* The average page size [probably doesn't matter much](https://speedcurve.com/blog/web-performance-page-bloat/)
* So what matters?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Load time
* Remember the quote from earlier?
	* The average load time is 22 seconds according to google
	* 53% of people leave a page that takes longer to three seconds to load
* But what is the load time?
	* Fully loaded includes all resources
	* What matters is perceived load time or time to an interactive page
* Recommended target is < 3s


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### So what matters
* Read [https://speedcurve.com/blog/web-performance-page-bloat/](https://speedcurve.com/blog/web-performance-page-bloat/)
* What do you think matters?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* What matters is time until a page feels loaded
* How long until you can start using the page?
* Minimise lag and loading time
* An [Ericsson study found video lag caused more stress than driving in heavy Jakarta traffic](https://www.ericsson.com/id/en/press-releases/7/2017/delay-in-video-streaming-creates-higher-stress-level-than-driving-in-heavy-jakarta-traffic)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Cost of your page
* Page size still matters
* It's just about more than loading time
* The median page costs [4 cents in Australia](https://whatdoesmysitecost.com/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What to do
* Reduce percieved loading time
* Defer loading javascript
	* Set the defer flag
	* Put at the end of yor page body
* Minimise your resources
* Delay anything you don't need at the time
* Try not to wait on the server
* Preload resouces if you have time and are confidant you will need them

Note:
The defer flag should be enough to prevent your script from blocking the DOM from loading but it is a good idea to still put your scripts at the bottom to also cater to older browsers. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Minify your resources
* You can reduce to size of your CSS and JavaScript by minifying (or uglifying) it
* Try compresing resources at https://www.minifier.org/
* Compress your images at http://webresizer.com/resizer/
* Combine your JavaScript and CSS to reduce the number of files
	* This is less important with HTTP/2 but is still useful


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Reduce this page
* Clone the repository https://github.com/CDU-HIT238/HIT238-performance-exercise
* Can you reduce the perceived loading time of this page?
* Use [throttling](https://developers.google.com/web/tools/chrome-devtools/network-performance/reference#throttling) in Chrome dev tools to simulate a slower connection



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Geolocation API


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Get the user's current position
* Watch for changes in the position


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some caveats
* The location API is only available on secure (HTTPS) connections
* The user must grant access to geolocation
* No guarantee that geolocation is available


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check if geolocation is available
* Check for navigator.geolocation
	* If it is truthy than geolocation services are available

```js
if("geolocation" in navigator) {
	// location services are available
} else {
	// location services are not available
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Getting the current position
* navigator.geolocation.getCurrentPosition(successFunc, errFunc, options)
	* Get's the current position and calls a callback function
	* Calls successFunc when the location is successfully retrieved
	* successFunc takes a [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) parameter
	* Calls the optional errFunc when an error occurs
	* errFunc takes a [PositionError](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) parameter
	* The optional [options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) parameter provides configuration 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using getCurrentPosition
```js
navigator.geolocation.getCurrentPosition(
	function(position) {
		console.log('Success', position);
	},
	function(err) {
		console.error('Error', err);
	}
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Reading the location
* The position object holds the [coordinates](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) and a timestamp

```
{
	coords: {
		accuracy: 30,
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		latitude: -12.388257999999999,
		longitude: 130.872771,
		speed: null
	},
	timestamp: 1532945280233
}

```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Coordinates
* Accuracy - the accuracy of the location in metres
* Altitude - The altitude from sea level in metres
* Altitude Accuracy - The accuracy of the altitude in metres
* Heading - The direction of motion in degrees from true north
* Latitude - The current latitude in degrees
* Longitude - The current longitude in degrees
* Speed - The current velocity in metres per second


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Location accuracy
* By default getCurrentLocation tries to get a fast low-accuracy location
	* Usually from network location
* You can request a high accuracy location
	* Usually from GPS
	* Takes longer
	* May not be available


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
navigator.geolocation.getCurrentPosition(
	successFunc,
	errorFunc,
	{
		enableHighAccuracy: true
	}
);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Add a marker to the map
* Open the pen [https://codepen.io/elvey/pen/BPJppR](https://codepen.io/elvey/pen/BPJppR)
* Add a marker at the current location using the addMarker() function
* Try with both high and low accuracy
	* Do you notice any difference
	* Why or why not?
* Test on a mobile device if you can
* Save your changes. You'll need them shortly


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Watching the location
* You can watch the current position for changes with watchPosition()
* Same input parameters as getCurrentLocation()
* The success callback gets called each time the position is updated
* You can stop watching using clearWatch()


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```js
var watchID = navigator.geolocation.watchPosition(
	successFunc,
	errorFunc
);
navigator.geolocation.clearWatch(watchID);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Update the map marker
* Go back to the code from your last activity
* Use watchLocation to move the marker when the position changes
* Use moveMarker() to update the marker position
* [Update your location](https://developers.google.com/web/tools/chrome-devtools/device-mode/device-input-and-sensors)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Checking permission
* The geolocation API does not allow you to check if a user has granted permission or not
* The new [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) does
	* But it [isn't fully supported](https://caniuse.com/#feat=permissions-api)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Using the permissions API
```
navigator.permissions.query({
	name: 'geolocation'
})
	.then(function(permissions) {
		if(permissions.state === 'granted) {
			// permission granted
		} else if(permissions.state === 'denied') {
			// permission was denied
		} else if(permissions.state === 'prompt') {
			// we can prompt for permission
		}
	});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Asking for permission
* It is a good practive to notify users before asking permission
* It can be confusing when a page unexpectedly asks for your location
* People are more likely to allow permission if they know why



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Web Storage
![Hard Drive](images/hard-drive.jpg)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is web storage
* Data stores for the server origin
* Session Storage and Local Storage
* Save name/value pairs
* Limited data on each
* Does not work on data: URIs


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Storage limits
* 5mb for each on iOS
* 10MB each on Chrome
* 10MB shared on Firefox



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Session Storage 
* Save data for the duration of the session
* Used for temporary data
* Lasts as long as the browser is open
* Is only accessable from the current tab
* Persists across refreshes
* Removed when the tab is closed


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Set data
```
sessionStorage.setItem(key, value);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Get data
```
var value = sessionStorage.getItem(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Remove a key
```
sessionStorage.remove(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Clear all data
```
sessionStorage.clear();
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Count keys
```
var count = sessionStorage.length;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Read key
```
var key = sessionStorage.key(index);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Putting it togther
Read all the key / values to an object

```
var data = {};
for(var i = 0; i < sessionStorage.length; i++) {
	var key = sessionStorage.key(i);
	var value = sessionStorage.getItem(i);
	data[key] = value;
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Your turn
* Open the pen [https://codepen.io/elvey/pen/MBBWPb](https://codepen.io/elvey/pen/MBBWPb)
* Add code to save data from the form to session storage
* Add code to load data from session storage and show it in the form
* Add code to remove a key from session storage
* Save your code and reload the page - what happens to your data
* Open a new tab and check your data



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Local Storage
* Persistant data storage
* Used for longer storage
* Lasts until deleted
* Is accessible from all windows
* Uses same API as sessionStorage


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Set data
```
localStorage.setItem(key, value);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Get data
```
var value = localStorage.getItem(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Remove a key
```
localStorage.remove(key);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Clear all data
```
localStorage.clear();
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Count keys
```
var count = localStorage.length;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Read key
```
var key = localStorage.key(index);
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Your turn
* Open the pen [https://codepen.io/elvey/pen/MBBWPb](https://codepen.io/elvey/pen/MBBWPb)
* Implement the same functionality with localStorage
* Save your code and reload the page - what happens to your data
* Open a new tab and check your data



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Storing objects
* How can you store objects in web storage?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
localStorage.setItem(key, JSON.stringify(myObject));
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Private browsing
* Read [Private Browsing / Incognito Modes](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#Private_Browsing_Incognito_modes)
* How do you think you should handle this?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Activity: Make a shopping list
* Make a simple page that lets you store a list of items
* Enter an item in a text field
* Show all saved items in an unordered list
* Can you remove an item once it has been added



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Prepare for next week
* Next week we will learn about some tools to make this easier
* Can you install [node and npm](https://nodejs.org/en/) before next week?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Touch Events
![U can't touch this](https://upload.wikimedia.org/wikipedia/en/d/d0/Hammer_Touch.jpg) <!-- .element class="centre" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Use event listeners
* Just like mouse events
* Four event types
	* touchstart
	* touchend
	* touchmove
	* touchcancel


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: try them out
* Open the pen [https://codepen.io/elvey/pen/ZjvyMw](https://codepen.io/elvey/pen/ZjvyMw) on a touch device
* Try touching the window area
	* Can you see the touch events?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Event properties
* timeStamp - the timestamp when the event was fired
* touches - all the current touches
* changedTouches - all touches that have changed since the last event
* targetTouches - all touches that triggered this event


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Touch objects
* Touches are represented as touch objects
	* identifier: The unique identifier for this touch point
	* radiusX - The width of this touch
	* radiusY - the height of this touch
	* rotationAngle - The degrees this touch has rotated
	* force - the amount of force applied in this touch


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Touch objects cont..
	* pageX & pageY - coordinate from the edge of the document including scroll offset
	* screenX & screenY - coordinates from the edge of the screen
	* clientX & clientY - coordinates from thd edge of the viewport


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: How would you track movement
* Discuss in your table how to identify the following gestures
	* double tap
	* pan
	* pinch
	* twist
* Write some pseudo code for a gesture
* Can you implement it in javascript


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Help is coming
* This will soon be superceded by [Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
* Combines all input including mouse and touch
* Just waiting for [Safari](https://caniuse.com/#feat=pointer)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Help is available
* There are libraries like [HammerJS](https://hammerjs.github.io/) to handle gestures for you



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Media API
Access media devices


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
## Audio
* You can also capture audio with the media API

```
navigator.mediaDevices.getUserMedia({
		 audio: true
})
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Cool Examples
* [MDN Voice Change-o-matic](https://mdn.github.io/voice-change-o-matic/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Media streaming
* You can also use WebRTC to [stream between different devices](https://www.html5rocks.com/en/tutorials/webrtc/basics/#simpleRTCPeerConnectionExample)
* It is a bit more advanced but you could build a video/audio group chat
* I won't cover it in this unit but can help you if you want to learn how



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
* Storage API for [large amounts of data](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)
* NoSQL Database
* Can storage complex data
* Can store files (as blobs)
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
  var db = evt.target.result;
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
* Grunt
* Parcel
* Webpack


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Gulp
* Easy
* Clean
* Mature
* Well Supported
* Uses node


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Node / NPM
* A javascript runtime environment
* Based on Chrome's V8 JS engine
* Runs on the server (or your computer)
* Includes Node Package Manager (NPM)

Note:
You can use yarn instead of NPM but for this course we're going to use NPM


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Initialize a node project
```
npm init
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install Gulp globally
```
npm install -g gulp-cli
npm install -g gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
To run a globally installed gulp you can use the gulp command

```
gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Global is not the best
* Lots of guides suggest installing globally
* But it has problems
	* What if you have different projects with different versions of gulp?


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Install Gulp for your project
```
npm install --save-dev gulp-cli
npm install --save-dev gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
To run a locally installed gulp you can use the gulp command

```
npx gulp
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
You can also setup a build script for your project by adding the following to package.json
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

function js() {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
}

exports.default = js;
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Use the gulpfile from the previous slide
* Install gulp and plugins using npm`
	* npm install --save-dev gulp gulp-cli gulp-concat gulp-sourcemaps
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
* Smarter than concatanate

```
const importedFunction = require('./myFunc.js');

function newFunction() {
...
}

modules.exports = newFunction;
```


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
#### Let me know if you want a gulpfile to do something else
* I'm happy to help address a specific task
* I'll share one in the discussion board if you want it
* You don't have to use one, but it may help structure your code



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Service Workers

Note:
Service workers are a special type of web worker that can act as a proxy for offline caching. It can also perform background sync and push notifications like other web workers.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Web Workers
* A background process
* Runs in a different thread
* Different context to [window object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
* Cannot access DOM
* Can access [a lot of other functions](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)

Note:
Until now we've learned that javascript is asynchronous because it runs in the same thread. Web workers however let us run some scripts in an independant thread. This means they do not have access to the same window object (although they can access some window functions) and have no access to the DOM.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Service Workers
* Has access to cache
* Can act as a network proxy
* Can talk to the page with postMessage()

Note:
A service worker is a special type of web worker. They have access to cache and can act like a network proxy. This means they can sit in between the HTTP requests your browser makes and decide how to handle them. The cache lets them store some requests for later so they can respond to a HTTP request without loading data from a server.
If you need to communicate between a service worker and your regular javascript you can use postmessage.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Offline Web Apps
* Can save data in cache
* Can intercept requests and load data from cache when offline

Note:
Because a service worker can save HTTP data and respond with it later, this means, once your page has been loaded in cache it can work without an internet connection.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Stages of a Service Workers
* Download
* Install
* Activate

Note:
Before we get too deep into implementation specifics it is worth having a quick look at the service worker lifecycle. When a new service worker is found it is first downloaded. After the download is completed it gets installed, this is when it can perform any setup it needs like preparing the cache. It then sits there waiting for any existing service workers to finish. As long as an old service worker has work to complete, a new one will not be activated. It will generally be activated after waiting a while, but sometimes it might take a refresh. You would usually clear out old caches after the service worker has activated as you know the old service worker has finished.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Register a Service Worker
```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
```

Note:
To load a service worker you need to tell the browser to load it. The service worker must be in a seperate script which we direct the browser to load.
Here we can see we check if service workers are supported and wait for the page to finish loading. We then register the service worker using the function navigator.serviceWorker.register which returns a promise


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Service worker scope
* Service workers scope includes their path on
	* `/sw.js` can access anything from the root
	* `/pages/sw.js` can access anything after /pages
	* `./sw.js` can access anything under the current path

Note:
As service workers can act as a proxy we need to be clear on their active scope. They can only intercept requests from their current path onwards. They cannot get requests from their parent directory. So be careful, if you place your service worker in a scripts directory you will only be able to intercept your scripts.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Creating your service worker
```
var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
```

Note:
The follow code will create a service worker. It will need to be saved in the file you referenced from navigator.serviceWorker.register(). In the example above this would be sw.js.
We'll break down the key functions in the following slides


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### caches.open(cacheName)
Opens the given cache and returns a promise that resolves to the cache


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### cache.addAll(arrayOfUrls)
Saves the provided files in the cache


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check your service worker
* You can check your service workers using chrome dev tools
* Check the application tab -> Service Workers


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/devtools-serviceworker.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Check your cache
* You can check the contents of your cache using chrome dev tools.
* Check the applications tab -> cache storage -> cache name


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/devtools-cache.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Clone one of your repositories
	* You can use https://github.com/melvey/camera-pwa if none are suitable
* Add a service worker
* Identify files to cache form the network tab
* Load the page and check your cache in dev tools


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Load from the cache
```
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```

Note:
To load data from the cache you need to catch HTTP requests. Each HTTP request fires a fetch event that we can listen for.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Fetch event
* The fetch event is triggered on each outgoing http request
* The event contains the request in FetchEvent.request
* You can resolve the event with FetchEvent.respondWith()
	* Takes a promise that resolves to a response object


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Searching the cache
* [Cache.match()](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
	* Resolve a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) for the first matching Request in the cache
	* Takes a request as an argument
	* If there is no match the promise resolves undefined


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Now your page works offline


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/serviceworker-network-tab.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/serviceworker-offline.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add a fetch event listener to load responses from the cache
* Watch your network tab
* Disable the network and reload the page


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Update a Service Worker
```
self.addEventListener('activate', function(event) {

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
					if(cacheName !== CACHE_NAME && cacheName.indexOf(CACHE_TITLE) === 0) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* [ExtendableEvent.waitUntil()](https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil) tells the event manager that work is still going
* Iterate through all the cache names
* If a cache name matches ours but with a different version, delete it
* If you use multiple caches you can use a whitelist


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add the activate listener
* Increase the cache version number
* Reload and examine the cache in chrome dev tools


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Extra resources
* Google have a great [introduction to service workers](https://developers.google.com/web/fundamentals/primers/service-workers/)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Manifest
* JSON file describing how your app should work when installed


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
```
{
	"name": "CDU Assignment Scheduler",
	"short_name": "CDU Scheduler",
	"icons": [
		{
			"src": "images/icons/icon-128.png",
			"sizes": "128x128",
			"type": "image/png"
		},
		{
			"src": "images/icons/icon-512.png",
			"sizes": "512x512",
			"type": "image/png"
		}
	],
	"start_url": ".",
	"display": "standalone",
	"background_color": "#FFF",
	"theme_color": "#123557"
}
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### name & short_name
* short_name is used where space is limited
	* app launcher
* name is used where it is not
	* install prompt
	* loading screen
* Google recommends keeping short_name to less than 12 character


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### start_url
* The URL to load when launching the app
* Make sure this is cached by your service worker
	* If you cache / and your start_url is index.html it will not resolve


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### display
* How you want your app to open
	* fullscreen - no browser UI elements and take up the full screen
	* standalone - no browser UI elements in a seperate window from the browser
	* browser - Open in the browser


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### orientation
* Force the app to open in a particular orientation
	* landscape: force to landscape view
	* portrait: force to portrait view


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### background_color
* The app background colour
* Used on splash screen when launching your app


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### theme_colour
* The colour to set the toolbar and the task switcher
* Should match the theme-color meta tag
```
    <meta name="theme-color" content="#123557">
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### icons
* Array of icons to use for the the app launcher, loading screen, etc..
* Set src, type and sizes
* The browser will scale icons to fit if required so you can just target key sizes


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Adding the manifest
* Add a reference to the manifest in the head html

```
<link rel="manifest" href="manifest.json">
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Now it installs
![PWA install prompt](images/pwa-screenshot.png) <!-- .element class="centre no-border half-height" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add a manifest to your app
* Deploy to github pages
* Examine the manifest in the dev tools application tab
* Run a lighthouse report on your page



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Progressive Web Apps
* You have now built a progressive web app
	* works offline
	* Can install to android


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### But what about iOS
* [PWAs Are Now Available for Apple Devices with iOS 11.3](https://www.monterail.com/blog/pwa-for-apple-ios)
* [Progressive Web Apps on iOS are here](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some limitations on iOS
* Only 50Mb storage
* App gets cleared out if not used
* No background sync or push notifications
* No notification to install the app

* [What is the service worker cache storage limit](https://love2dev.com/blog/what-is-the-service-worker-cache-storage-limit/)
* [PWAs on iOS 12.2 beta](https://medium.com/@firt/pwas-on-ios-12-2-beta-the-good-the-bad-and-the-not-sure-yet-if-good-a37b6fa6afbf)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### So how do you install it?
* Click share -> add to home screen


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### iOS doesn't use the manfest icons
* Need to set the icon meta tags
* Good idea to set all the fancy apple tags

```
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Assignment Scheduler">
    <link rel="apple-touch-icon" href="images/icons/icon-152.png">
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turn
* Add the apple tags to your app
* Deploy to github pages
* See if someone with iOS >= 11.3 can install your app



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Activity: Make a shopping list
* Create a new git repository
* Create a form to save shopping items and quantity
* Save them to IndexedDB or LocalStorage
* Show items in a list
* Checkoff items
* Add a serviceworker and manifest to work offline

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Using the git command line
* Every git GUI client is different
* Git has a consistant UI on every system
* Most instructions use the command prompt
* Open your terminals or Git Bash command prompts and follow along

Note:
So far we have used GUI git tools. Unfortunately the different platforms people use can be quite different. However everyone has access to the git command prompt. You're still welcome to use your git tools but it is good to have some exposure to the command prompt.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### The terminal
* don't worry, it's not as scary as it looks

Note:
When we think of command prompts we often think aobut super nerd hackers from the movies with walls of scrolling green text. Don't worry, it's much easier than that. With just a few basic commands you can unlock the power of git.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Clone a repository
```
git clone https://github.com/CDU-HIT238/project-template.git
```

Note:
Use the git clone command to clone a repository from the server to your computer. GitHub actually provides you with the commands when setting up a new git repository.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/git-clone.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Fetch and merge the current branch
```
git pull
```

Note:
In the windows Git GUI we leared, you had to fetch and then merge. The command line has an easy shortcut. Git pull will fetch changes from the server and merge them in to your current branch.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Commit changes
```
git add ./path/to/changes
git commit -m "comment comment"
```

Note:
Just like from the GUI, you need to stage changed files before commiting them. You stage files with the git add command and provide the path to the files you want to stage. You then commit staged files with the git commit command. We use the m flag to provide a commit comment which is important to see what's changed.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Push your changes to the server
```
git push
```

Note:
You upload your files to the server by running git push. It might prompt for your username and password if you are not already authenticated.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Show changes
```
git status
```

Note:
You can see all the files that have changed using git status.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Show the difference in files
```
git diff /path/to/files
```

Note:
You can look at what has changed in the files with git diff. Provide a path to the files you want to see. You can see all changes by passing the path . but it is often easier to read with less files at a time.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/git-commit.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### It's easy to walk back in time
Just checkout the commit hash (You can find the hash in your commit history)

```
git checkout 17df004
```

Note:
The command prompt also makes it easy to go back to an earlier commit. This is useful if you've lost a file or are looking for a solution that has since been removed.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Rollback a specific file
You can even rollback a specific file from a previous commit

```
git checkout 17df004 -- /path/to/file/to/restore
```

Note:
You can also grab just one file from a previous commit. I often do this when fixing merge conflicts but it is also useful when a recent commit has broken something and you just want to switch back one file.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Try and complete the first level of [learn git branching](https://learngitbranching.js.org/)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Challenge
Can you make the next commit in your project using the command prompt



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Git Branches
* Save your work without affecting other code on the server

Note:
Git branches provide us way a way to keep working code isolated from the main code base. We usually do this to avoid breaking things while we are working.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is a branch
* A chain of commits
* Can have many branches
	* master branch is created automatically
* Can merge with other branches

Note:
If you think of your repository as a chain, with each commit linked to the commit before and after it, a branch is like a seperate chain. It's called a branch because it branches off from another commit. 


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
![Git Branches](images/git-branches.svg) <!-- .element class="bg-white centre" -->
<figcaption class="caption">"Git Branches" by Atlassian under CC BY 2.5 Australia; dimension attributes added, from Atlassian</figcaption>

Note:
You can see multiple branches drawn here. Develop branches off from master and two feature branches branch off develop


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Create a new branch
```
git checkout -b branch-name
git branch --set-upstream branch-name origin/branch-name
```

Note:
You can see a bit about how git works here. When you create a new branch, you are only creating it locally. You can use your local branch just the same until you want to push changes to the server. In order to push changes you need to link it to the server (or origin). We do this with set-upstream and link our local branch to one on the origin.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/git-add-branch.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Set upstream branch
* Instead of calling set-upstream you can push with -u and tell it where to go
```
git push -u origin branch-name
```

Note:
Instead of calling set upstream when you create a branch you can tell git the destination the first time you push. -u tells git to remember the branch you use and you can omit the branch details for subsequent pushes.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/git-branch-firstpush.webm" type="video/webm" />
</video>

Note:
You can see here what happens if you try to push without setting an upstream branch. If you forget git tells you the command to use.


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### List your branches
```
git branch
```

Note:
You can get a list of all your local branches using git status. Note these are only local branches. To get branches on the server as well use git branch --all


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Switch local branches
```
git checkout branch-name
```

Note:
Use checkout to switch to a local branch. If a remote branch exists this will be linked to that


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/git-switching-branches.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Merge your changes
* Copy the changes from one branch to another
	* Checkout your target branch
	* Merge from the source branch
```
git checkout master
git pull
git merge branch-name
```

Note:
When you finish with a branch you need to bring your changes over to the master branch. You can use merge to copy the changes across. Merge is like a smart copy and will not overwrite anybodies work


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/git-merge-branch.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Your turnA
* Return to [Learn git branching](https://learngitbranching.js.org/)
* See how far you can get in 15 minutes


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Don't use folders to isolate changes
* I often see people copy their whole project folder to work on something new
	* This is hard to keep track off
	* This is hard to integrate with a different copy of the folder


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Use branches to isolate changes
* If you start work on something and don't want to keep it you still have the original branch
* If you want to resume working on it later it is easy to update with latest changes
* Great for avoiding conficts in teams
* Used heavily in the workplace


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Best practices
Intead of merging into master your should raise a pull request
* Navigate to your GitHub repository
* Click the Pull Requests tab
* Click New pull request
* Select master in the base dropdown
* Select your branch in the compare dropdown
* Click create pull request



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
### React Native popularity
* React native is enormously popular
	* React is in the top 5 most starred repositories on GitHub
	* React native is in the top 25
	* [React popularity is still increasing](https://2019.stateofjs.com/front-end-frameworks/react/)
* [Many large apps are build in ReactNative](https://reactnative.dev/showcase)
* Lots of job listings for React and React Native


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Expo
* A platform to build react native apps
* Much easier to setup than Android SDK
* Provides some great libraries to help development
* You can develop React Native apps without it and use the Android SDK directly
	* But we won't because expo is easier to setup


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Setup Expo
```
npm install -g expo-cli
expo init MyProject
```


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### The state of things
* A couple of years ago Airbnb and Udacity stopped using React Native
	* Udacity wrote up [a retrospective](https://engineering.udacity.com/react-native-a-retrospective-from-the-mobile-engineering-team-at-udacity-89975d6a8102) on their experience
	* Airbnb wrote a [five part blog on their experience](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c)
	* They have different reasons but both found they were spending too much time on native development


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Some lessons
* If your app is very complex you need a native app
* If you have a huge development budget, a native app is better
* If not, Hybrid Apps are a good solution


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
* Open App.js to edit your app
* Run `npm start` to start the expo service


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## React Native Continued



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
* Note the arrow function is used inline. This is the same as delaring it elsewhere and passing it as a property.


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
	* Lots of support documnetation
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
* Some [additional native options](https://github.com/react-native-community/react-native-geolocation)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### AsyncStorage
* Use in place of LocalStorage
* Uses native options depending on OS
* Details at [https://react-native-community.github.io/async-storage/](https://react-native-community.github.io/async-storage/)


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


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
# Async & Await
* The official examples use the async/await features.
* These are just shortcuts to convert promises to return values and wait until they complete to continue running.
* This code is in practice exactly the same as the first example


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### SQLite
* There is also a sqlite plugin available at [https://github.com/andpor/react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Third Party Libraries
* Lots of extra resources on github
* Have a look at [https://codingislove.com/top-15-react-native-libraries/](https://codingislove.com/top-15-react-native-libraries/)
* For those of you using firebase [https://medium.com/@anum.amin/react-native-integrating-push-notifications-using-fcm-349fff071591](https://medium.com/@anum.amin/react-native-integrating-push-notifications-using-fcm-349fff071591)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### More third part libraries
* Maps are available with [MapView](https://docs.expo.io/versions/latest/sdk/map-view/)
	* No support for web deployments but I wrote a wrapper for another project I can provide if anyone needs it
* [There are logs of component libraries](https://www.codeinwp.com/blog/react-native-component-libraries/)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Search for plgins
* Search google and NPM for some modules that you think will be useful
* Can you install and load one?



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
* Classes are useful if we have complex components


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity: Create a class component
* Can you create a class component
* Make it display a heading from props



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
### Activity
* Copy the createList function above into a new file
* Create a HTML page and load the createList function
* Add a button to call createList and pass it an array of strings
* Use the debugging to step through the code and fix any errors


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Debugging from a mobile device
* Both chrome/android and ios/safari have remote debuggers
* You can connect your phone and access the debugger in the browser
* In my experience iPhones need a mac to debug
	* There are many alternative suggestions online


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* [Android users try debugging in android](https://developers.google.com/web/tools/chrome-devtools/remote-debugging)
* [iOS users try debugging in Safari using "method 1"](https://www.browserstack.com/guide/how-to-debug-on-iphone)
	* Note this iOS page is trying to sell your their alterntive product so we will only use method 1



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Debugging in React Native
* Expo gives us access to the browser console and debugger


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Redbox errors
* By now you have all likely seen the "Red Box" errors
* These are critical errors building or running your app
* They show a stacktrace which shows where the error occurred
* Look for the first line in the error then work back through the trace


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Start the debugger
* Shake your phone and select "Debug Remote JS"
![React Native Debug Menu](images/react-native-debugger.jpg) <!-- .element class="half-height centre no-border" -->


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* This opens a browser window
* Your react native code runs in a web worker in this window
* This gives you access to the browser debug tools
![React Native browser debugger](images/react-native-browser-debugger.png)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
* Now you can find your code and set breakpoints as normal


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
<video>
	<source data-src="videos/react-native-debugger.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Browser plugins
* There are also browser plugins for react native
* Thwy will give you a nicer debugging interface


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Activity
* Start your React Native app
* Start the debugger and step through a function
* Can you see your state values change?



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## What problems are you having?
* Does anyone have code they want to troubleshoot?
* Share a link in collaborate and we can troubleshoot it together



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
# HIT238 The mobile paradigm



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Exam
* Learnline Test
* 28th of October at 10am
* 2 Hours
* Mix of short answer and code



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Short answer questions
* Read the question carefully
* Enter your answer in the provided space
* Usually about comparing or describing tools/technologies


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Fill in the blank questions
* Very short answers (mostly single word)
* Mostly asking which function you should use
* Some variation is accepted but be careful with formatting


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### File upload questions
* Write your answer in a seperate file and upload the file
* Used for code questions
* Write your code in an IDE, test it works and then upload


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Code question tips
* Make sure your IDE (Atom, VSCode, etc...) is working
* Make sure you have your web environment setup
* Make sure you have a local web server setup to test
* Make sure you have node/npm and react native installed


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Code question tips
* I will first test answers by running them
* Test your code before uploading
* If you are given a function template make sure you use the same function name and properties
* If you are asked to export your code make sure you have a [default export](https://cdu-hit238.github.io/slides/week7/#/5/3)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Sample Exam
* Try the test exam in LearnLine
* You can use google and the lecture slides if you get stuck
* See if you can complete it in 90 minutes



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Looking back


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### What is a mobile app?
[Week 1: Mobile Applications](https://cdu-hit238.github.io/slides/week1/#/3)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Mobile Web Apps
[Week 1: Mobile Web Applications](https://cdu-hit238.github.io/slides/week1/#/4)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Hybrid Apps
[Week 1: Hyrbid Web Applications](https://cdu-hit238.github.io/slides/week1/#/5)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Cross Platform Apps
[Week 1: Cross Platforms Apps](https://cdu-hit238.github.io/slides/week1/#/6)
[Week 7: Cross Platform Apps](https://cdu-hit238.github.io/slides/week7/#/3)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Native Apps
[Week 2: Native Apps](https://cdu-hit238.github.io/slides/week2/#/3/1)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Android * iOS
[Week 2: Android](https://cdu-hit238.github.io/slides/week2/#/4)
[Week 2: iOS](https://cdu-hit238.github.io/slides/week2/#/4/2)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Mobile Context
[Week 2: Mobile Context](https://cdu-hit238.github.io/slides/week2/#/5)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### User Research
[Week 2: User Research](https://cdu-hit238.github.io/slides/week2/#/6)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### User Stories
[Week 3: User Stories](https://cdu-hit238.github.io/slides/week3/#/2)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### MVP
[Week 3: MVP](https://cdu-hit238.github.io/slides/week3/#/1)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### JSON
[Week 2: JSON](https://cdu-hit238.github.io/slides/week2/#/9)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Promises
[Week 3: Promises](https://cdu-hit238.github.io/slides/week3/#/3)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### HTTP Requests & Fetch
[Week 3: HTTP Requests](https://cdu-hit238.github.io/slides/week3/#/4)
[Week 3: CORS](https://cdu-hit238.github.io/slides/week3/#/5)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Touch Events
[Week 5: Touch Events](https://cdu-hit238.github.io/slides/week5/#/1)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Geolocation API
[Week 4: Geolocation](https://cdu-hit238.github.io/slides/week4/#/4)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Web Storage
[Week 4: Web Storage](https://cdu-hit238.github.io/slides/week4/#/5)
[Week 5: IndexedDB](https://cdu-hit238.github.io/slides/week5/#/4)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Build Tools
[Week 6: Build tools](https://cdu-hit238.github.io/slides/week6/#/1)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Media API
[Week 5: WebRTC](https://cdu-hit238.github.io/slides/week2/#/3)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Service Workers
[Week 6: Service Workers](https://cdu-hit238.github.io/slides/week6/#/2)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Manifest
[Week 6: Manifest](https://cdu-hit238.github.io/slides/week6/#/3)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Notifications
[Week 9: Notifications](https://cdu-hit238.github.io/slides/week9/#/3)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Web Templates
[Week 8: JS Templates](https://cdu-hit238.github.io/slides/week8/#/5)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->\
### React Native
[Week 7: React Native](https://cdu-hit238.github.io/slides/week7/#/4)
[Week 7: Components](https://cdu-hit238.github.io/slides/week7/#/6)
[Week 8: Props](https://cdu-hit238.github.io/slides/week8/#/2)
[Week 8: State](https://cdu-hit238.github.io/slides/week8/#/3)
[Week 8: User Input](https://cdu-hit238.github.io/slides/week8/#/4)
[Week 9: Extra functions](https://cdu-hit238.github.io/slides/week9/#/1)



<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
## Next Week: Presentations
* 3 Minutes each
* 20 marks
	* Marked on both your application and presentation
* This is a product pitch
	* Focus on your app
	* Do not focus on your processes (sprints, testing, etc...)
* You need to demonstrate your live app


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Presentation marks
* [Marking criteria]( 	
https://online.cdu.edu.au/bbcswebdav/pid-3139661-dt-content-rid-17399245_2/xid-17399245_2)


<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->
### Setup
* I will randomly generate an order at the start of class
* If you are unable to attend please contact me in advance
	* If you are not here for your turn you will get 0
* Setup the presentation on your laptop and plug it in to present
	* If you need an emulator please ensure it is setup
* This is a big class so make sure you a ready to go as soon as your name is called

