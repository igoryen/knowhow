order

remove the attributes
([a-z-]*)\=[\"\'][0-9A-Za-zА-Яа-яЁё\=\#\_\-\/\%\(\)\ˈ\:\;\"\'\.\,\?\+\& ]*[\"\']
remove the nodes
<[\/]*([a-z0-9]*)[ ]*[\/]*>

replace first occurence of "-" with "^"
Find: 
^([^—]+)—
Replacewith: 
$1^