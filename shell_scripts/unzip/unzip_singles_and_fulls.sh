echo "Running unzip_view_zips.sh"

# ==================================================================================
# WORKING !!!

# "-j" stands for "junk" i.e. "junk the path". 
# used to Store just the name of a saved file (junk the path), and do not store directory names. 
# By default, zip will store the full path (relative to the current directory).
# so you'll have folder/folder/folder/folder etc.

FOLDER=13
TICKET=1386
TESTFOLDER=test2
MODEL=460;
YEAR=year_2017-f-sport_8;
# FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/

# target=~$ACCBASE$FILE;

echo "STEP 1:"
echo "This script will:"
echo "1) go into $COLORACCBASE" 
echo "2) unzip/inflate/unpack the single .zip files in the color folders"
echo "3) unzip/inflate/unpack the _full.zip directories in the view folders"
echo "4) remove all the .zip folders from both types of locations."

read -p "Continue? (y|n) " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # do dangerous stuff
    echo 
    echo "unzipping .zip files in the color directories"

	for dir in $COLORACCBASE
	do 
		echo "in: $dir unzipping: *.zip"
		(cd "$dir" && unzip -o '*.zip') 
	done


	echo "unzipping _full.zip files in the view directories"
	
	for dir in $VIEWACCBASE/*full.zip
	do 
		newdir="$(echo ${dir} | sed -e 's/.zip//')"
		# echo "unzipping: $dir to $newdir"

		unzip -o "$dir" -d "$newdir"
		# unzip -o "$dir"
	done

	echo "singles and fulls are unzipped/inflated."


	# ==================================================================================
	# WORKING !!!
	# echo "Running remove_zip.sh"

	# echo "Removing all .zip files in "

	# YEAR=year_2017-f_sport_7;
	# FILE=*full.zip;
	# COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/$FILE
	# VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/$FILE

	# target=~$ACCBASE/$FILE;

	echo
	echo "STEP 2:"
	echo "This script will:"
	echo "1) go into $COLORACCBASE" 
	echo "2) REMOVE the single .zip files"
	echo "3) go into $VIEWACCBASE"
	echo "4) REMOVE all the *_full.zip folders from both types of locations."

	read -p "Continue? (y|n) " -n 1 -r
	echo    # (optional) move to a new line
	if [[ $REPLY =~ ^[Yy]$ ]]
		then 

		for file in $COLORACCBASE/*full.zip
		do
			# echo "removing ${file%}"
			rm "${file%}"
		done


		for file in $VIEWACCBASE/*full.zip
		do
			# echo "removing ${file%}"
			rm "${file%}"
			# this fails to remove

		done
	fi
	echo "All .zip files are [supposed to be] removed"
else
	echo "You chose not to run the script."
fi


