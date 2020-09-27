/*** 기본 개념

  [Working Directory]  [Staging Area]  [Local Repository]  [Remote Repository]

                                  git clone
                  <-----------------------------------------
***/


/* Clone : https://github.com/austinzheng/swift-2048 실습 대상 repository(아이폰용 숫자게임)

  1. Code - Clone with HTTPS - Copy URL

--------------------------------------------------------------------------------

  $ git clone https://github.com/austinzheng/swift-2048.git  => (1)지정 route로 부터 프로젝트 복제
  Cloning into 'swift-2048'...
  remote: Enumerating objects: 287, done.
  remote: Total 287 (delta 0), reused 0 (delta 0), pack-reused 287
  Receiving objects: 100% (287/287), 93.70 KiB | 35.00 KiB/s, done.
  Resolving deltas: 100% (155/155), done.

  $ cd swift-2048

  $ git log                                                  => (2) 제작,배포자가 2014-2017년까지 실행한 commit 확인

  commit 169a0f84ee962d8a547cc0a8caeea1b4911c75ae (HEAD -> master, origin/master, origin/HEAD)
  Merge: ed93a6c d5a9fb1
  Author: Austin Zheng <austinzheng@gmail.com>
  Date:   Sun Jun 11 20:23:47 2017 -0700
      Merge pull request #28 from D4ttatraya/swift4
      Migrated to swift4

  commit d5a9fb1f83f3d54bc35f76e8d3fca4af716891e9
  Author: Datta <datta@Dattas-MacBook-Pro.local>
  Date:   Sun Jun 11 09:28:04 2017 +0200
      Migrated to swift4 recommended settings with xcode9-beta

  commit ed93a6cd4e1ce842ec07d48cf3fd55c3ca39f275
  Merge: c71dc79 0f2f339
  Author: Austin Zheng <austinzheng@gmail.com>
  Date:   Wed Mar 1 20:37:46 2017 -0800
      Merge pull request #23 from PumpMagic/swift3-migration
      Migrate to Swift 3
  .
  .
  .

*/
