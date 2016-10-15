        // create a MySQL database and a user for our application.

        // First, access the MySQL client using the MySQL root account.

        mysql -u root -p

        // When asked for a password enter the same password you used when running mysql_secure_installation.
        password 4

        // create the application database.
        mysql> CREATE DATABASE database4;

        // if you don't already have a user, then 
        // create a MySQL user and provide them access to your newly created database.
        CREATE USER 'user3'@'localhost' IDENTIFIED BY 'password6';

        // otherwise
        // Grant the existing user (user3) 
        // the right permissions over our application database (on all tables inside the database3 database). 
    
        // This can be done with:
        GRANT ALL PRIVILEGES ON database4.* TO 'user3'@'localhost';

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

        // success if you see your database in your list: 
        // information_schema, database3, and dtabase4.

        // exit the MySQL client.
        quit;
