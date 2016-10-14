echo "Running boutique.sh"

counter=1;
while read line; 
	do 
		mkdir -p ready/item_"${line%/*}"_"$counter";
		counter="$((counter + 1))"
	done < filenames.txt