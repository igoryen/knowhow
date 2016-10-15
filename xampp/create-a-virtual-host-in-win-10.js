// on July 31, 2016
// this worked for me
// the changes I made in these 3 files

# stop the Apache in the Xampp panel

# make the changes in these 3 files:

C:\xampp\apache\conf\httpd.conf

	# Virtual hosts
	Include conf/extra/httpd-vhosts.conf // <===<< uncommented

C:\xampp\apache\conf\extra\httpd-vhosts.conf

	NameVirtualHost *:80

	...

	<VirtualHost *:80>
	    DocumentRoot "C:\aaa\ig\bearberry2\public"
	    ServerName site1
	    <Directory "C:\aaa\ig\bearberry2\public">
	        AllowOverride AuthConfig FileInfo Indexes Limit Options
	        #Order Deny,All
	        Allow from all
	        #Order allow,deny
	        Require all granted
	    </Directory>
	</VirtualHost>

C:\Windows\System32\drivers\etc\hosts

	127.0.0.1 		site1
	127.0.0.1 		site2
	127.0.0.1 		site3
	127.0.0.1 		site4
	127.0.0.1 		site5
	127.0.0.1 		site6
	127.0.0.1 		site7
	127.0.0.1 		site8
	127.0.0.1 		site9
	127.0.0.1 		site10

# start the Apache in the Xampp panel
//=================================
http://stackoverflow.com/questions/35668594/create-a-virtual-host-in-xamp-windows-10
// =================================