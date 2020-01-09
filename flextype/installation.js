1) J:\riberry\b
2) https://flextype.org/en/downloads
3) download the package
4) unzip in J:\riberry\b -- 7z > Extract here
5) C:\xampp\apache\conf\extra\httpd-vhosts.conf

	<VirtualHost *:80>
	    DocumentRoot "J:/riberry/b"
	    ServerName riberry.local
	    <Directory "J:/riberry/b">
	        AllowOverride AuthConfig FileInfo Indexes Limit Options
	        #Order Deny,All
	        Allow from all
	        #Order allow,deny
	        Require all granted
	    </Directory>
	</VirtualHost>

6) C:\Windows\System32\drivers\etc\hosts

	127.0.0.1           riberry.local
7) XAMPP > Apache Start

8) Browser > http://riberry.local/
