# GIVEN:
# A: /year_2016-f sport_5/view_rear34_5/color_ultra_white/i_rx-350-f-sport_...
# B: /year_2016-f sport_5/view_rear34_5/color_ultra_white/i_rx-350_...

# TASK: 
# rename from A to B


#ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1274/test;
#FILE="$ACCBASE /year_2016-f sport_5/view_*/color_*/*";

# STARTED BUT NOT FINISHED
# THE FILE  RENAMES, NOT UNZIPS

counter=1
ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1274/test/year_2017-f_sport_5/view_*/;

SUFFIX=color_*/*;
# for FILE in ../../LEXADHUB/9/913/test1/dst8_f_test/item_*/*.txt; do
IFS=' ' 
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
