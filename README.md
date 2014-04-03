WorldSkills Angular App Skeleton
==================================

This application skeleton is to be used when creating WS Applications.

It contains a good base for a project and includes many useful components helping you to kickstart your application.



Features
-----------


* Yeoman base
* Angular 1.2.15
	* Including angular-resource, angular-cookies, angular-sanitize
* WorldSkills Bootstrap and App templates already integrated
* [angular-ui-router](https://github.com/angular-ui/ui-router) to allow nested views
	* example views and controllers (click on the competition navi item)
* [angular-translate](https://github.com/angular-translate/angular-translate) internationalization support integrated
	* includes angular-translate-loader-url, angular-translate-static-files and angular-translate-storage-local to allow you to load static JSON files for UI element translations and store current translation in local storage (cookie fallback)
* [angular-animate](http://code.angularjs.org/1.2.15/docs/guide/animations)
* jquery
* [angular ui-bootstrap](http://angular-ui.github.io/bootstrap)


Starting a new project
------------------------

	# Clone a shallow copy of the repository (no history)
	$ git clone --depth 1 git@github.com:worldskills/WorldSkills-Angular-Skeleton.git my_application
	$ cd WorldSkills-Angular-Skeleton

	# remove existing git data
	$ rm -rf .git
	
	# initialize git for a new project
	$ git init
	
	$ npm install
	# see bower.json and update version numbers (latest stable for angular libs)
	$ bower update
	
	# start the project
	$ grunt serve
	
	# to build for distribution
	$ grunt build


It is recommended also to rename your application, at the moment it is called 'worldSkillsAppApp'

	angular.module('worldSkillsAppApp')

It is safe to use global search & replace to rename. There should be 18 references accross the project. 	
	
	

Routing your application
--------------------------

Routing is done with [angular-ui-router](https://github.com/angular-ui/ui-router)
Routing configuration can be found from **app.js**

* [API Docs](http://angular-ui.github.io/ui-router/site/#/api/ui.router)
	


Yeoman
--------
See yeoman instructions on how to create new controllers, views, directives etc.

[Yeoman on github](]https://github.com/yeoman/generator-angular)


**Important**

When using the generator always use the --minsafe option, this is critical for **grunt build***  to be able to minimize the javascript properly.
