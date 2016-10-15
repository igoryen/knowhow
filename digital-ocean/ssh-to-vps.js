SSH = Secure SHell

Server Information and Login Credentials

In order to connect to a remote Linux server via SSH, you must have following:

    daffyduck - User name: The remote user to log in as. The default admin user, or Superuser, on most Linux servers is root
    you-re-despicable - Password and/or SSH Key: The password that is used to authenticate the user that you are logging in as. If you added a public SSH key to your droplet when you created it, you must have the private SSH key of the key pair (and passphrase, if it has one)
    111.222.333.444 - Server IP address: This is the address that uniquely identifies your server on the Internet, and can be found in your DigitalOcean Droplets page

Windows:

	- start PuTTY
	- initiate the connection
		the session name > double click 
		the security alert > accept
	- authenticate 