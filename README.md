# Overview
The application is a simple version of the hangman game, written in angular2 and using angular CLI.

##Prerequisites
Install Node.js and npm if they are not already on your machine.

Install Angular CLI:

`
$npm install -g angular-cli
`

Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

##Install
`$ npm install`

The typings folder could not show up after npm install. If so, please install them manually.

`
$ npm run typings install
`

**Note:** you should run the application as administrator. Otherwise you will be welcome with the following message: 
'Running without elevated rights. Running Ember CLI "as Administrator" increases performance significantly.'

##Run

To build the application you can execute:

`
$ ng build
`

To run the application with also Livereload:

`
$ ng server 
`
or simply: 
`
$ npm start 
`

This command will also build the code and move it to the "dist" folder.

Angular CLI documentation [can be found here.] (https://angular.io/docs/ts/latest/quickstart.html)
