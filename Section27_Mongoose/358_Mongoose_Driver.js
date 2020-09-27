/* Mongoose Driver for MongoDB
  : MongoDB Native Driver를 이용해 만든 'Fruits Project'를 이용해서 실습.
    실습전에 앞서 만든 데이터베이스는 삭제.

  ----------------------------------------------------------------------------
  // mongo shell에서
  > show dbs
  admin     0.000GB
  config    0.000GB
  fruitsDB  0.000GB
  local     0.000GB
  shopDB    0.000GB

  > db
  test

  > use fruitsDB
  switched to db fruitsDB

  > db.dropDatabase()
  { "dropped" : "fruitsDB", "ok" : 1 }

  > show dbs
  admin   0.000GB
  config  0.000GB
  local   0.000GB
  shopDB  0.000GB

  // fruitsDB의 모든 데이터가 삭제되어 데이터베이스 검색에서 보이지는 않지만 이름은 여전히 남아있고,
  // 따라서 타겟에도 여전히 잡혀있다.
  > db
  fruitsDB
*/


/*** 1. Create DB & Collection, and Insert Documents

  // Import mongoose module
  // Connect database url
  // Create 'fruit' schema
  // Modeling schema
  // Generate object
  // Save object

  // 위와 같이 'app.js'에서 코딩한 후 다시 mongo shell에서 데이터베이스를 검색해보면
  // 사라졌던 fruitsDB가 새로운 데이터가 입력됨에 따라 다시 나타난다.
  > show dbs
  admin     0.000GB
  config    0.000GB
  fruitsDB  0.000GB
  local     0.000GB
  shopDB    0.000GB

  > use fruitsDB
  switched to db fruitsDB

  // 놀라운 부분은 이부분이다. 분명 'Fruit'모델을 이용해 document 하나를 예시로 저장했는데
  // collection 이름이 자동으로 복수형인 "fruits"가 되었다!!!
  > show collections
  fruits

  > db.fruits.find()
  { "_id" : ObjectId("5f4bb5d08eb5ba2d131a1db7"), "name" : "Apple", "rating" : 7, "review" : "Pretty solid as a fruit", "__v" : 0 }

  > db.fruits.find().pretty()
  {
   "_id" : ObjectId("5f4bb5d08eb5ba2d131a1db7"),
   "name" : "Apple",
   "rating" : 7,
   "review" : "Pretty solid as a fruit",
   "__v" : 0
  }

  ----------------------------------------------------------------------------

  // 앞서 'fruit'와 마찬가지로 'Person' 모델을 이용해서 새로운 document를 생성하였는데
  // 이번에는 collection 이름이 자동으로 'people'가 되었다!!!
  > show collections
  fruits
  people

  > db.people.find().pretty()
  {
  	"_id" : ObjectId("5f4bbbdc2a0a0d35b86e332d"),
  	"name" : "John Doe",
  	"age" : 32,
  	"__v" : 0
  }

  ----------------------------------------------------------------------------

  // 여러개의 과일을 추가한 후
  > db.fruits.find()
  { "_id" : ObjectId("5f4bba3337e817334da2090d"), "name" : "Apple", "rating" : 7, "review" : "Pretty solid as a fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fa"), "name" : "Kiwi", "rating" : 10, "review" : "Really awesome fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fb"), "name" : "Orange", "rating" : 4, "review" : "Too sour for me", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fc"), "name" : "Banana", "rating" : 3, "review" : "Weird texture", "__v" : 0 }

***/


/*** 2. Read Documents

  // "db.fruits.find()"와 동일한 자바스크립트 명령으로 MongoDB로 부터 데이터를 읽어들여 콘솔창에 결과를 출력
  > db.fruits.find()
  { "_id" : ObjectId("5f4bba3337e817334da2090d"), "name" : "Apple", "rating" : 7, "review" : "Pretty solid as a fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fa"), "name" : "Kiwi", "rating" : 10, "review" : "Really awesome fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fb"), "name" : "Orange", "rating" : 4, "review" : "Too sour for me", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fc"), "name" : "Banana", "rating" : 3, "review" : "Weird texture", "__v" : 0 }

***/


/*** 3. Update Documents

  // 앞서 작성되었던 "dataValidation-app.js"의 실행 이후, 계속 이어서 실습
  > db.fruits.find()
  { "_id" : ObjectId("5f4bba3337e817334da2090d"), "name" : "Apple", "rating" : 7, "review" : "Pretty solid as a fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fa"), "name" : "Kiwi", "rating" : 10, "review" : "Really awesome fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fb"), "name" : "Orange", "rating" : 4, "review" : "Too sour for me", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fc"), "name" : "Banana", "rating" : 3, "review" : "Weird texture", "__v" : 0 }
  { "_id" : ObjectId("5f4c8dbf81d30b03108a7dc5"), "rating" : 9, "review" : "Peaches are so yummy", "__v" : 0 }

  // data validation 코드 작성 과정 중 입력된 document에서 누락된 'name'을 입력
  // SQL의 table 처럼 null값에 입력하는 것이 아니므로, document의 마지막 부분에 입력된다.
  > db.fruits.find({name: 'Peach'})
  { "_id" : ObjectId("5f4c8dbf81d30b03108a7dc5"), "rating" : 9, "review" : "Peaches are so yummy", "__v" : 0, "name" : "Peach" }

***/


/*** 4. Delete Documents

  // "db.fruits.deleteOne()"와 동일한 자바스크립트 명령으로 MongoDB로 부터 데이터를 삭제하고 콘솔창에 결과를 출력
  > db.fruits.find()
  { "_id" : ObjectId("5f4bba3337e817334da2090d"), "name" : "Apple", "rating" : 7, "review" : "Pretty solid as a fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fa"), "name" : "Kiwi", "rating" : 10, "review" : "Really awesome fruit", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fb"), "name" : "Orange", "rating" : 4, "review" : "Too sour for me", "__v" : 0 }
  { "_id" : ObjectId("5f4bc12eda850f3cc01b01fc"), "name" : "Banana", "rating" : 3, "review" : "Weird texture", "__v" : 0 }


  // app.js를 실행하는 과정에서 실수로 'person.save();'을 반복적으로 실행하여 아래와 같은 결과를 얻음. 어떻게 이 모든 데이터들을 지울 것인가?
  > db.people.find()
  { "_id" : ObjectId("5f4bbbdc2a0a0d35b86e332d"), "name" : "John Doe", "age" : 32, "__v" : 0 }
  { "_id" : ObjectId("5f4c969266e3cb5c838e4acb"), "name" : "John Doe", "age" : 32, "__v" : 0 }
  { "_id" : ObjectId("5f4c9696c5967a5c8a551b82"), "name" : "John Doe", "age" : 32, "__v" : 0 }
  { "_id" : ObjectId("5f4c969869ca3b5c8f5b058c"), "name" : "John Doe", "age" : 32, "__v" : 0 }
  { "_id" : ObjectId("5f4c969a0d0e415c92a109d5"), "name" : "John Doe", "age" : 32, "__v" : 0 }
  { "_id" : ObjectId("5f4c969bdf24bc5c95980e68"), "name" : "John Doe", "age" : 32, "__v" : 0 }

  // "db.people.deleteMany()"와 동일한 자바스크립트 명령으로 MongoDB로 부터 데이터를 삭제
  > db.people.find()
  (nothing)

  // 이 후에 한번만 'person.save();'을 실행
  > db.people.find()
  { "_id" : ObjectId("5f4c9aac6c357761d30a4bc2"), "name" : "John Doe", "age" : 32, "__v" : 0 }

***/
