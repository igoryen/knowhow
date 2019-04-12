# Open the local WP installation
# MySites > Network Admin > Dashboard
# Duplicator Pro > 
# "Create New" > 
# Multisite > Excluded Sub-sites > 
	...

# Next > (starts scanning) > Review
# Build > (starts building) > see "Download" > click > "Both files" > Source Location
# Observe the 2 files in the Source Location:
	the archive  (e.g. "20180709_mymultisite_349a009d(...)_archive.zip")
	the installer (installer.php)


# Open Filezilla 
# point the panels to:
	- the Source Location 
	- the Remote Location (/var/www/html/)
# Transfer the 2 files 
	from the Source Location
	to the Remote Location


# Point the webbrowser on the remote server to the installer.php
