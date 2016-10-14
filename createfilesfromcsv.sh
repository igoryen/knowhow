# create txt files with contents from a csv
counter=1
while IFS="," read var1 var2 # (1)
do
	file=$var1 # (2)

    touch ${file}.txt
    
    touch $var1.txt
    
    echo $var2 > ${file}.txt 
    echo "made file $counter: $var1.txt - $var2"
	    
    counter=$((counter + 1))

done < descriptions.csv

# 1: IFS = internal field separator. Field = the value between the IFS. Read field1 into var1 and field 2 into var2
# 2: copy field1 into variable 'file'