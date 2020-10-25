/* 실습을 위한 실행 전에 파일명 "app.js" 수정 요망.
   실습 후에는 파일명 원래대로 "dataValidation-app.js" 복구. */

// jshint esversion:6

// Import mongoose module
const mongoose = require('mongoose');

/*----------------------------------------------------------------------------*/

// Connect database url : 연결하기전에 MongoDB server가 먼저 작동되고 있어야 한다.
/* mongoose.connect('mongodb://localhost:27017/<databaseName>')
   : <databaseName>가 존재하지 않는다면 새롭게 생성하게 된다. <= "Document database(NoSQL)" */
mongoose.connect(
  'mongodb://localhost:27017/fruitsDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function () {
    console.log('Successfully connected to database!');
  });

/*----------------------------------------------------------------------------*/

/*** Data Validation with Mongoose :
  1) Mongoose - Docs - Guides - Validation : https://mongoosejs.com/docs/validation.html
  2) Built-in Validators - Schema Types - Schema Type Options
    - required, default, select, validate, get, set, alias, immutable, transform
    - Indexes : indes, unique, sparse
    - String : lowercase, uppercase, trim, match, enum, minlength, maxlength
    - Number : min, max, enum
    - Date : min, max
***/

// Create 'fruit' schema
const fruitSchema = new mongoose.Schema({
  // name: String,
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified!']
  },
  // rating: Number,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// Modeling schema
const Fruit = mongoose.model('Fruit', fruitSchema);

/*** Examples of data validation -------------------------------------------***/

// const fruit = new Fruit({
//   rating: 10,
//   review: 'Peaches are so yummy!'
// });
// fruit.save();

// => 에러가 발생하지는 않는다!!! 하지만 올바른 데이터 생성의 경우가 아니기 때문에 이런 경우를 사전에 예방해야 한다.
// > db.fruits.find()
// { "_id" : ObjectId("5f4c7e14fd577c3e6bfef671"), "rating" : 10, "review" : "Peaches are so yummy!", "__v" : 0 }

// 'name'의 schema type과 schema type option을 설정하고 난 후에 실행하면
// => 에러 발생!!! 'name'의 입력을 필수 사항으로 정했기 때문에 올바른 실행이다.
// (node:17263) UnhandledPromiseRejectionWarning: ValidationError:
//   Fruit validation failed: name: Please check your data entry, no name specified!


/*----------------------------------------------------------------------------*/

// const fruit = new Fruit({
//   name: 'Apple',
//   rating: 99,
//   review: 'Pretty solid as a fruit'
// });
// fruit.save();

// 'rating'의 schema type과 schema type option을 설정하고 난 후에 실행하면
// => 에러 발생!!! 평점을 1~10으로 설정했기 때문에 올바른 실행이다.
// (node:14867) UnhandledPromiseRejectionWarning: ValidationError: Fruit validation failed:
//   rating: Path `rating` (99) is more than maximum allowed value (10).
