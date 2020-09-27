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
app.route('/articles/:articleTitle')

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
})

.put(function (req, res) {
  Article.update(
    {title: req.params.articleTitle},
    {title: req.body.articleTitle, content: req.body.articleContent},
    {overwrite: true},
    function(err) {
      if (!err) {
        res.send('Article was updated by "PUT" method.');
      } else {
        res.send(err);
      }
    }
  );
})

.patch(function (req, res) {
  Article.update(
    {title: req.params.articleTitle},
    {$set: {content: req.body.articleContent}},
    // OR
    // {$set: {title: req.body.articleTitle}},
    function(err) {
      if (!err) {
        res.send('Article was updated by "PATCH" method.');
      } else {
        res.send(err);
      }
    }
  );
})

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
