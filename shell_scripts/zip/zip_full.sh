# MODEL=model_rx-450h_3;
# YEAR=year_2017-f_sport_7;

# ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/*full;


FOLDER=13
TICKET=1359
TESTFOLDER=test
MODEL=300h;
YEAR=year_2017_3;
# FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/
FULLACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/*full;

echo "This will go into"
echo "$FULLACCBASE"
echo "and make the following changes:"
echo "1) zip/compress all the 'full' directories"
echo "2) remove all the source 'full' directories"

	
echo "QUESTION:"
read -p "Do you want to continue? " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then
	echo "CONFIRMED:"
	echo "You agreed to run this zip_full.sh script"


	# "-j" stands for "junk" i.e. "junk the path". 
	# used to Store just the name of a saved file (junk the path), and do not store directory names. 
	# By default, zip will store the full path (relative to the current directory).
	# so you'll have folder/folder/folder/folder etc.

	# MODEL=model_rx-350_1;
	# YEAR=year_2017_6;

	# ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/*full;

	echo "QUESTION:"
	read -p "Are you sure you want to zip all the '*_ful' directories in $FULLACCBASE? " -n 1 -r
	echo    # (optional) move to a new line
	# if user wants to zip all the 'full' dirs
	if [[ $REPLY =~ ^[Yy]$ ]]
	then
	    # do dangerous stuff
	    echo
		echo "CONFIRMED:"
	    echo "You agreed to zip all the '-full' directories"

		for dir in $FULLACCBASE
		do 
			zip -j -r "$dir".zip "$dir"
		done

		echo "STATUS:"
		echo "all the '-full' directories have been zipped"

		# ===============================================================================
		# works (180622)
		# echo "Running remove_full.sh"
		# MODEL=model_rx-350_1;
		# YEAR=year_2017_6;
		ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/*full;
	
		echo "QUESTION:"
		read -p "Are you sure you want to remove all the unzipped '*_ful' directories at $FULLACCBASE? " -n 1 -r
		echo    # (optional) move to a new line
		if [[ $REPLY =~ ^[Yy]$ ]]
		then
			echo
			echo "CONFIRMED:"
			echo "You agreed to remove all the unzipped 'full' dirs in "


			for dir in $FULLACCBASE
			do
				rm -r "${dir%}"
			done

			echo "STATUS:"
			echo "All unzipped 'full' dirs are removed"
		# if the user refused to remove all the unzipped full dirs
		else
			echo
			echo "CONFIRMED:"
			echo "You refused to remove all the unzipped 'full' dirs"
			echo "STATUS:"
			echo " '-full' directories are zipped BUT "
			echo "the source '-full' directories are not removed'"
		fi

	# if user doesn't want to zip all the -full dirs
	else
		echo
		echo "CONFIRMED:"
		echo "You refused to zip all the '-full' directories"
		echo "STATUS:"
		echo "'-full' directories are not zipped"
		echo "'-full' directories are not removed'"

	fi

	

# if user doesn't want to run the whole script
else
	echo
	echo "CONFIRMED:"
	echo "You refused to run zip_full.sh"
	echo "STATUS:"
	echo "'-full' directories are not zipped"
	echo "'-full' directories are not removed'"
fi
