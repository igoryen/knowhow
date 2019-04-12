# zata = zip and tuck away
path=~/aaa/log/
date=$(date +%y%m%d)
# date=$(date  +%b-%d-%y)
# echo ${path}log_${date}.zip
zip -r ${path}log_${date}.zip ${path}log_x