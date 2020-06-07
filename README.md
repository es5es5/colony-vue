# colony-vue

## This is Louis's Front-End Project Seed.

<hr>

### How to start


```bash
$ git init
$ git add .
$ git remote add origin [Your Repository]

$ git submodule add https://github.com/es5es5/colony-vue.git
$ git submodule foreach git checkout master
```


### If you pull this.

```bash
$ git submodule init
$ git submodule sync
$ git submodule update --remote --merge
```


### If you push this in your main project.

```bash
$ git push --recurse-submodules=check

$ cd colony-vue
$ git add .
$ git commit -m "[commit message]"
$ git push
```

### If you can't pull this with an ERROR message below.

**'colony-vue' already exists in the index**
or
**'please make sure that the .gitmodules file is in the working tree'**

```bash
$ git submodule deinit colony-vue
$ git rm colony-vue -r
$ git commit -m "Removed submodule"
$ rm -rf .git/modules/colony-vue

$ git submodule add https://github.com/es5es5/colony-vue.git

$ git add .
$ git commit -m "submodule reset"
$ git push
```
