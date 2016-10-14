echo "Running remove_adhub.sh"

for file in testing/a*/*
do
	# echo "$file" 
	bigtxt=$(echo *big.txt)
	echo $bigtxt
done
exit 0
# mv $file $(echo $file | sed -n s/$1/$2/p)

# ----------------------
# to display just the file name, use the following: ${file##*/}