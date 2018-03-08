// https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

# Check for Node and npm

	Make sure that you`ve installed Node and npm before attempting to install gulp.

	node --version
	npm --version

	if you don`t have node installed, installed it (npm will be installed automatically)
		https://nodejs.org/en/

# Check for gulp
	
	gulp -v
	
	If you don`t have it, install the gulp CLI globally
	
	npm install --global gulp-cli

	to re-install gulp:

		npm uninstall -g gulp
		npm install --global gulp-cli

# Create a package.json in your project directory
	
	Do you have a package.json?
	If you don`t , create one. 

	If you need help, run an "npm init". 
	It will walk you through giving it a name, version, description, etc.

	"name" > Enter
	"version" > Enter
	"description" > A string that helps people discover your package, as it`s listed in npm search.
	"entry point" > Enter
	...



# Install gulp in your "devDependencies"

	Run this command in your project directory:

	npm install --save-dev gulp@next

# Create a "gulpfile"

	In your project directory, create a file named "gulpfile.js" in your project root with these contents:

	----------------------------------------------
	var gulp = require('gulp');

	gulp.task('default', defaultTask);

	function defaultTask(done) {
	  // place code for your default task here
	  done();
	}
	----------------------------------------------


# Test it out

	Run the "gulp" command in your project directory:

	gulp

	If you get this

		'gulp' is not recognized as an internal or external command, operable program or batch file.

	re-install Node and try again.



	To run multiple tasks, you can use gulp <task> <othertask>.

# Result
	Voila! The default task will run and do nothing.

	Using gulpfile ~/my-project/gulpfile.js
	[11:15:51] Starting 'default'...
	[11:15:51] Finished 'default' after 103 μs

