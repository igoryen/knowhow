<?php 
// https://jonathanbossenger.com/building-your-own-divi-builder-modules/

= Create a php file for your new module

	wp-content/themes/{your-divi-child-theme}/
		functions.php
		custom-pb-image-module.php <---<< this one

= include the module file in the functions.php
	
	typically added at the top of the functions.php

		/* include custom image module file*/ 
		include( get_stylesheet_directory() . '/custom-pb-image-module.php' );
		-- The get_stylesheet_directory() function 
			will return the path to the child theme folder.

= prepare your custom module file
	
	function ex_divi_child_theme_setup() {

		if ( class_exists('ET_Builder_Module')) {

		// this is where your new module class will go

		}

	}
	add_action('et_builder_ready', 'ex_divi_child_theme_setup');

	What does this do:
	- Adds a hook to the et_builder_ready action, to call the ex_divi_child_theme_setup function.
	- The ex_divi_child_theme_setup function then checks if the Builder Module class exists and if true, runs the new module class.

= 
// stopped because suspected that this is the wrong course of action