Source:
https://www.youtube.com/watch?v=2UbpmSNr48c

------------------------------------------
cat /opt/lampp/etc/httpd.conf

cd /opt/lampp/etc
sudo vi +488 httpd.conf
// uncomment the line under #Virtual hosts
// Include etc/extra/httpd-info.conf
==========================================

------------------------------------------
/opt/lampp/etc/extra/httpd-vhosts.conf

sudo vi /opt/lampp/etc/extra/httpd-vhosts.conf
add at the bottom of the page
<VirtualHost *:80> // or 81 if you changed it
	DocumentRoot "a" // a = the absolute path to the index.php of your web app, e.g. home/igor/...
	ServerName "b" // b = the name you will navigate your Browser to, e.g. igoryen.dev
	<Directory "a">
		Require all granted
	</Directory>
</VirtualHost>
==========================================

------------------------------------------
/etc/hosts

sudo vi /etc/hosts
127.0.0.1 	igoryen.dev
==========================================