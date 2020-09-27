/*** 기본 개념

  [Working Directory]            [Staging Area]            [Local Repository]            [Remote Repository]

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

5.git remote add origin <route>                                            6.git push (-u origin master)
                                                                            -------------->
***/

/*** Git Hub : Remote Repository

1. Sign Up - Sign In - Repositories - New - Repository name : "Story"(가급적 working dircetory와 동일한 이름 추천)
  * NOT initailize this repository

2. - Create repository (create remote repository)   => 실습용으로 이 후에 삭제

3. Then you can see below...

  Quick setup — if you’ve done this kind of thing before
    Set up in Desktop or HTTPS SSH https://github.com/charlie-lyc/Story.git
    Get started by creating a new file or uploading an existing file.
    We recommend every repository include a "README", "LICENSE", and ".gitignore".
  …or create a new repository on the command line
    $ echo "# Story" >> README.md
    $ git init
    $ git add README.md
    $ git commit -m "first commit"
    $ git remote add origin https://github.com/charlie-lyc/Story.git
    $ git push -u origin master

  …or push an existing repository from the command line
    $ git remote add origin https://github.com/charlie-lyc/Story.git
    $ git push -u origin master

--------------------------------------------------------------------------------

  *** Inside working directory with the same name(~/Story) ***

  $ git status                         => (1)
  On branch master
  nothing to commit, working tree clean

  $ git log                            => (2)
  commit 9977375488236d09468bd14ce10288f1cef375ec (HEAD -> master)
  Author: Lee YoungCheol <ofetwo@gmail.com>
  Date:   Mon Aug 24 07:41:13 2020 +0900
      Complete chapter2 and 3
  commit b3a2c6b659f48d94fde7628a2ce5ccd96a4fa981
  Author: Lee YoungCheol <ofetwo@gmail.com>
  Date:   Mon Aug 24 07:13:39 2020 +0900
      Complete chapter1

  $ git remote add origin https://github.com/charlie-lyc/Story.git => (3) 해당 route의 remote repository를 이 프로젝트의 original remote repository으로 설정.

  $ git push -u origin master          => (4) user의 "original(Name of Remote)" remote repository에 위치한 "master(Name of Branch)" branch로 local repository의 commit을 보냄.
  Enumerating objects: 7, done.
  Counting objects: 100% (7/7), done.
  Delta compression using up to 8 threads
  Compressing objects: 100% (6/6), done.
  Writing objects: 100% (7/7), 634 bytes | 634.00 KiB/s, done.
  Total 7 (delta 0), reused 0 (delta 0)
  To https://github.com/charlie-lyc/Story.git
   * [new branch]      master -> master
  Branch 'master' set up to track remote branch 'master' from 'origin'.


  4. Git Hub - "/Story" - Insights - Network - Network graph
    : 앞서 실행한 commit들이 점으로 표시되어 있으며 마우스를 갖다 대면 메시지를 볼수 있다.

***/
