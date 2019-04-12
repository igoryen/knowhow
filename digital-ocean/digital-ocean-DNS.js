https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts

//Introduction

// what is DNS?
// the Domain Name System

// part of configuring websites and servers. 
// How will it help me if I Understanding how DNS works?
// (1) You will be able to diagnose problems with configuring access to your websites 
// (2) It will allow you to broaden your understanding of what's going on behind the scenes.

// goal here:
// ready to set up your domain name with DigitalOcean or set up your very own DNS server.

// Goal: 
// Set up your own servers to resolve your domai
// Set up your domains in the control panel

//===================
// Domain Terminology

// Domain Name System (DNS)
	// the networking system in place
	// [what does 'in place' mean? ] 
	// it allows us to resolve human-friendly names to unique addresses.
	// e.g. DNS resolves "igoryen.com" to "111.222.333.444"

// Domain Name
	// the human-friendly name 
	// e.g. "igoryen.com"
	// the domain name here is 'igoryen' 
	// or more generally 'igoryen.com'
	// We are used to associating a domain name with an internet resource. 
	// igoryen.com is a URL
	// the 'igoryen.com' URL is associated with the servers owned by igoryen. 
	// The DNS allows us to reach the igoryen's servers when we type "igoryen.com" into our browsers.

// IP Address
	// 111.222.333.444
	// a network addressable location.
	// i.e. a location that can be addressed from a network 
	// Each IP address must be unique within its network. 
	// When we are talking about websites, 
	// this network is the entire internet.

	// there are forms of IP addresses
	// the most common form of IP addresses is IPv4, 
	// IPv4 IP addresses are written as four sets of numbers
	// each set has up to three digits
	// each set separated by a dot. 
	// For example, "111.222.111.222" could be a valid IPv4 IP address. 
	// With DNS, we map a domain name (like igoryen.com) to that address 
	// Reason: so that you do not have to remember a complicated set of numbers for each place you wish to visit on a network.

// Top-Level Domain
	// the "com" in "igoryen.com"
	// domain name has parts
	// A top-level domain = TLD
	// the most general part of the domain. 
	// The TLD is the furthest portion to the right (as separated by a dot). 
	// the "com" in "igoryen.com"
	// also "net", "org", "gov", "edu", and "io".

	// TLDs are at the top of the hierarchy in terms of domain names. 
	// Certain parties are given management control over TLDs 
	// This control is given by ICANN (Internet Corporation for Assigned Names and Numbers). 
	// These parties can then distribute domain names under the TLD, usually through a domain registrar.

// Hosts
	// "api"  in "api.igoryen.com"
	// "blog" in "blog.igoryen.com"
	// "ftp"  in "ftp.igoryen.com"
	// "mail" in "mail.igoryen.com"
	// "www"  in "www.igoryen.com"

	// Within your domain 
	// igoryen.com 
	// you, the domain owner, can define individual hosts
	// these individual hosts will refer to separate computers or services accessible through your igoryen.com domain. 
	// For instance, as most domain owners 
	// you can make your web servers accessible 
	// through the bare domain (igoryen.com) 
	// and also through the "host" definition "www" (www.igoryen.com).

	// You can have other host definitions under the general domain. 
	// You could have API access through an "api" host 
	// (api.igoryen.com) 
	// or you could have ftp access by defining a host called "ftp" or "files" 
	// (ftp.igoryen.com or files.igoryen.com). 
	// The host names can be arbitrary as long as they are unique for the igoryen.com domain.

// SubDomain
	// "tarboz" in "www.tarboz.igoryen.com"
	// a subdomain extends the parent domain
	// 
	// A subject related to hosts
	// The DNS works in a hierarchy. 
	// TLDs can have many domains under them. 
	// For instance, 
	// the "com" TLD has 
	// both "google.com" and "ubuntu.com" underneath it. 
	// A "subdomain" refers to any domain 
	// that is part of a larger domain. 
	// In this case, "ubuntu.com" can be said to be a subdomain of "com". 
	// This is typically just called the domain 
	// or the "ubuntu" portion is called a SLD (second level domain).

	// Likewise, 
	// you domain "igoryen.com" can control "subdomains" 
	// that are located under it. 
	// This is usually what we mean by subdomains. 
	// For instance 
	// you could have a subdomain for Tarboz
	// or "www.tarboz.igoryen.com"
	// or the history department of your school 
	// at "www.history.school.edu". 
	
	// The "tarboz" and "history" portions are subdomains.

	// What is the difference between a host name and a subdomain?
	// A host defines a computer or resource
	// while a subdomain extends the parent domain. 
	// It is a method of subdividing the domain itself.

	// Whether talking about subdomains or hosts, 
	// you can begin to see that 
	// the left-most portions of a domain are the most specific. 
	// This is how DNS works: 
	// from most to least specific as you read from left-to-right.

// Fully Qualified Domain Name (FQDN)

	// "mail.igoryen.com."
	// "mail.google.com." 

	// an absolute domain name. 
	// Domains in the DNS system 
	// can be given relative to one another, 
	// and as such, can be somewhat ambiguous. 
	
	// A FQDN is an absolute name 
	// It specifies its location 
	// in relation to the absolute root of the domain name system.

	// This means that 
	// it specifies each parent domain including the TLD. 
	// A proper FQDN ends with a dot, 
	// indicating the root of the DNS hierarchy. 
	// An example of a FQDN is 
	// "mail.igoryen.com."
	// "mail.google.com." 
	// Why the ending/trailing dot?
	// For if software that calls for FQDN requires is
	// It is required to conform to ICANN standards.

// name-server

	// a computer 
	// designated to translate domain names into IP addresses. 
	// "igoryen.com" -> 111.222.333.444
	// These servers do most of the work in the DNS system. 
	// Since the total number of domain translations is too much for any one server, 
	// each server may redirect request to other name-servers 
	// or delegate responsibility 
	// for a subset of subdomains they are responsible for.

	// name-servers can be "authoritative", 
	// ("authoritative name-server")
	// meaning that 
	// they give answers to queries about domains under their control. 
	// Otherwise, they may point to other servers, 
	// or serve cached copies of other name-servers' data.

// Zone File

	// "dictionary", table of mappings
	// a simple text file 
	// it contains the mappings 
	// between domain names and IP addresses. 
	// This is how the DNS system finally finds out 
	// which IP address should be contacted 
	// when a user requests a certain domain name.
	// DNS: "The user requests 'igoryen.com'. Which IP i should be contacting?"

	// Zone files reside in name-servers 
	// and generally define 
	// # the resources available under a specific domain, 
	// # or the place that one can go to get that information.

// Records [zone file records]

	// Within a zone file, [zone file] records are kept. 
	// In its simplest form, 
	// a [zone file] record is basically 
	// a single mapping between a resource and a name. 
	// These zone file records can 
	// # map a domain name to an IP address, 
	// 		igoryen.com -> 111.222.333.444
	// # define the name-servers for the igoryen.com domain, 
	// # define the mail servers for the igoryen.com domain, etc.

//==================================
// How DNS Works

	// very simple at a high-level overview, 
	// but is very complex as you look at the details. 
	// Overall though, 
	// it is a very reliable infrastructure 
	// it has been essential to the adoption of the internet as we know it today.

// Root Servers

	// DNS is, at its core, a hierarchical system. 
	// At the top of this system 
	// is what are known as "root servers". 
	// These "root servers" are controlled by various organizations 
	// and are delegated authority by ICANN (Internet Corporation for Assigned Names and Numbers).

	// There are currently 13 root servers in operation. 
	// However, 
	// as there are an incredible number of names to resolve every minute, 
	// each of these servers is actually mirrored. 
	// The interesting thing about this set up 
	// is that each of the mirrors for a single root server 
	// share the same IP address.
	// --- the clones of the guy have the same name and location 
	// When requests are made for a certain root server, 
	// the request will be routed to the nearest mirror [clone] of that root server.

	// What do these root servers do? 
	// they handle requests for information about TLDs. 
	// So if a request comes in 
	// for something a lower-level name-server cannot resolve, 
	// a query is made to the root server for the domain.

	// The root servers won't actually know 
	// that 'igoryen.com' is hosted on Digital Ocean
	// (i.e. where the domain is hosted.)
	// They will, however, be able 
	// to direct the requester to the name-servers 
	// that handle the specifically requested top-level domain.

	// So if a request for  
	// "www.igoryen.com" / "www.wikipedia.org" is made 
	// to the root server, 
	// the root server will tell not find the result in its records. 
	// It will check its zone files 
	// for a listing 
	// that matches "www.igoryen.com" / "www.wikipedia.org". 
	// It will not find one.

	// It will instead find a record for the "com" / "org" TLD 
	// and give the requesting entity 
	// the address of the name-server 
	// which is responsible for "com" / "org" addresses.

// TLD Servers

	// The requester then sends 
	// a new request to the IP address 
	// e.g. 111.222.333.444
	// (given to it by the root server) 
	// that is responsible for the top-level domain of the request.

	// So, 
	// to continue our example, 
	// it would send a request to the name-server 
	// responsible for knowing about "com" / "org" domains 
	// to see if it knows 
	// where "www.igoryen.com" / "www.wikipedia.org" is located.

	// Once again, 
	// the requester will look for "www.igoryen.com" / "www.wikipdia.org" 
	// in its zone files. 
	// It will not find this record in its files.

	// However, 
	// it will find a record 
	// listing the IP address of the name-server 
	// responsible for "igoryen.com" / "wikipedia.org". 
	// This is getting much closer to the answer we want.

// Domain-Level name-servers

	// At this point, 
	// the requester has the IP address of the name-server 
	// that is responsible for knowing the actual IP address of the resource. 
	// It sends a new request to the name-server 
	// asking, once again, if it can resolve "www.igoryen.com" / "www.wikipedia.org" [to an IP address].

	// The name-server checks its zone files 
	// and it finds that it has a zone file 
	// associated with "www.igoryen.com" / "wikipedia.org". 
	// Inside of this file, 
	// there is a record for the "www" host. 
	// This record tells the IP address where this host is located. 
	// The name-server returns the final answer to the requester.

// What is a Resolving name-server?

	// In the above scenario, 
	// we referred to a "requester". 
	// What is the requester in this situation?

	// In almost all cases, 
	// the requester will be what we call a "resolving name-server" 
	// A resolving name-server is one configured to ask other servers questions. 
	// It is basically an intermediary for a user 
	// which caches previous query results to improve speed 
	// and knows the addresses of the root servers 
	// to be able to "resolve" requests made for things it doesn't already know about.

	// Basically, 
	// a user will usually have a few resolving name-servers 
	// configured on their computer system. 
	// The resolving name-servers are usually provided by an ISP 
	// or other organizations. 
	// For instance Google provides resolving DNS servers that you can query. 
	// These can be either configured in your computer automatically or manually.

	// When you type a URL [www.igoryen.com] in the address bar of your browser, 
	// your computer first looks to see 
	// if it can find out locally 
	// where the resource [www.igoryen.com] is located. 
	// It checks the "hosts" file 
	// on the computer 
	// and a few other locations. 
	// It then sends the request to the resolving name-server 
	// and waits back to receive the IP address of the resource.

	// The resolving name-server then 
	// checks its cache for the answer. 
	// If it doesn't find it, 
	// it goes through the steps outlined above.

	// Resolving name-servers basically compress the requesting process for the end user. 
	// The clients simply have to know to ask the resolving name-servers 
	// where a resource is located 
	// and be confident that they will investigate and return the final answer.

// Zone Files

	// We mentioned in the above process 
	// the idea of "zone files" and "records".

	// Zone files are the way 
	// that name-servers store information 
	// about the domains they know about. 
	// (Where they keep the info about the domains)

	// Every domain that a name-server knows about
	// e.g. igoryen.com 
	// is stored in a zone file on that name-server. 
	// Most requests coming to the average name-server 
	// are not something 
	// that the name-server will have zone files for.

	// If the name-server is configured 
	// to handle recursive queries, 
	// like a resolving name-server, 
	// it will find out the answer and return it. 
	// Otherwise, 
	// it will tell the requesting party where to look next.

	// The more zone files that a name-server has, 
	// the more requests it will be able to answer authoritatively
	// i.e. "with authority"
	// that is not referring the requester elsewhere.

	// A zone file describes a DNS "zone", 
	// which is basically a subset 
	// of the entire DNS naming system. 
	// It [a DNS zone] generally is used 
	// to configure just a single domain. 
	// i.e. a domain per zone
	// It [a DNS zone] can contain a number of records 
	// which define where resources are 
	// for the domain in question.
	// e.g. igoryen.com

	// The zone's $ORIGIN 
	// is a parameter 
	// equal to the zone's highest level of authority by default.

	// So if a zone file [on a name-server] is used 
	// to configure the "igoryen.com." domain, 
	// the $ORIGIN would be set to "igoryen.com.".
	// $ORIGIN = igoryen.com.

	// This is either configured 
	// at the top of the zone file 
	// or it can be defined 
	// in the DNS server's configuration file 
	// that references the zone file. 
	// Either way, 
	// this parameter 
	// [ $ORIGIN ]
	// describes what the zone is going to be authoritative for.
	// if $ORIGIN = "igoryen.com."
	// then this zone will be authoritative for igoryen.com.

	// Similarly, 
	// the $TTL 
	// configures the "time to live" 
	// of the information it provides. 
	// $TTL is basically a timer. 
	// A caching name-server 
	// can use previously queried results 
	// to answer questions 
	// until the TTL value runs out.

// Record Types

	// Within the name-server's zone file, 
	// we can have many different record types. 
	// We will go over some of the more common (or mandatory types) here.

	// SOA Records
	// ...........
	// This is the Start of Authority (SOA) record. 
	// It is a mandatory record in all zone files. 
	// It must be the first real record in a file 
	// (although $ORIGIN or $TTL specifications may appear above). 
	// It is also one of the most complex to understand.

	// The start of authority record 
	// looks something like this:

	igoryen.com.  IN SOA ns1.igoryen.com. admin.igoryen.com. (
	                                            12083   ; serial number
	                                            3h      ; refresh interval
	                                            30m     ; retry interval
	                                            3w      ; exiry period
	                                            1h      ; negative TTL
	)
	// OR
	domain.com.  IN SOA ns1.domain.com. admin.domain.com. (
	                                            12083   ; serial number
	                                            3h      ; refresh interval
	                                            30m     ; retry interval
	                                            3w      ; exiry period
	                                            1h      ; negative TTL
	)
	// igoryen.com. | domain.com.
	// ...
		// This is the root of the zone. 
		// This specifies that 
		// the zone file is for the "igoryen.com." | "domain.com." domain. 
		// Often, 
		// you'll see "igoryen.com." replaced with "@", 
		// The "@" is just a placeholder 
		// it substitutes the contents of the $ORIGIN variable. 

	// IN SOA
	// ...
		// (Internet | Start of Authority record)
		// The "IN" portion means "internet" 
		// (and will be present in many records). 
		// The SOA is the indicator 
		// that this is a Start of Authority record.

	// ns1.igoryen.com. | ns1.domain.com.
	// ... 
		// This defines 
		// the primary master name-server for this domain. 
		// name-servers can 
		// either be "master" or "slaves", 
		// and if dynamic DNS is configured 
		// one server needs to be a "primary master", 
		// which goes here. 
		// If you haven't configured dynamic DNS, 
		// then this is just one of your master name-servers.

	// admin.igoryen.com. | admin.domain.com.
	// ... 
		// This is the email address 
		// of the administrator for this zone. 
		// The "@" is replaced with a dot in the email address. 
		// If the "name" portion of the email address normally has a dot in it, 
		// e.g. igor.yentaltsev
		// this is replaced with a "\" in this part 
		// e.g. igor/yentaltsev
		// ("igor.yentaltsev@igoryen.com" becomes "igor\yentaltsev.igoryen.com").
		// (your.name@domain.com becomes your\name.domain.com).

	// 12083
	// ...
		// This is the serial number for the zone file. 
		// Every time you edit a zone file, 
		// you must increment this number 
		// for the zone file to propagate correctly. 
		// Slave name-servers will check 
		// if the serial number for a zone on the master name-server 
		// is larger than the one they have on their system. 
		// If it is, 
		// the slave name-server requests that new zone file from the master name-server, 
		// if not, slave name-server continues serving the original file.

	// 3h
	// ...
		// This is the refresh interval for the zone. 
		// This is the amount of time 
		// that the slave name-server will wait 
		// before polling the master name-server for zone file changes.

	// 30m 
	// ...
		// This is the retry interval for this zone. 
		// If the slave name-server cannot connect to the master name-server 
		// when the refresh period is up, 
		// it will wait this amount of time and retry to poll the master name-server.

	// 3w
	// ...
		// This is the expiry period. 
		// If a slave name-server 
		// has not been able to contact the master name-server 
		// for this amount of time, 
		// the slave name-server no longer returns responses 
		// as an authoritative source for this zone.

	// 1h
	// ...
		// This is the amount of time 
		// that the name-server will cache a name error 
		// if it cannot find the requested name in this file.

// A and AAAA Records

	// Both of these records 
	// map a host to an IP address. 

	// what is a host?
	// "www"  in "www.igoryen.com"
	// "ftp"  in "ftp.igoryen.com"
	// "api"  in "api.igoryen.com"
	// "blog" in "blog.igoryen.com"
	// "mail" in "mail.igoryen.com"
	// 
	// The "A" record is used 
	// to map a host to an IPv4 IP address, 
	// while "AAAA" records are used 
	// to map a host to an IPv6 address.

	// The general format of these records is this:

	host     IN      A       IPv4_address
	host     IN      AAAA    IPv6_address
	
	// So 
	// since our SOA record 
	// called out a primary master name-server 
	// at "ns1.igoryen.com" | "ns1.domain.com", 
	// we would have to map this 
	// to an address to an IP address 
	// since "ns1.igoryen.com" | "ns1.domain.com" 
	// is within the "igoryen.com" | "domain.com" zone 
	// that this file is defining.

	// The record could look something like this:

	ns1     IN  A       111.222.111.222

	// Notice that 
	// we don't have to give the full name. 
	// We can just give the host, 
	// without the FQDN 
	// i.e. "mail" without "mail.igoryen.com" (?)
	// and the DNS server will fill in the rest 
	// with the $ORIGIN value. 
	// However, 
	// we could just as easily use the entire FQDN 
	// if we feel like being semantic:

	ns1.igoryen.com.    IN  A       111.222.333.444
	// or
	ns1.domain.com.     IN  A       111.222.111.222

	// In most cases, 
	// this is where you'll define your web server as "www":

	www     IN  A       222.222.222.222
	
	// We should also tell 
	// where the base domain resolves to. 
	// We can do this like this:

	igoryen.com.    IN  A       111.222.333.444
	domain.com.     IN  A       222.222.222.222

	// We could have used the "@" 
	// to refer to the base domain (igoryen.com) instead:

	@       IN  A       222.222.222.222
	
	// We also have the option 
	// of resolving anything that under this domain 
	// that is not defined explicitly 
	// to this server too. 
	// We can do this with the "*" wild card:

	*       IN  A       222.222.222.222

	// All of these work 
	// just as well 
	// with AAAA records for IPv6 addresses.

// CNAME Records

	// CNAME records 
	// define an alias 
	// for canonical name for your server 
	// (one defined by an A or AAAA record).

	// For instance, 
	// we could have an A name record 
	// defining 
	// the "mail" host | the "server1" host
	// and then use the "www" as an alias for this host:

	mail        IN  A       111.111.111.111
	www         IN  CNAME   mail
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	server1     IN  A       111.111.111.111
	www         IN  CNAME   server1

	// Be aware 
	// that these aliases come with some performance losses 
	// because they require an additional query to the server. 
	// Most of the time, 
	// the same result could be achieved 
	// by using additional A or AAAA records.

	// One case 
	// when a CNAME is recommended 
	// is to provide an alias for a resource outside of the current zone.

// MX Records

	// MX records are used 
	// to define the mail exchanges 
	// that are used for the domain. 
	// This helps email messages arrive at your mail server correctly.

	// Unlike many other record types, 
	// mail records generally don't map a host to something, 
	// because they apply to the entire zone. 
	// As such, they usually look like this:

        IN  MX  10   mail.igoryen.com.
        IN  MX  10   mail.domain.com.

	// Note that there is no host name at the beginning.

	// Also note that 
	// there is an extra number in there. 
	// "10"
	// This is the preference number 
	// that helps computers decide which server to send mail to 
	// if there are multiple mail servers defined. 
	// Lower numbers have a higher priority.
	// [like the item number on a list, the lower the number, the higher it is in priority]

	// The MX record should generally point to a host 
	// defined by an A or AAAA record, 
	// and not one defined by a CNAME.

	// So, 
	// let's say that we have two mail servers. 
	// There would have to be records that look something like this:

	        IN  MX  10  mail1.igoryen.com.
	        IN  MX  50  mail2.igoryen.com.
	mail1   IN  A       111.111.111.111
	mail2   IN  A       222.222.222.222

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	        IN  MX  10  mail1.domain.com.
	        IN  MX  50  mail2.domain.com.
	mail1   IN  A       111.111.111.111
	mail2   IN  A       222.222.222.222

	// In this example, 
	// the "mail1" host is the preferred email exchange server.

	// We could also write that like this:

	        IN  MX  10  mail1
	        IN  MX  50  mail2
	mail1   IN  A       111.111.111.111
	mail2   IN  A       222.222.222.222

// NS Records

	// This record type 
	// defines the name-servers that are used for this zone.

	// You may be wondering, 
	// "if the zone file resides on the name-server, 
	// why does it need to reference itself?". 
	// Part of what makes DNS so successful 
	// is its multiple levels of caching. 
	// One reason for defining name-servers within the zone file 
	// is that the zone file may be actually being served 
	// from a cached copy on another name-server. 
	// There are other reasons for needing the name-servers 
	// defined on the name-server itself, 
	// but we won't go into that here.

	// Like the MX records, 
	// these are zone-wide parameters, 
	// so they do not take hosts either. 
	// In general, they look like this:

	    IN  NS     ns1.igoryen.com.
        IN  NS     ns2.igoryen.com.

        IN  NS     ns1.domain.com.
        IN  NS     ns2.domain.com.

	// You should have at least two name-servers 
	// defined in each zone file 
	// in order to operate correctly 
	// if there is a problem with one server. 
	// Most DNS server software 
	// considers a zone file to be invalid 
	// if there is only a single name-server.

	// As always, 
	// include the mapping for the hosts with A or AAAA records:

		    IN  NS     ns1.igoryen.com.
	        IN  NS     ns2.igoryen.com.
	ns1     IN  A      111.222.111.111
	ns2     IN  A      123.211.111.233

	~~~~~~~~~~~~~~~~~~
	        IN  NS     ns1.domain.com.
	        IN  NS     ns2.domain.com.
	ns1     IN  A      111.222.111.111
	ns2     IN  A      123.211.111.233

	// There are quite a few other record types you can use, 
	// but these are probably the most common types that you will come across.

// PTR Records

	// The PTR records are used 
	// to define a name associated with an IP address. 
	// PTR records are the inverse of an A or AAAA record. PTR records are unique in that they begin at the .arpa root and are delegated to the owners of the IP addresses. The Regional Internet Registries (RIRs) manage the IP address delegation to organization and service providers. The Regional Internet Registries include APNIC, ARIN, RIPE NCC, LACNIC, and AFRINIC.

	// Here is an example of a PTR record for 111.222.333.444 would look like:

	444.333.222.111.in-addr.arpa.   33692   IN  PTR host.example.com.
	// This example of a PTR record for an IPv6 address shows the nibble format of the reverse of Google's IPv6 DNS Server 2001:4860:4860::8888.

	// 8.8.8.8.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.6.8.4.0.6.8.4.1.0.0.2.ip6.arpa. 86400IN PTR google-public-dns-a.google.com.
	// The command line tool dig with the -x flag can be used to look up the reverse DNS name of an IP address.

	// Here is an example of a dig command. The +short is appended to reduce the output to the reverse DNS name.

	dig -x 8.8.4.4 +short
	// The output for the dig command above will be the domain name in the PTR record for the IP address:

	google-public-dns-b.google.com.
	
	//Servers on the Internet use PTR records to place domain names within log entries, make informed spam handling decisions, and display easy-to-read details about other devices.

	// Most commonly-used email servers will look up the PTR record of an IP address it receives email from. If the source IP address does not have a PTR record associated with it, the emails being sent may be treated as spam and rejected. It is not important that the FQDN in the PTR matches the domain name of the email being sent. What is important is that there is a valid PTR record with a corresponding and matching forward A record.

	// Normally network routers on the Internet are given PTR records that correspond with their physical location. For example you may see references to 'NYC' or 'CHI' for a router in New York City or Chicago. This is helpful when running a traceroute or MTR and reviewing the path Internet traffic is taking.

	// Most providers offering dedicated servers or VPS services will give customers the ability to set a PTR record for their IP address. DigitalOcean will automatically assign the PTR record of any Droplet when the Droplet is named with a domain name. The Droplet name is assigned during creation and can be edited later using the settings page of the Droplet control panel.

	// Note: It is important that the FQDN in the PTR record has a corresponding and matching forward A record. Example: 111.222.333.444 has a PTR of server.example.com and server.example.com is an A record that points to 111.222.333.444.

// Conclusion
	// You should now have a pretty good grasp on how DNS works. 
	// While the general idea is relatively easy to grasp 
	// once you're familiar with the strategy, 
	// this is still something that can be difficult 
	// for inexperienced administrators to put into practice.

	// For an overview check out 
	// How To Set Up Domains within the DigitalOcean Control Panel.

===========================================================================
A Comparison of DNS Server Types: How To Choose the Right DNS Configuration
===========================================================================


//Tutorial Series
// This tutorial is part 2 of 7 in the series: An Introduction to Managing DNS
// Introduction

// DNS is an integral part of 
// how systems connect with each other to communicate 
// on the internet. 
// Without DNS, 
// computers, and the people who use them, 
// would be required to connect using only numerical addresses 
// known as IP addresses.
// as they are doing with phone numbers
// it would be neat to have a DNS for phones


// Besides the obvious problem 
// of having to remember a large number of complex numbers for simple tasks, 
// communicating through IP addresses 
// also causes some additional problems. 
// Moving your website to a different hosting provider, 
// e.g. from DigitalOcean to GoDaddy
// or moving your servers to different locations 
// would require you to inform every client of the new location.
// as it happens today with phones

// DNS servers, 
// the computers that together form the system 
// that allow us to use names instead of addresses, 
// can serve many different functions, 
// each of which can contribute 
// to your ability to accessing servers by name.

// In a previous guide we discussed 
// some of the basic terminology and concepts 
// of the domain name system. 
// We will assume 
// some familiarity with the concepts covered in that article. 

// In this guide, 
// we will talk about 
// some of the different types of DNS server setups 
// and what the advantages, use cases, and properties are of each.

// The Path of a DNS Query

// When a client program 
// wants to access a server 
// by its domain name
// e.g. igoryen.com, 
// the client program must find out 
// how to translate the domain name igoryen.com 
// into an actual routable address 
// that it can use to communicate. 
// The client program needs to know this information 
// in order to get or send information to the server.

// Some applications, 
// including most web browsers, 
// maintain an internal cache of recent queries. 
// This is the first place the application will check, 
// if it has this capability, 
// in order to find the IP address of the domain in question. 

// If it does not find the answer to its question 
// in the internal cache of recent queries, 
// the client program then asks the system resolver 
// to find out what the address of the domain name is.

// A resolver in general 
// is any component 
// that acts as a client-side participant in a DNS query. 
// The system (!) resolver 
// i.e. OS resolver?
// is the resolving library 
// that your OS uses 
// to seek out the answer for DNS queries. 
// In general, 
// [operatng] system resolvers are usually what we consider stub resolvers 
// [wth is a stub resolver?]
// because they are not capable of much complexity 
// beyond searching a few static files 
// on the [operating] system 
// (like the /etc/hosts file) 
// and forwarding requests to another resolver.

// So generally, 
// a [DNS] query goes 
// from the client application to the [operating] system resolver, 
// where the query is then passed to a DNS server 
// that the query has the address for. 
// This DNS server is called a recursive DNS server. 
// A recursive DNS server is a DNS server 
// that is configured to query other DNS servers 
// until it finds the answer to the question. 
// [[ be recursive, don't stop until you find the answer! ]] 
// A recursive DNS server will either 
// return the answer or an error message to the client 
// (the [operating] system resolver in this case, 
// which will, in turn, 
// pass it to the client application).

// Recursive DNS servers generally maintain a cache as well. 
// It will check this cache first 
// to see if it already has the answer to the query. 
// If it does not, 
// it will see if it has the address to any of the servers 
// that control the upper level domain components. 
// So if the request is for "www.igoryen.com" 
// and it cannot find that host address in its cache, 
// it will see if it has the address of the name-servers "for igoryen.com" (without wwww) 
// and if necessary, "com". 
// The Recursive DNS server will then 
// send a query to the name-server of most specific domain component it can find 
// in order to query for more information.

// If the recursive DNS server does not find the IP address 
// to any of these domain components, 
// it has to start from the very top of the hierarchy 
// by querying the root name-servers. 
// The root name-servers know the IP addresses 
// of all of the TLD name-servers 
// which control zones for ".com", ".net", ".org", etc. 
// The recursive DNS server will ask the root name-servers 
// if it knows the IP address of to www.igoryen.com. 
// The root name-server will refer the recursive DNS server 
// to the name-servers for the ".com" TLD.

// The recursive DNS server then 
// follows the trail of referrals 
// to each successive name-server 
// that has been delegated responsibility for the domain components, 
// until it can zero in on the specific name-server 
// that has the full answer. 
// The recursive DNS server puts this answer into its cache for later queries 
// and then returns it to the client.

// As you can see from this example, 
// there are many different kinds of servers, 
// and they each play a different role. 
// Let's go over the specifics of the different types of DNS servers.

//Functional Differences
//----------------------
// Some of the differences between DNS servers are purely functional. 
// Most servers that are involved with implementing DNS 
// are specialized for certain functions. 
// The type of DNS server you choose 
// will largely depend on your needs 
// and what type of problem you are hoping to solve.

// Authoritative-Only DNS Servers

// An authoritative-only DNS server 
// is a DNS server that only concerns itself 
// with answering the queries for the zones 
// that it is responsible for. 
// Since it does not help resolve DNS queries for any of the outside zones, 
// an authoritative-only DNS server is generally very fast 
// and can handle many DNS requests efficiently.

// # Authoritative-only DNS servers have the following properties:

// # Very fast at responding to DNS queries for zones it controls. 
// An authoritative-only DNS server will have 
// all of the information 
// about the domain (igoryen.com) it is responsible for, 
// or referral information for zones within the domain 
// that have been delegated out to other name-servers.
// # An authoritative-only DNS server will not respond to recursive queries. 
// The very definition of an authoritative-only DNS server
// is one that does not handle recursive DNS requests. 
// This makes it a server only and never a client in the DNS system. 
// Any request reaching an authoritative-only DNS server 
// will generally be coming from a resolver 
// that has received a referral to it, 
// meaning that the authoritative-only DNS server 
// will either have the full answer, 
// or will be able to pass a new referral to the name-server 
// that it has delegated responsibility to.
// # Does not cache query results. 
// Since an authoritative-only DNS server 
// never queries other servers for information 
// to resolve a DNS request, 
// it never has the opportunity to cache DNS query results. 
// All of the information it knows is already in its system.

// # Caching DNS Server
// --------------
// A caching DNS server is a server 
// that handles recursive DNS requests from clients. 
// Almost every DNS server 
// that the OS's stub resolver will contact 
// will be a caching DNS server.

// Caching DNS servers have the advantage 
// of answering recursive DNS requests from clients. 
// While authoritative-only DNS servers may be ideal for serving specific zone information, 
// caching DNS servers are more broadly useful 
// from a client's perspective. 
// They make the DNS system of the world accessible 
// to rather dumb client interfaces.

// To avoid having to take the performance hit 
// of issuing multiple iterative requests 
// to other DNS servers 
// every time it receives a recursive request, 
// the caching DNS server caches its results. 
// This allows the caching DNS server to have access 
// to a broad base of DNS information 
// (the entire world's publicly accessible DNS) 
// while handling recent requests very quickly.

// A caching DNS server has the following properties:

// # Access to the entire range of public DNS data. 
// All zone data served by publicly accessible DNS servers 
// hooked into the global delegation tree 
// [wth is a global delegation tree?]
// can be reached by a caching DNS server. 
// It knows about the root DNS servers 
// and can intelligently follow referrals as it receives data.
// # Ability to spoon-feed data to dumb clients. 
// Almost every modern OS offloads DNS resolution 
// to dedicated recursive DNS servers 
// through the use of stub resolvers. 
// These resolving libraries simply issue a recursive request 
// and expect to be handed back a complete answer. 
// A caching DNS server has the exact capabilities to serve these clients. 
// By accepting a recursive DNS query, 
// these servers promise to 
// either return with an answer or a DNS error message.
// # Maintains a cache of recently requested data. 
// By caching the results as it collects them from other DNS servers for its client requests, 
// a caching DNS server builds a cache for recent DNS data. 
// Depending on how many clients use the caching DNS server, 
// how large the cache is, 
// and how long the TTL data is on the DNS records themselves, 
// this can drastically speed up DNS resolution in most cases.

// Forwarding DNS Server

// A alternative take on developing a cache for client machines 
// is through the use of a forwarding DNS server. 
// This approach adds an additional link 
// in the chain of DNS resolution 
// by implementing a forwarding DNS server 
// that simply passes all requests to another DNS server 
// with recursive capabilities 
// (such as a caching DNS server).

// The advantage of this system 
// is that it can give you the advantage of a locally accessible cache 
// while not having to do the recursive work 
// (which can result in additional network traffic 
// and can take up substantial resources 
// on high traffic servers). 
// This can also lead to some interesting flexibility 
// in splitting your private and public traffic 
// by forwarding to different servers.

// A forwarding DNS server has the following properties:

// # The ability to handle recursive requests 
// without performing recursion itself. 
// The most fundamental property of a forwarding DNS server 
// is that it passes requests on 
// to another agent for resolution. 
// The forwarding DNS server 
// can have minimal resources 
// and still provide great value by leveraging its cache.

// # Provide a local cache 
// at a closer network location. 
// Particularly if you do not feel up to building, maintaining, and securing 
// a full-fledged recursive DNS solution, 
// a forwarding server can use public recursive DNS servers. 
// It can leverage these servers 
// while moving the primary caching location very close to the client machines. 
// This can decrease answer times.
// # Increases flexibility 
// in defining local domain space. 
// By passing requests to different servers conditionally, 
// a forwarding server can ensure that internal requests are served 
// by private servers 
// while external requests use public DNS.

// Combination Solutions

// While the above solutions are built 
// with very specific purposes in mind, 
// it is often desirable 
// to set up your DNS server 
// to combine the advantages of each.

// A DNS server may be configured to act as 
// a recursive DNS server, 
// caching DNS server 
// for a select number of local clients, 
// while answering only iterative, authoritative requests 
// from other clients. 
// This is a common configuration 
// because it allows you to answer global requests for your "igoryen.com" domain, 
// while also allowing your local clients 
// to utilize the server for recursive DNS resolution.

// While certain DNS software is specially designed 
// to fulfill one specific role, 
// applications like Bind are incredibly flexible 
// and can be used as hybrid solutions. 
// While in some cases attempting to provide too many services in a single server can lead to performance degradation, in many cases, especially in the case of small infrastructure, it makes the most sense to maintain a single, all-in-one solution.

// Relational Differences

// While the most apparent differences 
// between DNS server configurations are probably functional, 
// the relational differences are also extremely important.

// Primary and Slave Servers

// Given the importance of DNS 
// in making services and entire networks accessible, 
// most DNS servers that are authoritative for a zone will have built-in redundancy. There are various terms for the relationships between these servers, but generally, a server can either be a master or a slave in its configuration.

Both master and slave servers are authoritative for the zones they handle. The master does not have any more power over the zones than the slave. The only differentiating factor between a master and a slave server is where they read their zone files from.

A master server reads its zone files from files on the system's disk. These are usually where the zone administrator adds, edits, or transfers the original zone files.

The slave server receives the zones that it is authoritative for through a zone transfer from one of the master servers for the zone. Once it has these zones, it places them in a cache. If it has to restart, it first checks its cache to see if the zones inside are up-to-date. If not, it requests the updated information from the master server.

Servers are not relegated to only be a master or a slave for all of the zones they handle. Master or slave status is assigned on a zone-by-zone basis, so a server can be a master for some zones and a slave for others.

DNS zones usually have at least two name-servers. Any zone responsible for an internet routable zone must have at least two name-servers. Often times, many more name-servers are maintained in order to spread the load and increase redundancy.

Public vs Private Servers

Often, organizations use DNS both externally and internally. However the information that should be made available in both of these spheres is often drastically different.

An organization might maintain an externally available authoritative-only DNS server to handle public DNS queries for the domains and zones that it handles. For its internal users, the organization might use a separate DNS server that contains the authoritative information that the public DNS provides, as well as additional information about internal hosts and services. It might also provide additional features, such as recursion and caching for its internal clients.

While we mentioned the ability to have a single server handle all of these tasks in the "combination" server above, there are definite advantages to splitting the workload. In fact, maintaining completely separate servers (internal vs external) that have no knowledge of each other is often desirable. It is especially important, from a security standpoint, that the public server has no records of the private counterpart. This means not listing your private name-servers with NS records in the public zone files.

There are some additional considerations to keep in mind. While it might be easier to have your public and private servers share zone data that they have in common in a traditional master-slave relationship, this can leak information about your private infrastructure into the wild.

Beyond just keeping your private servers out of the zone files themselves (essentially a publicly searchable entity), it is usually a good idea to also remove any reference to the private server in the public server's configuration files. This means removing transfer, notify, and masters configuration details so that a compromise of the public server does not mean that your internal name-servers are suddenly exposed.

This means maintaining separate zone files for each, which can be extra work. However, this may be necessary for absolute separation and security.

Conclusion
You are probably aware by this stage that there is quite a bit of flexibility in choosing your DNS configuration.

Your choices will largely depend on your organization's needs and whether your main priority is to provide faster DNS resolution for a selection of clients (caching or forwarding) or to serve your domains and zones to the internet at large (authoritative servers). Combination approaches are common and, in the end, both sides of the resolution process need to be accounted for.

In our next guides, we will demonstrate how to get started with some of these configurations. We will begin by teaching how to set up a caching or forwarding server. Later, we will cover how to serve your domains by setting up a pair of authoritative-only DNS servers.