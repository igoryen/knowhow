
FOLDER=Wipers;
READY=ready
counter=1
n=1;
#-------------------------------------
echo "renaming the .zip files"
FNAME=i_$(echo "$FOLDER" | tr '[:upper:]' '[:lower:]')-;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1362/test/Presicion_Service_Images/$FOLDER/TIFF/$READY/*.zip;

# SUFFIX2=*full.zip;
for FILE in $ACCBASE; do
	#TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
	echo "old: $FILE"
	newfile=$(echo "$FILE" | sed -e "s/laROQUE-Lexus-Services-${FOLDER}-${n}.tif/${FNAME}${counter}_full/") ;
	echo "new: ${newfile}"
	#LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
	mv "${FILE}" "${newfile}"
	echo "renaming file $counter"
	counter="$((counter + 1))"
	n=`expr "$n" + 1`;
done