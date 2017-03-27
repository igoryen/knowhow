// this should be done for every application added too /var/www/
// here i am adding directory with the directory name "igoryen.com"
// Option 2: for my symfony3 app /var/www/igoryen3.com

sudo chown -R $USER:$USER /var/www/igoryen.com/public_html
// Option 2:
sudo chown -R $USER:$USER /var/www/igoryen3.com/web

// done only once (?)
sudo chmod -R 755 /var/www

// Create a new conf file based on the default one
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/igoryen.com.conf 
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/igoryen3.com.conf // Option 2:

// edit the new conf file:
sudo vim /etc/apache2/sites-available/igoryen.com.conf 
sudo vim /etc/apache2/sites-available/igoryen3.com.conf // Option 2:
sudo vim /etc/apache2/sites-available/kiwi2.conf// Option 3:

// what is the content?

// enable site igoryen.com
sudo a2ensite igoryen.com.conf // site 1
sudo a2ensite igoryen3.com.conf // site 2
sudo a2ensite kiwi2.conf // site 3


// disable site 000-default
sudo a2dissite 000-default.conf

// reload/restart apache2: ?
sudo systemctl restart apache2 // this one
service apache2 reload // or this one?


sudo vim /etc/hosts
159.203.34.204 igoryen.com