/
  bin // essential command binaries - files needed to bring the OS up, and run it when it first omes up in single-user mode
  boot // static files of the boot loader - fiels needed to boot the OS
  dev // device files - that represent peripheral devices (disk drives, terminals, printers etc.)
  etc // machine-local system configuration - files administrative, config files, other OS files
    apache 
      conf
        apache.conf // can be edited to set the web server location
    apache2
      sites-avalable
        000-default.conf
        examples.com.conf
    hosts // the local file
    init.d
    mysql
      my.cnf
    opt // config files for add-on software packages kept in /opt
    passwd //  a list of all the users who have permission to use the OS
    php5
      apache2
        php.ini
    X11 // machine local configuration for the X Window System
     
  home // user home dirs 
    daniel //
    jenica //
    joy // 
  lib // shared libraries and kernel modules
    modules // loadable kernel modules
  mnt // mount point for temporary mounting of filesystems
  opt // ("optional" packages) add-on software packages. their config files are in /etc/opt
    lampp // remove this dir to uninstall XAMPP: #rm -rf /opt/lampp
      bin // The XAMPP commands home
        mysql // calls the MySQL monitor
      etc
        httpd.conf // The Apache configuration file, edited if you want to change Apache DocumentRoot directory
        my.cnf // The MySQL configuration file
        php.ini // The PHP configuration file
        proftpd.conf // The ProFTPD configuration file. (since 0.9.5) 
      htdocs // The Apache DocumentRoot directory. 
      lampp
        sudo /opt/lampp/lampp start // the command to start XAMPP
        sudo /opt/lampp/lampp stop // the command to stop XAMPP
      phpmyadmin
        config.inc.php // The phpMyAdmin configuration file. 
  proc // Kernel and process information virtual filesystem
  root // root's home dir
  sbin // essential system binaries - utilities for OS administration, needed during the booting process
  tmp // temporary files
  usr // subdirs that contain info used by OS. Files here don't change often and may be shared by multiple systems
    bin // most user commands - standard Linux utility programs, i.e. binaries not needed in single-user mode
      X11 // symbolic link to /usr/X11R6/bin
    games // games and educational programs
    include // header-files included by C programs
      X11 // symbolic link to /usr/X11R6/include/X11
    lib // libraries
      X11 // symbolic link to /usr/X11R6/lib/X11
    local // local hierarchy - locally important files and dirs that are added to the OS. 
    man // online manuals
    sbin // non-vital essential system binaries - utilities for OS administration after the OS is up and running
    share // architecture-independent data
      doc // miscellaneous documentation
      info // GNU info system's primary dir
    src // source code
    X11R6 // X Window system, version 11 Release 6
  var // variable data - files whose contents vary as the OS runs
    lib 
      apt
        lists // can be deleted for update
      mysql // dir with mysql
        mysql.sock // the socket 

    log // log files
      apache2
        error.log // apache or PHP log files
      lastlog // a record of the last login by each user
      messages // system messages from syslogd
      mysql.err // MySQL error log file
      mysql.log // MySQL log file
      wtmp // a record of all logins/logouts
    mail
    spool // spooled app data
    www // web server's document root
      drupal // manually created dir to hold all the drupal installation files
        autoload.php
        composer.json
        composer.lock
        core
          install.php // Initiates a browser-based installation of Drupal
        example.gitignore
        index.php
        LICENSE.txt
        modules
        profiles
        README.txt
        robots.txt
        sites
          default // should be 755 [drwxr-xr-x]:
            default.services.yml
            default.settings.php
            files // used for files such as custom logos, user avatars, and other media associated with your new site. 
            services.yml // 
              // this file is designed for overriding the core services.yml file 
              // if you need to override it and 99% of sites out there, 
              // won't ever need to override the core services.yml file. 
              // It is made available if you do need to override those settings though. 
              // In early development, this file was automatically copied and renamed 
              // during install, however Stop creating services.yml by default supersedes 
              // the early method. In other words, don't ever worry about default.services.yml 
              // / services.yml unless something tells you otherwise.
            settings.php // initial configuration file for the default site 
              // 1) create this file based on default.settings.php
              // cp sites/default/default.settings.php sites/default/settings.php
              // 2) configure the database location, name, credentials
              // 3) chmod from 644 [-rw-r--r--] to 777 
              // 4) run install.php (Drupal installation script) 
              // 5) chmod back to 644 [-rw-r--r--]:
          development.services.yml
          example.settings.local.php
          example.sites.php
          README.txt
        themes
        update.php
        vendor
        web.config
      example.com
        public_html
          index.html
      test.com
        public_html
          index.html
      html // the default root folder of the web server. This is where all the Drupal files and dirs will live
        autoload
        drupal-8.1.2 // ?? step 1: download here and extract, then remove both the archive and the extracted 
        index.html
        info.php // manually created to test the work of Apache and PHP


