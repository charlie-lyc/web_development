/* 앞으로 우리가 구현할 것은 'ReSTful API'를 이용한 "Wikipedia" 같은 사이트이다. */


/* Database with "Robo 3T"(https://robomongo.org/) : Graphical User Interface for MongoDB

  1. Download and Start Robo 3T

  2. Create MongoDB connections

  3. 일단 특별한 입력값없이 기본 설정 그대로 localhost:27017로 연결

  4. 위와 같이 새로운 Connection을 생성한 뒤 "Test" 또는 "Connect" 클릭

  5. 에러 발생!!! 이유는?... : 로컬 상태이기 때문에 MongoDB 서버를 스타트 시켜야 한다!!!

  6. MongoDB에 연결 후, mongo shell 을 실행하여 데이터베이스 현황이 살펴보면 일치함을 확인할 수 있다.

*/


/****************************************

  (Client -) API --- Server -+- Database

*****************************************/


/* 이제 새로운 GUI기반의 Robo 3T에서 새로운 데이터베이스를 만들어 간단하게 실습

  1. New Connection 우클릭 - Create Database - Database Name : "wikiDB"

  2. 'wikiDB' 더블클릭 - 'Collections' 우클릭 - Create Collection -  Database Name : "articles"
   => 'MongoDB Naming Convention'관련으로 MongoDB Documents 검색 및 공부 요망

  3. 'Collections' 더블클릭 - 'articles' 우클릭 - Insert Document - 애래의 내용 입력 - Save
    {
      title: "REST",
      content: "REST is short for Representational Satus Transfer. It is an architectural style for designing APIs."
    }

  4. And insert more Documents : 참조 https://github.com/londonappbrewery/Build-Your-Own-RESTful-API
    {
      "_id" : ObjectId("5c139771d79ac8eac11e754a"),
      "title" : "API",
      "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
    }
    {
      "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
      "title" : "Bootstrap",
      "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
    }
    {
      "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    }

*/


/****************************************

  (Client -) API -+- Server <=> Database

*****************************************/


/*** Code Wiki-API : 참조 https://github.com/londonappbrewery/Build-Your-Own-RESTful-API

  1. Create new Directory called 'Wiki-API'

  2. Institute NPM and install 'express', 'ejs', 'body-parser' and 'mongoose'

  3. Create a new file called app.js

  4. Inside app.js add server code (Write/Copy)

  5. Setup MOngoDB:
    1) DB name is wikiDB
    2) Collection name is articles
    3) Document has 2 fields: title and content

  6. Use ReSTful Routing

    HTTP-Verb  ex) /articles               ex) /articles/REST

    GET        Fetch 'all' the articles    Fetch the articles on REST
    POST       Create 'one' new article                   -
    PUT                  -                 Update the article on REST (as a whole)
    PATCH                -                 Update the article on REST (as a part)
    DELETE     Deletes 'all' the articles  Delete 'one' article on REST

    => 자전거를 주문했는데 바퀴가 찌그렀다면 방법은 두가지
      1. 새 자전거를 받거나 : PUT
      2. 바퀴만 새걸로 받거나 : PATCH
***/


/****************************************

  (Client +) API <=> Server <=> Database

*****************************************/
