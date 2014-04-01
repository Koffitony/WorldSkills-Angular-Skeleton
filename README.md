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
* angular-ui-router to allow nested views
	* example views and controllers (click on the competition navi item)
* angular-translate internationalization support integrated
	* includes angular-translate-loader-url, angular-translate-static-files and angular-translate-storage-local to allow you to load static JSON files for UI element translations and store current translation in local storage (cookie fallback)
* angular-animate
* jquery


Starting a new project
------------------------

	# Clone a shallow copy of the repository (no history)
	$ git clone --depth=1 git@github.com:worldskills/WorldSkills-Angular-Skeleton.git
	$ cd WorldSkills-Angular-Skeleton

	# remove existing git data
	$ rm -rf .git
	
	# initialize git for a new project
	$ git init
	
	$ npm update
	# see bower.json and update version numbers (latest stable for angular libs)
	$ bower update
	
	# start the project
	$ grunt serve
	
	# to build for distribution
	$grunt build
	


Yeoman
--------
See yeoman instructions on how to create new controllers, views, directives etc.

[Yeoman on github](]https://github.com/yeoman/generator-angular)


** Important ** 

When using the generator always use the --minsafe option, this is critical for *** grunt build ***  to be able to minimize the javascript properly.
