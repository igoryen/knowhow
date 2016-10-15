https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean

// Step One—Look Up Information with WHOIS
// to set up your host name 
// first: change your domain name server to point to the DigitalOcean name servers. 
// You can do this through your domain registrar’s website. 
// You don't remember where you registered your name? 
// you can look it up using “WHOIS”, a protocol that displays a site's identifying information, 
// such as the IP address and registration details.

apt install whois

// open the terminal
whois igoryen.com

	Whois Server Version 2.0

	Domain names in the .com and .net domains can now be registered
	with many different competing registrars. Go to http://www.internic.net
	for detailed information.

	   Domain Name: IGORYEN.COM
	   Registrar: GODADDY.COM, LLC
	   Sponsoring Registrar IANA ID: 146
	   Whois Server: whois.godaddy.com
	   Referral URL: http://www.godaddy.com
	   Name Server: NS1.DIGITALOCEAN.COM
	   Name Server: NS2.DIGITALOCEAN.COM
	   Name Server: NS3.DIGITALOCEAN.COM
	   Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
	   Status: clientRenewProhibited https://icann.org/epp#clientRenewProhibited
	   Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
	   Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
	   Updated Date: 08-may-2015
	   Creation Date: 07-may-2013
	   Expiration Date: 07-may-2017

	>>> Last update of whois database: Fri, 05 Aug 2016 03:49:35 GMT <<<

	For more information on Whois status codes, please visit https://icann.org/epp

	NOTICE: The expiration date displayed in this record is the date the
	registrar's sponsorship of the domain name registration in the registry is
	currently set to expire. This date does not necessarily reflect the expiration
	date of the domain name registrant's agreement with the sponsoring
	registrar.  Users may consult the sponsoring registrar's Whois database to
	view the registrar's reported date of expiration for this registration.

	TERMS OF USE: You are not authorized to access or query our Whois
	database through the use of electronic processes that are high-volume and
	automated except as reasonably necessary to register domain names or
	modify existing registrations; the Data in VeriSign Global Registry
	Services` ("VeriSign") Whois database is provided by VeriSign for
	information purposes only, and to assist persons in obtaining information
	about or related to a domain name registration record. VeriSign does not
	guarantee its accuracy. By submitting a Whois query, you agree to abide
	by the following terms of use: You agree that you may use this Data only
	for lawful purposes and that under no circumstances will you use this Data
	to: (1) allow, enable, or otherwise support the transmission of mass
	unsolicited, commercial advertising or solicitations via e-mail, telephone,
	or facsimile; or (2) enable high volume, automated, electronic processes
	that apply to VeriSign (or its computer systems). The compilation,
	repackaging, dissemination or other use of this Data is expressly
	prohibited without the prior written consent of VeriSign. You agree not to
	use electronic processes that are automated and high-volume to access or
	query the Whois database except as reasonably necessary to register
	domain names or modify existing registrations. VeriSign reserves the right
	to restrict your access to the Whois database in its sole discretion to ensure
	operational stability.  VeriSign may restrict or terminate your access to the
	Whois database for failure to abide by these terms of use. VeriSign
	reserves the right to modify these terms at any time.

	The Registry database contains ONLY .COM, .NET, .EDU domains and
	Registrars.
	fgets: Connection reset by peer

// Step Two—Change Your Domain Server

// # Access the control panel of your domain registrar
// # find the fields called “Domain Name Server.” 
// The forms for my domain registrar looked like this (image)

// # Point your name servers to DigitalOcean and 
// # fill in three Domain Name Server fields. 
// # Once done, save your changes and exit.

// The DigitalOcean domain servers are

    ns1.digitalocean.com
    ns2.digitalocean.com
    ns3.digitalocean.com

// verify that the new name servers are registered 
whois igoryen.com

// the correct output
	Domain Name: EXAMPLE.COM
   Registrar: ENOM, INC.
   Whois Server: whois.enom.com
   Referral URL: http://www.enom.com
   Name Server: NS1.DIGITALOCEAN.COM
   Name Server: NS2.DIGITALOCEAN.COM
   Name Server: NS3.DIGITALOCEAN.COM
   Status: ok

// Although the name servers are visible through WHOIS, 
// it may take an hour or two for the changes to be reflected on your site.

//================
// Step Three—Configure your Domain

// # move into the DigitalOcean control panel.

# "Networking" > "Add Domain" 
// fill in the the domain name field and IP address of the server 
// you want to connect it to on the subsequent page. 
# Domain: "igoryen.com" 
# Droplet or Custom IP: 159.203.34.204
// Note: The domain name does not have a www at the beginning.

Click on "igoryen.com"

// You are on a page where you can enter all of your site details. 
// To make a new hostname, 
// you only need to fill in the A record. 
// NOTE: If you are using an IPv6 address, you should enter it into the AAAA record.

// A records:
// Use this space to 
// enter in the IP address of the droplet that you want to host your domain name on 
// and the host name itself, 
// [the host name is] a name prepended to your domain name. 
// For example: to create
// tarboz.igoryen.com ...

"Select Record Type" > "A" 
"Enter Name": 		tarboz
"Enter IP Address": 159.203.34.204

Click "Create a record" // to save

Result:
A 	tarboz	159.203.34.204

// ==================================================================
// How do I connect my IP to a domain name with nothing before it 
// (this should also occur by default when you add a domain):
http://igoryen.com

// To accomplish this, 
// create a new hostname with the symbol "@' in the hostname field. 
"Select Record Type" > "A" 
"Enter Name": 		@
"Enter IP Address": 159.203.34.204
Result:
A @ 159.203.34.204

// ==================================================================


// CNAME Records: 
// The CNAME record works as an alias of the A Record, 
// pointing a subdomain to an A record — 
// if an A Record’s IP address changes, the CNAME will follow to the new address. 
// How do I prepend "www" to my URL? 
"Select Record Type" > "CNAME"
"Enter Name": 		www
"Enter IP Address": @
Click "Create a record" // to save
Result: 
CNAME	www	igoryen.com

//=================================================
// Hod to set up a catchall or wildcard CNAME record 
// that will direct any subdomain to the designated A record 
// (for example, if a visitor accidentally types in wwww instead of www). 
// This can be accomplish with an asterisk in the CNAME name field.

"Select Record Type" > "CNAME"
"Enter Name": 		* // asterisk
"Enter IP Address": @ // at
Click "Create a record" // to save
Result: 	
CNAME	*	igoryen.com

//=======================================
// How to set up a mail server on my domain?
// Do so in the MX Records.

// MX Records: The MX Records fields should be filled in 
// with the hostname and priority of your mail server, a value designating the order in which the mail servers should be attempted to be reached. Records always end with a "."A generic MX record looks something like this: mail1.example.com.

// Below is an example of MX records set up for a domain that uses google mail servers (note the period at the end of each record):

//=============================================
// next wait a few hours
// information will take a while to propagate, 
// and the Name Server information will be automatically filled in. 
// Your domain name name should be up and supported in a few hours.

// confirm, after some time has passed, 
// that the new host name has been registered 
// ping your host name:
ping tarboz.igoryen.com
