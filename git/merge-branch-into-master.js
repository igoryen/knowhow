
https://stackoverflow.com/questions/14168677/merge-development-branch-with-master

How to stand on the master and pull in all the changes from the branch i.e. to merge the branch into the master 


I generally like to merge master into the development first so that if there are any conflicts, 
I can resolve in the development branch itself and my master remains clean.

# (on branch development)$ git merge master
# (resolve any merge conflicts if there are any)
# git checkout master
# git merge development (there won`t be any conflicts now)

There isn`t much of a difference in the two approaches, but I have noticed sometimes that I don`t want to merge the branch into master yet, after merging them, or that there is still more work to be done before these can be merged, so I tend to leave master untouched until final stuff.