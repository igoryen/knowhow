echo "Running: remove_meta.sh"

echo "Removing all .mov files in "


for file in ../LEXADHUB/8/864/ready/group*/item*/*.mov
do
	rm "${file%}"
done

echo "All .mov files are removed"