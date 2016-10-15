echo "Running unzip_full.sh"

# NOT WORKING!!!

# "-j" stands for "junk" i.e. "junk the path". 
# used to Store just the name of a saved file (junk the path), and do not store directory names. 
# By default, zip will store the full path (relative to the current directory).
# so you'll have folder/folder/folder/folder etc.


YEAR=year_2017-f_sport_7;
FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$YEAR/view_*/
target=~$ACCBASE$FILE;


read -p "Are you sure you want to unzip all the '*_ful.zip' directories in $ACCBASE? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # do dangerous stuff
    echo "unzipping '-full' directories"

	for z in $target;do 
		echo "unzipping: $z"
		unzip -o "$z" 
	done

	echo "check if all '-full' directories are unzipped"
fi


