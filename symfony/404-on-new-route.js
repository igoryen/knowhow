added new route "/"
Controller and View
works on local
not on prod

cd /var/www/my-app
php bin/console debug:router --env=prod


 ------------------- -------- -------- ------ -------------------------
  Name                Method   Scheme   Host   Path
 ------------------- -------- -------- ------ -------------------------
  app_contact_show    ANY      ANY      ANY    /contact
  app_home_show       ANY      ANY      ANY    /						<===== it exists, but returns 404
  app_projects_show   ANY      ANY      ANY    /projects/{projectName}
 ------------------- -------- -------- ------ -------------------------

//attempt 1: Clear the cache

php bin/console cache:clear // fails, error
php bin/console cache:clear --env=prod // works

// Reason: probably because I was messing around for a few hours after cloned the app from Github

//Looks like I have to clear the cache every time I update the repo on VPS!