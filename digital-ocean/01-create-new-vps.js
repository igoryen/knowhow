# choose an image
# choose a size
# choose a datacenter region

--------------------
// generate the keys
# start PuTTYgen
# "Parameters" > "Type of key to generate" > "SSH-2 RSA" > "Actions" > "Generate"
# do the entropy (chaotic random mouse movements)
# see the created public key
# "Actions" > "Save public key" > select a folder > name the file > give it .ppk extension  > Save
// don't create a passphrase
# "Key" > "Public key for pasting" > select a text > paste it into a text file > name the file > give it .txt extension  > Save

-------------------------
// Upload the new public key to Digital Ocean
# go to your profile on the Digital Ocean website > find "Add your SSH Keys" > "New SSH key"
# open your public key in a text editor > Copy > Paste it into the window > add the name of the key > "Create SSH Key"

---------------------------
// Create a VPS with the public SSH key embedded
# finalize and create - 1 droplet
# click "Create"
// see the progress bar of how the VPS is created
-----------------------------
// Set Up an SSH Session with SSH Keys in PuTTY
# start PuTTY
# "Host Name:" 111.222.333.444 // your VPS`s IP address from the digital ocean`s control panel>
# "Port": 22 (!)
# "Category" > "Connection" > "Data" > "Login details" > "Auto-login Username" > root // initially
# "Category" > "Connection" > "SSH" > "Auth" > "Authentication Parameters" > "Private key file for authentication" > Browse > private-key.ppk 
# "Category" > "Session" > "Saved Sessions" > give a name > "Save"

--------------------------------

// connect to your VPS
# start your PuTTY
# "Saved Sessions" > pick the session > "Load" > "Open"
// you automatically get logged in as root: e.g.
// root@ubuntu-512-mb-tor1:~#