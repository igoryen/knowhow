# deosn't work
# create a "color" dir in every "view" folder
echo "Running create_img_adhub.sh"


counter=1
BASE=~/Documents/ig/_mine/LEXADHUB;
TICKET=12/1261/test;
MODEL=model_rx-350_1;
YEAR=year_2017-f_sport_7;
VIEW=view_*;
# ACCBASE=~/Documents/ig/_mine/LEXADHUB/$TICKET/test/year_2016-f_sport_5/view_*;
ACCBASE=$BASE/$TICKET/$MODEL/$YEAR; # <=====<<<

# for FILE in ../../LEXADHUB/9/913/test1/dst8_f_test/item_*/*.txt; do
IFS=' ' 
for DIR in "$ACCBASE"/*/; do
	
	#TTTTTTTTTTTTTTTTTTTTTTTTTTTTT
	# echo "old: $FILE"
	# newfile="$(echo ${FILE} | sed -e 's/-f-sport_/_/')" ;
	newdir="pooh" ;
	# echo "new: ${newfile}"
    # LLLLLLLLLLLLLLLLLLLLLLLLLLL

	#mv "${FILE}" "${newfile}"
	#mkdir "${newdir}"
	echo "creating directory -  ${DIR} ... ${newdir} -  $counter"
	counter="$((counter + 1))"
done
