/* 앞서 생성한 "Story" repository에서 계속 실습

$ git log                             => (1)
commit 9977375488236d09468bd14ce10288f1cef375ec (HEAD -> master, origin/master, origin/HEAD)
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:41:13 2020 +0900
    Complete chapter2 and 3
commit b3a2c6b659f48d94fde7628a2ce5ccd96a4fa981
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:13:39 2020 +0900
    Complete chapter1

$ git branch alien-plot               => (2) 새로운 이름의 브랜치 생성

$ git branch                          => (3) 브랜치 현황 확인 : 두개의 브랜치가 아래와 같이 존재.
  alien-plot                                *는 HEAD의 위치를 나타내며 헤드가 있는 브랜치는 녹색으로 표시.
* master

$ git checkout alien-plot             => (4) switch branch to alien-plot
Switched to branch 'alien-plot'

$ git branch                          => (5)
* alien-plot
  master

$ open chapter1.txt
  // Change something - Save file
$ open chapter2.txt
  // Change something - Save file

$ git add .                           => (6)
$ git commit -m "modify chapter 1 and 2 to have strange sentence"
[alien-plot 0579f72] modify chapter 1 and 2 to have strange sentence
 2 files changed, 4 insertions(+), 2 deletions(-)

$ git log                             => (7)
commit 0579f7284bfd3adc0f1d0239374e16d5b4e4eb71 (HEAD -> alien-plot) <= alien-plot 브랜치에 HEAD 위치
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 17:59:24 2020 +0900
    modify chapter 1 and 2 to have strange sentence
commit 9977375488236d09468bd14ce10288f1cef375ec (origin/master, origin/HEAD, master) <= original remote repository(분기점)
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:41:13 2020 +0900
    Complete chapter2 and 3
commit b3a2c6b659f48d94fde7628a2ce5ccd96a4fa981
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:13:39 2020 +0900
    Complete chapter1

$ git checkout master                 => (8) master branch로 복귀
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

*** chapter1, chapter2 파일을 열어보면 수정했던 내용은 사라지고 원래 상태이다.

$ git branch                          => (9)
  alien-plot
* master

$ touch chapter4.txt
  //Write something - Save file

$ git add .                           => (10)
$ git commit -m "add chapter4"
[master fc0caa9] add chapter4
 1 file changed, 1 insertion(+)
 create mode 100644 chapter4.txt

$ git log                             => (11)
commit fc0caa9c2d316e3bc5d39457b96323f9e7a6f322 (HEAD -> master) <= master브랜치에 HEAD 위치
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 18:46:21 2020 +0900
    add chapter4
commit 9977375488236d09468bd14ce10288f1cef375ec (origin/master, origin/HEAD) <= 분기점
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:41:13 2020 +0900
    Complete chapter2 and 3
commit b3a2c6b659f48d94fde7628a2ce5ccd96a4fa981
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:13:39 2020 +0900
    Complete chapter1

$ git checkout alien-plot             => (12)
Switched to branch 'alien-plot'

*** 위의 명령을 실행하면 "Story" 폴더에 있던 chapter1~4 파일들 중에 chapter4는 사라지고 chapter1~3밖에 없다.
    그리고 chapter 1,2에서 앞서 수정했던 내용이 적용되어 그대로 있다.
*** 즉, master branch와 alien-plot branch 각각에서 작성된 전혀 다른 두가지 버전이 존재하게 된 것이다.

--------------------------------------------------------------------------------

$ git checkout master                 => (13) master branch로 다시 복귀
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

$ git merge alien-plot                => (14) master branch를 기준으로 해서 alien-plot을 merge
Merge made by the 'recursive' strategy.
 chapter1.txt | 3 ++-
 chapter2.txt | 3 ++-
 2 files changed, 4 insertions(+), 2 deletions(-)

$ git branch                          => (15)
  alien-plot
* master

$ git log                             => (16)
commit c1457945495912e650285d3f5f8fa24f59474cf8 (HEAD -> master)
Merge: fc0caa9 0579f72
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Tue Aug 25 08:01:25 2020 +0900
    Merge branch 'alien-plot'
commit fc0caa9c2d316e3bc5d39457b96323f9e7a6f322
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 18:46:21 2020 +0900
    add chapter4
commit 0579f7284bfd3adc0f1d0239374e16d5b4e4eb71 (alien-plot)
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 17:59:24 2020 +0900
    modify chapter 1 and 2 to have strange sentence
commit 9977375488236d09468bd14ce10288f1cef375ec (origin/master, origin/HEAD)
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:41:13 2020 +0900
    Complete chapter2 and 3
commit b3a2c6b659f48d94fde7628a2ce5ccd96a4fa981
Author: Lee YoungCheol <ofetwo@gmail.com>
Date:   Mon Aug 24 07:13:39 2020 +0900
    Complete chapter1

$ git push -u origin master            => (17)
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 8 threads
Compressing objects: 100% (9/9), done.
Writing objects: 100% (9/9), 927 bytes | 927.00 KiB/s, done.
Total 9 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 1 local object.
To https://github.com/charlie-lyc/Story.git
   9977375..c145794  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

*** github.com의 "Story" repository에서 '<>Code'탭에서 "user id"를 클릭하면
    모든 commit을 볼수 있다.

*** 혹은 'Insights'탭 - Network - "Network graph"로 들어가서 보면 branch 현황을 확인할 수 있으며
    각 포인트를 클릭하면 commit과 그 상세 내용을 볼수 있다.

*/


/* 이번에도 github.com에서

  1. Create "Story2" repository : *check 'Initialize this repository with a README'

  2. Add file - Create new file - "Story2/chapter1.txt" // Write sometihing - Commit new file

  3. 'master' 클릭 - Find or create a branch - "experimental" - Create branch: experimental from master

  4. 'experimental' branch 선택 - 'chapter1.txt' 파일 내용 일부 수정(연필 모양 아이콘) - Commit changes

  5. 다시 'master' branch 선택 - Add file - Create new file - "Story2/chapter2.txt" // Write sometihing - Commit new file


*** 여기까지 간단히 설명하자면 GUI 환경에서 master 이외의 branch를 만든 이후 각 브랜치의 파일을 수정한 후
    commit 하여 다른 버전 2개를 만듦. 자세한 내용은 Insights - Network graph 참조

  6. '<>Code' 탭 - "Compare & pull request" 클릭
  Open a pull request
  base: master <- compare: experimental
    .
    .
    .

*** 간단히 정리해보자면 master branch를 base로 해서 experimental branch를 비교했을 때
    그 차이점은 experimental branch의 chapter1.txt 파일 내용 중 일부가 master branch에는 없는 것으로 표시된다.
    즉 master branch의 chapter1.txt에 없는 부분을 experimental branch로 부터 가져와야(pull) 한다.

  7. 따라서 기꺼이 "Create pull request" 실행 => This branch has no conflicts with the base branch.

  8. [다른 branch로 부터 당겨(pull) 왔으니 당연히 다음 순서는 예상대로 병합(merge)]
    "Merge pull request" - "Confirm merge" 실행 => Pull request successfully merged and closed.
    병합이 정상적으로 완료되었으므로 experimental branch는 삭제할 수도 있다.

*** 최종 결과 Insights - Network graph 에서 확인

*/
