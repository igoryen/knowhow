echo "Running rename_file.sh"

# =========================
# 1. quoted string - "$file" - ensures that whatever $file expands to
# 	 it will be treated as a single item, 
#    not as 2 or more item if there is a space inside the file name 
# 2. -v means "verbose"

# clear
# example of use:
# add the current year (leading "16_") to each .psd file
 
MODEL=model_rx-350_1;
YEAR=year_2017_6;
ACCBASE=~/Documents/ig/_mine/LEXADHUB/12/1261/test/$MODEL/$YEAR/view_*/color*;

# version 1: works
for file in $ACCBASE/*.psd
# for file in testing/a*/*
do
	# mv "$file" "${file/16_meta.txt/17_meta.txt}" # 1 
	echo "$file --> 17_$file"
	# mv "$file" "17_"	
done

# version 2:
#for file in testing/a*/*
#do
#	mv $file ${file/340/350}
#done

# version 3: not ready...
# for old in testing/a*/beta*.txt
# do
#     new=$(echo $old | sed -e 's/beta*\.txt$/16_beta*.txt/')
#     mv -v "$old" "$new" # 2
# done