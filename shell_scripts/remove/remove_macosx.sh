FOLDER=13
TICKET=1386
TESTFOLDER=test
MODEL=600h;
YEAR=year_2017_5;
# FILE=*.zip;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*/
COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*
VIEWACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/
FULLACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/*full;





counter=1

echo "This script will " 
echo "1) go into $COLORACCBASE"
echo "2) remove each __MACOSX folder it will find."
echo
read -p "Continue? " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then 

	for dir in $COLORACCBASE/__MACOSX
	do
		echo " removing ${dir%}"
		rm -rf "${dir%}"
		counter="$((counter + 1))"
	done
fi

echo "$counter directories have been removed"