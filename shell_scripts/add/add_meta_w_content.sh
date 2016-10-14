# TO DO:
# 1) numbers > 1 digit long
FOLDER=wipers;
CONTENT="Wipers";
counter=1;
# n=65;
# max=66;
# counter=1;
# -----------------------------------------
# echo "adding directories at $ACCBASE"

# FNAME=$(echo "$FOLDER" | tr '[:upper:]' '[:lower:]');
ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1362/test2/item_$FOLDER*/;


for dir in $ACCBASE
	do
		# cd "${dir}" && iamhere=`pwd`&& echo "I am here: " $iamhere 
		echo "Services Lexus - $CONTENT $counter"
		cd "${dir}" && echo "Services Lexus - $CONTENT $counter" > meta_f.txt
		counter="$((counter + 1))"
	done




# cd "$ACCBASE"

# while [ "$n" -le "$max" ]; do
# 	cd "$ACCBASE"
# 	echo "creating item_${FNAME}-${counter}_${n}"
#   	mkdir -p "item_${FNAME}-${counter}_${n}" && cd "item_${FNAME}-${counter}_${n}" && echo "Lexus Services - $FOLDER $counter" > meta_e.txt && echo "i_${FNAME}-${counter}_big.jpg" > popup.txt && echo "i_${FNAME}-${counter}_full.zip" > target.txt 
# 	n=`expr "$n" + 1`;
# 	counter="$((counter + 1))"
# done

echo "created $counter dirs named $FNAME at $ACCBASE"

# ----------------------------------- 	
# && iamhere=`pwd`&& echo "I am here: " $iamhere 