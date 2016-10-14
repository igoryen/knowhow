echo "Running zip_dirs.sh"

# for i in dirs2zip/; do 
# 	zip -r "${i%/}.zip" "$i"; 
# done
#--------------------------
IFS=$'\n'

dir=../../LEXADHUB/9/913/test1/zips

for f in $(find "$dir" -mindepth 1 -maxdepth 1 -type d ); do
    zip -j -r "$f" "$f"
done