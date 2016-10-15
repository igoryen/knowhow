echo "Running rename_popups.sh"


counter=1


for FILE in ../../LEXADHUB/9/913/test1/dst7/item_*/popup_e.txt; do
	#echo "filename: " "$filename"
	#FILE=$(basename "$filename") # "filename.txt" without the path
	#echo "path: $(dirname)"
	#echo "file: $FILE"
	#DIR=echo pwd

	# FILE=${filename#*_}
	# FILE=$(echo $filename | cut -d '_' -f 2)	
	# echo "FILE: " "$FILE"

	# the dir name is item_xxx_num because it should match the existing dir
	#DIR=~/Documents/ig/_mine/LEXADHUB/9/913/test1/dst4/item_${FILE%.*}_num
	# echo "DIR:" "$DIR"


	# echo mkdir -p -- "$DIR"
	#mkdir -p "$DIR"


	# echo mv -i -t "$DIR" -- "$filename"
	#cp --parents "$filename" "$DIR" 
	mv "${FILE}" "$(dirname "$FILE")/popup.txt"

	echo "renaming file $counter: $FILE"
	counter="$((counter + 1))"
done

	