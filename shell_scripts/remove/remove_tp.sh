echo "Running remove_tp.sh"
# remove_tp = remove txt and psd files

echo "Removing all .txt files"

path=../LEXADHUB/8/898/ready/model*/year*/view*/color*


for file in $path/*.txt
do
	rm "${file%}"
done

echo "All .txt files are removed"

echo "..........."

echo "Removing all .psd files in "


for file in $path/*.psd
do
	rm "${file%}"
done

echo "All .psd files are removed"