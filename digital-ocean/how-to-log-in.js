
authentication
SSH key pair
you have 2 keys
they are related to each other
"private" key
	a secret key
	its owner is you and you keep it safe
	it is your ID
	like a wax seal
	it means that the person on the other end of the SSH
	is really you
"public" key
	it is associated with your "private" key
	you can share this key with anyone on the internet, hence "public"
	it can only do one thing
	allow you to open (log into) their machine

login
manage your VPSs using logins
logins can use 
	- passwords (less secure, must remember )
	- SSH key pairs (more secure, no need to remember)

once you get your SSH key
you upload it to your VPS
as you create your VPS

you connect to your VPS via an SSH session (like a spiritualistic seance)
you create an SSH session and then connect to your VPS
the piece of software that you use to create SSH sessions is PuTTY
PuTTY is a key-keeper, majordomo, steward, key-maker and key-keeper
PuTTY can also create (generate) SSH keys
and remember which keys go with which VPSs

PuTTY makes SSH key pairs
... "public" key 
Digital Ocean Web Interface (DOWI)
you upload the "public" key to DOWI
create a new VPS instance (droplets) 
so that the new VPS already has your "public" key embedded
then you connect to your VPS
without using a pw
but using your "private" key 

PuTTY helps you connect to your VPS
PuTTYgen makes the keys

you need to install both PuTTY and PuTTYgen

