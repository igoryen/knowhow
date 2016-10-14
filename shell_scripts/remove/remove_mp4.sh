echo "Running remove_mp4.sh"
echo "Removing all .mp4 files in "
for file in ../LEXADHUB/8/865/ready/f/item*/*.mp4
do
	rm "${file%}"
done

echo "All .mp4 files are removed"