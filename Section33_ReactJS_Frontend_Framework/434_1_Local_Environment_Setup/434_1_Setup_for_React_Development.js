/* Setup Local Environment for Creating React Apps on

  1. Check Node is Up to Date
  2. Install VSCode
  3. Create React App
  4. Run App

*/

/* 1. Check Node is Up to Date

  $ node --version (또는 $ node -v)
  v10.13.0

  // node.js 사이트를 방문하여 최신버전을 확인 후 최신 버전이 아닐 경우 최신 버전 설치
  // node.js 설치는 node.js 노드 버전 관리 툴인 nvm을 이용하여 설치
  $ nvm install v12.19.0

*/

/* 2. Install VSCode

  // 설치 사이트 방문하여 Stable Build 설치 https://code.visualstudio.com/

  // 설치 후 실행
  $ code .

  // VSCode Extension 설치
  (1) Babel관련
    Sublime Babel,
    Babel JavaScript,
    Babel ES6 등

  (2) icon관련
    Material Icon Theme,
    VSCode-Icons 등

*/

/* 3. Create React App

  // 리액트 사이트 공식문서를 참조하여 앱 생성 그리고 작동
  https://reactjs.org/docs/create-a-new-react-app.html#gatsby-focus-wrapper
  // 앱을 만들고자 하는 디렉토리로 이동하여 앱을 생성
  $ npx create-react-app <app name>
  // 앱 디렉토리 안으로 이동
  $ cd <app name>
  // 앱 작동
  $ npm start


  (1) 앱을 만들고자 하는 디렉토리로 이동하여 앱을 생성
  $ npx create-react-app my-app

  Installing packages. This might take a couple of minutes.
  Installing react, react-dom, and react-scripts with cra-template...

  Success! Created my-app at /Users/charlie/Documents/Udemy/WebDevelopmentBootcamp/web_development/Section33_ReactJS_Frontend_Framework/434_2_Create_React_App/my-app

  Inside that directory, you can run several commands:
  //$ npm start
    Starts the development server.
  //$ npm run build
    Bundles the app into static files for production.
  //$ npm test
    Starts the test runner.
  //$ npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

  We suggest that you begin by typing:
  //$ cd my-app
  //$ npm start

  Happy hacking!

  (2) 앱 작성과 관련없는 파일들 제거 하고 필요한 요소 추가하기
    - public 폴더에서 index.html 만 남기고 지우기
    - index.html 에서 아래의 두 줄 남기고 지우기
      <title>React App</title>
      <div id="root"></div> 만 남기고 지우기
    - index.html 에 아래와 같이 추가하기
      <script src="../src/index.js" type="text/jsx"></script>
    - src 폴더에서 index.js 만 남기기
    - index.js 에서 아래의 두 줄 남기고 지우기
      import React from 'react';
      import ReactDOM from 'react-dom';
    - index.js 에 아래와 같이 추가하기
      ReactDOM.render(
        <h1>Hello World</h1>,
        document.getElementById('root')
      )


*/

/* 4. Run App

  // 앱을 작동시키면 브라우저에서 http://localhost:3000/ 자동으로 페이지가 열린다.
  $ npm start

*/
