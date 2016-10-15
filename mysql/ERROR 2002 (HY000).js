
ERROR 2002 (HY000): 
Can`t connect to local MySQL server through socket `/var/lib /mysql/mysql.sock` (111)

) check if another instance is runnig in the same machine
ps ax | grep mysql

) check if your file my.cnf (probably in /etc/mysql/ folder) is correctly configured with
	cat /etc/mysql/my.cnf
	
	must have: 
	[mysqld]
	datadir = /var/lib/mysql/
	socket = /var/lib/mysql/mysql.sock