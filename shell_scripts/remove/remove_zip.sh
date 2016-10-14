# NOT WORKING !!!
echo "Running remove_zip.sh"

echo "Removing all .zip files in "




FOLDER=13
TICKET=1359
TESTFOLDER=test
MODEL=300h;
YEAR=year_2017_3;

FILE=*.zip;


ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*
#VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/
FULLACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/

target=~$COLORACCBASE/$FILE;



read -p "Are you sure you want to remove all the zipped directories at $COLORACCBASE? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
	then 

	for file in $COLORACCBASE/*.zip
	do
		echo "removing ${file%}"
		rm "${file%}"
	done
fi
echo "All .zip files are [supposed to be] removed"
