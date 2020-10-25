/* MongoFB를 이용하기 위해 사실상 아래의 코드들을 boiler-plate처럼 활용해야 하는데
   네트워크 관련이라 복잡하고 힘들다. 그래서 도입된 것이 다음에 배우게 될 Mongoose이다. */
   
// jshint esversion:6

/******************************************************************************/

// import MongoDB module
const MongoClient = require('mongodb').MongoClient;
// import assert module for testing
const assert = require('assert');
// database name
const dbName = 'fruitsDB';
// connect URL
const url = 'mongodb://localhost:27017';
// create a new Mongo client
/* Pass Option {useUnifiedTopology: true} Because of (node:37394)DeprecationWarning */
const client = new MongoClient(url, {useUnifiedTopology: true});
// use connect method to connect to the server
client.connect(function (err) {
  assert.equal(null, err);
  console.log('Connected successfully to server!');
  const db = client.db(dbName);

  // client.close();
  // OR
  // insertDocuments (db, function () {
  //   client.close();
  // });
  /* 위와 같이 코딩하여 실행할때 마다 => 'Inserted 3 documents into the collection.' */
  // OR
  findDocuments (db, function () {
    client.close();
  });
  /* 위와 같이 코딩하여 실행할때 마다 => 'Found the following records.' */
});

/* 'node app.js' 실행
// (node:37394) DeprecationWarning: current Server Discovery and Monitoring engine
// is deprecated, and will be removed in a future version. To use the new Server
// Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the
// MongoClient constructor.
// Connected successfully to server!
*/
/***
  만약 'node app.js' 실행을 했을 때 결과가 아래와 같다면 MongoDB sever를 start해야 한다!!!
    "AssertionError [ERR_ASSERTION]: null == MongoNetworkError: failed to ..."
  즉, MongoDB sever가 작동중이어야 server로 connect가 가능하다.
***/

// set method 'insertDocuments()'
const insertDocuments = function (db, callback) {
  // get the documents collection
  const collection = db.collection('fruits');
  // insert some documents
  collection.insertMany([
    {
      name: 'Apple',
      score: 8,
      review: 'Good fruit'
    },
    {
      name: 'Orange',
      score: 6,
      review: 'Kinda sour'
    },
    {
      name: 'Banana',
      score: 9,
      review: 'Great stuff!'
    }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into the collection.');
    callback(result);
  });
};
/* 위 코드를 작성 후 실행하고 나서 다른 터미널로 'mongo shell'을 실행하여 데이터베이스를 확인.
  // 'fruitsDB' database, 'fruits' collection이 생성되었음을 확인
    > show dbs
    admin     0.000GB
    config    0.000GB
    fruitsDB  0.000GB
    local     0.000GB
    shopDB    0.000GB
    > use fruitsDB
    switched to db fruitsDB
    > db
    fruitsDB
    > show collections
    fruits
    > db.fruits.find()  => "MongoDB Documents"!
    { "_id" : ObjectId("5f4b6795e18c28b4aace63f2"), "name" : "Apple", "score" : 8, "review" : "Good fruit" }
    { "_id" : ObjectId("5f4b6795e18c28b4aace63f3"), "name" : "Orange", "score" : 6, "review" : "Kinda sour" }
    { "_id" : ObjectId("5f4b6795e18c28b4aace63f4"), "name" : "Banana", "score" : 9, "review" : "Great stuff!" }
*/

// set method 'findDocuments()'
const findDocuments = function (db, callback) {
  // get the documents collection
  const collection = db.collection('fruits');
  // find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log('Found the following records.');
    console.log(fruits);
    callback(fruits);
  });
};
/* 위 코드를 작성 후 실행하면, 아래와 같이 출력된다. => "Javascript Object"!
  Found the following records.
  [
    {
      _id: 5f4b6795e18c28b4aace63f2,
      name: 'Apple',
      score: 8,
      review: 'Good fruit'
    },
    {
      _id: 5f4b6795e18c28b4aace63f3,
      name: 'Orange',
      score: 6,
      review: 'Kinda sour'
    },
    {
      _id: 5f4b6795e18c28b4aace63f4,
      name: 'Banana',
      score: 9,
      review: 'Great stuff!'
    }
  ]
*/

/******************************************************************************/
