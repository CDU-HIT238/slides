<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

# HIT238 The mobile paradigm

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## Using the git command line

- Every git GUI client is different
- Git has a consistent UI on every system
- Most instructions use the command prompt
- Open your terminals or Git Bash command prompts and follow along

Note:
So far we have used GUI git tools. Unfortunately the different platforms people use can be quite different. However everyone has access to the git command prompt. You're still welcome to use your git tools but it is good to have some exposure to the command prompt.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### The terminal

- don't worry, it's not as scary as it looks

Note:
When we think of command prompts we often think about super nerd hackers from the movies with walls of scrolling green text. Don't worry, it's much easier than that. With just a few basic commands you can unlock the power of git.

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
In the windows Git GUI we learned, you had to fetch and then merge. The command line has an easy shortcut. Git pull will fetch changes from the server and merge them in to your current branch.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Commit changes

```
git add ./path/to/changes
git commit -m "comment comment"
```

Note:
Just like from the GUI, you need to stage changed files before committing them. You stage files with the git add command and provide the path to the files you want to stage. You then commit staged files with the git commit command. We use the m flag to provide a commit comment which is important to see what's changed.

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

- Try and complete the first level of [learn git branching](https://learngitbranching.js.org/)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Challenge

Can you make the next commit in your project using the command prompt

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## Git Branches

- Save your work without affecting other code on the server

Note:
Git branches provide us way a way to keep working code isolated from the main code base. We usually do this to avoid breaking things while we are working.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### What is a branch

- A chain of commits
- Can have many branches
  - master branch is created automatically
- Can merge with other branches

Note:
If you think of your repository as a chain, with each commit linked to the commit before and after it, a branch is like a separate chain. It's called a branch because it branches off from another commit.

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

- Instead of calling set-upstream you can push with -u and tell it where to go

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

- Copy the changes from one branch to another
  - Checkout your target branch
  - Merge from the source branch

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

- Return to [Learn git branching](https://learngitbranching.js.org/)
- See how far you can get in 15 minutes

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Don't use folders to isolate changes

- I often see people copy their whole project folder to work on something new
  - This is hard to keep track off
  - This is hard to integrate with a different copy of the folder

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Use branches to isolate changes

- If you start work on something and don't want to keep it you still have the original branch
- If you want to resume working on it later it is easy to update with latest changes
- Great for avoiding conflicts in teams
- Used heavily in the workplace

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Best practices

Instead of merging into master your should raise a pull request

- Navigate to your GitHub repository
- Click the Pull Requests tab
- Click New pull request
- Select master in the base dropdown
- Select your branch in the compare dropdown
- Click create pull request

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## Cross Platform Apps

- Write a single code base
- Compiles into multiple native platforms

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Advantages of Cross Platform

- Faster than web and hybrid apps
- Supports multiple platforms with a single codebase
- UI is consistent with native apps

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Disadvances of Cross Platform

- Limited _native_ components
- May need to mix with native code
- Unique platforms - tied to a vendor

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Major Cross Platform Environments

- Flutter
- Xamarin
- React Native
- Unity
- Adobe Air
- many many more

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### React Native

- Developed by Facebook
  - Based on ReactJS
- Native UI implementation
- Logic is executed with javascript
- Development is very similar to ReactJS

Note:
Unlike hybrid apps, react native is closer to a native app than a web app. React Native has a native implementation of the DOM which renders to native components. Unlike web apps, the UI runs in an independent process. A separate process runs the logic on a javascript engine. React Native handles communication between these two processes. This can give native-like performance.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### React Native popularity

- React native is enormously popular
  - React is in the top 5 most starred repositories on GitHub
  - React native is in the top 25
  - [React popularity is still increasing](https://2019.stateofjs.com/front-end-frameworks/react/)
- [Many large apps are build in ReactNative](https://reactnative.dev/showcase)
- Lots of job listings for React and React Native

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Expo

- A platform to build react native apps
- Much easier to setup than Android SDK
- Provides some great libraries to help development
- You can develop React Native apps without it and use the Android SDK directly
  - But we won't because expo is easier to setup

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Setup Expo

```
npm install -g expo-cli
expo init MyProject
```

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### The state of things

- A couple of years ago Airbnb and Udacity stopped using React Native
  - Udacity wrote up [a retrospective](https://engineering.udacity.com/react-native-a-retrospective-from-the-mobile-engineering-team-at-udacity-89975d6a8102) on their experience
  - Airbnb wrote a [five part blog on their experience](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c)
  - They have different reasons but both found they were spending too much time on native development

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Some lessons

- If your app is very complex, you need a native app
- If you have a huge development budget, a native app is better
- If not, Hybrid Apps are a good solution

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Activity: Create a React Native Project

- Follow the guide at [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)
- Connect your phone to wifi, install Expo and test your app
- Start your Android emulator and run `npm run android`
- You may need to allow access in your firewall

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## New Javascript

- ES6
- JSX

Note: React Native uses some new javascript features and some non-standard javascript extensions. You've used some ES6 javascript in class, especially when we discussed build tools and using babel and browserify to add new features. We'll go into them in a bit more detail now.

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## ECMAScript6 (ES6)

- Version 6 of ECMAScript (JavaScript) released in 2015
- [Lots of new features](http://www.reactnativeexpress.com/es6)
- Backwards compatible with ES5
- Used in React Native Development
- [Supported by modern broswers](https://caniuse.com/#feat=es6)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Imports

- Same principle as browserify
- Write reusable module
- Import them when required
- We'll use ES6 style imports (different to node style)
- MDN Provides resources on [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

- Export object you want to export

```
export default data;
```

- Import
  - External modules (from NPM) have no path
  - Local modules must use a relative path

```
import React from 'react';
import data from './data';
```

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Named Import/Exports

- You can export multiple objects from a module

```
export {someData, otherData};
```

- You import by specifying the name

```
import {someData} from './data';
```

- Your modules should _always_ include a default export

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## JSX

- Facebook introduced JSX for React
- Syntax extension to JavaScript
- Looks like HTML or a template language
- Used to represent view structure
- More details are available from [Facebook](https://reactjs.org/docs/introducing-jsx.html)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

```jsx
const text = "Welcome to HIT238";
const heading = <Text>{text}</Text>;
```

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## Components

- React uses modular components
  - Reusable modules
  - Contains both view structure and logic
  - Get rendered to react elements
  - Is updated whenever anything changes
- ReactJS has a [good overview](https://reactjs.org/docs/components-and-props.html)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

```jsx
export default function Heading(props){
  render() {
    return <Text>{props.text}</Text>;
  }
}
```

```jsx
import Heading from "./Heading";
const heading = <Heading text="Welcome to HIT238" />;
```

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### React Native Components

- Base components come from native code
- A number of [built-in components](https://facebook.github.io/react-native/docs/components-and-apis.html)
- Many [different](https://nativebase.io/) [community-developed components](http://www.awesome-react-native.com/)
- When in doubt, search [npm](https://www.npmjs.com/search?q=react-native&page=1&ranking=optimal)

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Basic Components

- View - Basic UI component. Like a div
- Text - Display text. Like a p, h1, h2, etc...
- Image - Display an image. Like img
- TextInput - Text input field. Like textarea or input
- ScrollView - Scrollable area. Like a div with overflow set to scroll
- StyleSheet - Holds styling. Like a CSS stylesheet

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

## Render Function

- Each component should return (or define) a render function
- Called when React _renders_ a component
  - When a component is first drawn
  - When props change
  - When state changes
- Returns a react element

<!-- .slide: data-background-image="../images/bg-smartphone.jpg" -->

### Activity

- Modify your app to display some basic information about yourself
- Open App.js to edit your app
- Run `npm start` to start the expo service
