https://cloud.digitalocean.com/support/suggestions?article=how-to-install-and-get-started-with-symfony-2-on-ubuntu-14-04&page=0&query=symfony%20on%20

Step 1 — Install PHP


	// check if PHP is installed
	php -v

	// if not installed,
	// then update the package manager cache:
	sudo apt-get update

	// install the php5-cli package // replace 5 with 7 or whatever
	// (in order to use and execute PHP scripts via the command line)

	sudo apt-get install php5-cli

	// re-check if PHP is installed
	php -v

Step 2 — Configuring date.timezone in php.ini

	// Open the php.ini file using a command line editor:

	sudo vim /etc/php/7.0/cli/php.ini
	// Search for the line containing date.timezone

	// search by: /date.timezone
	// Symfony requires that the option date.timezone is set otherwise your Symfony application won't run.
	date.timezone = America/Toronto

Step 3 — Get the Symfony Installer
	// the official Symfony Installer. 
	// Needed to create a new Symfony project
	// It's a simple script created to facilitate the bootstrap of new Symfony applications.

	// download the Symfony Installer and place it on your /usr/local/bin path:
	// download time: a fraction of a second
	sudo curl -LsS http://symfony.com/installer -o /usr/local/bin/symfony

	// make the script executable 
	sudo chmod a+x /usr/local/bin/symfony

	// test the Symfony Installer
	symfony

Step 4 — Create a new Symfony Project
	// i will clone mine from Github

Step 5 — Run the Application with the Symfony Console


