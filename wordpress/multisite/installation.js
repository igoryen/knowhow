# Do the normal installation (installation2.js)
# Apache > Stop
# Edit "httpd-vhosts.conf"
	old:
		~~~~~~~~~~~~~~~~~~~
		ServerName nas.test
		~~~~~~~~~~~~~~~~~~~ 
	new:
		~~~~~~~~~~~~~~~~~~~
		ServerName nas.test
		ServerAlias *.nas.test 
		~~~~~~~~~~~~~~~~~~~

# Edit "wp-config.php"

	old:
		~~~~~~~~~~~~~~~~~~
		/* That's all, stop editing! Happy blogging. */
		~~~~~~~~~~~~~~~~~~

	new:
		~~~~~~~~~~~~~~~~~~
		/* Multisite */
		define( 'WP_ALLOW_MULTISITE', true );
		/* That's all, stop editing! Happy blogging. */
		~~~~~~~~~~~~~~~~~~

# Apache > Start

# Plugins > Installed plugins >
	> select all plugins > Deactivate > Apply

# Tools > Network Setup
	> Subdomains > select
	> Network title > // decide
	> "Install" >

# "Enabling the Network"
	> Add the suggested code

# Log out and log in again
# See in top left corner: My Sites
# My Sites > Network Admin > Dashboard > see "Create a New Site | Create a New User"
# Settings > Network Settings >
	> Allow new registrations > "User accounts may be registered"
	> Limited Email Registrations > 
		// nationwideappraisals.com
		// tngoc.com
	> "Save changes"

============================================
ADD A NEW SITE
============================================

# Header > My Sites > Network Admin > Sites >> 
	> Sites > "Add New" >

	Site address (URL) > 
		// cnx.nas.test
		// tngoc.nas.test
		// nrs.nas.test
	Site title > 
		// Connexions
		// TNGOC
		// NRS
	Site language > 
		// English (United States)
	Admin Email > 
		// my work email

	> "Add site"

# hosts > // in your hosts file
	127.0.0.1           tngoc.nas.test
	127.0.0.1           nrs.nas.test

# Sites > All Sites > 
	  cnx.nas.test
	tngoc.nas.test
	  nrs.nas.test

# Header > My Sites > 
	// TNGOC
	// NRS
	// Connexions
	> Visit site 

# Header > My Sites > Network Admin > Themes > see the themes currently installed on your WordPress multisite

============================================--
ADD A NEW THEME
============================================--
# If you have a ready theme, copy the folder to wp-content/
# Header > My Sites > Network Admin > Themes >
	// Lee 
	// Tracy
	> Network Enable > 
# Header > My Sites > 
	// TNGOC
	// NRS 
	> Dashboard > 
	> Appearance > Themes > Pick > "Activate"
# Header > My Sites > 
	// TNGOC
	// NRS 
	> Visit site

============================================--
ADD A PLUGIN
============================================--

# Header > My Sites > Network Admin > Add New > 
	> Search: "Advanced Custom Fields" > Install now > Network Activate
// # Header > My Sites > NRS > Dashboard
# Header > My Sites > NRS > Visit site
