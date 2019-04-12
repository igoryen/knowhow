<?php
    /*
     * Enable error reporting
     */
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
 
    /*
     * Setup email addresses and change it to your own
     */

	$tz = 'America/Toronto';
	$timestamp = time();
	$dt = new DateTime("now", new DateTimeZone($tz)); //first argument "must" be a string
	$dt->setTimestamp($timestamp); //adjust the object to correct timestamp
	// echo $dt->format('d.m.Y, H:i:s');

	$datestamp = $dt->format("Y-M-d, G:i"); 


    $from = "your_email@yourdomain.com";
    $to = "igor.yentaltsev@gmail.com";
    $subject = $datestamp . " - Simple test for mail function";
    $message = $datestamp . " - This is a test to check if php mail function sends out the email";
    $headers = "From:" . $from;
 
    /*
     * Test php mail function to see if it returns "true" or "false"
     * Remember that if mail returns true does not guarantee
     * that you will also receive the email
     */
    if(mail($to,$subject,$message, $headers))
    {
        echo "Test email send.";
    } 
    else 
    {
        echo "Failed to send.";
    }
?>