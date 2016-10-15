echo "Running add_file.sh"

# to run:
# 1) ./add_file.sh testing/a*
# 2) ./add_file.sh testing/year*/view*/color*

# for d in **/*/
# for dir in testing/year*/view*/color*
# for dir in testing/a*
for dir in "$@"
do 
	echo "in ${dir}"
	touch "${dir}/meta_y.txt"
done



# for file in testing/year*/view*/color*/
# cat > foo.conf << EOF
# NameVirtualHost 127.0.0.1

# # Default
# <VirtualHost 127.0.0.1>
# ServerName localhost
# DocumentRoot "C:/wamp/www"
# </VirtualHost>
# EOF