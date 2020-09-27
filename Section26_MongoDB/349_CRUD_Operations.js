/* MongoDB CRUD Operarions

    1. MongoDB (https://www.mongodb.com/) - Docs - Server -

    2. MongoDB Manual (https://docs.mongodb.com/manual/) - "MongoDB CRUD Operarions"

*/


// in MongoDB shell
// > help
//
// db.help()                    help on db methods
// db.mycoll.help()             help on collection methods
// sh.help()                    sharding helpers
// rs.help()                    replica set helpers
// help admin                   administrative help
// help connect                 connecting to a db help
// help keys                    key shortcuts
// help misc                    misc things to know
// help mr                      mapreduce
//
// show dbs                     show database names
// show collections             show collections in current database
// show users                   show users in current database
// show profile                 show most recent system.profile entries with time >= 1ms
// show logs                    show the accessible logger names
// show log [name]              prints out the last segment of log in memory, 'global' is default
// use <db_name>                set current database
// db.mycoll.find()             list objects in collection mycoll
// db.mycoll.find( { a : 1 } )  list objects in mycoll where a == 1
// it                           result of the last line evaluated; use to further iterate
// DBQuery.shellBatchSize = x   set default number of items to display on shell
// exit                         quit the mongo shell

/*----------------------------------------------------------------------------*/

/*** Create :
    - "db.collection.insertOne('document')"
    - "db.collection.insertMany(['document1', 'document2', ...])"

0. 데이터베이스 현황 확인.
  > show dbs
  admin   0.000GB
  config  0.000GB
  local   0.000GB

1. shopDB를 데이터베이스로 사용하겠다고 요청하여 그 결과로 대상 데이터베이스가 교체되었다고 메시지가 나옴.
  (정확히 말해서 그런 이름을 가진 데이터베이스가 없어서 새로 만들어 졌다. <- Document Structure)
  > use shopDB
  switched to db shopDB

2. 위와 같은 사실을 확인.
  > db
  shopDB

3. 아직 데이터베이스 이름만 정해졌고 데이터가 하나도 입력되지 않아서 여전히 나타나지 않음.
  > show dbs
  admin   0.000GB
  config  0.000GB
  local   0.000GB

4. "db.collection.insertOne()" : 'collection'은 하나의 "JS object"를 의미.
  (해당 collection이 존재하지 않을 경우 자동으로 생성된다. <- Document Structure)
  > db.products.insertOne({_id: 1, name: 'Pen', price: 1.20})
  { "acknowledged" : true, "insertedId" : 1 }

5. 첫 데이터를 입력하고나니 비로소 데이터베이스가 나타남.
  > show dbs
  admin   0.000GB
  config  0.000GB
  local   0.000GB
  shopDB  0.000GB

6. collection도 제대로 생성되었는지 확인.
  > show collections
  products

7. 더 많은 데이터 입력
  > db.products.insertMany([
    {_id: 2, name: 'Pencil', price: 1.30},
    {_id: 3, name: 'Rubber', price: 1.40}
  ])
  { "acknowledged" : true, "insertedIds" : [ 2, 3 ] }

***/

/*----------------------------------------------------------------------------*/

/*** Read :
    - "db.collection.find('query', 'projection')"

    // Assignmen to study
    * Query and Projection Operators : https://docs.mongodb.com/manual/reference/operator/query/
    1) Query Selectors
      (1) Comparison
        - $eq  : equal to
        - $gt  : greater than
        - $gte : greater than or equal to
        - $in  : in (an array)
        - $lt  : less than
        - $lte : less than or equal to
        - $ne  : not equal to
        - $nin : not in (an array)
      (2) Logical
        - $and : AND
        - $not : NOT
        - $nor : NOR
        - $or  : OR
      (3) Element
        - $exists : matches documents that have the specified field.
        - $type   : selects documents if a field is of the specified type.
        .
        .
    2) Projection Operators
      - $         : projects the first element in an array that matches the query condition.
      - $eleMatch : projects the first element in an array that matches the specified $elemMatch condition.
      - $meta     : projects the document’s score assigned during $text operation.
      - $slice    : limits the number of elements projected from an array. (supports skip and limit slices.)


1. collection 전체를 검색
  > db.products.find()
  { "_id" : 1, "name" : "Pen", "price" : 1.2 }
  { "_id" : 2, "name" : "Pencil", "price" : 1.3 }
  { "_id" : 3, "name" : "Rubber", "price" : 1.4 }

2. query operator를 이용한 검색
  > db.products.find({name: 'Pencil'})
  { "_id" : 2, "name" : "Pencil", "price" : 1.3 }

  > db.products.find({price: {$gt: 1.3}})
  { "_id" : 3, "name" : "Rubber", "price" : 1.4 }

3. projection operator를 이용한 검색 -> 0은 'false', 1은 'true', 그리고 "_id" field는 default.
  > db.products.find(
    {price: {$gt: 1.3}},
    {_id: 1, name: 1, price: 1}
  )
  { "_id" : 3, "name" : "Rubber", "price" : 1.4 }

  > db.products.find(
    {price: {$gt: 1.3}},
    {name: 1, price: 1}
  )
  { "_id" : 3, "name" : "Rubber", "price" : 1.4 }

  > db.products.find(
    {price: {$gt: 1.3}},
    {_id: 0, name: 1, price: 1}
  )
  { "name" : "Rubber", "price" : 1.4 }

  // 단, query의 대상인 'price'의 projection 값을 "false"로 설정해서는 안된다. - 에러 발생!!!
  >db.products.find({price: {$gt: 1.3}}, {_id: 0, name: 1, price: 0})
  Error: error: {
	"ok" : 0,
	"errmsg" : "Cannot do exclusion on field price in inclusion projection",
	"code" : 31254,
	"codeName" : "Location31254"
  }

  // 표시되는 대상에서 제외만 되도록 하자.
  > db.products.find(
    {price: {$gt: 1.3}},
    {_id: 0, name: 1}
  )
  { "name" : "Rubber" }

  //* Summary - 다소 헷갈리는 부분이 있는데 이해하는데 까지 정리해보자면,
  //* _id는 projection값 1이 default이므로 표시를 원하지 않는다면 0으로 설정한다.
  //* 나머지 field 중에서도 표시 대상이면 마찬가지로 projection값을 1로 설정한다.
  //* 반면에 표시 고려 대상이 아니면 아예 field이름을 projection 대상에 포함시키지 않는다.

***/

/*----------------------------------------------------------------------------*/

/*** Update :
  - "db.collection.updateOne('filter', 'action')"
  - "db.collection.updateMany('filter', 'action')"

1. set new field and insert value.
  > db.products.updateOne({_id: 1}, {$set: {stock: 32}})
  { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

2. check collection.
  > db.products.find()
  { "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
  { "_id" : 2, "name" : "Pencil", "price" : 1.3 }
  { "_id" : 3, "name" : "Rubber", "price" : 1.4 }

3. update more values
  > db.products.updateOne({_id: 2}, {$set: {stock: 12}})
  { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

  > db.products.updateOne({_id: 3}, {$set: {stock: 8}})
  { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }


4. check collection.
  > db.products.find()
  { "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
  { "_id" : 2, "name" : "Pencil", "price" : 1.3, "stock" : 12 }
  { "_id" : 3, "name" : "Rubber", "price" : 1.4, "stock" : 8 }


+@. example) update documents
    > db.products.updateMany({_id: {$gt: 1}}, {$set: {stock: 20}})

***/

/*----------------------------------------------------------------------------*/

/*** Delete :
    - "db.collection.deleteOne('filter')"
    - "db.collection.deleteMany('filter')"

1. delete document.
  > db.products.deleteOne({name: 'Rubber'})
  { "acknowledged" : true, "deletedCount" : 1 }

2. check collection.
  > db.products.find()
  { "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
  { "_id" : 2, "name" : "Pencil", "price" : 1.3, "stock" : 12 }


+@. example) delete documents.
    > db.products.deleteMany({stock: {$lt: 30}})

***/
