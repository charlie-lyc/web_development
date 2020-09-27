/*** 기본 개념

  [Working Directory]            [Staging Area]            [Local Repository]

      1.git init    2.git add <file> or <.>   3.git commit -m ""
                     ----------->              ----------->
                     <-----------
                      *add 실행 취소
                      git rm --cached <file> or <.>

  *가장 최근 add한 파일로 복구
  git restore --staged <file> or <.>

                              *가장 최근 commit으로 roll back
                              4.git checkout <file> or <.>
                    <----------------------------------------

***/


/*** Git : Version Control

$ mkdir Story

$ cd Story

$ touch chapter1.txt

$ open chapter1.txt
  // Write something - Save file

$ git init                          => (1-1)
  // Was created .git               => *** 이 실습이 끝난 뒤 지운다.(상위 디렉토리인 web_dev/이 이미 git init 되었으므)

$ ls -a
.            ..           .git         chapter1.txt

$ git status                        => (1-2) 현재 git stage의 상태 확인 : add와 commit의 대상과 대상이 아닌 것을 구분
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	chapter1.txt                      => 새로 생성되거나 수정된 파일 즉 Untracked files(add해야할 대상)가 '빨간색'으로 표시된다.
nothing added to commit but untracked files present (use "git add" to track)

$ git add chapter1.txt              => (1-3)

$ git status                        => (1-4)
On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   chapter1.txt          => git add 실행을 한 대상 파일은 '녹색'으로 변한다.

$ git commit -m "Complete chapter1" => (1-5) 어떤 코딩을 작성했는지 어느정도는 구체적으로 기록해야 나중에 roll back시 구분이 된다.
[master (root-commit) b3a2c6b] Complete chapter1
 1 file changed, 1 insertion(+)
 create mode 100644 chapter1.txt

$ git status                        => (1-6)
On branch master
nothing to commit, working tree clean

$ git log                           => (1-7) 실행한 commit에 대한 log정보 확인. 빠져 나올때는 'q'
commit b3a2c6b659f48d94fde7628a2ce5ccd96a4fa981 (HEAD -> master)
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:13:39 2020 +0900
    Complete chapter1

--------------------------------------------------------------------------------

$ touch chapter2.txt chapter3.txt

$ open chapter2.txt
  // Write something - Save file

$ open chapter3.txt
  // Write something - Save file

$ git status                        => (2-1)
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	chapter2.txt                      => add해야할 대상 파일들이 표시(빨간색)
	chapter3.txt
nothing added to commit but untracked files present (use "git add" to track)

$ git add chapter2.txt chapter3.txt => (2-2) add해야할 대상 파일들이 2개 이상으로 많아지면 "git add ." 명령 사용

$ git status                        => (2-3)
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   chapter2.txt          => add한 파일들이 표시(녹색)
	new file:   chapter3.txt

$ git commit -m "Complete chapter2 and 3" => (2-4)
[master 9977375] Complete chapter2 and 3
 2 files changed, 2 insertions(+)
 create mode 100644 chapter2.txt
 create mode 100644 chapter3.txt

$ git status                        => (2-5)
On branch master
nothing to commit, working tree clean

$ git log                           => (2-6)
commit 9977375488236d09468bd14ce10288f1cef375ec (HEAD -> master)
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:41:13 2020 +0900
    Complete chapter2 and 3
commit b3a2c6b659f48d94fde7628a2ce5ccd96a4fa981
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:13:39 2020 +0900
    Complete chapter1

--------------------------------------------------------------------------------

$ open chapter3.txt
  // Remove and correct something - Save file

$ git status                        => (3-1)
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   chapter3.txt
no changes added to commit (use "git add" and/or "git commit -a")

$ git diff (chapter3.txt)           => (3-2) 이전 파일과 다른 점 확인
diff --git a/chapter3.txt b/chapter3.txt
index 7986d36..b476b16 100644
--- a/chapter3.txt
+++ b/chapter3.txt
@@ -1 +1 @@
-It was the spring of hope, it was the winter of despair. => [-빨간색 문자] 삭제된 문자
\ No newline at end of file
+Dalle dadfe ahejkfeej hkjahkjhewk hjkqjkh kqhkh qdiuizvvikq => [+녹색 문자] 추가된 문자
\ No newline at end of file

$ git checkout chapter3.txt         => (3-3) Restore working tree files(or Switch branch)
Updated 1 path from the index                commit했던 파일 중에 가장 최근 version으로 roll back

$ git status                        => (3-4)
On branch master
nothing to commit, working tree clean

***/
