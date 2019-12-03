for centos 6

Refer to "installation2.js" for 
- Step 1
- Step 2
- Step 3
- Step 4







-------------------
MYPHPADMIN
-------------------
# myPHPAdmin
	this section has no successful procedure

	mRemoteNG > 

	ATTEMPT 1 - // source: https://www.liquidweb.com/kb/how-to-install-and-configure-phpmyadmin-on-centos-6/
	...........

		sudo -s
		// [sudo] password for igor: ****
		rpm -iUvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
		yum update
		yum -y install phpmyadmin
		vim /etc/httpd/conf.d/phpMyAdmin.conf
			// replace local host with your IP
			Require ip 127.0.0.1
			Allow from 127.0.0.1
			Require ip 127.0.0.1
			Allow from 127.0.0.1
			: > wq
		service httpd restart

	ATTEMPT 2 - https://www.pickaweb.co.uk/kb/install-and-configure-phpmyadmin-with-apache-in-centos-server/
	........

		cd /usr/local/src/
		wget http://mirrors.piconets.webwerks.in/fedora-mirror/epel/6/x86_64/epel-release-6-8.noarch.rpm
		sudo rpm -ivh epel-release*
		yum repolist
		sudo yum install phpmyadmin
		vim /etc/httpd/conf.d/phpMyAdmin.conf
			~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			<Directory /usr/share/phpMyAdmin/>
				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					<RequireAny>
						Require ip // your IP
						Require ip ::1
					</RequireAny>
				</IfModule>

				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					Order Deny,Allow
					Allow from All
					Allow from ::1
				</IfModule>
			</Directory>

			<Directory /usr/share/phpMyAdmin/>
				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					<RequireAny>
						Require ip // your IP
						Require ip ::1
					</RequireAny>
				</IfModule>

				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					Order Deny,Allow
					Allow from All
					Allow from ::1
				</IfModule>
			</Directory>
			~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

		vim /etc/hosts
		service httpd restart

	ATTEMPT 3 - https://www.linode.com/docs/databases/mysql/managing-mysql-with-phpmyadmin-on-centos-6-4/

		hostname //show your short hostname
		hostname -f // show your fully qualified domain name (FQDN).
		sudo yum update
		//----------------
		// Source: https://www.linode.com/docs/web-servers/lamp/lamp-on-centos-6/
			sudo yum install httpd // Install Apache 2
			cp /etc/httpd/conf/httpd.conf ~/httpd.conf.backup     /// make a backup of the file
			vim /etc/httpd/conf/httpd.conf // 
				???
			vim /etc/httpd/conf.d/vhost.conf

				~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

				NameVirtualHost *:80

				<VirtualHost *:80>
				     ServerAdmin webmaster@naswp.staging
				     ServerName naswp.staging
				     ServerAlias www.naswp.staging
				     DocumentRoot /var/www/naswp.staging/public_html/
				     ErrorLog /var/www/naswp.staging/logs/error.log
				     CustomLog /var/www/naswp.staging/logs/access.log combined
				</VirtualHost>                     ///
				~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

			sudo mkdir -p /var/www/naswp.staging/public_html // Create the directories referenced above
			sudo mkdir /var/www/naswp.staging/logs // Create the directories referenced above
			sudo service httpd start // Start Apache for the first time
			sudo /sbin/chkconfig --levels 235 httpd on // set Apache to run at boot:

			sudo yum install mysql-server // Install the MySQL package:
			sudo service mysqld start // Start MySQL
			sudo /sbin/chkconfig --levels 235 mysqld on // set MySQL to run at boot:

			vim /etc/hosts
			~~~~~~~~~~~~~~~~~~~~~~~
			999.999.999.999 naswp.staging
			~~~~~~~~~~~~~~~~~~~~~~~
			service httpd restart

			WB > 999.99.999.99 > a default Apache page on your website.



			sudo yum install mysql-server // Install the MySQL package
			sudo service mysqld start // Start MySQL
			sudo /sbin/chkconfig --levels 235 mysqld on // set MySQL to run at boot
			mysql_secure_installation // secure MySQL
				// You will be given the option to change the root password, remove anonymous user accounts, disable root logins outside of localhost, and remove test databases and reload privileges. 
				// It is recommended that you answer yes to these options.

			// Log in to MySQL:
			mysql -u root -p
			// create database
			create database webdata; 
			// create user
			grant all on webdata.* to 'webuser' identified by 'password';
			// exit MySQL
			quit



			// Install PHP
			sudo yum install php php-pear
			//  install the php-mysql package (for MySQL support for PHP)
			sudo yum install php-mysql
			// Get set for better error messages and logs, and upgraded performance.
			vim /etc/php.ini
				~~~~~~~~~~~~~~~~~~
				/error_reporting     /// use slash to find string, 'n' to go to next occurence of the string
				// Ensure that all the lines noted above are uncommented. A commented line begins with a semicolon (;).
				error_reporting = E_COMPILE_ERROR|E_RECOVERABLE_ERROR|E_ERROR|E_CORE_ERROR
				error_log = /var/log/php/error.log
				max_input_time = 30
				~~~~~~~~~~~~~~~~~~
			// Create the log directory for PHP
			sudo mkdir /var/log/php
			// give the Apache user ownership over the log directory
			sudo chown apache /var/log/php
			// Restart Apache:
			sudo service httpd restart
		//----------------------------


		// get to ...
		cd ~
		// Enable the EPEL Repository
		wget http://download.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
		sudo rpm -ivh epel-release*

		//--------------------
		// Source: https://www.linode.com/docs/security/ssl/ssl-apache2-centos/

			// ensure that the Apache mod_ssl module is installed on your system.
			yum install mod_ssl

			vim /etc/httpd/conf.d/ssl.conf
				~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
					<VirtualHost *:443>
					     SSLEngine On
					     SSLCertificateFile /etc/pki/tls/certs/naswp.staging.crt
					     SSLCertificateKeyFile /etc/pki/tls/private/naswp.staging.key
					     SSLCACertificateFile /etc/pki/tls/certs/root-certificate.crt  #If using a self-signed certificate or a root certificate provided by ca-certificates, omit this line

					     ServerAdmin info@naswp.staging
					     ServerName www.naswp.staging
					     DocumentRoot /var/www/naswp.staging/public_html/
					     ErrorLog /var/www/naswp.staging/logs/error.log
					     CustomLog /var/www/naswp.staging/logs/access.log combined
					</VirtualHost>		     //
				~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			// Restart Apache
			service httpd restart
			// You should now be able to visit your site with SSL enabled.


		//--------------------
		// Install the 'mycrypt' PHP module:
		sudo yum install php-mcrypt
		// Restart Apache
		service httpd restart







		// Install phpMyAdmin:
		sudo yum install phpmyadmin

		// For each virtual host that you would like to give access to your PHPMyAdmin installation, 
		// you must create a symbolic link from the document root to the phpMyAdmin installation location (/usr/share/phpmyadmin):
		// Create a symbolic link named phpmyadmin in your document root.
		cd /var/www/naswp.staging/public_html
		sudo ln -s /usr/share/phpmyadmin



		vim /etc/httpd/conf.d/phpMyAdmin.conf
			~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			<Directory /usr/share/phpMyAdmin/>
				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					<RequireAny>
						Require ip // your IP
						Require ip ::1
					</RequireAny>
				</IfModule>

				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					Order Deny,Allow
					Allow from All
					Allow from ::1
				</IfModule>
			</Directory>

			<Directory /usr/share/phpMyAdmin/>
				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					<RequireAny>
						Require ip // your IP
						Require ip ::1
					</RequireAny>
				</IfModule>

				<IfModule !mod_authoz_core.c>
					# Apache 2.2
					Order Deny,Allow
					Allow from All
					Allow from ::1
				</IfModule>
			</Directory>
			~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

			vim /etc/phpmyadmin/config.inc.php

			// under 'Server(s) configuration' section
			$cfg['ForceSSL'] = 'true';
			// ??? the file is empty

			sudo service httpd restart


			To test phpMyAdmin, open your favorite browser and navigate to https://example.com/phpmyadmin. 

		//=================
		ATTEMPT 4
		=============================
			after the 3rd attepmt, still fail
			Updated PHP to 7 ( https://www.tecmint.com/install-php-7-in-centos-6/)
			Updated MySQL to 5.6 (https://www.zerostopbits.com/how-to-intall-mysql-5-6-on-centos-6-7/)

			// check if myPHPAdmin exists
			ls -la /usr/share/phpMyAdmin

			Next: https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-a-centos-6-4-vps

			sudo yum install httpd mysql-server php php-mysql // not necessary since I've already updated PHP and MySQL to the versions required for WordPress

			// Start the MySQL service
			sudo service mysqld start
			// Return to my shell session
			exit
			
			// Add access to the EPEL repositories (EPEL = Extra Packages for Enterprise Linux) to our system.
			// Why? Because the phpMyAdmin package is not available is not available in the CentOS 6 default repositories. 
			sudo yum install epel-release
			// install the phpMyAdmin package
			sudo yum install phpmyadmin

			sudo nano /etc/httpd/conf.d/phpMyAdmin.conf
			// the file is empty

			// Decided to remove phpAdmin and start again.
			yum remove phpmyadmin // Package(s) phpmyadmin available, but not installed
			// Trying to locate phpmyadmin directory.
			locate phpmyadmin
			find / -type d -name "phpmyadmin" -print
			find /etc/httpd/ -print0 | xargs -0 grep phpmyadmin
			// all failed.
			// Looked at the conventional location:
			ls /usr/share
			// no such folder.
			// Trying to check if myphpadmin is installed on my system. Couldn't find a way.
			// Trying to install phpmyadmin again:
			sudo yum install epel-release
			// "Package epel-release-6-8.noarch already installed and latest version."
			// Install phpmyadmin
			sudo yum install phpmyadmin

			=====================================================
				[root@10 ~]# sudo yum install phpmyadmin
				Loaded plugins: fastestmirror, refresh-packagekit, security
				Setting up Install Process
				Loading mirror speeds from cached hostfile
				epel/metalink                                                             |  18 kB     00:00
				 * base: centos.mirror.netelligent.ca
				 * epel: ftp.cse.buffalo.edu
				 * extras: mirror.netflash.net
				 * remi-php70: ftp.arnes.si
				 * remi-php72: ftp.arnes.si
				 * remi-safe: ftp.arnes.si
				 * updates: centos.mirror.globo.tech
				 * webtatic: us-east.repo.webtatic.com
				base                                                                      | 3.7 kB     00:00
				extras                                                                    | 3.4 kB     00:00
				mysql-connectors-community                                                | 2.5 kB     00:00
				mysql-tools-community                                                     | 2.5 kB     00:00
				mysql56-community                                                         | 2.5 kB     00:00
				remi-php70                                                                | 2.9 kB     00:00
				remi-php72                                                                | 2.9 kB     00:00
				remi-safe                                                                 | 2.9 kB     00:00
				updates                                                                   | 3.4 kB     00:00
				webtatic                                                                  | 3.6 kB     00:00
				Resolving Dependencies
				--> Running transaction check
				---> Package phpMyAdmin.noarch 0:4.0.10.20-1.el6 will be installed
				--> Processing Dependency: php(language) < 7 for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				Package php56w-common-5.6.36-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Processing Dependency: php-xmlwriter for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				--> Processing Dependency: php-tcpdf-dejavu-sans-fonts for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				--> Processing Dependency: php-tcpdf for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				--> Processing Dependency: php-simplexml for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				--> Processing Dependency: php-php-gettext for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				--> Processing Dependency: php-mbstring for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				--> Running transaction check
				---> Package php-mbstring.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package php-php-gettext.noarch 0:1.0.12-1.el6 will be installed
				---> Package php-tcpdf.noarch 0:6.2.13-1.el6 will be installed
				--> Processing Dependency: php-tidy for package: php-tcpdf-6.2.13-1.el6.noarch
				--> Processing Dependency: php-posix for package: php-tcpdf-6.2.13-1.el6.noarch
				--> Processing Dependency: php-composer(fedora/autoloader) for package: php-tcpdf-6.2.13-1.el6.noarch
				--> Processing Dependency: php-bcmath for package: php-tcpdf-6.2.13-1.el6.noarch
				---> Package php-tcpdf-dejavu-sans-fonts.noarch 0:6.2.13-1.el6 will be installed
				---> Package php-xml.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package phpMyAdmin.noarch 0:4.0.10.20-1.el6 will be installed
				--> Processing Dependency: php(language) < 7 for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				Package php56w-common-5.6.36-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package php-bcmath.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package php-fedora-autoloader.noarch 0:1.0.0-1.el6 will be installed
				---> Package php-process.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package php-tidy.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package phpMyAdmin.noarch 0:4.0.10.20-1.el6 will be installed
				--> Processing Dependency: php(language) < 7 for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				Package php56w-common-5.6.36-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.0.10.20-1.el6.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Finished Dependency Resolution
				Error: Package: phpMyAdmin-4.0.10.20-1.el6.noarch (epel)
				           Requires: php(language) < 7
				           Installed: php-common-7.2.7-1.el6.remi.x86_64 (@remi-php72)
				               php(language) = 7.2.7
				           Available: php-common-5.3.3-49.el6.x86_64 (base)
				               php(language) = 5.3.3
				           Available: php-common-7.0.29-1.el6.remi.x86_64 (remi-php70)
				               php(language) = 7.0.29
				           Available: php-common-7.0.30-1.el6.remi.x86_64 (remi-php70)
				               php(language) = 7.0.30
				           Available: php-common-7.2.6-1.el6.remi.x86_64 (remi-php72)
				               php(language) = 7.2.6
				           Available: php55w-common-5.5.38-1.w6.x86_64 (webtatic)
				               php(language) = 5.5.38
				           Available: php56w-common-5.6.33-1.w6.x86_64 (webtatic)
				               php(language) = 5.6.33
				           Available: php56w-common-5.6.34-1.w6.x86_64 (webtatic)
				               php(language) = 5.6.34
				           Available: php56w-common-5.6.35-1.w6.x86_64 (webtatic)
				               php(language) = 5.6.35
				           Available: php56w-common-5.6.36-1.w6.x86_64 (webtatic)
				               php(language) = 5.6.36
				           Available: php70w-common-7.0.27-1.w6.x86_64 (webtatic)
				               php(language) = 7.0.27
				           Available: php70w-common-7.0.28-1.w6.x86_64 (webtatic)
				               php(language) = 7.0.28
				           Available: php70w-common-7.0.29-1.w6.x86_64 (webtatic)
				               php(language) = 7.0.29
				           Available: php70w-common-7.0.30-1.w6.x86_64 (webtatic)
				               php(language) = 7.0.30
				           Available: php71w-common-7.1.13-1.w6.x86_64 (webtatic)
				               php(language) = 7.1.13
				           Available: php71w-common-7.1.14-1.w6.x86_64 (webtatic)
				               php(language) = 7.1.14
				           Available: php71w-common-7.1.15-1.w6.x86_64 (webtatic)
				               php(language) = 7.1.15
				           Available: php71w-common-7.1.16-1.w6.x86_64 (webtatic)
				               php(language) = 7.1.16
				           Available: php71w-common-7.1.17-1.w6.x86_64 (webtatic)
				               php(language) = 7.1.17
				           Available: php71w-common-7.1.18-1.w6.x86_64 (webtatic)
				               php(language) = 7.1.18
				Error: Package: phpMyAdmin-4.0.10.20-1.el6.noarch (epel)
				           Requires: php-zip
				           Available: php-common-5.3.3-49.el6.x86_64 (base)
				               php-zip
				           Available: php-pecl-zip-1.15.2-1.el6.remi.7.0.x86_64 (remi-php70)
				               php-zip = 1:1.15.2-1.el6.remi.7.0
				           Available: php-pecl-zip-1.15.2-1.el6.remi.7.2.x86_64 (remi-php72)
				               php-zip = 1:1.15.2-1.el6.remi.7.2
				           Available: php-pecl-zip-1.15.3-1.el6.remi.7.0.x86_64 (remi-php70)
				               php-zip = 1:1.15.3-1.el6.remi.7.0
				           Available: php-pecl-zip-1.15.3-1.el6.remi.7.2.x86_64 (remi-php72)
				               php-zip = 1:1.15.3-1.el6.remi.7.2
				           Available: php55w-common-5.5.38-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.33-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.34-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.35-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.36-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.27-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.28-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.29-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.30-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.13-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.14-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.15-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.16-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.17-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.18-1.w6.x86_64 (webtatic)
				               php-zip
				           Installed: php-common-7.2.7-1.el6.remi.x86_64 (@remi-php72)
				               Not found
				           Available: php-common-7.0.29-1.el6.remi.x86_64 (remi-php70)
				               Not found
				           Available: php-common-7.0.30-1.el6.remi.x86_64 (remi-php70)
				               Not found
				           Available: php-common-7.2.6-1.el6.remi.x86_64 (remi-php72)
				               Not found
				 You could try using --skip-broken to work around the problem
				 You could try running: rpm -Va --nofiles --nodigest
				[root@10 ~]#

			=====================================================
			// apparently, this tries to install not the latest version of phpMyAdmin
			// Trying to install the latest version (4.8 as of 180628)
			// Source: https://www.tecmint.com/install-phpmyadmin-rhel-centos-fedora-linux/
			rpm -Uvh http://download.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
			// reply: already installed
			rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
			// reply: already installed

			// Trying to install PhpMyAdmin Web Interface
			yum --enablerepo=remi install phpmyadmin
			======================================================
				[root@10 ~]# yum --enablerepo=remi install phpmyadmin
				Loaded plugins: fastestmirror, refresh-packagekit, security
				Setting up Install Process
				Loading mirror speeds from cached hostfile
				 * base: centos.les.net
				 * epel: mirror.team-cymru.com
				 * extras: mirror.its.sfu.ca
				 * remi: mirror.team-cymru.com
				 * remi-php70: mirror.team-cymru.com
				 * remi-php72: mirror.team-cymru.com
				 * remi-safe: mirror.team-cymru.com
				 * updates: centos.mirror.globo.tech
				 * webtatic: us-east.repo.webtatic.com
				remi                                                                      | 2.9 kB     00:00
				Resolving Dependencies
				--> Running transaction check
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-symfony-expression-language < 4 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-twig-extensions >= 1.5.1 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-twig >= 1.34 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-symfony-polyfill >= 1.7.0-2 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-psr-container >= 1.0 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-phpseclib >= 2.0.9 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-phpmyadmin-sql-parser >= 4.2.3 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-phpmyadmin-shapefile >= 2.0 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-phpmyadmin-motranslator >= 4.0 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-google-recaptcha >= 1.1 for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Processing Dependency: php-xmlwriter for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-xml for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-simplexml for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-recode for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-mbstring for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Processing Dependency: php-composer(fedora/autoloader) for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				--> Running transaction check
				---> Package php-fedora-autoloader.noarch 0:1.0.0-1.el6.remi will be installed
				---> Package php-google-recaptcha.noarch 0:1.1.3-1.el6.remi will be installed
				---> Package php-mbstring.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package php-phpmyadmin-motranslator.noarch 0:4.0-1.el6.remi will be installed
				---> Package php-phpmyadmin-shapefile.noarch 0:2.1-1.el6.remi will be installed
				---> Package php-phpmyadmin-sql-parser.noarch 0:4.2.4-3.el6.remi will be installed
				---> Package php-phpseclib.noarch 0:2.0.11-1.el6.remi will be installed
				--> Processing Dependency: php-gmp for package: php-phpseclib-2.0.11-1.el6.remi.noarch
				--> Processing Dependency: php-bcmath for package: php-phpseclib-2.0.11-1.el6.remi.noarch
				---> Package php-psr-container.noarch 0:1.0.0-1.el6.remi will be installed
				---> Package php-recode.x86_64 0:7.2.7-1.el6.remi will be installed
				--> Processing Dependency: librecode.so.0()(64bit) for package: php-recode-7.2.7-1.el6.remi.x86_64
				---> Package php-symfony-expression-language.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-symfony-common = 2.8.42-1.el6.remi for package: php-symfony-expression-language-2.8.42-1.el6.remi.noarch
				---> Package php-symfony-polyfill.noarch 0:1.8.0-1.el6.remi will be installed
				--> Processing Dependency: php-composer(paragonie/random_compat) < 3.0 for package: php-symfony-polyfill-1.8.0-1.el6.remi.noarch
				--> Processing Dependency: php-composer(ircmaxell/password-compat) < 2.0 for package: php-symfony-polyfill-1.8.0-1.el6.remi.noarch
				--> Processing Dependency: php-composer(paragonie/random_compat) >= 1.0 for package: php-symfony-polyfill-1.8.0-1.el6.remi.noarch
				--> Processing Dependency: php-composer(ircmaxell/password-compat) >= 1.0 for package: php-symfony-polyfill-1.8.0-1.el6.remi.noarch
				--> Processing Dependency: php-intl for package: php-symfony-polyfill-1.8.0-1.el6.remi.noarch
				---> Package php-twig.noarch 0:1.35.3-1.el6.remi.7.2 will be installed
				---> Package php-twig-extensions.noarch 0:1.5.1-1.el6.remi will be installed
				--> Processing Dependency: php-composer(symfony/translation) < 4.0 for package: php-twig-extensions-1.5.1-1.el6.remi.noarch
				--> Processing Dependency: php-composer(symfony/translation) >= 2.3.31 for package: php-twig-extensions-1.5.1-1.el6.remi.noarch
				---> Package php-xml.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package php-bcmath.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package php-gmp.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package php-intl.x86_64 0:7.2.7-1.el6.remi will be installed
				--> Processing Dependency: libicuuc.so.50()(64bit) for package: php-intl-7.2.7-1.el6.remi.x86_64
				--> Processing Dependency: libicuio.so.50()(64bit) for package: php-intl-7.2.7-1.el6.remi.x86_64
				--> Processing Dependency: libicui18n.so.50()(64bit) for package: php-intl-7.2.7-1.el6.remi.x86_64
				--> Processing Dependency: libicudata.so.50()(64bit) for package: php-intl-7.2.7-1.el6.remi.x86_64
				---> Package php-paragonie-random-compat.noarch 0:2.0.12-1.el6.remi will be installed
				---> Package php-password-compat.noarch 0:1.0.4-1.el6.remi will be installed
				---> Package php-symfony-common.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-symfony-class-loader = 2.8.42-1.el6.remi for package: php-symfony-common-2.8.42-1.el6.remi.noarch
				---> Package php-symfony3-translation.noarch 0:3.4.12-1.el6.remi will be installed
				--> Processing Dependency: php-symfony3-common = 3.4.12-1.el6.remi for package: php-symfony3-translation-3.4.12-1.el6.remi.noarch
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				---> Package recode.x86_64 0:3.6-28.1.el6 will be installed
				--> Running transaction check
				---> Package libicu-last.x86_64 0:50.1.2-11.el6.remi will be installed
				---> Package php-symfony-class-loader.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package php-symfony3-common.noarch 0:3.4.12-1.el6.remi will be installed
				--> Processing Dependency: composer for package: php-symfony3-common-3.4.12-1.el6.remi.noarch
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package composer.noarch 0:1.6.5-1.el6.remi will be installed
				--> Processing Dependency: php-composer(seld/phar-utils) < 2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(seld/jsonlint) < 2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(seld/cli-prompt) < 2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(psr/log) < 2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(composer/spdx-licenses) < 2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(composer/semver) < 2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(composer/ca-bundle) < 2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-seld-phar-utils >= 1.0.1 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-seld-cli-prompt >= 1.0.0-3 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(seld/phar-utils) >= 1.0 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(seld/jsonlint) >= 1.4 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(seld/cli-prompt) >= 1.0 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(psr/log) >= 1.0 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(composer/spdx-licenses) >= 1.2 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(composer/semver) >= 1.0 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-composer(composer/ca-bundle) >= 1.0 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-PsrLog >= 1.0.0-8 for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-zip for package: composer-1.6.5-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Processing Dependency: php-symfony-process for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-symfony-finder for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-symfony-filesystem for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-symfony-console for package: composer-1.6.5-1.el6.remi.noarch
				--> Processing Dependency: php-justinrainbow-json-schema5 for package: composer-1.6.5-1.el6.remi.noarch
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package composer.noarch 0:1.6.5-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: composer-1.6.5-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				---> Package php-PsrLog.noarch 0:1.0.2-2.el6.remi will be installed
				---> Package php-composer-ca-bundle.noarch 0:1.1.1-1.el6.remi will be installed
				---> Package php-composer-semver.noarch 0:1.4.2-2.el6.remi will be installed
				---> Package php-composer-spdx-licenses.noarch 0:1.4.0-1.el6.remi will be installed
				---> Package php-jsonlint.noarch 0:1.7.1-1.el6.remi will be installed
				---> Package php-justinrainbow-json-schema5.noarch 0:5.2.7-1.el6.remi will be installed
				---> Package php-seld-cli-prompt.noarch 0:1.0.3-1.el6.remi will be installed
				---> Package php-seld-phar-utils.noarch 0:1.0.1-2.el6.remi will be installed
				---> Package php-symfony-console.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-composer(symfony/event-dispatcher) = 2.8.42 for package: php-symfony-console-2.8.42-1.el6.remi.noarch
				--> Processing Dependency: php-posix for package: php-symfony-console-2.8.42-1.el6.remi.noarch
				---> Package php-symfony-filesystem.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package php-symfony-finder.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package php-symfony-process.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package composer.noarch 0:1.6.5-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: composer-1.6.5-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				---> Package php-process.x86_64 0:7.2.7-1.el6.remi will be installed
				---> Package php-symfony-event-dispatcher.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-composer(symfony/http-kernel) = 2.8.42 for package: php-symfony-event-dispatcher-2.8.42-1.el6.remi.noarch
				--> Processing Dependency: php-composer(symfony/dependency-injection) = 2.8.42 for package: php-symfony-event-dispatcher-2.8.42-1.el6.remi.noarch
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package composer.noarch 0:1.6.5-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: composer-1.6.5-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				---> Package php-symfony-dependency-injection.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-composer(symfony/yaml) = 2.8.42 for package: php-symfony-dependency-injection-2.8.42-1.el6.remi.noarch
				--> Processing Dependency: php-composer(symfony/config) = 2.8.42 for package: php-symfony-dependency-injection-2.8.42-1.el6.remi.noarch
				---> Package php-symfony-http-kernel.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-composer(symfony/var-dumper) = 2.8.42 for package: php-symfony-http-kernel-2.8.42-1.el6.remi.noarch
				--> Processing Dependency: php-composer(symfony/http-foundation) = 2.8.42 for package: php-symfony-http-kernel-2.8.42-1.el6.remi.noarch
				--> Processing Dependency: php-composer(symfony/debug) = 2.8.42 for package: php-symfony-http-kernel-2.8.42-1.el6.remi.noarch
				--> Processing Dependency: php-composer(symfony/browser-kit) = 2.8.42 for package: php-symfony-http-kernel-2.8.42-1.el6.remi.noarch
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package composer.noarch 0:1.6.5-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: composer-1.6.5-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				---> Package php-symfony-browser-kit.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-composer(symfony/dom-crawler) = 2.8.42 for package: php-symfony-browser-kit-2.8.42-1.el6.remi.noarch
				---> Package php-symfony-config.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package php-symfony-debug.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package php-symfony-http-foundation.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package php-symfony-var-dumper.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package php-symfony-yaml.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package composer.noarch 0:1.6.5-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: composer-1.6.5-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				---> Package php-symfony-dom-crawler.noarch 0:2.8.42-1.el6.remi will be installed
				--> Processing Dependency: php-composer(symfony/css-selector) = 2.8.42 for package: php-symfony-dom-crawler-2.8.42-1.el6.remi.noarch
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Running transaction check
				---> Package composer.noarch 0:1.6.5-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: composer-1.6.5-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				---> Package php-symfony-css-selector.noarch 0:2.8.42-1.el6.remi will be installed
				---> Package phpMyAdmin.noarch 0:4.8.2-1.el6.remi will be installed
				--> Processing Dependency: php-zip for package: phpMyAdmin-4.8.2-1.el6.remi.noarch
				Package php71w-common-7.1.18-1.w6.x86_64 is obsoleted by php-common-7.2.7-1.el6.remi.x86_64 which is already installed
				--> Finished Dependency Resolution
				Error: Package: phpMyAdmin-4.8.2-1.el6.remi.noarch (remi)
				           Requires: php-zip
				           Available: php-common-5.3.3-49.el6.x86_64 (base)
				               php-zip
				           Available: php-common-5.4.45-13.el6.remi.x86_64 (remi)
				               php-zip
				           Available: php-common-5.4.45-14.el6.remi.x86_64 (remi)
				               php-zip
				           Available: php-pecl-zip-1.15.2-1.el6.remi.7.0.x86_64 (remi-php70)
				               php-zip = 1:1.15.2-1.el6.remi.7.0
				           Available: php-pecl-zip-1.15.2-1.el6.remi.7.2.x86_64 (remi-php72)
				               php-zip = 1:1.15.2-1.el6.remi.7.2
				           Available: php-pecl-zip-1.15.3-1.el6.remi.7.0.x86_64 (remi-php70)
				               php-zip = 1:1.15.3-1.el6.remi.7.0
				           Available: php-pecl-zip-1.15.3-1.el6.remi.7.2.x86_64 (remi-php72)
				               php-zip = 1:1.15.3-1.el6.remi.7.2
				           Available: php55w-common-5.5.38-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.33-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.34-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.35-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.36-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.27-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.28-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.29-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.30-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.13-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.14-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.15-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.16-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.17-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.18-1.w6.x86_64 (webtatic)
				               php-zip
				           Installed: php-common-7.2.7-1.el6.remi.x86_64 (@remi-php72)
				               Not found
				           Available: php-common-7.0.29-1.el6.remi.x86_64 (remi-php70)
				               Not found
				           Available: php-common-7.0.30-1.el6.remi.x86_64 (remi-php70)
				               Not found
				           Available: php-common-7.2.6-1.el6.remi.x86_64 (remi-php72)
				               Not found
				Error: Package: composer-1.6.5-1.el6.remi.noarch (remi)
				           Requires: php-zip
				           Available: php-common-5.3.3-49.el6.x86_64 (base)
				               php-zip
				           Available: php-common-5.4.45-13.el6.remi.x86_64 (remi)
				               php-zip
				           Available: php-common-5.4.45-14.el6.remi.x86_64 (remi)
				               php-zip
				           Available: php-pecl-zip-1.15.2-1.el6.remi.7.0.x86_64 (remi-php70)
				               php-zip = 1:1.15.2-1.el6.remi.7.0
				           Available: php-pecl-zip-1.15.2-1.el6.remi.7.2.x86_64 (remi-php72)
				               php-zip = 1:1.15.2-1.el6.remi.7.2
				           Available: php-pecl-zip-1.15.3-1.el6.remi.7.0.x86_64 (remi-php70)
				               php-zip = 1:1.15.3-1.el6.remi.7.0
				           Available: php-pecl-zip-1.15.3-1.el6.remi.7.2.x86_64 (remi-php72)
				               php-zip = 1:1.15.3-1.el6.remi.7.2
				           Available: php55w-common-5.5.38-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.33-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.34-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.35-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php56w-common-5.6.36-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.27-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.28-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.29-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php70w-common-7.0.30-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.13-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.14-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.15-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.16-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.17-1.w6.x86_64 (webtatic)
				               php-zip
				           Available: php71w-common-7.1.18-1.w6.x86_64 (webtatic)
				               php-zip
				           Installed: php-common-7.2.7-1.el6.remi.x86_64 (@remi-php72)
				               Not found
				           Available: php-common-7.0.29-1.el6.remi.x86_64 (remi-php70)
				               Not found
				           Available: php-common-7.0.30-1.el6.remi.x86_64 (remi-php70)
				               Not found
				           Available: php-common-7.2.6-1.el6.remi.x86_64 (remi-php72)
				               Not found
				 You could try using --skip-broken to work around the problem
				 You could try running: rpm -Va --nofiles --nodigest
				[root@10 ~]#

			======================================================
			// Try using --skip-broken to work around the problem
				
			yum --skip-broken --enablerepo=remi install phpmyadmin
			rpm -Va --nofiles --nodigest	

			// Trying to locate phpmyadmin directory.
			locate phpmyadmin
				/var/www/html/phpmyadmin
				/var/www/naswp.staging/public_html/phpmyadmin

			find / -type d -name "phpmyadmin" -print
				// returned nothing
			find /etc/httpd/ -print0 | xargs -0 grep phpmyadmin
				grep: /etc/httpd/: Is a directory
				grep: /etc/httpd/modules: Is a directory
				grep: /etc/httpd/logs: Is a directory
				grep: /etc/httpd/conf: Is a directory
				grep: /etc/httpd/conf.d: Is a directory
				/etc/httpd/conf.d/phpMyAdmin.conf.rpmsave:Alias /phpmyadmin /usr/share/phpMyAdmin
				grep: /etc/httpd/run: Is a directory

			ls -la /usr/share/phpMyAdmin
				ls: cannot access /usr/share/phpMyAdmin: No such file or directory

			// restart Apache to apply changes
			service httpd restart

			// WB: 
			// Forbidden
			// You don't have permission to access /phpmyadmin on this server.








-------------------
WORDPRESS
-------------------
# Filezilla > login

> /home/igor

# download "wordpress" folder here
