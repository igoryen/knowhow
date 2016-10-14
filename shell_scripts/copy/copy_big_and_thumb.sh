echo "Running copy_big_and_thumb.sh"

for filename in ../../LEXADHUB/9/913/test1/Final*/*; do

	#echo "filename: " "$filename"

	# FILE=$(basename "$filename")
	# FILE=${filename#*_}
	FILE=$(echo $filename | cut -d '_' -f 2)	
	#echo "FILE: " "$FILE"


	DIR=~/Documents/ig/_mine/LEXADHUB/9/913/test1/dst/item_${FILE%.*}_num
	#echo "DIR w/o path or extension: " "$DIR"


	# echo mkdir -p -- "$DIR"
	mkdir -p "$DIR"


	# echo mv -i -t "$DIR" -- "$filename"
	cp -i "$filename" "$DIR" 


done