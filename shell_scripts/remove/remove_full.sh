# works (180622)
echo "Running remove_full.sh"

YEAR=year_2017_fsport_7;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$YEAR/view_*/*full;

read -p "Are you sure you want to remove all the unzipped '*_ful' directories at $ACCBASE? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

	echo "Removing all unxipped 'full' dirs in "


	for dir in $ACCBASE
	do
		rm -r "${dir%}"
	done

	echo "All unzipped 'full' dirs are removed"
fi