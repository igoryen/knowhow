echo "Running copy_jpg_and_psd.sh"

for filename in ../../LEXADHUB/9/913/test1/Lexus*/*; do

	#echo "filename: " "$filename"

	FILE=$(basename "$filename")
	# FILE=${filename#*_}
	# FILE=$(echo $filename | cut -d '_' -f 2)	
	#echo "FILE: " "$FILE"


	DIR=~/Documents/ig/_mine/LEXADHUB/9/913/test1/zips/i_${FILE%.*}_full
	#echo "DIR w/o path or extension: " "$DIR"


	# echo mkdir -p -- "$DIR"
	mkdir -p "$DIR"


	# echo mv -i -t "$DIR" -- "$filename"
	cp -i "$filename" "$DIR" 


done