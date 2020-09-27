/* Download "MongoDB Community Sever"
   1. MongDB (https://www.mongodb.com/)
   2. Software - Community Sever - Available Downloads
      : https://www.mongodb.com/try/download/community
        => recommend 'current release edition'
*/


/* Install "MongoDB Community Edition"
  1. Docs - Server - MongoDB Manual(https://docs.mongodb.com/manual/)
  2. Navigation - Install MongoDB Community Edition - Install on macOS
    : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
*/
/*----------------------------------------------------------------------------*/
/* Install MongoDB using Homebrew

  1. Tap MongoDB Homebrew
    $ brew tap mongodb/brew

  2. Install MongoDB
    $ brew install mongodb-community@4.4

*/
/* Run, Stop and Use MongoDB with Homebrew

  1. Run MongoDB
    $ brew services start mongodb-community@4.4
    // OR - Rerun MongoDB
    $ brew services restart mongodb-community@4.4

  2. Verify that MongoDB has started successfully
    $ ps aux | grep -v grep | grep mongod

  3. Connect and Use MongoDB Shell
    $ mongo

  4-1. Stop MongoDB
    $ brew services stop mongodb-community@4.4

  4-2. Stop MongoDB
    $ pgrep mongo
    (ex)4905
    $ kill (ex)4905
    $ ps aux | grep -v grep | grep mongod

  4-3. Stop MongoDB
    $ pkill -f mongod
    $ ps aux | grep -v grep | grep mongod

*/


/*----------------------------------------------------------------------------*/
/* Install MongoDB using '.tgz' Tarball, and Start Server
  : 동영상 그대로 따라해 보았고 , MongoDB Docs의 Manual도 따라 해보았는데 뭔가 엉성하게 실행이 된다.
    그 이유가 Homebrew로 앞서 설치를 해버려서인지는 모르겠다.

  1. Download '.tgz' the tarball : https://www.mongodb.com/try/download/community

  2. Extract the files from the downloaded archive - 다운로드한 디렉토리에서
    $ tar -zxvf mongodb-macos-x86_64-4.4.0.tgz

  3. 압축을 푼 디렉토리에서
    $ mv '/Users/charlie/Downloads/mongodb-macos-x86_64-4.4.0' /usr/local/mongodb

  4. 해당 폴더를 열어 제대로 이동했는지 확인하고 홈 디렉토리로 이동
    $ open /usr/local/mongodb
    $ cd ~

  5. 홈 디렉토리에서 .bash_profile 파일이 없다면 만들기
    $ pwd
    /Users/charlie
    $ touch .bash_profile

  6. .bash_profile 파일에 MongoDB 실행 경로 설정
    $ atom .bash_profile
      export PATH=$PATH:/usr/local/mongodb/bin

  7. Create the data directory
    $ mkdir -p ./data/db

  8. Set permissions for the data directory
    $ whoami
    charlie
    $ chown charlie ./data/db

  9-1. Run MongoDB
    $ mongod
    (=> brew를 이용해서 이미 설치해서 그런지 작동되지 않는다.X)

  9-2. Run MongoDB with a configuration file
    $ mongod --config /usr/local/etc/mongod.conf
    (=> 해당 디렉토리에서 mongod.conf 존재까지 확인했는데 작동되지 않는다.X)

  9-3. Run MongoDB with command-line parameters
    $ mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
    => 유일하게 작동된다.

  10. Verify that MongoDB has started successfully
    $ ps aux | grep -v grep | grep mongod

  11. Connect and Use MongoDB Shell
    $ mongo

  12-1. Stop MongoDB
    $ pkill -f mongod
    $ ps aux | grep -v grep | grep mongod

  12-2. Stop MongoDB
    $ pgrep mongo
    (ex)4905
    $ kill (ex)4905
    $ ps aux | grep -v grep | grep mongod

*/
