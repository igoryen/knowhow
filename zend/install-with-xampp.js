http://doraprojects.net/blog/?p=92
---
# Download the zip with Zend Framework 1.12.3 Full
# after downloaded, unzip the archive to 'C:/xampp/php' 
# rename the ZendFramework-1.12.3 folder to something shorter, like "zf1". 

# Copy+paste files and folders:
	- the 3 files named 'zf' 
		from 'C:/xampp/php/Zend1/bin' 
		to   'C:/xampp/php' 
	- the 'Zend' folder 
		from 'C:/xampp/php/Zend1/library' 
		to   'C:/xampp/php/pear'

# Open 'C:/xampp/php/php.ini' file and 
	include the paths to Zend`s "library" and "bin" folders
	i.e. 
	Find the line that says windows: "\path1; \path2"
	Add this line
	include_path=".;C:\xampp\php\zf1\library;C:\xampp\php\zf1\bin"

# Set environment variables:
	Environment variables > System Variables > Path: 
	add: 
	C:\xampp\mysql\bin; 
	C:\xampp\php; 
	C:\xampp\php\zf1\library; 
	C:\xampp\php\zf1\bin;

