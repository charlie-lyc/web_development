
/* Deploy web application with heroku.com and mongoDB database :

  http://localhost:3000         https://<app>.herokuapp.com
            |               ==>           |
  mongodb://localhost:27017     mongodb+srv://<user>:<password>@<clusterURL>/<dbName>

*/


/* MongoDB와 앱을 연결하기 전에 mognodb.com에서 회원가입 및 로그인해서 작업해야할 몇가지들 :
    1. Create a Project
      - Projects - Procject Name - Create Project
    2. Create a Cluster
      - Sellect Project - Build a Cluster - Select 'FREE' Tier -
      - 'AWS Asia, Singapore(ap-southeast-1)' - Cluster Name - Create Cluster
    3. Add New Database User
      - Sellect Project - Database Accesss - Add New Database User - New User -
      - Autogenerate Secure Password - Copy - Add User
    4. Create Database
      - Sellect Project - Clusters - 'Collections' 선택 - Create Database
      ex) "testDB"
    6. Whitelist IP my address
      - Network  Access -  Add IP Address - "Allow access from anywhere" 클릭 -
      - "0.0.0.0/0  (includes your current IP address)" 으로 설정
    5. Get 'Cluster URL'
      - Sellect Project - Clusters - '...' 클릭  - 'Command Line Tools' 선택 -
      - ex) "fruitprojectcluster.5iopq.mongodb.net"
    7. Connect to MongoDB
      - Sellect Project - Clusters - Connect -
      - 3가지 방법이 있는데 'Connect with the mongo shell'과 'Connect using MongoDB Compass'
        는 실습해보기 바람
      - 여기서 해야할 것은 바로 'Connect your application'
      - 방법은 간단하다. mongoose.connect() 내의 url 대신 아래의 식별자를 입력하면 된다.

          uri = "mongodb+srv://<user>:<password>@<clusterURL>/<dbName>";
      ex) uri = "mongodb+srv://tester:test123@fruitprojectcluster.5iopq.mongodb.net/testDB";

    8. MongoDB와 연결된 이후에 웹상의 GUI나 또는 Mongo Shell을 이용하여 로컬상태에서 실습했던 다양한
      내용들을 다시 실습해보길 바람.

*/


/* 위와 같이 진행하면 연결된 데이터 베이스가 mongodb://localhost:27017 에서
    mongodb+srv://<user>:<password>@<clusterURL>/<dbName> 로 바뀌게 되는 것이다.

   그 다음은 예상하는 바와 같이 앱을 herokuapp.com에 설치할 차례이다. 바로 이 과정을 마치면 앱의 위치가
    http://localhost:3000 에서 https://<app>.herokuapp.com 로 바뀌게 되는 것이다.

   즉, 앱과 데이터베이스는 더이상 로컬 상태가 아니라 웹에 배포된 상태가 되는 것이다.
*/


/* Getting Started on Heroku with Node.js
  : https://devcenter.heroku.com/articles/getting-started-with-nodejs

  1. Set up : heroku CLI 설치 및 로그인
    $ brew install heroku/brew/heroku
*** $ heroku login ***

  2. Prepare the app
   : heroku.com에서 제공하는 기본 app templates 정도로 생각하면 된다. 필요하다면 git clone해서 이용.
    미리 제작한 앱이 이미 있다면 필요 없음.

    'If you are new to Heroku, it is recommended that you complete this tutorial
     using the Heroku-provided sample application.
     However, if you have your own existing application that you want to deploy
     instead, see "this article" to learn how to prepare it for Heroku deployment.'

  3. 위의 "this article"로 이동 : 미리 제작한 앱을 가지고 설치전 준비하기

  4. Preparing a Codebase for Heroku Deployment : 순서대로 절차를 따르면 큰 문제없이 설치된다!!!
    : https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment

    1) Track your codebase in a Git repository
      - Git installation
        $ brew install git

      - First-time Git setup
        $ git config --global <user.email>

  *** - Tracking app in Git ***
        : https://devcenter.heroku.com/articles/git#creating-a-heroku-remote
        $ cd <appDirectory>
        $ git init
        $ git add .
        $ git commit -m "Initial commit"

    2) Add a Heroku Git remote
  *** - Creating a Horoku remote ***
        : https://devcenter.heroku.com/articles/git#creating-a-heroku-remote
        $ cd <appDirectory>
        $ heroku create

*** 3) Add a Procfile : following language-specific guides ***
        $ cd <appDirectory>
        $ toch Procfile
        $ open Procfile -a atom
          => "web: node app.js" 내용 저장

*** 4) Listen on the correct port ***
      // let port = process.env.PORT;
      // if (port == null || port == "") {
      //   port = 8000;
      // }
      // app.listen(port);

    5) Use a database of object stroage instead of writing to your local filesystem
      : 우리 경우에는 외부의 MongDB를 사용하므로 해당사항이 없다. 이미 "mongoose.connect()"를 이용했다.

*** 6) Complete language-specific setup ***
      : https://devcenter.heroku.com/articles/deploying-nodejs
      - Specify the version of node : insert below code to package.json
        // "author": "Charlie",
        // "license": "ISC",
              :
        // "engines": {
        //  "node": "1x.xx"
        // },

*** 7) Create .gitignore ***
      $ cd <appDirectory>
      $ touch .gitignore
      $ open .gitignore -a atom
        => "/node_modules
            npm-debug.log
            .DS_Store
            /*.env        " 내용 저장

*** 8) Deploy app ***
      $ cd <appDirectory>
      $ git init
      $ git add .
      $ git commit -m "Add Procfile, .gitignore, and Update PORT"
      $ git push heroku master
        .
        Build succeeded!
        .
        Compressing...
        .
        Launching...
        .
        https://gentle-stream-47174.herokuapp.com/ deployed to Heroku
        .
        Verifying deploy... done
      To https://git.heroku.com/gentle-stream-47174.git

    9) Renaming Apps from the Heroku CLI
      : heroku 명령으로 앱 이름을 바꾸면 local git repository의 설정은 자동으로 바뀐다.
      $ cd <appDirectory>
      $ heroku apps:rename <newName>

      ... and then update Git remotes
      : 하지만 remote git repository의 설정은 기존의 것을 지우고 새롭게 설정해야 한다.
      $ cd <appDirectory>
      $ git remote rm heroku
      $ heroku git:remote -a <newName>

*/
