echo "Running remove_mov.sh"
echo "Removing all .mov files in "

for file in ../LEXADHUB/8/864/ready/f/group*/item*/*.mov
do
	rm "${file%}"
done

echo "All .mov files are removed"