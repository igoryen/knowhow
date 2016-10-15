https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet-virtual-server

# log in to the digital ocean website
# create a VPS ("a droplet")
# select a VPS image 
	tab "Distributions"
		- version number
		- bits
			32 bits // if your VPS's RAM is < 3GB
			64 bits
# select VPS size
	- several sizes with a monthly price tag on it
# select VPS region // nearest to you
# select additional options
# select SSH keys
# select how many VPSs and their names
# create your VPS(s)
# log in to your VPS
	- set up your PuTTY
		- start your PuTTY
		- "Host Name:" 111.222.333.444 // your VPS`s IP address from the digital ocean`s control panel>
		- "Port": 22 (!)
		- "Connection type": SSH (!) 
		- Putty > Category > Connection > SSH > "Preferred SSH protocol version": "2 only"
		- Putty > Category > Session > "Saved Sessions" > daffyduck > "Save"
	- log in via your PuTTY
		- Putty > Category > Session > "Saved Sessions" > daffyduck > double click
		- confirm
		- window opens
		- "login as:" > daffyduck 
		- "daffyduck@111.222.333.444's password" > you-re-despicable
# ssh root@111.222.333.444
