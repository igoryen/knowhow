echo "Running add_metas.sh"
counter=1
for filename in ../../LEXADHUB/9/913/test1/boutique/meta_f/*; do
	#echo "filename: " "$filename"

	FILE=$(basename "$filename")
	# FILE=${filename#*_}
	# FILE=$(echo $filename | cut -d '_' -f 2)	
	# echo "FILE: " "$FILE"

	# the dir name is item_xxx_num because it should match the existing dir
	DIR=~/Documents/ig/_mine/LEXADHUB/9/913/test1/dst8_f/item_${FILE%.*}_num
	# echo "DIR:" "$DIR"


	# echo mkdir -p -- "$DIR"
	mkdir -p "$DIR"


	# echo mv -i -t "$DIR" -- "$filename"
	#cp --parents "$filename" "$DIR" 
	cp -i "$filename" "$DIR" 

	echo "copying file " "$counter"
	counter="$((counter + 1))"
done

	