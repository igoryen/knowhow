echo "Running zip_mp4.sh"
# "-j" stands for -j is "junk the path". 
# used to Store just the name of a saved file (junk the path), and do not store directory names. 
# By default, zip will store the full path (relative to the current directory).
# so you'll have folder/folder/folder/folder etc.

ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1326/test/FRENCH/item*/;

echo "zipping .mp4 files"
echo "......."

for file in $ACCBASE/*.mp4
do 
	# echo "zipping $file"
	zip -j "$file".zip "$file"
done

echo "all .mp4 files are zipped"