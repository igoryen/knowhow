echo "Running: rename_fulls.sh"

# rename 
# 1. single image files in each 'color' folders
# 2. all the files in each view/full/ 

FOLDER=14
TICKET=1429
TESTFOLDER=test
MODEL=model_is-350-awd_;
YEAR=year_2017-f-sport_9;
# FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*
VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/
FULLACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/*full/


counter=1

IFS=' ' 
echo "This script will"
echo "1) go into $COLORACCBASE"
echo "2) rename zip files in the each view*/color_* folder"
echo
read -p "Continue? " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then 
	for FILE in $COLORACCBASE/*
	do
		echo ""
		echo "renaming file $counter"
		echo "old: $FILE"
						
		# OPTION 1: remove a string in filename
		newfile="$(echo ${FILE} | sed -e 's/.psd//')" ;

		# OPTION 2: replace a string in filename
		# newfile="$(echo ${FILE} | sed -e 's/16_/17_/')" ;
		# newfile="$(echo ${FILE} | sed -e 's/i_is-200t/i_is-300-awd/')" ;

		echo "new: ${newfile}"

		mv "${FILE}" "${newfile}"
		
		counter="$((counter + 1))"
	done
fi