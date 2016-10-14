echo "running remove_txt.sh"
echo "Removing all .txt files in ../LEXADHUB/8/830/model_rx-350_5/year_2016*/view*/color*/*.txt"


for file in ../LEXADHUB/8/830/model_rx-350-f-sport_/year_2016*/view*/color*/*.txt
do
	rm "${file%}"
done

echo "All .txt files are removed"