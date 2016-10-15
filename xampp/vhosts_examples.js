# eggfruit-mvc
<VirtualHost *:80>
    DocumentRoot "C:\ig\eggfruit_mvc\public"
    ServerName eggfruitmvc.local
    <Directory "C:\ig\eggfruit_mvc\public">
        AllowOverride AuthConfig FileInfo Indexes Limit Options
        #Order Deny,All
        Allow from all
        #Order allow,deny
        Require all granted
    </Directory>
</VirtualHost>

# eggfruit
<VirtualHost *:80>
    DocumentRoot "C:\ig\eggfruit"
    ServerName eggfruit.local
    <Directory "C:\ig\eggfruit">
        AllowOverride AuthConfig FileInfo Indexes Limit Options
        #Order Deny,All
        Allow from all
        #Order allow,deny
        Require all granted
    </Directory>
</VirtualHost>	