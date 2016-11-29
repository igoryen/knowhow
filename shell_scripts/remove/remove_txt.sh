echo "running remove_txt.sh"


FOLDER=14
TICKET=1429
TESTFOLDER=test
MODEL=model_is-350-awd_;
YEAR=year_2017_8;

COLORACCBASE=~/Documents/ig/_mine/LEXADHUB/$FOLDER/$TICKET/$TESTFOLDER/$MODEL/$YEAR/view_*/color*


echo "This will go into"
echo "$COLORACCBASE"
echo "and make the following changes:"
echo "1) remove all the files with .txt extension"
	
echo 
read -p "Continue? (y|n) " -n 1 -r
# if user wants to run the whole script
if [[ $REPLY =~ ^[Yy]$ ]]
then
	for file in $COLORACCBASE/*.txt
	do
		rm "${file%}"
	done
fi

echo
echo "STATUS:"
echo "All .txt files are removed"