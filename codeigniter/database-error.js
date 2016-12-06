
WS:
     "A Database Error Occurred"
     "Unable to connect to your database server using the provided settings."

Hypothesis:
     this file was committed
     /system/application/config/database.php
     it sets the database to "local" but it should be set to "dev"

Solution
     if( $active_group == null )
     {
         $logger->info( "ENV_NAME environment variable was not set, defaulting to local" );
         $active_group = 'local'; <---<<<
     }

     - local: $active_group = 'dev' // from 'local' to 'dev'
     - commit 
     - push
     - refresh
     Works!
     - local: $active_group = 'local' // back to 'local'