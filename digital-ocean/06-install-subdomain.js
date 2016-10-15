https://www.digitalocean.com/community/questions/how-do-i-setup-subdomains-for-my-droplet
// Assumed:
// the latest Ubuntu on my droplet 
// with LAMP 
------------------------------------------
create
(1) /var/www/tarboz/public_html/index.html // with content
(2) /var/www/tarboz/index.php
------------------------------------------
# Go to Digital Ocean Control Panel
# Open DNS settings
# "Select Record Type" > A
# "Enter Name" > "tarboz.igoryen.com." // mind the trailing period at the end!
# "Enter IP address" > 159.203.34.204 
# Press "Create A Record"
------------------------------------------
sudo vim /etc/apache2/sites-available/igoryen.com.conf
sudo vim /etc/apache2/sites-available/kiwi2.conf

       
<VirtualHost *:80>
    ServerAdmin admin@igoryen.com
    ServerName harvesters.igoryen.com
    ServerAlias www.igoryen.com
    DocumentRoot /var/www/morris/public
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
------------------------------------------

sudo systemctl restart apache2
------------------------------------------
http://tarboz.igoryen.com
http://www.igoryen.com