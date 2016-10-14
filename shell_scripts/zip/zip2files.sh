echo "Running zip2files.sh"

# GIVEN:
# you have multiple directories
# each directory has multiple files
# cd into each directory and zip all the files in it into a single .zip

echo "zipping files ..."

ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1362/test/Presicion_Service_Images/*/TIFF/*.tif;
counter=1
for file in $ACCBASE
do 
	# echo "$file"
	zip -j "$file".zip "$file"
	counter="$((counter + 1))"
done

echo "$counter files are zipped"