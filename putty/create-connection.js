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