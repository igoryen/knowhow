

Web Browser
go to https://github.com/WordPress/WordPress

copy https://github.com/WordPress/WordPress.git

log in via putty

cd /var/www

git clone https://github.com/WordPress/WordPress.git

ls // see WordPress

// rename WordPress to string01
mv WordPress string01 
ls // see string01


In the Digital Ocean Control Panel
    
    # "Networking" > "Domains" > igoryen.com > DNS settings
    # "Select Record Type" > A
    # "Enter Name" > "string01.igoryen.com." // mind the trailing period at the end!
    # "Enter IP address" > ip_address_01
    # "Create A Record" > Click
    # Look at the Zone File (below)
    # See the record: string01.igoryen.com. 1800 IN A ip_address_01

sudo vim /etc/apache2/sites-available/string01.conf

<VirtualHost *:80>
    ServerAdmin admin@igoryen.com
    ServerName string01.igoryen.com
    ServerAlias www.igoryen.com
    DocumentRoot /var/www/string01
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

// enable site string01.com
sudo a2ensite string01.conf

// reload/restart apache
service apache2 reload

// no need to do this, since it's a subdomain
// sudo vim /etc/hosts
// ip_address_01 igoryen.com


http://string01.igoryen.com

---------------------------
Scenario: you hit this:
"Sorry, but I can’t write the wp-config.php file.
You can create the wp-config.php manually and paste the following text into it."

Actions:

sudo vim /var/www/string01/wp-config.php
    
    define('DB_NAME', 'string01'); 
    define('DB_USER', 'string02');
    define('DB_PASSWORD', 'string06'); 
    define('DB_COLLATE', 'utf8_general_ci');

    Save and close it.
---------------------------

"Welcome to WordPress."
...

"Let's go!" > Click

"Database Name":  string01 // The name of the database you want to use with WordPress.
"Username":       string02 // Your database username
"Password":       string06 // Your database password
"Database Host":  string07 // You should be able to get this info from your web host, if localhost doesn’t work.
"Table Prefix":   string08 // If you want to run multiple WordPress installations in a single database, change this.

"Submit" > Click

--------------------------

"Welcome to the famous five-minute WordPress installation process!"
"Information needed"

"Site title":   string01
"Username":     string02
"Password":     string10
"Your Email":   string04

the end