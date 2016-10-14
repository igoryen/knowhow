# all 4 steps WORK!
echo "Running zip_psds.sh"
# "-j" stands for -j is "junk the path". 
# used to Store just the name of a saved file (junk the path), and do not store directory names. 
# By default, zip will store the full path (relative to the current directory).
# so you'll have folder/folder/folder/folder etc.

echo "zipping psd files in all the color folders"
echo "......."




FOLDER=13
TICKET=1386
TESTFOLDER=test2
MODEL=460-l;
YEAR=year_2017_5;
# FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/
FULLACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/*full;


echo "STEP: 1: This will go into"
echo "$COLORACCBASE"
echo "and make the following changes:"
echo "1) zip/compress all the files with .psd extension"
echo "2) zip/compress all the files with .tif extension"

	
echo 
read -p "Continue? (y|n) " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then
	echo
	echo "zipping files with .psd extension"
	for file in $COLORACCBASE/*.psd
	do 
		echo "zipping $file"
		# zip -j "$file".zip "$file"
	done
	echo "all .psd files in color folders have been zipped"



	echo "zipping files with .tif extension"
	for file in $COLORACCBASE/*.tif
	do 	
		echo "zipping $file"
		# zip -j "$file".zip "$file"
	done
	echo "all .tif files in color folders have been zipped"




	echo
	echo "STEP: 2: This will go into"
	echo "$COLORACCBASE"
	echo "and make the following changes:"
	echo "1) REMOVE all the unzipped source files with .psd extension"
	echo "2) REMOVE all the unzipped source files with .tif extension"


	echo
	read -p "Continue? (y|n) " -n 1 -r
	# if user wants to run the whole script
	# if [[ $REPLY =~ ^[Yy]$ ]]
	# then


	# 	for file in $COLORACCBASE/*.psd
	# 	do
	# 		rm "${file%}"
	# 	done

	# 	echo "All .psd files are removed"

	# 	for file in $COLORACCBASE/*.tif
	# 	do
	# 		rm "${file%}"
	# 	done
	# fi
	echo
	echo "All .tif files are removed"
fi




# =====================

# MODEL=model_rx-450h_3;
# YEAR=year_2017-f_sport_7;

# ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/*full;

echo
echo "STEP: 3: This will go into"
echo "$VIEWACCBASE"
echo "and make the following changes:"
echo "1) ZIP all the 'full' directories"

	
echo ""
read -p "Continue? (y|n) " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then
	# "-j" stands for "junk" i.e. "junk the path". 
	# used to Store just the name of a saved file (junk the path), and do not store directory names. 
	# By default, zip will store the full path (relative to the current directory).
	# so you'll have folder/folder/folder/folder etc.

	# MODEL=model_rx-350_1;
	# YEAR=year_2017_6;

	# ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/*full;



	for dir in $VIEWACCBASE/*_full
	do 
		zip -j -r "$dir".zip "$dir" -x "*.DS_Store"
	done

	echo "STATUS:"
	echo "all the '-full' directories have been zipped"

	# ===============================================================================
	# works (180622)
	# echo "Running remove_full.sh"
	# MODEL=model_rx-350_1;
	# YEAR=year_2017_6;
	# ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/*full;
	
	echo
	echo "STEP: 4: This will go into"
	echo "$VIEWACCBASE"
	echo "and make the following changes:"
	echo "1) REMOVE all the source unzipped 'full' directories"

	echo ""
	read -p "Continue? (y|n) " -n 1 -r
	echo    # (optional) move to a new line
	if [[ $REPLY =~ ^[Yy]$ ]]
	then
		echo
		echo "CONFIRMED:"
		echo "You agreed to REMOVE all the unzipped '*_ful' directories at $VIEWACCBASE "


		for dir in $VIEWACCBASE/*_full
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


# if user doesn't want to run the whole script
else
	echo
	echo "CONFIRMED:"
	echo "You refused to run zip_full.sh"
	echo "STATUS:"
	echo "'-full' directories are not zipped"
	echo "'-full' directories are not removed'"
fi
