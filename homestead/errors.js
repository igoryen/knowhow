NAME_NOT_RESOLVED
https://laracasts.com/discuss/channels/general-discussion/homestead-err-name-not-resolved

---------------------------------
if "404 not found", did this:

cd Homestead
vagrant provision // as it said in the terminal output after running "homestead up"
OR
homestead provision
// not sure when to use vagrant provision and when to use homestead provision

Source: http://laravel.io/forum/11-25-2014-homestead-404-not-found?page=1
=================================

---------------------------------

No input file specified.

sites:
    - map: bearberry2.app
      to: /home/vagrant/ig/bearberry2/index.php // <<=== because i have no "public" dir
bash init.sh
vagrant provision
==================================
----------------------------------
added a directory
it is not visible

homestead halt
homestead up

http://stackoverflow.com/questions/28968390/multiple-folders-for-homestead-not-syncing
==================================