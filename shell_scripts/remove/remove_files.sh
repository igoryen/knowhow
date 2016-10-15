# remove_files.sh

echo "Running remove_files.sh"
echo "Removing all your files"
ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1362/test/Presicion_Service_Images/*/TIFF/*.tif;

counter=1
for file in $ACCBASE
do
	rm "${file%}"
	counter="$((counter + 1))"
done

echo "$counter files have been removed"