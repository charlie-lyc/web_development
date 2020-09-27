// jshint esversion:6
// Import modules
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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
// Create default documents
const article1 = new Article({
  title: "REST",
  content: "REST is short for Representational Satus Transfer. It is an architectural style for designing APIs."
});
const article2 = new Article({
  title: "API",
  content: "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
});
const article3 = new Article({
  title: "Bootstrap",
  content: "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
});
const article4 = new Article({
  title: "DOM",
  content: "The Document Object Model is like an API for interacting with our HTML"
});
const defaultArticles = [article1, article2, article3, article4];
/* Insert default documents */
// Article.insertMany(defaultArticles, function(err) {
//   if (!err) {
//     console.log('Default articles saved to wikiDB.');
//   } else {
//     console.log(err);
//   }
// });
/*----------------------------------------------------------------------------*/
// GET root route
app.get('/', function (req, res) {
  res.render('index');
});
/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/
/*** postman.com - SignUP => 'Launch Postman' - 'Create request'

    => |GET|   localhost:3000/articles   |Send|

    => Body
    [
      {
          "_id": "5f525336efc4de0da85338eb",
          "title": "REST",
          "content": "REST is short for Representational Satus Transfer. It is an architectural style for designing APIs.",
          "__v": 0
      },
      {
          "_id": "5f525336efc4de0da85338ec",
          "title": "API",
          "content": "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.",
          "__v": 0
      },
      {
          "_id": "5f525336efc4de0da85338ed",
          "title": "Bootstrap",
          "content": "This is a framework developed by Twitter that contains pre-made front-end templates for web design",
          "__v": 0
      },
      {
          "_id": "5f525336efc4de0da85338ee",
          "title": "DOM",
          "content": "The Document Object Model is like an API for interacting with our HTML",
          "__v": 0
      }
    ]

***/
/*** 1. ReSTful API's Routing Method : |GET|

  app.get(route, function(req, res) {
    // READ documents
    <ModelName>.find({conditions}, function(err, docs) {
      // Handle the err and use the found docs
    });
  });

***/
// READ articles
app.get('/articles', function (req, res) {
  // res.send(defaultArticles);

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
});
/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/
/*** 'Launch Postman' - 'Create request'

    => |POST|   localhost:3000/articles   |Send|
    => Request Body : x-www-form-urlencoded
    => KEY: artcleTitle, VALUE: Javascript
    => KEY: artcleContent, VALUE: JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

    => Reponse Body
    {
      "_id": "5f525380ad55220dd82b6e78",
      "title": "Javascript",
      "content": "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
      "__v": 0
    }

***/
/*** 2. ReSTful API's Routing Method : |POST|

  app.post(route, function(req, res) {
    // CREATE document
    const <constantName> = new <ModelName> ({
      <fieldName>: <fieldData>
      ...
    });
    <constantName>.save(function (err) {
      // Handle the error
    });
  });

***/
// CREATE article
app.post('/articles', function (req, res) {
  // res.send(req.body);

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
});
/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/
/*** 'Launch Postman' - 'Create request'

    => |DELETE|   localhost:3000/articles   |Send|

    => Response Body
    All Articles have been deleted from wikiDB.

***/
/*** 3. ReSTful API's Routing Method : |DELETE|

  app.delete(route, function(req, res) {
    // DELETE documents
    <ModelName>.deleteMany({conditions}, function(err) {
      // Handle the error
    });
  });

***/
// DELETE articles
app.delete('/articles', function (req, res) {

  Article.deleteMany(function (err) {

    if (!err)  {
      res.send('All Articles have been deleted from wikiDB.');
    } else {
      res.send(err);
    }
  });
});
