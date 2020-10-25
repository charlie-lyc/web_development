/*** Gitignore

*** 다행스럽게도 language, framework, runtime-environment, application 별 ".gitignore"의
  예시가 GitHub에 정리되어 있다.: https://github.com/github/gitignore

*** 예를 들어 'Xcode'에서 'Swift'를 이용해 개발을 진행하고 동시에 GitHub에서 버전관리를 한다면
  위의 루트에서 "Xcode.gitignore"와 "Swift.gitignore"을 활용하면 된다.

--------------------------------------------------------------------------------

$ mkdir Project

$ touch file1.txt file2.txt file3.txt
$ touch secrets.txt

$ ls -a
.           ..          .DS_Store   file1.txt   file2.txt   file3.txt   secrets.txt

* .DS_Store : Desktop Services Store file
  - In the Apple macOS operating system, .DS_Store is a file that stores
    custom attributes of its containing folder, such as the position of icons or
    the choice of a background image.

$ touch .gitignore
$ ls -a
.           .DS_Store    file1.txt   file3.txt
..          .gitignore   file2.txt   secrets.txt

--------------------------------------------------------------------------------

$ git status               => (1)
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
  .DS_Store
	.gitignore
	file1.txt
	file2.txt
	file3.txt
	secrets.txt
nothing added to commit but untracked files present (use "git add" to track)

$ git init                 => (2)
$ git add .                => (3) add 실행 대상에 포함 시키지 말아야 할 파일들이 있었다!!!

$ git status               => (4)
On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
  new file:   .DS_Store
	new file:   .gitignore
	new file:   file1.txt
	new file:   file2.txt
	new file:   file3.txt
	new file:   secrets.txt

$ git rm --cached -r .     => (5) 그래서, cached된 모든 파일(.)에 대해여 반복적으로(recursively) add를 취소 즉, staging area에서 삭제(rm)
rm '.DS_Store'
rm '.gitignore'
rm 'file1.txt'
rm 'file2.txt'
rm 'file3.txt'
rm 'secrets.txt'

$ git status               => (6) 다시 unstaged 상태로 복구됨.
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
  .DS_Store
	.gitignore
	file1.txt
	file2.txt
	file3.txt
	secrets.txt
nothing added to commit but untracked files present (use "git add" to track)

--------------------------------------------------------------------------------

$ open .gitignore          => (7)
  // Write file names and #"some comments" - Save file

$ git add .                => (8)
$ git status               => (9) 원치 않는 파일 '.DS_Store'과 'secrets.txt'가 제외 되었다!!!
On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   .gitignore
	new file:   file1.txt
	new file:   file2.txt
	new file:   file3.txt

$ git commit -m "complete text file1,2,3"                        => (10)
[master (root-commit) fb254ed] complete text file1,2,3
 4 files changed, 5 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 file1.txt
 create mode 100644 file2.txt
 create mode 100644 file3.txt

$ git log                                                        => (11)
commit fb254edf1a108b88534d563d3917b117272c0d07 (HEAD -> master)
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 11:44:52 2020 +0900
    complete text file1,2,3

***/
