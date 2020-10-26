<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-intro.ogg" -->

# HIT238 The mobile paradigm

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-overview.ogg" -->

## Unit Overview

- 3 hour lecture/tutorial every friday
  - Internal students are expected to attend
  - External students should <a href="mailto:matthew.elvey@cdu.edu.au">email me</a> after catching up
- 1 hour online session after lecture
  - Internal students are expected to attend
  - External students are encouraged to attend if possible

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/expected-knowledge.ogg" -->

## Expected knowledge

- You will need to already know basic HTML, CSS and Javascript
- You should be familiar with Git
- You should know design steps from HIT226 (testing, personas, etc...)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-assignments.ogg" -->

## Assignments

You will each develop your own application over the unit.

- 2 assignments
  - Assignment 1 - The Design Phase. 20%
  - Assignment 2 - The Development Phase. 30%

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/unit-assignments-agile.ogg" -->

### Agile development

The assignments are structured around an agile model.

- 3 sprints in each assignment
- Sprints are 2 weeks each except for the final sprint of assignment 2
- You must submit your work at the end of each sprint
- Assignments are individual although some work will require a partner to complete

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/recap-questions.ogg" -->

## Web Development Recap

- What can you remember?
- Grab a sheet of paper and see if you can answer these questions
- Save your answers, you will need them when you make a website later

Note:
How well do you remember web technologies like HTML, CSS, Javascript, etc...
Over the next few slides are some questions, have a go at answering them to the best of your knowledge. Make sure you write your answers down as you'll need them when you make a website later. Don't worry if you get stuck, it's ok to look them up if you need a refresher.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- What is semantic HTML?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- How do you import a stylesheet in to a HTML document?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- How do you import javascript in to a HTML document

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- What meta tag can you use to fix the mobile screen width?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- How do you apply CSS only to certain screen sizes?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- What does mobile first mean when writing CSS?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- How does a browser decide the order to apply CSS?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- Name three javascript best practices.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- How do you run a javascript function when a button is pressed?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- What is the difference between == and === in javascript?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-applications.ogg" -->

## Mobile Applications

What do you think of when you think mobile apps?

What makes them "mobile"?

Note:
Spend 5 minutes thinking about what you think a mobile app is
How are they different from a website? How are they different from desktop apps?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-applications2.ogg" -->

### What is a mobile app?

- Can be accessed anywhere
- optimised for mobile devices
  - small screen
  - smaller attention span
  - may access sensors

Note:
A mobile app has some fundamental differences to a traditional application.
The biggest differences are largely in the context of use and the types of devices they run on. The devices might mean smaller screens and access to sensors like GPS, cameras, etc... The context of use might mean that people are in different locations when they use them and their attention might be divided between different tasks when they use them. If i'm sitting in the passenger seat of car trying to navigate, I really need my application to be mobile but it means I am also trying to talk to a driver who is frustrated when they don't know where to go. Or I might be watching plumbing videos but not paying full attention because I'm getting sprayed with water from a leaky tap.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/types-of-apps.ogg" -->

## Types of mobile applications

- Web applications
- Hybrid applications
- Cross-platform applications
- Native applications

Note:
There are different types of mobile applications depending on how they are developed. They fall into 3 or 4 broad categories depending on how they are developed. We'll look at each of these one by one.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/web-applications.ogg" -->

## Web Applications

- What is a web application?
- More than a web site
  - Interactive
  - It _does_ something (doesn't just _tell you_ something)

Note:
A web application is not the same as a web site. For example you go to the CDU homepage to get some information, while you can interact with applications like twitter or facebook.
The big difference between a web site like CDU and an application like facebook is interactivity. Facebook will respond to your actions while the CDU homepage will show the same information no matter what you do. The line between a web side and a web application is not always clear, but as we are looking at applications we will be focusing in interactivity.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-web-applications1.ogg" -->

### Mobile web applications

- Can you name some web applications?
- Can you name some mobile web applications

Note:
Spend 5 minutes to see if you can think of some web applications that you use. Are they also mobile applications?

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/mobile-web-applications2.ogg" -->

### Mobile web applications

- Until a few years ago it was difficult to make web applications work offline
- Many organisations prefer users to install their app
- Google docs and facebook messenger push users to install their app on mobile

Note:
While both Google and Apple originally imagined their mobile systems using web applications, for a long time many people did not consider them as competitive alternatives to applications installed on the mobile platform. Many organisations still feel it is important that their app is installed in order to get exposure. Incidentally, [research found in 2015 that users spend most of their time in only a couple of apps](https://techcrunch.com/2015/06/22/consumers-spend-85-of-time-on-smartphones-in-apps-but-only-5-apps-see-heavy-use/) so just having an "app" doesn't mean it will get used.
More recently service workers and PWA manifests have allowed web applications to work more like native apps with installable menus and offline functionality bridging the gap between web and native. It is now even possible to install progressive web applications through the Google Play Store

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/web-app-advantages.ogg" -->

### Why make mobile web applications

- Knowledge of web technologies is enough to build an app
- No installation required
- Easy to update
- Quick to prototype
- Typically cheaper to develop
- no app store registration or review

Note:
Mobile web applications are very popular. This is because they can be build with the same tools as for existing web platforms and work on all devices with a web browser. As a result they are much cheaper to develop since the skills are more common and there is not need to build a separate app for each platform. They also do not need to be installed to run which means they automatically update so everyone is running the same version of the app which makes it very easy to prototype or try an idea out quickly. Further nobody controls a web application marketplace so there is no registration or review process required to publish a web application.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/web-app-disadvantages.ogg" -->

### Disadvantages of mobile web applications

- Not as fast as native code
- Less access to device sensors
- Different browsers may provide different experiences
- No app store?

Note:
While web application performance has improved significantly in recent years they do not have access to the hardware optimisations that native applications do and as a result as not as performant. This is changing all the time but for the time being it is very difficult to compete with native performance.
Due to privacy and security concerns web applications do not have the same access to sensors as native applications. A web application has limited access to the filesystem and your location for good reasons. An improved permissions systems and emerging APIs are closing this gap but installed applications still have greater access to device sensors and hardware.
With Microsoft Edge moving to the Chromium engine there are now three major browser engines and a huge range of different browsers. As a result a single web application may appear slightly different in different browsers. This is the trade-off for the portability that web applications provide.
There is still a perception that it is important to have an application in the app stores. With the huge number of low quality applications in the stores now I do not believe there is much more exposure or prestige in having an app appear in the store. Further, Google now allow progressive web apps into the play store. In the past I have spent quite a lot of time convincing clients that this is not a reason to make an app.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/i-love-webapps.ogg" -->

### I &#x2764; web apps

- How many apps do you have that you needed for one task and never needed again?
- How many apps require a 40Mb download to do something trivial?

Note:
You've picked up a guitar and need to tune it. Install an app?
https://github.com/jbergknoff/guitar-tuner
You want to quickly convert pounds in an American recipe to grams. Do you need to install an app?
A native application seems excessive for these tasks. Installing apps that you use very rarely (or even just once) takes time and space on your phone and are better suited to web applications.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/pwas.ogg" -->

## Progressive Web Apps (PWAs)

- Reliable - work offline
- Fast - No jank
- Engaging - Feel like a native application

https://developers.google.com/web/progressive-web-apps/

Note:
Progressive web applications (PWAs) have been around for a while now and don't appear to be going anywhere
Google defines them as reliable, fast and engaging.
They should work offline and feel fast and responsive like a native application

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/googlelovespwas.ogg" -->

### Google &#x2764; web apps

- Read one of the following articles
  - https://developers.google.com/web/showcase/2017/twitter
  - https://developers.google.com/web/showcase/2017/olx
  - https://developers.google.com/web/showcase/2016/flipkart

Note:
Google have been promoting PWAs as an alternative to native applications.
Scan the provided articles to see some of the advantages some users have found with PWAs.
It is interesting to note that two of the applications come from India where network connections are heavily utilised and have historically suffered from congestion problems.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Some clever mobile web apps

- Get our your phones and try out some mobile web apps
- https://pwa.rocks/

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## Hybrid Apps

![Hybrid Car](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/VW_Jetta_Hybrid_WAS_2012_0714.JPG/640px-VW_Jetta_Hybrid_WAS_2012_0714.JPG)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/what-are-hybrid-apps.ogg" -->

### What are hybrid apps?

- Typically a thin &quot;app&quot; wrapper around a web app
- Builds like a web app
- Installs like a native app
- Use a web view to display the web app

Note:
A hybrid application is a web application that has been bundled into an installable mobile package. They use a web view to display the web application as if it was a native app.
Think of it as a thin native wrapper around a web application.
This means that you can use the same tools as you use when building a web application but users install it like a native application.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/what-is-webview.ogg" -->

### Using a web view

- Wraps the web application in an native application wrapper that displays the apps

Note:
A web view is a browser window provided by the mobile platform that can render web pages.
They are similar to the default browser provided by the OS but may have some limitations.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/hybrid-advantages.ogg" -->

### Advantages

- Put your app in the app stores
- Easy to develop with existing web technologies
- Single code base works on multiple platforms
- Better access to sensor and other devices features

Note:
Much like progressive web applications, Hybrid apps allow you to use common web technologies to develop an app and can target multiple platforms with a single code base. They also provide better hardware access than a web application and allow you to submit your application to all common application stores.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/hybrid-advantages.ogg" -->

### Disadvantages

- Can be slower
- Installs like a native app but may not feel native
- Cannot access all native functionality
- Users may be out of date if they have to update through the app store

Note:
Because they use a web-view, they have performance like a web application and can be slower than a native app. They also do you have access to native UI components so often do not look or feel like a native app. There are many plugins to provide access to native functionality but you are limited to what the plugins provide, unless you want to write your own native plugins. Finally, because the app-store does always automatically update, some users may be using an older version.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg"data-audio-src="audio/hybrid-today.ogg" -->

### Hybrid web applications today

- Very popular in the past
- Less popular today
- Largely replaced by PWAs and Cross-Platform apps

Note:
Hybrid web applications have been historically popular because they worked offline, provided more access to the hardware than a web application could and could be installed in the app store. They were also simpler to develop than native applications because they use common web technologies and a single code base could target multiple platforms.
Hybrid frameworks like Cordova and Ionic still see some popularity but these days progressive web applications have got much better offline functionality and hardware access which makes hybrid apps less appealing. Further, cross-platform application frameworks like React Native and Flutter have made cross-platform applications easier and more powerful which have taken the place of hybrid applications.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/hybrid-in-class.ogg" -->

### Do you want to learn hybrid apps

- I am currently reviewing the role hybrid apps play in this unit
- Their role has been largely replaced by Progressive Web Apps
- They are an easier step from PWAs to the native build tools
- Please let me know your thoughts

Note:
Previously we have covered both hybrid applications with Cordova and cross-platform applications with React Native. I have however received some feedback that we moved too quickly so I am considering dropping one of these. Students have found hybrid applications an easy stepping stone from progressive web applications, but the skills are not in much demand in the workplace these days. I'd like to know what you want to study.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## Cross platform apps

![Apple Android](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Android_made_out_of_an_Apple.jpg/618px-Android_made_out_of_an_Apple.jpg) <!-- .element class="centre" -->

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/what-are-cross-platform.ogg" -->

### What are cross platform apps

- Write app in one language but compile to native code
- Some platforms like Appcellerator and React Native use web platforms
- Other platforms like Unity and Xamarin use different languages

Note:
A cross-platform application is written in a non-native language which a framework compiles into native components.
They can use a variety of languages including web languages.
Frameworks using web languages like Appcellerator have been called hybrid apps in the past so the line between cross-platform and hybrid is not always clear.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

"We've tried in the past to just build web apps that we could wrap in thin native wrappers, but it doesn’t work. [...] Anytime somebody tries to reimplement a native widget using HTML, CSS and JavaScript it always feels like shit."

- Tom Occhino, React Native, Facebook

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/cross-platform-advantages.ogg" -->

### Advantages

- Target multiple platforms with a single code base
- Get performance benefits of native code
- Better access to sensors and device API
- Often a more native interface

Note:
Cross platforms apps allow you to write in a single language and build your code for multiple platforms. Because they build into native code you get many native-like performance increases. Alike hybrid applications, plugins or modules allow you to access the hardware which may give you more functionality than a progressive web application. They also use native UI components giving your applications a much more native look and feel.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/cross-platform-disadvantages.ogg" -->

### Disadvantages

- May not be as performant as native apps
- Hardware access is restricted to the framework or plugins
- Need to be installed and updated through the app store

Note:
Because your logic must be interpreted or converted to native code, it may not be as performant as a native application. You are also bound by the functionality that your platform provides which may not suit all your needs. It is often possible to write your own native plugins or components to increase your access but then you must manage native code for each platform you support. Users also need to install your application through the app store which can result in much larger download sizes than a web application.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Do you want to learn cross-platform applications

- We have previously touched on React Native at the end of this unit
- I am looking at only including hybrid apps _or_ cross-platform applications
- This is a bigger step than hybrid apps but has more real-world applications
- Let me know your thoughts

Note:
As I've previously mentioned, I am looking at reducing the amount of content in this unit to give you more time. React Native is a very popular cross-platform application framework and uses Javascript (with some special HTML-like extensions) and CSS-like stylesheets. This is a great tool to learn but does have a bit more of a learning curve than the Hybrid platform Cordova. Please let me know what your preference is.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-intro.ogg" -->

## Git, GitHub and GitHub Pages

- Hopefully everyone is familiar with GitHub
- You _must_ use GitHub for this course so we will spend some time getting up to speed
- You will also need to use GitHub Pages to host your content

Note:
You will have covered Git in HIT226. It is important you use Git for this unit. Your assignments should be submitted through the GitHub repository and we will look at your commit history when marking. Your first assignment will also need to be hosted on GitHub Pages.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-differences.ogg" -->

### What's the difference

- Git is a source control system
- Github is a public git repository (there are others)
- GitHub pages is a hosting platform like Spinetail
- They are connected but are not the same

Note:
There is often some confusion between Git, GitHub and GitHub Pages. Git is a system for managing your source code. GitHub is a public Git service, other public services include GitLab and BitBucket. GitHub Pages is a platform to host a web page... like what you have used Spinetail for in the past.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-concepts.ogg" -->

### Git

![Git](https://imgs.xkcd.com/comics/git.png)

[xkcd](https://imgs.xkcd.com/comics/git.png)

Note:
Git is often intimidating to learn. But don't worry, once you get your head around the basic concepts it's not too hard to use.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-overview.ogg" -->

## What is Git?

- Distributed
- Source Control
- Version Control

Note:
Git is a distributed, versioned, source control system.
It is distributed because it can synchronise many repositories together. You keep a local copy of the repository and synchronise it with a server copy. Other users can do the same allowing everyone to keep their code synchronised.
It is versioned because it tracks all your changes in commits. Each commit records what changed so you can go back and view any version of the application. You can also use tags and branches to flag major versions.
It is source control because it holds your source code

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-why.ogg" -->

### Why use git

- Share code
- Track changes
- Allow people to work together without breaking things

Note:
We use Git as a place to keep our source code. It has a number of advantages over keeping a folder of your code. Primarily, it is easy to share our code with other people and it can keep track of what we change so we can go back to an earlier version if we break something. Because it tracks the changes it is also really good to combining different people's work together so it makes it much easier to work together with other people. As a result, Git is used heavily in the workplace. I don't know any professional programmers that do not use Git.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-functions.ogg" -->

### Git functions

- Clone - Copy a repository to our local machine
- Add - Stage a file to commit
- Commit - Store a code change in git
- Push - send our code changes to the server
- Fetch - Get code from the server
- Merge - Mix new code in with ours or vice versa
- Rebase - Like merge but different

Note:
These are some common git functions. Don't worry, you don't need to learn them all now. You might also hear git pull. This is a shortcut command to fetch and merge

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-cli.ogg" -->

### Git command line

- Most sources recommend learning Git with the command prompt
- Available on [Windows](https://imgs.xkcd.com/comics/git.png), [macOS](https://imgs.xkcd.com/comics/git.png) and Linux
- [Lots of great resources available](https://learngitbranching.js.org/)

Note:
Most sources suggest learning Git from the command prompt. I am guessing most people here are probably not comfortable using the command prompt. That's OK, but I encourage all of you to spend some time getting comfortable with the linux/unix command prompt (also on MacOS and the Linux Subsystem for Windows) as it is used in almost every field of Computing. LearnGitBranching.js.org is an excellent resource to get familiar with the Git command prompt.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-gui.ogg" -->

### Sourcetree GUI client

- Lots of GUI clients available but not many with good instructions
- Install git and sourcetree following instructions from [https://www.atlassian.com/git/tutorials/install-git](https://www.atlassian.com/git/tutorials/install-git)
- GUI with sourcetree and command prompt with Git Bash
- You will need to create an atlassian account to use sourcetree

Note:
There are a lot of Git GUI clients about. Most online instructions use the command prompt but sourcetree is a simple GUI tool with excellent instructions that works on Windows, Mac and Linux. Most IDEs like Atom also have Git integration.

<!-- .slide: data-background-image="images/git-bg.jpg"data-audio-src="audio/git-clone.ogg"  -->

#### Clone a repository

[Sourcetree instructions to clone a repository](https://confluence.atlassian.com/sourcetreekb/clone-a-repository-into-sourcetree-780870050.html)

- Use method #1 to clone from github.
- Use HTTP unless you are already familiar with SSH
- You can also [connect your github account](https://confluence.atlassian.com/get-started-with-sourcetree/connect-your-bitbucket-or-github-account-847359096.html)

Note:
Sourcetree provide instructions to clone a remote repository. When using github you will need to copy the HTTP URL into the repository URL dialog. You should remember how to fetch the URL from HIT226.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-commit.ogg" -->

### Commit, Push and Pull

[Commit, fetch and pull a repository on sourcetree](https://confluence.atlassian.com/sourcetreekb/commit-push-and-pull-a-repository-on-sourcetree-785616067.html)

Note:
When you finish you'll need to commit to save your work and push to send them to the server. To do this you will need to save your changes in a "commit". Once your changes are committed you will then need to send them to the server by pushing them. Remember, I can't see any work that you haven't pushed.
Finally you can pull other changes from the server. A pull is the same as doing a fetch and a merge.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-activity1.ogg" -->

### Activity: Setup a git repository

- Register for github
- Create a new repository for HIT238 week 1 with a readme and gitignore file
- Clone the repository to your local machine
- edit README.md to add a description of the repository
- Commit and push your changes
- Push your changes and check they appear on the github website

Note:
If you do not already have a GitHub account, register one now. Then create a new repository for HIT239 week one. Be sure to initialize your repository with a README. Then open your Git client and clone the repository to your computer, edit the README.md file and create a new commit and push your changes back to the server. Once you've done this refresh the repository on the GitHub website to check that your changes appear.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-tips.ogg" -->

### Some tips

- Fetch from the server before you start writing
- Push whenever you finish writing
- A commit should be self-contained
  - If you are editing multiple files, include them all
  - Keep them small so it is easy to see what has changed
  - It is better to commit too much rather than not enough
  - Try not to break things

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/github-pages.ogg" -->

## GitHub Pages

- Free web hosting for your github projectS
- Used for lots of static websites (including these slides)

Note:
GitHub pages provides free web hosting for the files in your Git Repository. It is a great service that is used for lost of programming projects web pages. Even these slides are hosted on GitHub Pages. You will use GitHub pages to host your assignments.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/github-pages-activity.ogg" -->

### Activity: Setup GitHub pages on your repository

- Open your repository on the github website
- Go to settings and scroll down to GitHub Pages
- Ensure the branch is set to master
- Click select a theme
- Pick any theme
- Select commit
- Browse to [username].github.io/[repository name]
- [GitHub guide](https://guides.github.com/features/pages/)

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/github-pages-jekyll.ogg" -->

### Jekyll

- When you commit GitHub compiles your markdown files to html
- The theme is used to decide how to render them
- If you don't have an index.html or index.md README.md will create your index page
- It can take a short time to update your content

Note:
GitHub pages will show your index.html file by default. If you do not have an index.html file it will convert your markdown files to HTML using a platform called Jekyll. It can take a short time to update and is a useful tool.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-content-activity.ogg" -->

### Adding new content

- Modify your README.md to include some details about yourself
- Commit and reload your GitHub pages URL (this may take a moment)
- Now create an index.html file and create a more detailed personal profile
  - Commit your changes and see how they appear
  - The theme is only used to markdown content

Note:
Remember that your file needs to be called index.html and is case sensitive. Most web servers are case sensitive and so you need to use only lowercase characters in your index.html filename.

<!-- .slide: data-background-image="images/git-bg.jpg" data-audio-src="audio/git-content-activity2.ogg" -->

### Adding new content continued...

- Make your personal profile responsive and mobile first
- Add a page with your answers to the quiz earlier
- Share a link to your site on the discussion board

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" data-audio-src="audio/next-week.ogg" -->

### Get ready for next week

- Have a look at some mobile applications and think about what you would like to make
- Post three application ideas on the class discussion board
- If you have a genius idea don't keep it a secret
  - People don't buy an app because it is a great concept
  - People buy an app because it is great to use
