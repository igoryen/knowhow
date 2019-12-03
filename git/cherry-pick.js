git fetch upstream
git checkout -b CX-5556-d upstream/develop
git cherry-pick 4945a8b92cfa782199ed4b46546ec7593f302b70
git log --oneline
git status
git push origin CX-5556-d:CX-5556-c -f // *-d to replace the already existing *-c
