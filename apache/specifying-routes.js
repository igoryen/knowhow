cd etc/httpd/conf // a file
cat httpd.conf | grep banana // check how many instances the string has in the file
vim httpd.conf

	create vhost configuration
:x // to save and close

service httpd status // to check the status
service configtest // to check for syntax errors
service restart graceful // to gracefully restart the server