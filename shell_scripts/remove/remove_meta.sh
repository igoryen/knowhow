echo "running remove_meta.sh"
echo "Removing all meta_e.txt files"
counter=1
ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1362/test2/item_*/meta_e.txt;

for file in $ACCBASE
do
	echo "removing file $counter: $file"
	rm "${file%}"
	counter="$((counter + 1))"
done

echo "$((counter - 1)) meta_e.txt files are removed"