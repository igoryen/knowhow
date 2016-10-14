# works (160822)
echo "Running remove_full_zips.sh"

MODEL=model_rx-450h_3;
YEAR=year_2017_6;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/*full.zip;

read -p "Are you sure you want to remove all the '*_ful.zip' directories at $ACCBASE? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

	echo "Removing all unzipped 'full.zip' dirs in $ACCBASE"


	for dir in $ACCBASE
	do
		rm -r "${dir%}"
	done

	echo "ended remove_full_zips.sh"
fi