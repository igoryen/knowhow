Source: http://snapcreek.com/blog/wordpress/techniques/how-to-roll-back-wordpress-site-duplicator-pro/

How to replace/overwrite an existing WP website

# Create a directory on your host and copy the existing site files to the directory.

# Install an HTML Maintenance Page 
	download  an HTML maintenance page and name it ‘index.html’ so anyone who hits your site will be know it’s under maintenance.

# Remove All Files and Sub-directories
	
	if deleting doesn't affect dirs, do:
	sudo rm -rf wp-*

	Remove all files and sub-directories related to WordPress in the website directory. 
	If the directory you used to backup the site is in this directory structure 
	do not remove that directory.

	Important: 
	Any non-WordPress files and directories should not be deleted.

		Q: What are the non-WordPress files?
		A: 

# Create a New Database & User (Optional)
	see installation2.js > Step 2

# Transfer the newly created archive and installer.php to the target server

# Browse to the installer.php and Install

	Follow the instructions in "030-how-to-migrate.js"

# Remove the Maintenance Page and You’re Done

# IF IN ERROR

	- delete all files from the directory
	- copy the files that were backed up in step 1 
	- determine how to resolve the problem.


---------------
If permalinks are HTTP but the target server uses HTTPS:
https://www.e2enetworks.com/help/knowledge-base/how-to-enable-mod_rewrite-on-apache-on-centos/