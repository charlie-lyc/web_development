/* 실습을 위한 실행 전에 파일명 "app.js" 수정 요망.
   실습 후에는 파일명 원래대로 "CRUD-app.js" 복구. */

// jshint esversion:6

// Import mongoose module
const mongoose = require('mongoose');

/*** Connect Database ------------------------------------------------------***/

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

/*** Create MongoDB Documents ----------------------------------------------***/

// Create 'fruit' schema
const fruitSchema = new mongoose.Schema({
  // name: String,
  /* Data Validation for 'name' */
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified!']
  },
  // rating: Number,
  /* Data Validation for 'rating' */
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});
// Modeling schema
const Fruit = mongoose.model('Fruit', fruitSchema);
// Generate object
const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'Pretty solid as a fruit'
});

// Save object - use "Model.prototype.save()"
// fruit.save();


// Create 'person' schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
// Modeling schema
const Person = mongoose.model('Person', personSchema);
// Generate object
const person = new Person({
  name: 'John Doe',
  age: 32
});

// Save object - use "Model.prototype.save()"
// person.save();

// Add more fruits
const kiwi = new Fruit({
  name: 'Kiwi',
  rating: 10,
  review: 'Really awesome fruit'
});
const orange = new Fruit({
  name: 'Orange',
  rating: 4,
  review: 'Too sour for me'
});
const banana = new Fruit({
  name: 'Banana',
  rating: 3,
  review: 'Weird texture'
});

// Use "Model.insertMany()"

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Saved all the fruits to fruitsDB.');
//   }
// })


/*** Read MongoDB Documents ------------------------------------------------***/

// Use "Model.find()"
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log('Read all the fruits from fruitsDB.');

    // 검색 결과를 얻으면 데이터베이스와의 연결을 닫고 대기상태로 전환.
    mongoose.connection.close();

    // console.log(fruits);
    fruits.forEach(function (fruit) {
      // fruits collection에 존재하는 과일들의 이름을 지속적으로 콘솔창에 출력함으로써 현황을 확인.
      console.log(fruit.name);
    });
  }
});


/*** Update MongoDB Documents ----------------------------------------------***/

/* 앞서 작성되었던 "dataValidation-app.js"의 실행 이후, 계속 이어서 실습
  : data validation 코드 작성 과정 중 입력된 마지막 데이터에서 누락된 'name'값을 입력 */
// Use "Model.updateOne()"

// Fruit.updateOne(
//   {_id: "5f4c8dbf81d30b03108a7dc5"},
//   {name: 'Peach'},
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Updated the fruit to fruitsDB.');
//     }
//   }
// );


/*** Delete MongoDB Documents ----------------------------------------------***/

// Use "Model.deleteOne()"

// Fruit.deleteOne(
//   {name: "Peach"},
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Deleted the fruit from fruitsDB.');
//     }
//   }
// );

/* 이 'app.js'를 실행하는 과정에서 실수로 'person.save();'을 반복으로 실행하였다면,
   어떻게 이 모든 데이터들을 지울 것인가?                                      */
// Use "Model.deleteMany()"

// Person.deleteMany(
//   {name: "John Doe"},
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Deleted the persons from fruitsDB.');
//     }
//   }
// );

// 이 후에 한번만 'person.save();'를 실행
