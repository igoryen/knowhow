191211 1129

	Scenario:
	You pushed your branch
	Created a pull request
	Github shows "Conflicting files"

	git fetch upstream
	git merge upstream/develop
	PS > VCS > Git > Resolve conflicts




	// git commit -m "resolve conflicts"
	// git push origin bug191106-b
	// git rebase -i upstream/master
	// git rebase --continue
	// git push origin bug191106-b -f

191106 1508

	When starting a new branch tracking develop:

	git checkout develop
	git fetch upstream
	git merge upstream/develop
	git checkout -b CX-XXXX develop



191106 1456

	git checkout CX-5790-g
		Switched to branch 'CX-5790-g'
		Your branch and 'upstream/develop' have diverged,
		and have 4 and 19 different commits each, respectively.
		  (use "git pull" to merge the remote branch into yours)
	git fetch upstream
	git merge upstream/master
		Merge remote-tracking branch 'upstream/master' into CX-5790-g
		# Please enter a commit message to explain why this merge is necessary,
		# especially if it merges an updated upstream into a topic branch.
		#
		# Lines starting with '#' will be ignored, and an empty message aborts
		# the commit.
	git push origin CX-5790-g

  -----------


git log --oneline -5
git fetch upstream
git merge upstream/master
git commit -m "resolve conflicts"
git push origin bug191106-b
git rebase -i upstream/master
git rebase --continue
git push origin bug191106-b -f


git log --oneline -20
git push origin bug191106-b
git push origin bug191106-b:bug191106 -f // bug191106-b will replace bug191106
git rebase -i upstream/master
git rebase --continue
git push origin bug191106-b -f

