//
------------------------------
File ownership:
	files are owned by 
	- the owner of the current process // the web-server user, i.e. the user under which the web server is running. Some SHP (shared hosting platforms) consider this a security risk.
	- the FTP account that originally uploaded them
		= fill in the conn. creds for that FTP account // connection credentials

------------------------------


# backup the website(s)




Update: automatic
-----------------
	- Dashboard > Updates > Update WordPress > Update Now

Update: manual
==============
	- Step 1: Replace WP files
	--------------------------	
		= Get the latest WP zip
		= Get the latest WordPress zip (or tar.gz) file.
		= Unpack the zip file that you downloaded.
		= Deactivate plugins.
		= Delete some directories from your web-host
			- wp-includes
			- wp-admin 
		= Replace all the old WordPress files `with` the new ones in the root directory
			- index.php
			- wp-login.php 
			- etc // Don't worry - your wp-config.php will be safe.

		= Upload the new directories to your web-host (in place of the previously deleted directories)
			- wp-includes
			- wp-admin 
		= Upload the individual files 
			- wp-content // holds themes and plugins
				- from the new one to your existing one // overwriting existing files. 
				- delete files and folders that are overwritten by the new files 
				- Upload all new loose files from the root directory of the new version to your existing wordpress root directory.
				- Be careful when you come to copying the wp-content directory. You should make sure that you only copy the files from inside this directory, rather than replacing your entire wp-content directory. 
		= Take a look at the wp-config-sample.php file
			- to see `if` any new settings have been introduced that you might want to add to your own wp-config.php.

	- Step 2: Update your installation
	----------------------------------
		- Go to /wp-admin. 
			- You may be asked to login again. 
			- If a database upgrade is necessary at this point, WordPress will detect it and give you a link to a URL like http://example.com/wordpress/wp-admin/upgrade.php. 
			- Follow that link and follow the instructions. This will update your database to be compatible w. the latest code. You should do this as soon as possible after step 1.
			- Reactivate plugins!

	- Step 3: Do something nice for yourself
	---------------------------------------
		Do you have caching enabled?
			Yes? Clear the cache at this point.
				if you do, the changes will go live immediately. 
				if you dont, visitors to your site (including you) will continue to see the old version (until the cache updates).

	Finale
	--------
		Your WordPress installation is successfully updated. 
		That is as simple as we can make it without Updating WordPress Using Subversion.


	Final Steps
	--------
		- go in and enable your Plugins again. 
		- Have issues w/ logging in?
			- Try clearing cookies in your browser.

Troubleshooting
================
	Anything has gone wrong?
		- Go through all the steps in our extended upgrade instructions. That page also has information about some of the most common problems we see.

	Ran into a request for FTP credentials w/ trying to update WP on a IIS server automatically? 
		- it may well be a matter of rights. 
			- Go into the IIS Management Console, 
			- and there to the application pool of your blog. 
			- In its advanced settings, change the Process Model Id into LocalSystem. 
			- Then on Sites, choose your blog, right click, click on Edit permissions and on security tab add authenticated users. That should do it.

	- Experience problems after the upgrade? 
		- you can always restore your backup and replace the files with ones from your previous version from the release archive.

