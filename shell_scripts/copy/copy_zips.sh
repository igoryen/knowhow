echo "Running copy_zips.sh"

for filename in zips/*; do

	echo "filename: " "$filename"

	FILE=$(basename "$filename")
	# FILE=${filename#*_}
	# FILE=$(echo $filename | cut -d '_' -f 2)	
	echo "FILE: " "$FILE"


	DIR=~/Documents/ig/_mine/scripts2/boutique/dst/${FILE%.*}
	echo "DIR w/o path or extension: " "$DIR"


	# echo mkdir -p -- "$DIR"
	mkdir -p "$DIR"


	# echo mv -i -t "$DIR" -- "$filename"
	cp -i "$filename" "$DIR" 


done