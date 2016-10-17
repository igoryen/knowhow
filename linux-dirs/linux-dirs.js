
/.my.cnf //* one of several copies. They load cascade */
/.ssh //* the dir for RSA keys. The location is customizeable */
/.ssh/authorized_keys // keys on computer(s)
/.ssh/id_rsa // a file to save identification (pass phrase)
/.ssh/id_rsa.pub // a file to save your public key
/bin/ // essential commands (bash, cp, mv, cat, ls) accessible by all users. essential command binaries - files needed to bring the OS up, and run it when it first omes up in single-user mode
/boot/ // most basic files required for booting the OS. static files of the boot loader - fiels needed to boot the OS
/dev/ // devices. Linux treats them as files. device files - that represent peripheral devices (disk drives, terminals, printers etc.)
/etc/ // config files for the bootloader and apps such as Apache server
/etc/apache/conf/apache.conf // can be edited to set the web server location
/etc/apache2/ // Apache 2.0 config files. the command to ensure apache2 is running: `ps aux | grep apache2`
/etc/apache2/apache2.conf // Apache 2.0 config file, includes `/etc/apache2/httpd.conf`. Many of the configuration options can be changed here
/etc/apache2/conf.d/  // dir. the best place to put your own custom configurations. Files in this directory are included as part of the “global” server configuration and will apply to all virtual hosts 
/etc/apache2/httpd.conf // the main Apache config file
/etc/apache2/mods-available/ // a non-standard dir
/etc/apache2/mods-enabled/ // a non-standard dir
/etc/apache2/mods-enabled/*.conf // must be uncommented and included into `/etc/apache2/apache2.conf`*/
/etc/apache2/mods-enabled/*.load // must be uncommented and included into `/etc/apache2/apache2.conf`*/
/etc/apache2/mods-enabled/dir.conf // Apache file. Has DirectoryIndex. sets which file types Apache 2 will serve by default: `DirectoryIndex index.html index.cgi index.pl index.php index.xhtml index.htm`
/etc/apache2/ports.conf //  contains the Listen directives telling the Apache server what IP address and port to listen to 
/etc/apache2/sites-available/ // config files (or symbolic links to them) of each web site (virtual host) served by your Apache server. each Virtual Host are managed like modules. No strict naming requirements for these files but for convenience you should name each site configuration file to match the domain name it is serving. There is no need to add a “conf” extension. For example, the vhost file used for this web site is named www.control-escape.com. To activate any of these sites, use the a2ensite command, which operates identically to the a2enmod command mentioned above. There is a respective a2dissite command for disabling a site.
/etc/apache2/sites-available/000-default.conf // the settings for DocumentRoot: can change  `/var/www/html` to `/home/ss/www`
/etc/apache2/sites-available/examples.com.conf
/etc/apache2/sites-enabled/ //
/etc/apache2/sites-enabled/000-default // default site file, has site specific settings
/etc/apache2/vhosts/
/etc/apache2/vhosts/lada_environment.conf // 
/etc/hosts // file that sets the mapping of IP addresses to hostnames, resolving hostnames to IP addresses
/etc/init.d/
/etc/init.d/apache2
/etc/init.d/httpd // the file that restarts your Apache server.  The command to restart your Apache server: `/etc/init.d/httpd restart`
/etc/my.cnf // one of several copies. They load cascade. the config file that you can edit to reflect the location and owner of your MySQL database
/etc/mysql/my.cnf // one of several copies. They load cascade. file that holds the global MySQL database server settings /**/
/etc/opt/ // config files for add-on software packages kept in /opt
/etc/passwd //  a list of all the users who have permission to use the OS
/etc/php.ini // the global PHP configuration file. It is read when PHP starts up. this happens only once when the web server is started. For the CGI and CLI versions, it happens on every invocation. Use phpinfo() to check the path to php.ini
/etc/php5/apache2/php.ini // can change the location of apache2/error.log. This is the default configuration file for running applications that require PHP. It is used to control variables such as upload sizes, file timeouts, and resource limits.
/etc/X11 // machine local configuration for the X Window System
/home/ // user-specific dirs. Contains user-specific settings. user home dirs
/home/igor/
/home/jenica/
/lib/ // libraries required for binaries at /bin/ and /sbin/. shared libraries and kernel modules
/lib/modules // loadable kernel modules
/mnt/ // filesystems and devices are made available to the system through mounting. mount point for temporary mounting of filesystems
/opt/ // packages which are self contained. Has no dependencies. ("optional" packages) add-on software packages. their config files are in /etc/opt
/opt/lampp/ // remove this dir to uninstall XAMPP: #rm -rf /opt/lampp
/opt/lampp/bin/ // The XAMPP commands home
/opt/lampp/bin/mysql // calls the MySQL monitor
/opt/lampp/etc/
/opt/lampp/etc/httpd.conf // The Apache configuration file, edited if you want to change Apache DocumentRoot directory
/opt/lampp/etc/my.cnf // The MySQL configuration file
/opt/lampp/etc/php.ini // The PHP configuration file
/opt/lampp/etc/proftpd.conf // The ProFTPD configuration file. (since 0.9.5) 
/opt/lampp/htdocs/ // The Apache DocumentRoot directory. 
/opt/lampp/lampp start // the command to start XAMPP
/opt/lampp/lampp stop // the command to stop XAMPP
/opt/lampp/phpmyadmin/ config.inc.php // The phpMyAdmin configuration file.
/proc/ // run-time system files - a window into the working of the kernel. Kernel and process information virtual filesystem
/root/ //root's home dir
/sbin/ // programs required for the boot loader and system administration. essential system binaries - utilities for OS administration, needed during the booting process
/srv/ // site-specific data served by the system for protocols such as FTP, WWW, CVS
/tmp/ // temporary files used by programs. Cleared during boot or shut down
/usr/ // should contain only static data. subdirs that contain info used by OS. Files here don't change often and may be shared by multiple systems
/usr/bin/ //? equivalent to Windows' users. User programs managed by the distro's package manager. most user commands - standard Linux utility programs, i.e. binaries not needed in single-user mode
/usr/bin/X11 // symbolic link to /usr/X11R6/bin
/usr/games // games and educational programs
/usr/include/ // header-files included by C programs
/usr/include/X11 // symbolic link to /usr/X11R6/include/X11
/usr/lib // libraries
/usr/lib/X11 // symbolic link to /usr/X11R6/lib/X11
/usr/local/ // local hierarchy - locally important files and dirs that are added to the OS. 
/usr/local/bin/ // progs that a user can run.
/usr/local/sbin/ // system administration programs
/usr/man/ // online manuals
/usr/ports/sysutils/ansible // 
/usr/sbin/ // non-vital essential system binaries - utilities for OS administration after the OS is up and running
/usr/sbin/apachectl // `/usr/sbin/apachectl restart` - restarts Apache
/usr/sbin/a2dissite
/usr/sbin/a2ensite
/usr/sbin/mysqld // mysql daemon, uses MySQL config files. Ask it: `/usr/sbin/mysqld --help --verbose`
/usr/share // architecture-independent data
/usr/share/doc // miscellaneous documentation
/usr/share/info // GNU info system's primary dir
/usr/src // source code
/usr/X11R6 // X Window system, version 11 Release 6
/var/ // files that programs can write to during operations - logs, spool dirs and temp files. variable data - files whose contents vary as the OS runs
/var/lib/
/var/lib/apt/lists/ // can be deleted for an update to be possible
/var/lib/mysql/ // the default location of MySQL's config files
/var/lib/mysql/"DB-Name" // the location of the MySQL DB
/var/lib/mysql/mysql.sock // mysql socket
/var/lib/mysql/users 
/var/log/ // log files
/var/log/apache2/
/var/log/apache2/access_log // (?) log of access : GET from IP addresses
/var/log/apache2/error_log // Apache / PHP5 log files. apache or PHP log files
/var/log/apache2/other_vhosts_access.log
/var/log/lastlog // a record of the last login by each user. (not on Mac) $tail /var/log/lastlog 
/var/log/mariadb/mariadb.log // mysql_log_error
/var/log/messages // system messages from syslogd
/var/log/mysql-slow.log
/var/log/mysql.err // MySQL error log file
/var/log/mysql.log // MySQL log file
/var/log/mysql/ // the default location of MySQL log files
/var/log/mysql/error_log // the error log of MySQL
/var/log/syslog // the Drupal syslog module to route watchdog log entries to this file
/var/log/wtmp // a record of all logins/logouts
/var/mail/
/var/run/mariadb/mariadb.pid // MySQL PID file
/var/spool // spooled app data
/var/www/ // the document root for apache web server. web server's document root
/var/www/drupal // manually created dir to hold all the drupal installation files
/var/www/drupal/autoload.php
/var/www/drupal/composer.json
/var/www/drupal/composer.lock
/var/www/drupal/core/install.php // Initiates a browser-based installation of Drupal, installation through/in the browser
/var/www/drupal/example.gitignore
/var/www/drupal/index.php
/var/www/drupal/LICENSE.txt
/var/www/drupal/modules
/var/www/drupal/profiles
/var/www/drupal/README.txt
/var/www/drupal/robots.txt
/var/www/drupal/sites/
/var/www/drupal/sites/default/ // permisions should be 755 [drwxr-xr-x]:
/var/www/drupal/sites/default/default.services.yml
/var/www/drupal/sites/default/default.settings.php
/var/www/drupal/sites/default/files // used for files such as custom logos, user avatars, and other media associated with your new site.
/var/www/drupal/sites/default/services.yml // this file is designed for overriding the core services.yml file if you need to override it and 99% of sites out there, won't ever need to override the core services.yml file. It is made available if you do need to override those settings though.  In early development, this file was automatically copied and renamed during install, however Stop creating services.yml by default supersedes  the early method. In other words, don't ever worry about default.services.yml services.yml unless something tells you otherwise.
/var/www/drupal/sites/default/settings.php // initial configuration file for the default site. (1) create this file based on default.settings.php. `cp sites/default/default.settings.php sites/default/settings.php`. (2) configure the database location, name, credentials.  (3) chmod from 644 [-rw-r--r--] to 777. (4) run install.php (Drupal installation script) (5) chmod back to 644 [-rw-r--r--]:
/var/www/drupal/sites/development.services.yml
/var/www/drupal/sites/example.settings.local.php
/var/www/drupal/sites/example.sites.php
/var/www/drupal/sites/README.txt
/var/www/drupal/themes/
/var/www/drupal/update.php
/var/www/drupalvm/  // the dir where composer will install drupalVM 
/var/www/drupalvm/drupal/ // For projects that are not `composer`-based. `drush_core_path=/var/www/drupalvm/drupal`
/var/www/drupalvm/drupal/web/ // location on VM where a Drupal site is built (with the default settings) by Composer as configured in Drupal VM. this subdir is only required for `composer` based projects
/var/www/example.com/
/var/www/example.com/public_html/
/var/www/example.com/public_html/index.html
/var/www/html/ // the default root folder of the web server. This is where all the Drupal files and dirs will live
/var/www/WebContent/ // dir created by TPM
/var/www/WebContent/lexus.media/ // created automatically. can be deleted in case of media-related errors 
/var/www/WebContent/lexus.media/media/ // the media files used by lexus.ca
/var/www/html/autoload
/var/www/html/drupal-8.1.2 // ?? step 1: download here and extract, then remove both the archive and the extracted 
/var/www/html/index.html
/var/www/html/info.php // manually created to test the work of Apache and PHP. to check id PHP processing works, open this file in the browser, by going to http://localhost/info.php
/var/www/my-drupal-site