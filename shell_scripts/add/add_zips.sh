echo "Running add_zips.sh"

counter=1
for filename in ../../LEXADHUB/9/913/test1/zips2/*.zip; do
	#echo "filename: " "$filename"

	# FILE=$(basename "$filename")
	# FILE=${filename#*_}
	FILE=$(echo $filename | cut -d '_' -f 2)	
	# echo "FILE: " "$FILE"

	# the dir name is item_xxx_num because it should match the existing dir
	DIR=~/Documents/ig/_mine/LEXADHUB/9/913/test1/dst2/item_${FILE%.*}_num
	# echo "DIR:" "$DIR"


	# echo mkdir -p -- "$DIR"
	mkdir -p "$DIR"


	# echo mv -i -t "$DIR" -- "$filename"
	#cp --parents "$filename" "$DIR" 
	cp -i "$filename" "$DIR" 

	echo "copying file " "$counter"
	counter="$((counter + 1))"
done

	