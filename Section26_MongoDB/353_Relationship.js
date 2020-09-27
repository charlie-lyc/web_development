/* "Relationship" in MongoDB
  : 앞서 작성하던 'CRUD Operations'에서 계속 이어서 실습

--------------------------------------------------------------------------------

> db.products.insert(
  {
    _id: 3,
    name: 'Rubber',
    price: 1.4,
    stock: 43,
    reviews: [
      {
        authorName: 'Sally',
        rating: 5,
        review: 'Awesome rubber ever!'
      },
      {
        authorName: 'John',
        rating: 4,
        review: 'Best rubber!'
      }
    ]
  }
)
WriteResult({ "nInserted" : 1 })

> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 2, "name" : "Pencil", "price" : 1.3, "stock" : 12 }
{ "_id" : 3, "name" : "Rubber", "price" : 1.4, "stock" : 43, "reviews" : [ { "authorName" : "Sally", "rating" : 5, "review" : "Awesome rubber ever!" }, { "authorName" : "John", "rating" : 4, "review" : "Best rubber!" } ] }

> db.products.find().pretty()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 2, "name" : "Pencil", "price" : 1.3, "stock" : 12 }
{
	"_id" : 3,
	"name" : "Rubber",
	"price" : 1.4,
	"stock" : 43,
	"reviews" : [
		{
			"authorName" : "Sally",
			"rating" : 5,
			"review" : "Awesome rubber ever!"
		},
		{
			"authorName" : "John",
			"rating" : 4,
			"review" : "Best rubber!"
		}
	]
}

--------------------------------------------------------------------------------

> db.products.update(
  {name: 'Pencil'},
  {$set: {reviews: [
        {
          authorName: "Harry",
          rating: 3,
          review: "Affordable"
        },
        {
          authorName: "Jolly",
          rating: 2,
          review: "Not bad"
        }
      ]
    }
  }
)
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.products.find()
{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
{ "_id" : 2, "name" : "Pencil", "price" : 1.3, "stock" : 12, "reviews" : [ { "authorName" : "Harry", "rating" : 3, "review" : "Affordable" }, { "authorName" : "Jolly", "rating" : 2, "review" : "Not bad" } ] }
{ "_id" : 3, "name" : "Rubber", "price" : 1.4, "stock" : 43, "reviews" : [ { "authorName" : "Sally", "rating" : 5, "review" : "Awesome rubber ever!" }, { "authorName" : "John", "rating" : 4, "review" : "Best rubber!" } ] }

*/


/* Collections

  1. {
       _id: 1,
       name: "Pen",
       price: 1.2,
       stock: 32
     }

  2. {
       _id: 2,
       name: "Pencil",
       price: 1.3,
       stock: 12
     }

  3. {
       orderNumber: 3243,
       productsOrdered: [1, 2]
     }


  => {
       orderNumber: 3243,
       productsOrdered: [
         {
           _id: 1,
           name: "Pen",
           price: 1.2,
           stock: 32
         },
         {
           _id: 2,
           name: "Pencil",
           price: 1.3,
           stock: 12
         }
       ]
     }

*/
