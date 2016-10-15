counter=1
ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1274/test/year_2016-f_sport_5/view_*/;

SUFFIX=color_*/*;
# for FILE in ../../LEXADHUB/9/913/test1/dst8_f_test/item_*/*.txt; do
# IFS=' ' 
for FILE in $ACCBASE$SUFFIX; do
	
	#TTTTTTTTTTTTTTTTTTTTTTTTTTTTT
	# echo "old: $FILE"
	newfile="$(echo ${FILE} | sed -e 's/-f-sport_/_/')" ;
	# echo "new: ${newfile}"
    # LLLLLLLLLLLLLLLLLLLLLLLLLLL

	mv "${FILE}" "${newfile}"
	echo "renaming file $counter"
	counter="$((counter + 1))"
done

echo "renaming the ...full.zip files in view dirs"
counter=1
SUFFIX2=*full.zip;
for FILE in $ACCBASE$SUFFIX2; do
	#TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
	# echo "old: $FILE"
	newfile="$(echo ${FILE} | sed -e 's/-f-sport_/_/')" ;
	# echo "new: ${newfile}"
	#LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
	mv "${FILE}" "${newfile}"
	echo "renaming file $counter"
	counter="$((counter + 1))"
done
