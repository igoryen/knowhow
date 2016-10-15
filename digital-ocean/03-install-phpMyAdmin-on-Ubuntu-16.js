https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-16-04

// How To Install and Secure phpMyAdmin on Ubuntu 16.04

//Step One — Install phpMyAdmin
sudo apt-get update
sudo apt-get install phpmyadmin php-mbstring php-gettext

// Warning: When the first prompt appears, apache2 is highlighted, but not selected. 
// If you do not hit Space to select Apache, 
// the installer will not move the necessary files during installation. 
// select Apache.
Space, Tab, Enter

//  configure the database for phpmyAdmin with dbconfig-common?
Yes

// (create) mysql application password for phpmyAdmin
// database administrator's password
The_road_goes_3ver_0n_and_0n! // here used the same as for the MySQL

// The installation process actually adds the phpMyAdmin Apache configuration file into the /etc/apache2/conf-enabled/ directory, where it is automatically read.

// explicitly enable the PHP mcrypt and mbstring extensions
sudo phpenmod mcrypt
sudo phpenmod mbstring

// restart Apache for your changes to be recognized
sudo systemctl restart apache2

// access the web interface of phpMyAdmin
https://domain_name_or_IP/phpmyadmin
http://159.203.34.204/phpmyadmin

Username: root
Password: The_road_goes_3ver_0n_and_0n! // the one for MySQL

//=======================================
// Step Two — Secure your phpMyAdmin Instance

// put a gateway in front of the entire app
// enable the use of .htaccess file overrides (n.pl) by editing our Apache configuration file.
// edit the linked file "phpmyadmin.conf" that has been placed in our Apache configuration directory

// Configure Apache to Allow .htaccess Overrides

sudo vim /etc/apache2/conf-available/phpmyadmin.conf

// 
// add the "AllowOverride All" directive
<Directory /usr/share/phpmyadmin>
    Options FollowSymLinks
    DirectoryIndex index.php
    AllowOverride All <====<<< 
    . . .

// restart the WS to implement the changes
sudo systemctl restart apache2

// Create an .htaccess File

// Now the ".htaccess" file is enabled for the application
// Create the file to actually implement some security.

// The ".htaccess" file must be created within the application directory. 

sudo vim /usr/share/phpmyadmin/.htaccess

// copy-paste (right click)

AuthType Basic
AuthName "Restricted Files"
AuthUserFile /etc/phpmyadmin/.htpasswd
Require valid-user

// ---------------------------------
// explanation
	AuthType Basic // Authentication type: "Basic"  i.e. using a password using a password file.
	AuthName // This sets the message for the authentication dialog box. You should keep this generic so that unauthorized users won't gain any information about what is being protected.
	AuthUserFile // This sets the location of the password file that will be used for authentication. This should be outside of the directories that are being served. We will create this file shortly.
	Require valid-user // This specifies that only authenticated users should be given access to this resource. This is what actually stops unauthorized users from entering.
//----------------------------------



// Create the ".htpasswd" file for Authentication already!
// We can install an additional package from our default repositories to complete this process:
sudo apt-get install apache2-utils

// Now the htpasswd utility is available.

// The location that we selected for the password file was "/etc/phpmyadmin/.htpasswd". 
// Let's create this file and pass it an initial user by typing:

sudo htpasswd -c /etc/phpmyadmin/.htpasswd username

user: 	"username"
pw: 	"This_is_me_1"

// Now the file is created with the hashed password that you entered.

// If you want to enter an additional user, 
// you need to do so without the -c flag, like this:

sudo htpasswd /etc/phpmyadmin/.htpasswd additionaluser

// Again access your phpMyAdmin subdirectory, 
// you will be prompted for the additional account name and password that you just configured:

http://159.203.34.204/phpmyadmin
User Name: 	"username"
Passowrd: 	"This_is_me_1"

// ===============
// You should now have phpMyAdmin configured and ready to use on your Ubuntu 16.04 server. 
// Using this interface, you can easily 
// create databases, users, tables, etc., and perform the usual operations 
// like deleting and modifying structures and data.