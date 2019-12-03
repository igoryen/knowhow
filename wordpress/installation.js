


# Server

    download XAMPP
        PHP 7.* // 180430
    install XAMPP

    start Apache
        problem:



            Port *** used by ***

        Do:
            v01
                ---
                netstat -ao

                    Proto  Local Address          Foreign Address        State           PID
                    TCP    0.0.0.0:80             NASCD158:0             LISTENING       1376

                ---
                Task Manager > Services > PID > 1376 rck > Stop serice

            v02
                ---
                XAMPP Panel > Config > httpd.conf

                old: Listen 80
                new: Listne 8000

                old: ServerName localhost:80
                new: ServerName localhost:8000

                ---
                Skype: 

        if another instance of Apache exists and running...

            Start > type "Administrative tools" > Administrative tools clk > Services > Apache 2.4 > "Started"? > 





# Download 
    download the most current version of the WP package. 
    https://wordpress.org/download/

# Unzip 
    Unzip the downloaded file to a folder on your hard drive

# Password
    Create a secure password for your Secret Key

========================

# Create a new database

    - MySQL Workbench

        # download
        # install
            User: root@localhost
            Pw:  //?

            # Control Panel > System > Advanced > Environment variables > System variables > PATH > add "c:\xampp\mysql\bin\"
            # XAMPP panel > MySQL > Start
            # XAMPP panel > Shell > open > mysql -uroot
            (... unfinished)


            - Create a new Schema
                Name: string01
                Collation: utf8 - utf8_general_ci
                "Apply"

                Review
                    CREATE SCHEMA `ccs` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
                "Apply" > "Finish"


    

    



========================


- Unzip the wordpress archive file 
    into the Downloads folder

- Copy the 'wordpress' folder to 
    C:/xampp/htdocs/ 
    Result: C:/xampp/htdocs/wordpress

- rename 'wordpress' to 'WP' or 'string01' // string01 is the name of your DB
    Result: C:/xampp/htdocs/ccs

- find C:/xampp/htdocs/string01/wp-config-sample.php

- rename it to C:/xampp/htdocs/string01/wp-config.php

- open it and edit it:
    
    define('DB_NAME', 'string01'); 
    define('DB_USER', 'root');
    define('DB_PASSWORD', ''); // blank

    Save and close it.

- XAMPP > Apache > Stop

- Open C:\xampp\apache\conf\httpd-vhosts.conf

    add 

    <VirtualHost *:80>
        ServerAdmin admin@localhost.com
        DocumentRoot "C:/xampp/htdocs/string01"
        ServerName string01.dev
        ServerAlias string01.dev
        <Directory "C:/xampp/htdocs/string01">
            Options Indexes FollowSymLinks Includes ExecCGI
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>

- C:\Windows\System32\drivers\etc\hosts
    add
    127.0.0.1 string01.dev

- XAMPP > Apache > Start

- Open your browser and go to
    http://string01.dev/

    This route takes you to:

    http://ccs.dev/wp-admin/install.php

- pick your language

- Information Needed
    
    Site title: string01
    Username:   string02
    Password:   string03 // autosuggested
    Your email: string04

- Install Wordpress > Click