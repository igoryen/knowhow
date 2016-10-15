https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04

# login using PuTTY
// ===============================================
// Step 1: Install Apache WS and Allow in Firewall
sudo apt-get update // has to be run for every command if at long intervals
sudo apt-get install apache2
sudo ufw app list

  Apache
  Apache Full
  Apache Secure
  OpenSSH

// look at the Apache Full profile
sudo ufw app info "Apache Full"
	ports:
		80,443/tcp

// Allow incoming traffic for this profile:
sudo ufw allow in "Apache Full"
	Rules updated
	Rules updated (v6)

// get your private IP address
// method 1
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'

// method 2
sudo apt-get install curl
curl http://icanhazip.com

// do a spot check right away 
// to verify that everything went as planned 
// by visiting your server's public IP address in your web browser 
http://111.222.333.444

// ===================================
// Step 2: Install MySQL
sudo apt-get install mysql-server

// select and confirm a password for the MySQL "root" user. 
// This is an administrative account in MySQL that has increased privileges.
// Think of it as being similar to the root account for the server itself (the one you are configuring now is a MySQL-specific account, however). Make sure this is a strong, unique password, and do not leave it blank.
what-s-up-doc?
// When the installation is complete, 
// run a simple security script 
// that will remove some dangerous defaults and lock down access to our database system a little bit. 
// Start the interactive script by running:

sudo mysql_secure_installation

// enter the MySQL root user password
what-s-up-doc?

// Do you want to configure the VALIDATE PASSWORD PLUGIN.

// Warning: Enabling this feature is something of a judgment call. 
// If enabled, passwords which don't match the specified criteria will be rejected by MySQL with an error. 
// This will cause issues if you use a weak password in conjunction with software which automatically configures MySQL user credentials, such as the Ubuntu packages for phpMyAdmin. It is safe to leave validation disabled, but you should always use strong, unique passwords for database credentials.

No

// ===================================
// Step 3: Install PHP
sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql

sudo vim /etc/apache2/mods-enabled/dir.conf
/*
copy-paste `index.php` to the first position (left-most)
<IfModule mod_dir.c>
    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
</IfModule>
*/

// restart Apache WS
sudo systemctl restart apache2

// check on the status of the apache2 service 
sudo systemctl status apache2

// Install PHP Modules To enhance the functionality of PHP

// see the available options for PHP modules and libraries
apt-cache search php- | less

// look at the long description of the package 
apt-cache show package_name

// sudo apt-get install package1 package2 ...
sudo apt-get install php-cli

//===========================
// Step 4: Test PHP Processing on your Web Server

sudo vim /var/www/html/info.php

// test
http://your_server_IP_address/info.php

// remove the test script
sudo rm /var/www/html/info.php