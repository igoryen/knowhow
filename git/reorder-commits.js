http://blog.dennisrobinson.name/reorder-commits-with-git/

There are lots of good reasons to change the order of your commits: 
sometimes they make more sense in a different order, 
or maybe you want to only push one commit out of several (more on how to do that soon).  
Luckily, Git provides a way to do this, 
as long as the commits have not yet been pushed upstream to the remote server.  
This is known as "rewriting history".  
I will explain how to do this with both sourcetree and git in a console.


Warning: 
Never modify history that has already been pushed upstream to a server, 
or shared with other users.  
This is a headache you do not want to deal with 
and can severely harm your repository.  
This means you should not change the order of any commits 
below the remote part of your branch!

SourceTree makes reordering commits really easy.  
Right click on the last commit of the remote branch (origin/master for example), 
and choose “rebase children of <hash> interactively…” from the context menu.  
A dialog will appear with a list of the commits that are above the one you selected.  
In this dialog you can do a few things including editing commit messages and squashing commits together.  What we are interested is reordering the commits which is as easy as dragging and dropping them into the order you want.  Be careful here, if you change the order of two commits that modify the same area of the same file (the second commit builds on changes from the first) you are going to end up with a conflict that you will have to merge manually.  Once you are satisfied with the ordering, hit the “OK” button and you are done (unless there is a conflict).

Using Git on the console is also fairly easy.  Start by executing the command git rebase -i HEAD~<#> where <#> is the number of commits involved in the reorder:


$ git rebase -i HEAD~3
1
$ git rebase -i HEAD~3
An editor will open (probably vim) with text similar to this:


pick 99b2f12 Fixed project file to work with new library version
pick 516497d Refactored animation class
pick 7c5bc93 Refactored asset class

# Rebase 897e85c..7c5bc93 onto 897e85c
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
pick 99b2f12 Fixed project file to work with new library version
pick 516497d Refactored animation class
pick 7c5bc93 Refactored asset class
 
# Rebase 897e85c..7c5bc93 onto 897e85c
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
In my case, I wanted to bring my top most commit where I fixed the project file down to the bottom so that I can push only that one commit to the remote server.  That is as easy as moving the top pick to the bottom like so:


pick 516497d Refactored animation class
pick 7c5bc93 Refactored asset class
pick 99b2f12 Fixed project file to work with new library version

...
1
2
3
4
5
pick 516497d Refactored animation class
pick 7c5bc93 Refactored asset class
pick 99b2f12 Fixed project file to work with new library version
 
...
After you close the editor you should get a message like this:


$ git rebase -i HEAD~3
Successfully rebased and updated refs/heads/master.
1
2
$ git rebase -i HEAD~3
Successfully rebased and updated refs/heads/master.
And you are done!

There are a couple caveats of swapping commits around, one is the potential for a nasty merge, but you can always go back to your previous state by aborting the rebase with git rebase --abort .  The second is that the date stamp of all commits above the one that was rebased will be reset to the current date and time.