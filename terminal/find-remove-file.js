Q: How to find and remove a hidden file named ".DS_Store"?

A: This command:

cd <project_dir> && find . -name '.DS_Store' -exec rm -f {} \;