
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
    - reset *
    - merge 
    - config 
    - rebase 
    - revert 
    - diff
    - apply 
    - cherry pick *
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

to understand `git reset` we need to understand some concepts first 
- two type of refs 
- three trees of git
- 3 types of reset (mixed,soft,hard) 

there are two refs in git main ref and head ref . main ref always points to the latest commit in a branch , and head ref points to the current commit the user is in or checked out . When main and head ref is different then we call it a detached head state 

there are three trees is git system , `git reset` command manipulates therese trees  
- _working directory_ is synced with local file system  
- _index tree_  tracks working directory changes of files that have been added to the staging area with `git add` command 
- _commit tree_ is the commit history 


by default `git reset` is of type `mixed` (gir reset --mixed / git reset)  

__`git reset --hard`__

updated all the three trees , it changes the commit tree to a certain commit then modifies the index tree and file tree to match the commit 

__`git reset --mixed`__

changes the commit tree and index tree , and any changes of files that have be undone by index tree are moved to the working directory 

__`git reset --soft`__

only effects the commit tree , the index and file tree are untouched 



ref : 
https://www.atlassian.com/git/tutorials/undoing-changes/git-reset 



### what is `git cherry-pick `

- it enables git commits to be picked by reference and appended to the current working head 
- lets we have a git tree like this 
    ```
    a - b - c - d   Main
            \
            e - f - g Feature
    ```
- we can use cherry pick to pick any commit from feat. branch to append to main 
    ```
    git checkout main 
    git cherry-pick <sha-of-f-commit>
    ```
- now the tree will look like this 
    ```
    a - b - c - d - f   Main
            \
            e - f - g Feature
    ```

### rebase 

### bisect 

### log 


### blame 