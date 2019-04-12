
WordPress installation
========================
	# Go to the [local|staging] WP installation

	# {domain}/wp-admin/ > My Sites > Network Admin > Dashboard
	# Duplicator Pro > "Create New" > 

	# Archive > Multisite >

		Overview:
		When you want to 
			a. move a full multisite network or 
			b. convert a subsite to a standalone site 
		just create a standard package 
		like you would with a single site. 
		Then browse to the installer and choose 
			-- either 'Restore entire multisite network' 
			-- or 'Convert subsite into a standalone site'. 

		These options will be present on Step 1 of the installer when restoring a Multisite package.


	# "Next" > "Scanning site" (scanning) > review the information

	// Is everything in order?

	# "Build" > "Building Package * 99%" (building, takes a few minutes) 

	// Is everything in order?

	# see "Download" > click > "Both files" > Source Location // Desktop/Outgoing/YYMMDD/
	# Observe the 2 files in the Source Location:
		the archive  (e.g. "20180709_mymultisite_349a009d(...)_archive.zip")
		the installer (installer.php)

Filezilla
===========
	# Open Filezilla 
	# point the panels to:
		- the Source Location (//Desktop/Outgoing/YYMMDD/)
		- the Remote Location (/var/www/html/)

	# Filezilla > Left panel > N:/igoryen/Backups directory > create YYMMDD/
	# Filezilla > Right panel > Remote Location (/var/www/html/)
	# IF the Target location is empty:

		# Transfer the 2 files 
		from the Source Location (//Desktop/Outgoing/YYMMDD/)
		to the Remote Location (/var/www/html/)

		BUT more precisely
		from the "source" location 
		to the "target" location


	//--------------------------------------

	# Transfer files and folders from the dir in the right panel to the dir in the left panel 
	// 2018-11-29: transferred ~ 21,100 files 
	// started:  13:21 
	// finished: 13:37

	# ??? empty out the /var/www/html/? 
		
		??? Are you putting new version there?
			Yes.
			??? on Linux
				// go on mRemoteNG to delete stubborn dirs via 
				// cd /var/www/html/
				// sudo rm -rf wp-*
			??? on Windows
				// rmdir /s wp-*
				// Source: https://stackoverflow.com/questions/22948189/batch-getting-the-directory-is-not-empty-on-rmdir-command

		??? Are you just copying whatever is there?

			No! You are not putting anything there yet.
			You are only making a copy of what is there.



	# Transfer the 2 files 
		from the Source Location (//Desktop/Outgoing/YYMMDD/)
		to the Remote Location (/var/www/html/)

		BUT more precisely
		from the "source" location 
		to the "target" location

Browser
========

	# Point the webbrowser on the [local|remote] server to the installer.php > Enter
		!!! The URL of the network i.e. the main website
		e.g. http://nas.test/installer.php


	# Step 1 of 4: Deployment 
		- Multisite
			- Convert subsite ["http://your.site"] into a standalone site
			- I have read and accept (...)

		> "Next" > "Extracting Archive Files"

	# Step 2 of 4: Install Database
		- Setup
			- Action: "Connect and Remove All Data"
			- Host: localhost
			- Database: // the name of the Multisite database used on Staging
			- User: // the name of the user of the Multisite database used on Staging
			- Password: // the password of the user of the Multisite database used on Staging

		> Test Database
			!Local DB creds are different from the Staging DB creds!

		> Next
			--------------------------------------
			Run installer /with these settings?
				Database Settings:
				Server:	localhost
				Name:	// nas db name you have just entered
				User:	// nas user name you've just entered
			--------------------------------------
			> OK 
			> (... installing the database)

	# Step 3 of 4: Update Data

		New Settings:

			URL: 	// example
			Path: 	/var/www/html/
			Title:  
		
		> "Next" > Processing Data Replacement

	# Step 4 of 4: Test Site

		- Site Login > Login using the password of the user of the Local(!!!) WP installation
		// Because what you have zippped is your LOCAL installation


WordPress Installation on Staging
==================================


	# My Sites > Network Admin > Dashboard > Plugins
		- Advanced Custom Fields > Network Activate
		- WPML Multilingual CMS > Network Activate

	# My Sites > NRS > Visit Site