echo "Running remove_psd.sh"
echo "Removing all .psd files in "


# MODEL=model_rx-450h_3;
# YEAR=year_2017-f-sport_7;
# ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test2/$MODEL/$YEAR/view_*/color*;


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

for file in $COLORACCBASE/*.psd
do
	rm "${file%}"
done

echo "All .psd files are removed"

for file in $COLORACCBASE/*.tif
do
	rm "${file%}"
done

echo "All .tif files are removed"