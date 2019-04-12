180517
https://codex.wordpress.org/Installing_WordPress#Using_the_MySQL_Client
https://premium.wpmudev.org/blog/setting-up-xampp/

$ 180614

Step 1: Download and Extract
----------------------------

    $ https://wordpress.org/download/



Step 2: Create the Database and a User
--------------------------------------
    - phpMyAdmin

        # XAMPP panel > Apache > Port(s) > note the port number (e.g. "80") 
        > WB > http://localhost:80/phpmyadmin/

        # create a new database 

            WB > localhost/phpmyadmin > Databases > Create databases 
                > Database name > 
                    "nas-stg-180712" // for WP on the staging environment a new DB must be created for every migration
                    "nas"
                    "ihusa_cnx" 
                    "nrs"
                > Collation > "utf8mb4_general_ci"
                > Create

            phpMyAdmin icon > main page > tab "User accounts" > "Add user account"
                > User name: > "Use text field" 
                    > nas-stg-180712-user // for WP on the staging environment a new DB user must be created for every migration
                    > (For Potato see _projects/potato/creds.txt) // Potato DB user
                    > (For Peach see _projects/peach/creds.txt) // Peach DB user    
                    > (For Pear see _projects/pear/creds.txt) // Pear DB user 
                    > (For Lime see _projects/lime/creds.txt) // lime DB user                    



                > Host name: > "Local" > "localhost"

                > Password:  > "Use text field" > 
                    > (For Potato see _projects/potato/creds.txt) // DB password
                    > (For Peach see _projects/peach/creds.txt) // DB password
                    > (For Pear see _projects/pear/creds.txt) // DB password
                    > (For Lime see _projects/lime/creds.txt) // DB password



                > Page bottom right > "Go" click
                    You have added a new user.
                    CREATE USER 'wordpress'@'%' IDENTIFIED VIA mysql_native_password USING '***';GRANT USAGE ON *.* TO 'wordpress'@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;

            > tab User accounts >
                > User name: [ your DB user name ] >
                > column "Action": "edit privileges" > 
                > tab "Database" > "Database-specific privileges" > Add privileges to the following databases >
                > [ your DB name ] > Go
                > "Check All" chk > Go 
                    You have updated the privileges for 'wordpress'@'%'.
                    GRANT ALL PRIVILEGES ON `ihusa\_cnx`.* TO 'wordpress'@'%' WITH GRANT OPTION;

            Page top left (above "Databases") > Server: "127.0.0.1"

Step 3: Set up wp-config.php
----------------------------

    You can either create and edit the wp-config.php file yourself, 
    or you can skip this step and let WordPress try to do this itself 
    when you run the installation script (step 5) (you’ll still need to tell WordPress your database information).

Step 4: Upload the files
------------------------
    
    Method 1 // not preferable, use Method 2 (180706)
    ---------
        // http://ihusa-cnx.test/

        # go to C:\xampp\htdocs
        # copy the `wordpress` (26.8 MB) dir into the htdocs/ directory
        # rename from `wordpress` to `ihusa_cnx`

        # rename "wp-config-sample.php" to "wp-config.php"
        # define('DB_NAME', 'ihusa_cnx');
        # define('DB_USER', 'wordpress');
        # define('DB_PASSWORD', '-->'); // see _projects/potato/creds.txt

    Method 2
    --------

        If Local
        --------
            # go to Download
            # find the downloaded WordPress directory 
                // 180524 it's wordpress-4.9.6
                // 180614 -//-
            # go inside the directory to find the "wordpress" directory
            # copy it to the desired location 
                
                // 180614, J:\pear\ 
                // 180524, J:\peach\
                
            # change the directory name from "wordpress" to the name of your project 
                // 180619, J:\lime\nas
                // 180614, J:\pear\nrs
                // 180523, J:\peach\tngoc_wp (because already had peach\tngoc.com )
        If Remote
        ---------
            Filezilla > 
            sudo setfacl -R -m u:igor:rwx /var/www
            Transfer files from Downloads to /var/www/html
            Change name from "wordpress" to "nas"


    Set up virtual host
    -------------------
        // This worked for me on these dates:
        // July 31, 2016
        // May 18, 2018

        // the changes I made in these 3 files

        # Xampp panel > Apache > Stop

        If Local:
        ----------
            # make the changes in these 3 files:
                C:\xampp\apache\conf\httpd.conf // done once
                    - Xampp panel > Apache > Config > Apache (httpd.conf)


                    # Virtual hosts
                    Include conf/extra/httpd-vhosts.conf // <===<< uncomment this

                C:\xampp\apache\conf\extra\httpd-vhosts.conf

                    NameVirtualHost *:80

                    ...

                    <VirtualHost *:80>
                        DocumentRoot "J:/peach/tngoc_wp" <--- 
                        ServerName tngoc.test
                        <Directory "J:/peach/tngoc_wp"> <---
                            AllowOverride AuthConfig FileInfo Indexes Limit Options
                            #Order Deny,All
                            Allow from all
                            #Order allow,deny
                            Require all granted
                        </Directory>
                    </VirtualHost>

                C:\Windows\System32\drivers\etc\hosts

                    127.0.0.1           tngoc.test
                    127.0.0.1           nrs.test // 180615

            # XAMPP panel > Apache > Start

            //=================================
            // Source:
            // http://stackoverflow.com/questions/35668594/create-a-virtual-host-in-xamp-windows-10
            // =================================

        If Remote:
        ----------
            sudo yum install httpd


Step 5: Run the Install Script
------------------------------
    # Point your Web browser to:

    when method 1

        "http://localhost:8765/ihusa_cnx" > Enter > 
        "http://localhost:8765/ihusa_cnx/wp-admin/setup-config.php"

    when method 2

        "http://tngoc.test" >
        http://tngoc.test/wp-admin/setup-config.php

        // 180615
        http://nrs.test >
        http://nrs.test/wp-admin/setup-config.php



    read > "Let's go!"


    Database Name: [ your DB name]
    Username: [ your DB user name]
    Password: 
        // see _projects/lime/creds.txt
        // see _projects/potato/creds.txt
        // see _projects/peach/creds.txt
        // see _projects/pear/creds.txt


    Database Host: "127.0.0.1"
    Table prefix: ???


    > Submit

    > Run the installation


Step 6: WordPress Installation
------------------------------

    Site title: [your site title]
    Username: [ your WP installation user name ]
    Password:
    Email: 

    > Install WordPress
    > "Success!"
    > Log In > 
        username:
        password: 

    > "Install WordPress"