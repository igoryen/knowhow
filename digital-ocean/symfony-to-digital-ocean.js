
https://www.digitalocean.com/community/tutorials/how-to-deploy-a-symfony-application-to-production-on-ubuntu-14-04


Step 1 — Install the Server Dependencies

    // update the package manager cache.
    sudo apt-get update

    // Install these: 
    // 1) git (to check out the application files) 
    // 2) acl (to set the right directory permissions when installing the application) 
    // two PHP extensions: 
    // 3) php7.0-cli to run PHP on the command line 
    // 4) php7.0-curl for Symfony

    sudo apt-get install git php7.0-cli php7.0-curl acl


    // Install composer system-wide (to download the application dependencies.)
    sudo curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer

Step 2 — Configure MySQL

    A. Set the Default Collation and Charset

        // Symfony recommends setting up the charset and collation of your database to utf8. 
        // Most databases will use Latin type collations by default, which will cause unexpected results when retrieving data previously stored in the database, like weird characters and unreadable text. 
        // There's no way to configure this at application level, so we need to edit the MySQL configuration file to include a couple definitions.
        // Open the file /etc/mysql/my.cnf with your favorite command line editor.

        sudo vim /etc/mysql/my.cnf // failed
        sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf // found at http://stackoverflow.com/questions/30635041/mysql-5-6-ubuntu-15-04-cannot-find-correct-my-cnf-file

        // find the [mysqld] block. 
        // Under the commented out section "Basic Settings", 
        // add the collation-server and character-set-server options .

        // sopy-paste these 2 lines
        collation-server     = utf8mb4_general_ci # Replaces utf8_general_ci
        character-set-server = utf8mb4            # Replaces utf8

        // Restart MySQL so the changes take effect.
        sudo service mysql restart

    B. Create a User and a Database for the Application

        // create a MySQL database and a user for our application.

        // First, access the MySQL client using the MySQL root account.

        mysql -u root -p

        // When asked for a password enter the same password you used when running mysql_secure_installation.
        password 4

        // create the application database.
        mysql> CREATE DATABASE database3;

        // create a MySQL user and provide them access to your newly created database.
        CREATE USER 'user3'@'localhost' IDENTIFIED BY 'password6';

        // Grant this user the right permissions over our application database (on all tables inside the database3 database). 
    
        // This can be done with:
        GRANT ALL PRIVILEGES ON database3.* TO 'user3'@'localhost';

        // apply the changes
        mysql> FLUSH PRIVILEGES;

        // Test if everything is working as expected: 
        // exit the MySQL client.
        quit;

        // log in again, this time using the new MySQL user and password you just created. 
        // In this example, we are using the username todo-user, with the password todo-password.

        mysql -u user3 -p
        // enter password
        password 6

        // check which databases this user has access to:

        SHOW DATABASES;

        // success if you see only two databases: 
        // information_schema and database3.
        // This means the new user was successfully created with the right privileges.

        // exit the MySQL client.
        quit;

Step 3 — Check Out the Application Code


    // Deployment is an extensive subject 
    // due to the unique nature of most applications, even if we only consider Symfony projects. 
    // It's hard to generalize because each use case can require very specific deployment steps, 
    // like migrating a database or running extra setup commands.

    // In order to simplify the tutorial flow, we are going to use a basic demo application built with Symfony. 
    // You can also use your own Symfony application, 
    // but keep in mind that you might have to execute extra steps depending on your application needs.

    // Our application is a simple to-do list which allows you to add and remove items, and change each item’s status. 
    // The to-do items are stored in a MySQL database. The source code is available on GitHub.

    // We are going to use Git to check out the application code. 
    // The next step is to choose a location that will serve as our application root directory. 
    // Later on, we will configure the web server accordingly. 
    // For this tutorial, we are going to use /var/www/todo-symfony, so create that directory now.

    // Create the location to serve as the app's root directory

    // for the tutorial:
    sudo mkdir -p /var/www/todo-symfony

    // my own
    sudo mkdir -p /var/www/app3

    // Before cloning the repository, let's change the folder owner and group so we are able to work with the project files using our regular user account. 
    // Replace sammy with your sudo non-root username.

    sudo chown sammy:sammy /var/www/app3

    // Now, move to the parent directory and clone the application.

    cd /var/www
    git clone https://github.com/php-demos/todo-symfony.git todo-symfony

Step 4 — Fixing the Folder Permissions
    
    // The application files are now located at /var/www/todo-symfony, 
    // a directory owned by our system user (in this tutorial, we are using sammy as example). 
    // However, the web server user (usually www-data) also needs access to those files. 
    // Otherwise, the web server will be unable to serve the application. 
    // Apart from that, there are two directories that require a special permissions arrangement: 
    // app/cache and app/logs. 
    // These directories should be writable by both the system user and the web server user.

    // We'll use ACL (Access Control Lists) for configuring these special permissions. 
    // ACLs enable more fine-grained access rights for files and directories, 
    // which is what we need to set up the correct permissions while avoiding too permissive arrangements.

    // First, 
    // allow the user "www-data" access to the files inside the application folder. 
    // Give this user a read + execute permission (rX) in the whole directory.
    cd /var/www
    sudo setfacl -R -m u:www-data:rX app3

    // Next, set up special permissions for the cache and logs folders. 
    // Give read + write + execute permissions (rwX) to the user www-data 
    // in order to enable the web server to write only in these directories.

    /sudo setfacl -R -m u:www-data:rwX todo-symfony/app/cache todo-symfony/app/logs // for tutorial
    sudo setfacl -R -m u:www-data:rwX app3/ // worked. just give the whole app to www-data, since you're not supposed to develop on the deployment server anyway

    // Finally, 
    // define that all new files created inside the app/cache and app/logs folders 
    // follow the same permission schema we just defined, 
    // with read, write, and execute permissions to the web server user. 
    // Do this by repeating the setfacl command you just ran, 
    // but this time adding the -d option.

    /sudo setfacl -dR -m u:www-data:rwX todo-symfony/app/cache todo-symfony/app/logs // fail
    sudo setfacl -dR -m u:www-data:rwX app3

    // check which permissions are currently in place in a given directory
    /getfacl todo-symfony/app/cache // for tutorial
    getfacl app3/

Step 5 — Set Up the Application
    // You have now the application files in place, 
    // but you still need to:
    // - install the project dependencies and 
    // - configure the application parameters.

    // Symfony is built to work well across different environments. 
    // By default, it will use development settings, which influences the way it handles cache and errors. 
    // Development environments have 
    // more extensive and detailed logs, 
    // less cached content, and 
    // errors are exhibited in a prominent way to simplify debugging. 
    // This is useful for developing the application, 
    // but it's not a good practice for production environments.

    // Tune up your application for production, 
    // To do that, define an environment variable that tells Symfony 
    // that you’re running this your application on a production environment.

    export SYMFONY_ENV=prod

    // Next, 
    // install the project dependencies. 

    // Go to the application folder 
    cd app3
    // check if zip and unzip commands are working
    apt-get update
    apt-get install zip unzip

    // run composer install.
    // execution time: a few minutes
    composer install --no-dev --optimize-autoloader
    
    // At the end of the installation process, 
    // you should be prompted to provide some information that will populate the parameters.yml file. 
    // This file contains important information for the application, like the database connection settings. 
    // You can press ENTER to accept the default values for all of these, 
    // except for the database name, username, and password. 
    // For those, use the values you created in step 2.

    Output
    Creating the "app/config/parameters.yml" file
    Some parameters are missing. Please provide them.
    database_host (127.0.0.1): 
    database_port (null): 
    database_name (symfony): database3 / !!! did not do this, now must redo it.
    database_user (root): user3
    database_password (null): password6
    . . .

    // When the installation finishes, 
    // check the database connection with the doctrine:schema:validate console command.
    php bin/console doctrine:schema:validate // Symfony 3
    php app/console doctrine:schema:validate // Symfony < 3



    // The OK line in the output means 
    // that the database connection is working. 
    // The FAIL line is expected because we haven't created the database schema yet,
    // so do that next:

    php bin/console doctrine:schema:create


    // This will create all the application tables in the configured database, 
    // according to the metadata information obtained from the application entities.

    // When migrating an existing application, 
    // you should avoid using doctrine:schema:create and doctrine:schema:update commands directly, 
    // and do a database migration instead. 
    // In our case, a migration is not necessary 
    // because the application is supposed to be installed with a clean, empty database.

    // Now, clear the cache.
    php app/console cache:clear --env=prod --no-debug // for Symfony 2*
    // or
    php bin/console cache:clear --env=prod --no-debug
    
    // lastly, 
    // generate the application assets.
    php app/console assetic:dump --env=prod --no-debug // assetic is for Symfony up to 3

Step 6 — Set Up the Web Server
    
    // The only thing left to do is 
    // to configure the web server. 
    // NB: If you haven't done this before!!!
    // 2 steps: 
    // 1) set the date.timezone directive in php.ini, 
    // 2) update the default website config file (either on Apache or Nginx) for serving our application.

    // We'll see how to accomplish these steps on both LEMP and LAMP environments.

    A. Configuration Steps for Nginx + PHP-FPM // not applicable

        // Start by editing the default php.ini file 
        // to define the server's timezone. 
        // This is a requirement for running Symfony applications, 
        // and it's usually commented out on fresh server installations.

        // Open the file /etc/php/7.0/fpm/php.ini.

        sudo vim /etc/php/7.0/fpm/php.ini 
        
        // Search for the line containing date.timezone. 
        // Uncomment the directive by removing the ; sign at the beginning of the line, 
        // and add the appropriate timezone for your application. 
        // In this example we'll use Europe/Amsterdam, but you can choose any supported timezone.


        // Save the file and exit. 
        // To apply the changes, restart PHP.

        sudo service php5-fpm restart // fail
        // NB:
        // used this for digital ocean
        // apt install upstart
        // http://serverfault.com/questions/189940/how-do-you-restart-php-fpm

        // Next, 
        // replace the default website config file with a one customized for serving a Symfony application. 
        // Create a backup of the current default website config first.

        cd /etc/nginx/sites-available
        sudo mv default default-bkp
        
        // Create a new file to replace the old one.

        // sudo nano /etc/nginx/sites-available/default
        // Paste the following content in the file. 
        // Don't forget to replace the server_name values to reflect your server domain name or IP address.

        /etc/nginx/sites-available/default
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        server {
            server_name example.com www.example.com your_server_ip;
            root /var/www/todo-symfony/web;

            location / {
                # try to serve file directly, fallback to app.php
                try_files $uri /app.php$is_args$args;
            }

            location ~ ^/app\.php(/|$) {
                fastcgi_pass unix:/var/run/php5-fpm.sock;
                fastcgi_split_path_info ^(.+\.php)(/.*)$;
                include fastcgi_params;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                # Prevents URIs that include the front controller. This will 404:
                # http://domain.tld/app.php/some-path
                # Remove the internal directive to allow URIs like this
                internal;
            }

            error_log /var/log/nginx/symfony_error.log;
            access_log /var/log/nginx/symfony_access.log;
        }
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Save the file and exit. To apply the changes, restart Nginx.

        sudo service nginx restart
    
    B. Configuration Steps for Apache + PHP5 Web Server

        // start by 
        // editing the default php.ini file to define the server's timezone. 
        // This is a requirement for running Symfony applications, 
        // and it's usually commented out on fresh server installations.

        // Open the file /etc/php5/apache2/php.ini:

        sudo vim /etc/php/7.0/apache2/php.ini 

        // Search for the line containing date.timezone. 
        // Uncomment the directive by removing the ; sign at the beginning of the line, 
        // and add the appropriate timezone for your application. 
        // In this example we'll use Europe/Amsterdam, but you can choose any supported timezone.

        // modified /etc/php7.0/fpm/php.ini
        [Date]
        ; Defines the default timezone used by the date functions
        ; http://php.net/date.timezone
        date.timezone = America/Toronto

        // Save the file and exit. 
        
        // Now, replace the default website config file with a custom one, 
        // tailored for serving a Symfony application. 

        cd /etc/apache2/sites-available

        // Create a backup of the current default website config.
        sudo mv 000-default.conf default-bkp.conf


        // Create a new file to replace the old one.
        sudo vim /etc/apache2/sites-available/000-default.conf

        // NB
        // it's better to keep 000-default.com
        // but to create a new file named 'your-app-name.conf'
        
        // Paste the following content in the file.

        /etc/apache2/sites-available/000-default.conf
        // or
        /etc/apache2/sites-available/{your app name}.conf

        // NB:
        // 1) app3 = is the dummy value. Replace it with the real name of your app3
        // 2) check your Apache version:
        apachectl -V
        // if it is 2.4
        // replace "Order Allow,Deny" with "Require all granted"  
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <VirtualHost *:80>

            DocumentRoot /var/www/app3/web
            <Directory /var/www/app3/web>
                AllowOverride None
                Require all granted
                Allow from All

                <IfModule mod_rewrite.c>
                    Options -MultiViews
                    RewriteEngine On
                    RewriteCond %{REQUEST_FILENAME} !-f
                    RewriteRule ^(.*)$ app.php [QSA,L]
                </IfModule>
            </Directory>

            # uncomment the following lines if you install assets as symlinks
            # or run into problems when compiling LESS/Sass/CoffeScript assets
            # <Directory /var/www/project>
            #     Options FollowSymlinks
            # </Directory>

            ErrorLog /var/log/apache2/symfony_error.log
            CustomLog /var/log/apache2/symfony_access.log combined
        </VirtualHost>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // If you're using a domain name to access your server instead of just the IP address, 
        // you can optionally define the ServerName and ServerAlias values, as shown below. 
        // If not, you can omit them.

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        /etc/apache2/sites-available/000-default.conf

        <VirtualHost *:80>
            ServerName example.com
            ServerAlias www.example.com

            DocumentRoot /var/www/todo-symfony/web
        . . .
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Save the file and exit. 

        // Enable mod_rewrite for Apache 
        // (if you haven't done it for previous apps)
        sudo a2enmod rewrite

        // :: IMPORTANT!
        // see 05-set-up-virtual-host
        // for necessary steps 
        // in /etc/apache2/sites-available

        // enable site igoryen3.com (is it necessary?)
        sudo a2ensite igoryen3.com.conf
        
        // To apply all the changes, restart Apache.
        sudo service apache2 restart

Step 7 — Accessing the Application

    http://your_server_ip
    http://igoryen.com/






// ------------------------------------------
// sudo vim /etc/apache2/sites-available/igoryen.com.conf
       
// <VirtualHost *:80>
//     ServerAdmin admin@igoryen.com
//     ServerName igoryen.com
//     ServerAlias www.igoryen.com
//     DocumentRoot /var/www/igoryen3.com/web
//     ErrorLog ${APACHE_LOG_DIR}/error.log
//     CustomLog ${APACHE_LOG_DIR}/access.log combined
// </VirtualHost>
// ------------------------------------------

// // restart Apache (To apply all the changes)

// sudo service apache2 restart