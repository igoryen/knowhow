#!/bin/bash
echo "Running rename_dirs.sh"

FILE=../testing/group_performance_1/*
ls | while read -r FILE
# for file in testing/group_performance_1/*
do
    mv -i "$FILE" `echo $FILE | tr 'vancouver-tour' 'performance' `
done

# for file in testing/group_performance_1/*
# do
# 	mv -v "$file" `echo $file | tr 'vancouver-tour' 'performance'` 
# done