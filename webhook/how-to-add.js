# make sure the server has php installed 
	php -v

# make sure the server has git installed


# put the deploy.php file in the root dir of the project
	if the folder with the git project is called tngoc.com then the path to the deploy.php script must be this:
	http://htmltest.nationwideappraisals.com/sandbox/tngoc.com/deploy.php
# go to github, your repo
# select tab "Settings" (in the same row with "Code", "Pull requests", "Project", etc)
# on the left sidebar, select "Webhooks"
# add a new URL - the absolute path to your script
	e.g. http://blabla.bleubleu.com/banana/apple/deploy.php

Now every "git push" to the repo on github will trigger a "git pull" on the server. You will not have to ssh to the server and do the "git pull" manually.