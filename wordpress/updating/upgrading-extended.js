// https://codex.wordpress.org/Upgrading_WordPress_Extended#Upgrading_Across_Multiple_Versions
Detailed Instructions
=====================
Overview of the Upgrade Process
--------------------------------
	Step 1 - Backup your DB
	----------------------- 
		// https://codex.wordpress.org/Backing_Up_Your_Database
		This concerns all of your WordPress data:
			- Users
			- Posts
			- Pages
			- Links
			- Categories
		
		Using phpMyAdmin
		~~~~~~~~~~~~~~~~

			Quick DB backup process
			----------------------
				When you backup all tables in the WordPress database without compression, you can use simple method. 
				To restore this backup, your new database should not have any tables.

				- Log into phpMyAdmin on your server
				- From left side window, select your WordPress database. In this example, the name of database is "wp".
				- The right side window will show you all the tables inside your WordPress database.
				- Click the 'Export' tab on the top set of tabs.
				- Ensure that the Quick option is selected, and click 'Go' and you should be prompted for a file to download. Save the file to your computer. 
					+ Depending on the database size, this may take a few moments.

			Custom DB backup process
			---------------------
				If you want to change default behavior, select Custom backup.

				- In above Step 4, select Custom option. Detail options are displayed.

				- The Table section
					+ All the tables in the database are selected.
						- If you have other programs that use the database, then choose only those tables that correspond to your WordPress install. They will be the ones w/ that start w/ "wp_" or whatever 'table_prefix' you specified in your 'wp-config.php' file.
						- If you only have your WordPress blog installed, leave it as is (or click 'Select All' if you changed the selection)
				- The Output section
					- Select 'zipped' or 'gzipped' from Compression box to compress the data.
				- The Format section
					- Ensure that the SQL is selected. 
						// Unlike CSV or other data formats, this option exports a sequence of SQL commands.

				- The Format-specific options section
					+ Leave options as they are.


				- The Object creation options section
					+ Select "Add DROP TABLE / VIEW / PROCEDURE / FUNCTION / EVENT / TRIGGER" statement. 
					// Before table creation on target database, it will call DROP statement to delete the old existing table if exist.


				- The Data creation options section
					+ Leave options as they are.


				- Now click 'Go' at the bottom of window and you should be prompted for a file to download. 
					Save the file to your computer.
					Depending on the database size, this may take a few moments.
			Remember
			-------- 
				you have NOT backed up the files and folders - such as images - but all your posts and comments are now safe.
		



	Step 2 - Backup ALL your WordPress files in your WordPress directory. 
	---------------------------------------------------------------------
		+ Do not forget your ".htaccess" file.

		Typically, this process involves using an FTP program to download ALL your WordPress files from your host to your local computer. 

			------------
			There are two parts to backing up your WordPress site: 
				- Database
				- Files
				You need to back up 
				- the entire site
				- your WordPress database. 

			Your WordPress site consists of the following:

				1) WordPress Core Installation
				2) WordPress Plugins
				3) WordPress Themes
				4) Images and Files
				5) JavaScript and PHP scripts, and other code files
				6) Additional Files and Static Web Pages
				
				All of these are used in various combinations to generate your website. 

			The database contains your posts and a lot of data generated on your site, but it does not include the above elements that all come together to create the look and information on your site. These need to be saved.

			Most hosts back up the entire server, including your site, but it takes time to request a copy of your site from their backups, and a speedy recovery is critical. You need to learn how to back up your own site files and restore them.

			Here are some methods to backup your site files:

				# Website Host Provided Backup Software 
					- Most website hosts provide software to back up your site. Check w/ your host to find out what services and programs they provide.
				# Create Sync With Your Site 
					- WinSCP and other programs allow you to sync w/ your website to keep a mirror copy of the content on your server and hard drive updated. It saves time and makes sure you have the latest files in both places.
				# Copy Your Files to Your Desktop 
					- Using FTP Clients or UNIX Shell Skills you can copy the files to a folder on your computer. Once there, you can zip or compress them into a zip file to save space, allowing you to keep several versions.
			Remember
			========
			keep at least three backups on file, just in case one is corrupted or lost, and store them in different places and on different mediums, like CD, DVD, different hard drives, etc.
			
			---------------

		If you have made changes to any core WordPress files, or /if you\ve got customized Plugins or Themes, you will want to have a good backup of those files. It is extremely important to back up your files before beginning the upgrade. If for some reason you find it necessary to revert back to the /old version of WordPress you will need to upload these files.


	Step 1-2 - Steps 1 & 2 are combined in the Duplicator Pro

	Step 3 - Verify the backups you created are there and usable. This is essential.
	-------------------------------------------------------------------------------	
		Verify that the backups you created are there and usable. 
		This is the most important step in the upgrade process! 
		The verification process involves
			- making sure you can see the backup files on your local computer (or wherever you have stored them) and 
			- that you can navigate into any sub-folders. 
			If the files are in a zip file, 
				- make sure you can open the zip file. 
			Also 
			----
			consider opening a .sql file in an editor to see /if the tables and data are represented.

	Step 4 - Deactivate ALL your Plugins.
	--------------------------------------	
		Because of the changes to WordPress, some Plugins may conflict /with the upgrade process. 
		If you\re not able to access the administrative menus you can deactivate all plugins by resetting the plugins folder.
		Administration Screen > Plugins > deactivate any Plugins. 

	
	Step 5 - Ensure first four steps are completed. 
	-----------------------------------------------
		+ Do not attempt the upgrade unless you have completed the first four steps.
		If you have not completed the first four procedures, STOP, and /do them! 
		Do not attempt the upgrade unless you have completed the first four steps.
		
		The best resource /for problems /with your upgrade is the WordPress Support Forums, 
		and /if you have problems, the volunteers at the WordPress Support Forums will likely ask /if you have completed the first four steps.

	Step 6 - Download and extract the WordPress package // http://wordpress.org/download/.
	--------------------------------------------------------------------------------------

		If you will be uploading WordPress to a remote web server, 
			- download the WordPress package to your computer with your favorite web browser 
			- and unzip the package.
		If you have shell access to your web server, and are comfortable using console-based tools, 
			- you may wish to download WordPress directly to your web server. 
				- You can do so using a console-based web browser
					- wget
					- lynx
				- these are valuable if you want to avoid FTPing. 
				- Place the package in a directory parallel to your current wordpress directory (like "uploads," for example). 
				- Then, unzip it using: 
					gunzip -c wordpress-5.1.0.tar.gz | tar -xf - 
				- or by using: 
					tar -xzvf latest.tar.gz
			The WordPress package will be extracted into a folder called wordpress.


	Step 7 - Backing up + Deleting old WP files
	-----------------------------------
		Why Delete? 
		Generally, it is a good idea to delete whatever is possible 
			because the uploading (or upgrading through cPanel) process may not correctly overwrite an existing file and that may cause problems later.

		Back up these
		-------------
			wp-config.php
			wp-content/
			wp-content/cache -- DELETE 
			wp-content/plugins/widgets -- DELETE
			wp-images/
			wp-includes/languages/ // if you are using a language file do not delete that folder; || if you are using a language file, and it is here rather than in wp-content/languages/, do not delete this folder (you might want to move your language files to wp-content/languages/ for easier upgrading in the future);.
			.htaccess // if you have added custom rules to your .htaccess, do not delete it;
			robots.txt file // if your blog lives in the root of your site (ie. the blog is the site) and you have created such a file, do not delete it.
			Custom Content and/or Plugins-- "if" you have any images or other custom content or Plugins inside the wp-content folder, do NOT delete them.
		
		Delete // Typically files in your root or wordpress folder. 
		------
			wp-* (except for those above)
			index.php 
			readme.html 
			wp.php // and some others may not exist in later versions such as 2.7.
			xmlrpc.php
			license.txt  
			wp-admin/
			wp-includes/
			wp-content/ 
				|_/cache  // You only see this folder if you are upgrading FROM WordPress 2.0.
				|_/plugins/widgets // You only see this folder if you previously installed the Sidebar Widgets plugin. The Sidebar Widgets code conflicts with the built-in widget ability.


			How to Delete? 
			--------------
				There are several ways to delete the files from your WordPress site. You can use 
					- your FTP Client
						The same FTP client you use for uploading can be used to delete files and folders. 
						If your FTP client does not appear to permit you to delete non-empty folders, check the available options for your FTP client. 
						You will usually find an option that permits deleting non-empty folders. 
						Deleting non-empty folders is a quick and thorough method cleaning out an old installation of WordPress. 
						It is recommended that once the deleting is done, you switch back to the original setting for safety reasons.

					- Telenet / SSH			
						If you have a command-line login (telnet or ssh), 
						you can enter the following commands 
							- to make backup copies of the files you need to keep and 
							- to delete ONLY the wordpress files in your directory (plus .htaccess). 
							If you have customized other files (like index.php) not included by the cp commands below, copy them as well:
						
						---------------------------
						mkdir backup
						cp wp-config.php .htaccess backup
						cp -R wp-content backup
						rm wp*.php .htaccess license.txt readme.html xmlrpc.php
						rm -rf wp-admin wp-includes
						cp backup/wp-config.php .
						---------------------------
						

						After you have finished w/ the upgrade, 
						you can restore any customizations to your templates or plugins from your backup directory. 
						For example, 
						------------
						use cp backup/index.php . to restore index.php.
						Alternatively, using SSH, you could copy 
							wp-config.php, 
							.htaccess, 
							and any content files you have added or altered 
							into the new wordpress directory. 
							Then, rename the old one (to archive it), and 
							move the new one into its place.
			~~~~~~~~~~~~~~~~~~~~



	Step 8 - Upload the new files 
	-----------------------------
		With the new upgrade on your local computer, and using FTP, 
		upload the new files to your site server just as you did when you first installed WordPress. 
		See Using FileZilla and Uploading WordPress to a remote host for detailed guidelines in using an FTP Client to upload.

		NOTE: 
		If you did not delete the wp-content folder, you will need to overwrite some files during the upload.

		The wp-content folder holds your WordPress Themes and Plugins. 
		These should remain. 
		Upload everything else first, 
		then upload only those WordPress files that are new or changed to your new wp-content folder. 
		Overwrite any old versions of default plugins w/ the new ones.

		The WordPress default theme has changed 
		so you will want to upload the wp-content/themes/default folder. 
		If you have custom changes to the default theme, those changes will need to be reviewed and installed after the upgrade.
		
	Step 9 - Run the WordPress upgrade program and follow the instructions on the screen.
	-------------------------------------------------------------------------------------
		Using a web browser, 
		go to the WordPress admin pages at the normal /wp-admin location. 
		WordPress will check to see /if a database upgrade is necessary, 
		and /if it is, it will give you a new link to follow.

		This link will lead you to run the WordPress upgrade script 
		by accessing wp-admin/upgrade.php. Follow the instructions presented on your screen.

		Note: 
		Make sure the database user name registered to WordPress has permission to create, modify, and delete database tables before you do this step. 
		If you installed WordPress in the standard way, and nothing has changed since then, you are fine.

		If you want to run the upgrade script manually:
		----------------------------------------------

			If WordPress is installed in the root directory, 
				- point your browser to: http://example.com/wp-admin/upgrade.php
			If WordPress is installed in its own subdirectory called blog, for example, 
				- point your browser to: http://example.com/blog/wp-admin/upgrade.php
			If you experience difficulties w/ login after your upgrade, 
				- it is worth clearing your browser\s cookies.


	Step 10 - Update 
	-------------
		- Permalinks
		- .htaccess. 
		// Update your Permalink Structure and merge the custom rules, if necessary, into your .htaccess file.

		Administration Screen > Settings > Permalinks
			- update your Permalink Structure 
		and, if necessary, place the rules in your .htaccess file. 
		// Also see Using Permalinks for details regarding Permalinks and the .htaccess file.
	
	Step 11 - Install updated Plugins and Themes. 
	---------------------------------------------
		- Please review the list of Plugins that work in "Version 5.1.0." 
		- Check for Theme Compatibility w/ "5.1.0" and ask your Theme author for any new version.


		Please review the Plugin Compatibility List and Theme Compatibility List, or plugin/theme authors, 
		to find plugins and themes compatible w/ your new WordPress version. 
		Upload and install new versions of your Plugins and Themes, if necessary.



	Step 12 - Reactivate Plugins
	--------------------------
		
		Administration Screen > Plugins > activate your Plugins. 
		If 
			- your plugins do not appear on the Plugin Compatibility List and 
			- you are not sure /if they will work correctly w/ the new version, 
		activate each plugin, one at a time, and test that there are no problems before continuing.



	Step 13 - Add security key definitions to the wp-config.php file (I have them)
	-----------------------------------------------------------------

		Four security keys are used to insure better encryption of information stored in the user\s cookies. 
			AUTH_KEY  // Beginning w/ WordPress Version 2.6, 
			SECURE_AUTH_KEY // Beginning w/ WordPress Version 2.6, 
			LOGGED_IN_KEY, // Beginning w/ WordPress Version 2.6, 
			NONCE_KEY // Beginning w/ Version 2.7

		If you don\t find the keys in your wp-config.php file, 
		add the keys definitions w/ reference to Editing wp-config.php - Security Keys, and upload to your server.



	Step 14 - Review what has changed in WordPress.
	-----------------------------------------------
		Please review these resources to see what\s new in WordPress:

		Version 5.1.0 Details
		Complete version history including Development News












Troubleshooting
===============
	Scrambled Layout or Errors 
		If your blog looks scrambled now or features line errors, 
		an old plugin that doesn\t work w/ the new code may be the culprit. 
		In your WordPress Administration Screen, deactivate all plugins that do not come w/ WordPress by default. 
		Re-activate them one by one.

	Made Custom Changes/Hacks? 
		If you have made changes to other WordPress files ("hacked" WordPress), 
		you are supposed to keep track of your changes. 
		You will have to transfer your edits into the new code. 
		WordPress Versions lists the files that have changed in each release.

	Resist Using Old Code 
		Upgrading gives you the newest and best code. 
		Using your old code, no matter how much you have customised it, almost certainly will cause problems. 
		The temptation just to use your old modified code will be great, but the chances of errors are much greater.
	
	Can I Go Back to Old Versions 
		You can, but it is usually not recommended to rollback (revert) your current version to an older version. 
		That is because newer versions often include security updates and a rollback may put your site at risk. 
		Second, the change between the database structure between versions may cause complications in maintaining your site content, posts, comments, and plugins that are dependent upon the information stored in the database. If you are still intent on this, proceed at your own risk. Please note, that w/o a backup of your entire site and your database, made prior to your upgrade attempt, a successful rollback is near impossible. Delete all WordPress files except for wp-config. Upload the files from your backup to your server and restore your database backup. Remember, you must have good backups for the rollback to work. For older WordPress versions, a rollback might not work.
	Get More Help 
		If you get any errors following an upgrade, check Troubleshooting: Common Installation Problems, Troubleshooting, and the Codex Installation Category of Articles. If you can\t find an answer, post a clear question on the WordPress Suppport Forums. You will be asked if you have used any old code. You\ll be told to change it then, so you may as well change it now :)

