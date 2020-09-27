// jshint esversion:6
// Import modules
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
// Initailize app
const app = express();
// Listen on port
let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, function() {
  if (port == 3000) {
    console.log('Server is running at http://localhost:3000');
  } else {
    console.log('Successfully server is running!');
  }
});
// Use static directory
app.use(express.static('public'));
// Set veiw engine
app.set('view engine', 'ejs');
// Use body parser
app.use(bodyParser.urlencoded({extended: true}));
/*----------------------------------------------------------------------------*/
// Connect to database
const uri = 'mongodb://localhost:27017/wikiDB'
mongoose.connect(
  uri,
  {useNewUrlParser: true, useUnifiedTopology: true},
  function () {
    console.log('Successfully conneted to "wikiDB" from MongDB!');
  }
);
// Create article schema
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Please check the data entry, no title of specified.']
  },
  content: {
    type: String,
    required: [true, 'Please check the data entry, no title of specified.']
  }
});
// Modeling article
const Article = mongoose.model('Article', articleSchema);
/*----------------------------------------------------------------------------*/
// GET root route
app.get('/', function (req, res) {
  res.render('index');
});
/*----------------------------------------------------------------------------*/
/*---------------------- Request Targetting All Articles ---------------------*/
/*----------------------------------------------------------------------------*/
/* Create 'Chained-Route-Handler' using chained method
    ex) "app.route().get().post().delete()"
*/
app.route('/articles')

.get(function (req, res) {
  Article.find(function (err, foundArticles) {
    if (!err) {
      if (foundArticles) {
        res.send(foundArticles);
      } else {
        res.send('No articles were found.');
      }
    } else {
      res.send(err);
    }
  });
})

.post(function (req, res) {
  const article = new Article ({
    title: req.body.articleTitle,
    content: req.body.articleContent
  });
  article.save(function(err) {
    if (!err) {
      res.send(article);
    } else {
      res.send(err);
    }
  });
})

.delete(function (req, res) {
  Article.deleteMany(function (err) {
    if (!err)  {
      res.send('All Articles have been deleted from wikiDB.');
    } else {
      res.send(err);
    }
  });
});

/*----------------------------------------------------------------------------*/
/*------------------- Request Targetting a Specific Article ------------------*/
/*----------------------------------------------------------------------------*/
/* Use Route Parameters
   ex)  Route path: /users/:userId/books/:bookId
        Request URL: http://localhost:3000/users/34/books/8989
        req.params: { "userId": "34", "bookId": "8989" }
*/
app.route('/articles/:articleTitle')
/*** 'Launch Postman' - 'Create request'

    => |GET|   localhost:3000/articles/:articleTitle   |Send|
    => Request Params : Path Variables
    => KEY: artcleTitle, VALUE: REST

    => Response Body
    {
      "_id": "5f5259e053f29f15c10f3472",
      "title": "REST",
      "content": "REST is short for Representational Satus Transfer. It is an architectural style for designing APIs.",
      "__v": 0
    }

***/
/*** 4. ReSTful API's Routing Method : |GET|

  app.route('route')

  .get(function(req, res) {
    // READ document
    <ModelName>.findOne({conditions}, function(err, doc) {
      // Handle the error and use the found doc
    });
  })

***/
// READ an article
.get(function (req, res) {
  Article.findOne({title: req.params.articleTitle}, function (err, foundArticle) {
    if (!err) {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send('No article matching that title was found.');
      }
    } else {
      res.send(err);
    }
  });
  /*------------------------------------------------------------*/
  /* 파라미터 입력값을 좀더 유연하게 적용하기 위해서 */
  // const requestedTitle = _.lowerCase(req.params.articleTitle);
  // Article.find(function (err, foundArticles) {
  //   if (!err) {
  //     if (foundArticles.length !== 0) {
  //       foundArticles.forEach(function (article) {
  //         const storedTitle = _.lowerCase(article.title);
  //         if (requestedTitle === storedTitle) {
  //           res.send(article);
  //         }
  //       });
  //     } else {
  //       res.send('No article matching that title was found.');
  //     }
  //   } else {
  //     res.send(err);
  //   }
  // });
  /*-------------------------------------------------------------*/
})
/*** 'Launch Postman' - 'Create request'

    => |PUT|   localhost:3000/articles/:articleTitle   |Send|
    => Request Params : Path Variables
    => KEY: artcleTitle, VALUE: DOM
    => Request Body : x-www-form-urlencoded
    => KEY: artcleTitle, VALUE: Javascript
    => KEY: artcleContent, VALUE: JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

    => Response Body
    Article was updated by "PUT" method.

***/
/*** 5. ReSTful API's Routing Method : |PUT|

  app.route('route')

  .put(function(req, res) {
    // UPDATE document
    <ModelName>.update(
      {conditions},
      {updates},
      {overwrite: true},
      function (err) {
        // Handle the error
      }
    );
  })

***/
// Update an article as a whole
.put(function (req, res) {
  Article.update(
    {title: req.params.articleTitle},
    /* 제목과 내용 모두 업데이트 */
    {title: req.body.articleTitle, content: req.body.articleContent},
    /* "PUT"과 "PATCH"
       - PUT : document 전부 업데이트
       - PATCH : document 일부 업데이트
       결론적으로, 아래 코드의 실행결과는 title없이 content만 저장된 document로 업데이트된다. */
    // {content: req.body.articleContent},
    /*** Update Default Option ***/
    {overwrite: true},
    /*****************************/
    function(err) {
      if (!err) {
        res.send('Article was updated by "PUT" method.');
      } else {
        res.send(err);
      }
    }
  );
})
/*** 'Launch Postman' - 'Create request'

    => |PATCH|   localhost:3000/articles/:articleTitle   |Send|
    => Request Params : Path Variables
    => KEY: artcleTitle, VALUE: Bootstrap
    => Request Body : x-www-form-urlencoded
    => KEY: articleContent, VALUE: Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.

    => Response Body
    Article was updated by "PATCH" method.

***/
/*** 6. ReSTful API's Routing Method : |PATCH|

  app.route('route')

  .patch(function(req, res) {
    // UPDATE document
    <ModelName>.update(
      {conditions},
      {updates},
      {overwrite: false},
      function (err) {
        // Handle the error
      }
    );
  })

***/
// Update an article as a part
.patch(function (req, res) {
  Article.update(
    {title: req.params.articleTitle},
    /*****************************************************/
    /* 제목은 그대로 두고 내용만 업데이트 -----------------------*/
    /* Use MongoDB Query "$set" */
    {$set: {content: req.body.articleContent}},
    /* OR -----------------------------------------------*/
    // {content: req.body.articleContent},
    // {overwrite: false},
    /*****************************************************/
    /* 내용은 그대로 두고 제목만 업데이트 -----------------------*/
    /* Use MongoDB Query "$set" */
    // {$set: {title: req.body.articleTitle}},
    /* OR ----------------------------------------------*/
    // {title: req.body.articleTitle},
    // {overwrite: false},
    /*****************************************************/
    function(err) {
      if (!err) {
        res.send('Article was updated by "PATCH" method.');
      } else {
        res.send(err);
      }
    }
  );
})
/*** 'Launch Postman' - 'Create request'

    => |DELETE|   localhost:3000/articles/:articleTitle   |Send|
    => Request Params : Path Variables
    => KEY: artcleTitle, VALUE: Bootstrap

    => Response Body
    Article was deleted from WikiDB.

***/
/*** 6. ReSTful API's Routing Method : |DELETE|

  app.route('route')

  .delete(function(req, res) {
    // UPDATE document
    <ModelName>.deleteOne(
      {conditions},
      function (err) {
        // Handle the error
      }
    );
  })

***/
// Delete an article
.delete(function (req, res) {
  Article.deleteOne(
    {title: req.params.articleTitle},
    function (err) {
      if (!err) {
        res.send('Article was deleted from WikiDB.')
      } else {
        res.send(err);
      }
  });
});

/*----------------------------------------------------------------------------*/
/*------------------  Summary : ReSTful API Routing Method -------------------*/
/*----------------------------------------------------------------------------*/
/* READ
  GET : Model.findOne()
  GET : Model.find()
*/

/* CREATE
  POST : Model.prototype.save()
  POST : Model.insertMany()
*/

/* UPDATE
  PUT : Model.update({<fieldName>s... : <fieldData>s...})           <= "{overwrite: true}" default.
  PATCH : Model.update({$set {<fieldName>: <fieldData>}})
  - OR -
  PATCH : Model.update({<fieldName>: <fieldData>}, {overwrite: false})
*/

/* DELETE
  DELETE : Model.deleteOne()
  DELETE : Model.deleteMany()
*/

/*----------------------------------------------------------------------------*/
/*------------------------------- HTML URL Encode ----------------------------*/
/*----------------------------------------------------------------------------*/
/* URL Encoding : https://www.w3schools.com/html/html_urlencode.asp
    - ASCII Encoding Examples...
    - Browser will encode input, according to the character-set used in page.
    - 'Default Character-Set' in 'HTML5' is "UTF-8".
*/
