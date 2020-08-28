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
* Clone your projects using the command line
* Make changes to your readme
* Commit and push the changes to the server



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
* Navigate to [Learn git branching](https://learngitbranching.js.org/)
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
## Notifications
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
## You know mobile web apps!!
* Now go and make cool stuff
* Spent the rest of the class working on the final tasks from the past few weeks
	* Camera app
	* Shopping list
* Work in pairs if you can
