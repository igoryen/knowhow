WPM - Go Live Update URLs:

- Make a backup of the WPM network
- go to the site in question
- Run the Go-Live
- My Sites > Sites > Site Address: edit > "Save Changes"
- go to the new url
- if "NOT FOUND: the requested URL /about/ was not found...
- 1.1. Settings > Permalinks >  resave the Permalinks

if you-re getting 404 on pages:
shell:
	access shell to 10.200.12.29 
    edit /etc/httpd/conf.d/vhosts.conf and ssl.conf 
