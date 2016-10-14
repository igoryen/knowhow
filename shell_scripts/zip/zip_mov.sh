echo "Running zip_mov.sh"
# "-j" stands for -j is "junk the path". 
# used to Store just the name of a saved file (junk the path), and do not store directory names. 
# By default, zip will store the full path (relative to the current directory).
# so you'll have folder/folder/folder/folder etc.

echo "zipping mov files"
echo "......."

for file in ../LEXADHUB/8/864/ready/f/group*/item*/*.mov
do 
	zip -j "$file".zip "$file"
done

echo "all mov files are zipped"