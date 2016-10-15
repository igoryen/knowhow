# create_n_dirs.sh
# TO DO:
# 1) Folder names containing spaces
# 2) numbers more than 1 digit long
FOLDER=Wipers;
n=65;
max=66;
counter=1;
# -----------------------------------------
echo "creating directories at $ACCBASE"

FNAME=$(echo "$FOLDER" | tr '[:upper:]' '[:lower:]');
ACCBASE=~/Documents/ig/_mine/LEXADHUB/13/1362/test/Presicion_Service_Images/$FOLDER;

cd "$ACCBASE"

while [ "$n" -le "$max" ]; do
	cd "$ACCBASE"
	echo "creating item_${FNAME}-${counter}_${n}"
  	mkdir -p "item_${FNAME}-${counter}_${n}" && cd "item_${FNAME}-${counter}_${n}" && echo "Lexus Services - $FOLDER $counter" > meta_e.txt && echo "i_${FNAME}-${counter}_big.jpg" > popup.txt && echo "i_${FNAME}-${counter}_full.zip" > target.txt 
	n=`expr "$n" + 1`;
	counter="$((counter + 1))"
done

echo "created $counter dirs named $FNAME at $ACCBASE"

# ----------------------------------- 	
# && iamhere=`pwd`&& echo "I am here: " $iamhere 