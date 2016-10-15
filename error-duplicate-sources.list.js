http://askubuntu.com/questions/120621/how-to-fix-duplicate-sources-list-entry

Reading package lists... Done
W: Duplicate sources.list entry http://download.virtualbox.org/virtualbox/debian/ trusty/contrib amd64 Packages (/var/lib/apt/lists/download.virtualbox.org_virtualbox_debian_dists_trusty_contrib_binary-amd64_Packages)
W: Duplicate sources.list entry http://download.virtualbox.org/virtualbox/debian/ trusty/contrib i386  Packages (/var/lib/apt/lists/download.virtualbox.org_virtualbox_debian_dists_trusty_contrib_binary-i386_Packages)
W: You may want to run apt-get update to correct these problems

==============================================
checking the "sources.list" file for an entry with `http://download.virtualbox.org`
$cat /etc/apt/sources.list > ~/ig/knowhow/cat-sources-list.js


	# deb cdrom:[Ubuntu 14.04.3 LTS _Trusty Tahr_ - Beta amd64 (20150805)]/ trusty main restricted

	# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to
	# newer versions of the distribution.
	deb http://ca.archive.ubuntu.com/ubuntu/ trusty main restricted
	deb-src http://ca.archive.ubuntu.com/ubuntu/ trusty main restricted

	## Major bug fix updates produced after the final release of the
	## distribution.
	deb http://ca.archive.ubuntu.com/ubuntu/ trusty-updates main restricted
	deb-src http://ca.archive.ubuntu.com/ubuntu/ trusty-updates main restricted

	## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
	## team. Also, please note that software in universe WILL NOT receive any
	## review or updates from the Ubuntu security team.
	deb http://ca.archive.ubuntu.com/ubuntu/ trusty universe
	deb-src http://ca.archive.ubuntu.com/ubuntu/ trusty universe
	deb http://ca.archive.ubuntu.com/ubuntu/ trusty-updates universe
	deb-src http://ca.archive.ubuntu.com/ubuntu/ trusty-updates universe

	## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu 
	## team, and may not be under a free licence. Please satisfy yourself as to 
	## your rights to use the software. Also, please note that software in 
	## multiverse WILL NOT receive any review or updates from the Ubuntu
	## security team.
	deb http://ca.archive.ubuntu.com/ubuntu/ trusty multiverse
	deb-src http://ca.archive.ubuntu.com/ubuntu/ trusty multiverse
	deb http://ca.archive.ubuntu.com/ubuntu/ trusty-updates multiverse
	deb-src http://ca.archive.ubuntu.com/ubuntu/ trusty-updates multiverse

	## N.B. software from this repository may not have been tested as
	## extensively as that contained in the main release, although it includes
	## newer versions of some applications which may provide useful features.
	## Also, please note that software in backports WILL NOT receive any review
	## or updates from the Ubuntu security team.
	deb http://ca.archive.ubuntu.com/ubuntu/ trusty-backports main restricted universe multiverse
	deb-src http://ca.archive.ubuntu.com/ubuntu/ trusty-backports main restricted universe multiverse

	deb http://security.ubuntu.com/ubuntu trusty-security main restricted
	deb-src http://security.ubuntu.com/ubuntu trusty-security main restricted
	deb http://security.ubuntu.com/ubuntu trusty-security universe
	deb-src http://security.ubuntu.com/ubuntu trusty-security universe
	deb http://security.ubuntu.com/ubuntu trusty-security multiverse
	deb-src http://security.ubuntu.com/ubuntu trusty-security multiverse

	## Uncomment the following two lines to add software from Canonical's  '
	## 'partner' repository.
	## This software is not part of Ubuntu, but is offered by Canonical and the
	## respective vendors as a service to Ubuntu users.
	# deb http://archive.canonical.com/ubuntu trusty partner
	# deb-src http://archive.canonical.com/ubuntu trusty partner

	## This software is not part of Ubuntu, but is offered by third-party
	## developers who want to ship their latest software.
	deb http://extras.ubuntu.com/ubuntu trusty main
	deb-src http://extras.ubuntu.com/ubuntu trusty main
	deb http://repository.spotify.com stable non-free
	# deb-src http://repository.spotify.com stable non-free
	# deb-src http://repository.spotify.com stable non-free

	>>==> deb http://download.virtualbox.org/virtualbox/debian trusty contrib

	deb http://archive.ubuntu.com/ubuntu trusty universe
	# deb-src http://archive.ubuntu.com/ubuntu trusty universe

	there is one entry with "http://download.virtualbox.org"
	---------------------------------------------
	the entry information:
	"deb" // `deb` means a binary repository, for binary packages
	"http://download.virtualbox.org/virtualbox/debian" // the binary repo is hosted at this address
	"trusty" // Ubuntu distro name, i.e. Ubuntu 14.04
	"contrib" // the component

==============================================
SOLUTION
	create a backup of your `/etc/apt/sources.list` file
		$ sudo mv /etc/apt/sources.list /etc/apt/sources.list.bak
	build a new `/etc/apt/sources.list` file
		$ software-properties-gtk
==============================================
$ls /etc/apt/sources.list.d/

	amigadave-ppa-trusty.list             
	amigadave-ppa-trusty.list.save        
	daniel_pavel-solaar-trusty.list       
	daniel_pavel-solaar-trusty.list.save  
	google-chrome.list       
	google-chrome.list.save  
	google-earth.list        
	google-earth.list.save   
	nilarimogard-webupd8-trusty.list       
	nilarimogard-webupd8-trusty.list.save  
	nodesource.list                        
	nodesource.list.save                   
	noobslab-themes-trusty.list       
	noobslab-themes-trusty.list.save  
	tualatrix-ppa-trusty.list         
	tualatrix-ppa-trusty.list.save    
	virtualbox.list <===
	virtualbox.list.save
	webupd8team-sublime-text-2-trusty.list
	webupd8team-sublime-text-2-trusty.list.save

-------------------

-----------------------------
cat /etc/apt/sources.list.d/virtualbox.list
	deb http://download.virtualbox.org/virtualbox/debian trusty contrib
----------------------------
cat /etc/apt/sources.list.d/virtualbox.list.save
	deb http://download.virtualbox.org/virtualbox/debian trusty contrib
