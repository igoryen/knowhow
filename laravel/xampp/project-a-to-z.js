// 15
https://laravel.com/docs/4.2/quick#installation


# Installation

    # via Laravel Installer // 5

        composer global require "laravel/installer=~1.1"// 1 
        C:\%HOMEPATH%\AppData\Roaming\Composer\vendor\bin // 2
        cd ig // 3
        laravel new banana // 4

    # via Composer // 6
    
        Option 1
            composer create-project laravel/laravel banana 4.2.* // 7
            composer create-project laravel/laravel banana  // 14
            
        Option 2
            https://github.com/laravel/docs/archive/4.2.zip // 8
            mkdir banana
            cd banana
            composer install // 9

# Permissions // 13

    https://laravel.com/docs/4.2/installation

# "Serving" Laravel // 10

    C:\xampp\apache\conf\extra\httpd-vhosts.conf // 16

    //     <VirtualHost *:80>
    //         DocumentRoot "C:\banana\ig\nri_webdev_challenge\public"
    //         ServerName site15
    //         <Directory "C:\banana\ig\nri_webdev_challenge\public">
    //             AllowOverride AuthConfig FileInfo Indexes Limit Options
    //             Allow from all
    //             Require all granted
    //         </Directory>
    //     </VirtualHost>

    // C:\Windows\System32\drivers\etc\hosts

    //     127.0.0.1   site15

    // start XAMPP`s Apache

    php artisan serve // 11
    http://127.0.0.1:8000/
        OR
    php artisan serve --port=8080 // 12
    http://127.0.0.1:8080/



// older
$ cd my-projects-directory
$ composer create-project laravel/laravel my-cool-app // this will install the latest edition of laravel
$ cd my-cool-app
$ composer install
