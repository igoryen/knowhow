
FOLDER=Wipers;
READY=ready
counter=1



FOLDER=13
TICKET=1386
TESTFOLDER=test3
MODEL=model_is-200t_;
YEAR=year_2017_4;
# FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*
VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/
FULLACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/*full/


n=1;
#-------------------------------------
echo "renaming the .zip files"
FNAME=i_$(echo "$FOLDER" | tr '[:upper:]' '[:lower:]')-;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1362/test/Presicion_Service_Images/$FOLDER/TIFF/$READY/*.zip;

# SUFFIX2=*full.zip;
for FILE in $COLORACCBASE/*.zip
do
	#TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
	echo "old: $FILE"

	# OPTION 1
	# newfile=$(echo "$FILE" | sed -e "s/laROQUE-Lexus-Services-${FOLDER}-${n}.tif/${FNAME}${counter}_full/") ;

	# OPTION 2
	newfile="$(echo ${FILE} | sed -e 's/.psd//')" ;

	echo "new: ${newfile}"
	#LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL


	# mv "${FILE}" "${newfile}"
	echo "renaming file $counter"
	counter="$((counter + 1))"
	n=`expr "$n" + 1`;
done