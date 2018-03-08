// Assumed as a continuation of the actions started in gulp/getting-started.js
// # CD to the root of your project
npm install gulp-sass --save-dev // tell npm to install gulp-sass package as development dependencies. 

//You can now find them in the "devDependencies" object of your package.json.

// Open your project/gulpfile.js

// # 1

	// Add under var gulp ...
	var sass = require('gulp-sass');
	// so that you have something like this
	----------------------------
	var gulp = require('gulp');
	var sass = require('gulp-sass');
	----------------------------
// # 2

// Add gulp.task ... TBD

// # 3
// Add code to generate sourcemaps
npm install gulp-sourcemaps --save-dev

	// add this line to  your gulpfile.js  after gulp and sass 
	var sourcemaps = require('gulp-sourcemaps');

// # 4
// Install Autoprefixer
npm install gulp-autoprefixer --save-dev

	// add this to the variable declaration block in gulpfile.js
	var autoprefixer = require('gulp-autoprefixer');
	// and add it to the task
	.pipe(autoprefixer())

// #5 
// SassDoc
npm install sassdoc --save-dev

	// add the variable
	var sassdoc = require('sassdoc');

	// add the task
