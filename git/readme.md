
- what is git
- concepts
- basic command 
- must know commands 

- what is git cherry pick 
- what is staging area in git 
- what is detached head and how to solve it 
- what is git reset 
- how to delete a remote branch it git 
- how to push a branch to remote 

- advance git commands
    - branch
    - checkout 
    - reset 
    - merge 
    - config 
    - rebase 
    - revert 
    - diff
    - apply 
    - cherry pick 
    - bisect 
    - blame 
    - grep 


### what is git 

is is a version controlling tool 

### what is staging area in git 

Staging area is files that are going to be a part of the next commit . which lets git know what changes in the files are going to occur for the next commit . 

### what is head 
- head in git is a pointer to the current branch reference
- which in turn is the latest commit in the branch 

### what is detached head 
- detached head occurs when you checkout a commit that is not a branch / head of a branch 
- the term detached head means you are not viewing the head of a repository 

### how to solve detached head 
if you don't want to save the changes associated with the detached head just checkout to a branch 

```
git checkout master

```

But if you want to keen the files , you can use a temporary branch 

1. `git branch temp` will save the changes in a new branch named temp
2. `git checkout master` , move to a head / any branch
3. now merge the branches `git merge temp` 


### what is git reset 
git reset is a complex and versatile command for undoing changes 

- three type of trees 
- two type of refs 

ref : 
https://www.atlassian.com/git/tutorials/undoing-changes/git-reset 

### what is git cherry-pick 