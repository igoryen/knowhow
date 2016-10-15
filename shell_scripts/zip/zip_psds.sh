# WORKS!
echo "Running zip_psds.sh"
# "-j" stands for -j is "junk the path". 
# used to Store just the name of a saved file (junk the path), and do not store directory names. 
# By default, zip will store the full path (relative to the current directory).
# so you'll have folder/folder/folder/folder etc.

echo "zipping psd files in all the color folders"
echo "......."



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


echo "zipping files with .psd extension"
for file in $COLORACCBASE/*.psd
do 
	echo "zipping $file"
	zip -j "$file".zip "$file"
done
echo "all .psd files in color folders have been zipped"



echo "zipping files with .tif extension"
for file in $COLORACCBASE/*.tif
do 	
	echo "zipping $file"
	zip -j "$file".zip "$file"
done
echo "all .tif files in color folders have been zipped"




