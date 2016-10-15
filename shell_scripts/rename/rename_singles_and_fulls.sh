echo "Running: rename_singles_and_fulls.sh"

# rename 
# 1. single image files in each 'color' folders
# 2. all the files in each view/full/ 


FOLDER=13
TICKET=1386
TESTFOLDER=test
MODEL=600h;
YEAR=year_2017_5;
# FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/
FULLACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/*full/


counter=1

IFS=' ' 
echo "STEP 1:"
echo "This script will"
echo "1) go into $COLORACCBASE"
echo "2) rename single asset files in the color folders"
echo "3) rename the files in the _full directories in the view folders."
echo
read -p "Continue? " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then 
	for FILE in $COLORACCBASE*.psd; do
		echo ""
		echo "old: $FILE"
						
		# OPTION 1: remove a string in filename
		# newfile="$(echo ${FILE} | sed -e 's/-f-sport_/_/')" ;

		# OPTION 2: replace a string in filename
		# newfile="$(echo ${FILE} | sed -e 's/16_/17_/')" ;

		# OPTION 3: add a prefix to filename
		newfile="$(echo ${FILE} | sed -e 's/LS600H/17_LS600H/')" ; # to add 17_ if file name has no year at all

		echo "new: ${newfile}"

		mv "${FILE}" "${newfile}"
		echo "renaming file $counter"
		counter="$((counter + 1))"
	done

	for FILE in $COLORACCBASE*.tif; do
		echo ""
		echo "old: $FILE"

		# OPTION 1: remove a string in filename
		# newfile="$(echo ${FILE} | sed -e 's/-f-sport_/_/')" ;
		
		# OPTION 2: replace a string in filename
		# newfile="$(echo ${FILE} | sed -e 's/16_/17_/')" ;

		# OPTION 3: add a prefix to filename
		newfile="$(echo ${FILE} | sed -e 's/LS600H/17_LS600H/')" ; # to add 17_ if file name has no year at all

		echo "new: ${newfile}"

		mv "${FILE}" "${newfile}"
		echo "renaming file $counter"
		counter="$((counter + 1))"
	done

					# an ugly hack for OPTION 3
					# for FILE in $COLORACCBASE*.psd; do
					# 	echo "cleaning up..."
					# 	echo "old: $FILE"

					# 	newfile="$(echo ${FILE} | sed -e 's/17_17_/17_/')" ; # to add 17_ if file name has no year at all

					# 	echo "new: ${newfile}"

					# 	mv "${FILE}" "${newfile}"
					# 	echo "renaming file $counter"
					# 	counter="$((counter + 1))"
					# done
fi

echo
echo "QUESTION:"
read -p "Rename .psd and .tif files in the _full dirs? " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then 
	echo ""
	# echo "renaming the ...full.zip files in view dirs"
	counter=1
	for FILE in $FULLACCBASE*; do

		echo "old: $FILE"

		# OPTION 2: replace a string in filename
		# newfile="$(echo ${FILE} | sed -e 's/16_/17_/')" ;

		# OPTION 3: add a prefix to filename
		newfile="$(echo ${FILE} | sed -e 's/LS600H/17_LS600H/')" ; # to add 17_ if file name has no year at all


		echo "new: ${newfile}"

		mv "${FILE}" "${newfile}"
		echo "renaming file $counter"
		counter="$((counter + 1))"
	done
						# # an ugly hack for OPTION 3
						# for FILE in $FULLACCBASE*; do
						# 	echo "cleaning up..."
						# 	echo "old: $FILE"
						# 	# newfile="$(echo ${FILE} | sed -e 's/16_/17_/')" ;
						# 	newfile="$(echo ${FILE} | sed -e 's/17_17_/17_/')" ; # to add 17_ if file name has no year at all


						# 	echo "new: ${newfile}"

						# 	mv "${FILE}" "${newfile}"
						# 	echo "renaming file $counter"
						# 	counter="$((counter + 1))"
						# done

fi
