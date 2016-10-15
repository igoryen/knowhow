https://docs.google.com/document/d/1gKFlOAbzyEqc1LzNoVdlo1U8czZ2cLqOtTDjgCXCDDg/edit

Configure XAMPP on Ubuntu
=========================
//Start and stop the Web server
// Open the terminal and write:
sudo /opt/lampp/manager-linux.run //to open the xampp control pannel
// or
sudo /opt/lampp/lampp start //to start the Web server
// and
sudo /opt/lampp/lampp stop // to stop the Web server


// Include the VirtualHost configuration file: 
/opt/lampp/etc/httpd.conf
// action: Uncomment the Include command
# Virtual hosts
Include etc/extra/httpd-vhosts.conf


//Add your Virtual host file: 
/opt/lampp/etc/extra/httpd-vhost.conf
// action: Add the standard virtual host and your virtual host

// example:
<VirtualHost *:80>
    DocumentRoot "/opt/lampp/htdocs"
    ServerName localhost
    <Directory /opt/lampp/htdocs>
        AllowOverride all
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>

<VirtualHost 127.0.0.2:80>
    DocumentRoot "/opt/lampp/htdocs/mgm"
    ServerName mgm.localhost
    ServerAlias www.mgm.localhost
    <Directory /opt/lampp/htdocs/mgm>
        DirectoryIndex index.html
        AllowOverride all
        Order allow, deny
        Allow from all
    </Directory>
</VirtualHost>

// Add your host in the host’s list
file: /etc/hosts
action: Add your host
example:
127.0.0.2 mgm.localhost

//Restart Apache
sudo /opt/lampp/lampp stop
sudo /opt/lampp/lampp start

//Browse your site
http://mgm.localhost/

(hint: http://phpexpertgroup.blogspot.it/2013/10/creating-virtual-host-for-xampp-php.html)

===============================
Creating Virtual Host on Ubuntu
===============================

Install Apache
sudo apt-get install apache2

// Start and stop Apache
sudo service apache2 start
sudo service apache2 stop
// or
sudo /etc/init.d/apache2 start
sudo /etc/init.d/apache2 stop

// The Document root
/var/www

The configuration directory 
Where you can find all the configuration files: /etc/apache2
configuration file: apache2.conf
listening ports: ports.conf
virtual host: sites-available/default.conf

Set the security model of Apache2 HTTPD server
/etc/apache2/apache2.conf
Add the following lines or similar (look at the actual configuration)
<Directory /var/mgm/>
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
</Directory>

Change the listen port
/etc/apache2/ports.conf
Change NameVirtualHost e Listen
NameVirtualHost *:81
Listen 81
Add your Virtual host and match the listen port
/etc/apache2/sites-available/default.conf
Change the general VirtualHost’s listen port
<VirtualHost *:81>
Add the following lines for your new VirtualHost, matching what you wrote on apache2.conf file 
<VirtualHost 127.0.0.2:81>
    DocumentRoot "/var/mgm"
    ServerName mgm.localhost
    ServerAlias www.mgm.localhost
    <Directory /var/mgm>
        DirectoryIndex index.html
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
</VirtualHost>
Add your host in the host’s list
/etc/hosts
Add the following line
127.0.0.2   mgm.localhost
Restart apache
sudo service apache2 stop
sudo service apache2 start
Browse your site
http://mgm.localhost:81

Notes
http://httpd.apache.org/docs/2.2/sections.html
<Directory> and </Directory> are used to enclose a group of directives that will apply only to the named directory, sub-directories of that directory, and the files within the respective directories.
