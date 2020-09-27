
/* 패키지를 github로 부터 다운 받았는데 .gitignore에 의해 node_modules가 포함되지 않았다면?
  걱정할 필요가 없다. package.json 파일만 있으면 터미널에서 "npm i(nstall)" 실행만 하면 된다. */

// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// Imoprt mongoose module
const mongoose = require('mongoose');
// Import lodash module
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
  console.log('Server is running at http://localhost:3000');
});

// Connect to MongoDB
const url = 'mongodb://localhost:27017/todolistDB';
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    // if error, deal with it
    if (err) {
      console.log(err);
    } else {
      // else, log success
      console.log('Successfully connected to mongodb://localhost:27017/todolistDB');
    }
  }
);

/* 1. Mongoose Schema :
    const <schemaName> = {
      <fieldName>: <fieldDataType>,
        .
        .
    }                                    */
// Create item schema
const itemSchema = new mongoose.Schema({
  // validate 'name' data
  name: {
    type: String,
    required: [true, 'Please check the data entry, no name of item specified!']
  }
});

/* 2. Mongoose Model :
    const <modelName> = mongoose.model(
      "<singularCollectionName>",
      <schemaName>
    )                                     */
// Modeling item schema
const Item = mongoose.model('Item', itemSchema);

/* 3. Mongoose Document :
    const <documentName> = new <modelName>({
      <fieldName>: <fieldData>,
        .
        .
    });                                    */
// Generate item document(s)
const item1 = new Item({
  name: 'Welcome to To-Do-List.'
});
const item2 = new Item({
  name: 'Use the "+" button to add an item.'
});
const item3 = new Item({
  name: '<-- Use this to delete an item.'
});
const defaultItems = [item1, item2, item3];

/* 4. Mongoose method "insertMany()" :
    <modelName>.insertMany(
      <documentArray>,
      function(err) {
        // Deal with error or log success.
      }
    );                                       */

/* 5. Mongoose method "find()" :
    <modelName>.find(
      {conditions},
      function(err, docs) {
        // Deal with error or use the found docs.
      }
    );                                            */

/*** Read Items ------------------------------------------------------------***/
app.get('/', function (req, res) {

  Item.find({}, function (err, foundItems) {
    // console.log(foundItems);

    if (err) {
      console.log(err);
    } else {
      /* Execute "Item.insertMany()"" only once at the first time */
      if (foundItems.length === 0) {

        Item.insertMany(defaultItems, function (error) {

          if (error) {
            console.log(error);
          } else {
            // console.log('Saved the default items to todolistDB.');
            res.redirect('/');
          }
        });
      } else {
        // console.log('Read the items from todolistDB.');
        res.render('list', {listTitle: 'Today', listItems: foundItems});
      }
    }
  });
});

/*** Add Item --------------------------------------------------------------***/
app.post('/', function (req, res) {
  // console.log(req.body);

  const listName = req.body.list;
  const itemName = req.body.newItem;
  const item = new Item({
    name: itemName
  });

  if (listName === 'Today') {
    item.save();
    res.redirect('/');
  } else {
    /* 9. Add Item in Dynamic Route */
    List.findOne({name: listName}, function(err, foundList) {
      // console.log(foundList);

      if (err) {
        console.log(err);
      } else {

        // Append item document
        foundList.items.push(item);
        // Save list document
        foundList.save();
        // Redirect route
        res.redirect('/' + listName);
      }
    });
  }
});

/*** Delete Item -----------------------------------------------------------***/

/* 6. Mongoose method "findByIdAndRemove()" :
    <modelName>.findByIdAndRemove(
      <Id>,
      function(err) {
        // Handle any error or log success.
      }
    );                                            */

app.post('/delete', function (req, res) {
  // console.log(req.body);
  // console.log(req.body.checkBox);

  // Submitted form when checkbox is checked
  const checkedItemId = req.body.checkBox;
  // Receive data from hidden input tag
  const listName = req.body.listName;

  if (listName === 'Today') {

    Item.deleteOne({_id: checkedItemId}, function (err) {

      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  } else {
    /* 'Mongoose method to remove document from array'으로 구글링하면
      =>  "MongooseArray.prototype.pull()" 또는 "$pull" query와 관련된 결과 출력

        * Mongoose Documents에서 "MongooseArray.prototype"과 관련하여 다양한 method를
          볼 수 있는데 기본적으로 JS 문법과 유사하다.
            .$pop() .$shift() .addToSet() .includes() .indexOf()  .inspect()
            .nonAtomicPush()  .pop()      .pull()     .push()     .remove()
            .set()  .shift()  .sort()     .splice()   .toObject() .unshift()
    */
    /* 10. Mongoose method "findOneAndUpdate()":
        <modelName>.findOneAndUpdate(
          {conditions},
          {$pull: {field: {_id: value}}},
          function(err, docs) {
            // Deal with error or use the found docs.
          }
        );                                            */

    /*--------------------------------------------------------------------*/
    List.findOneAndUpdate(
      {name: listName},
      // update의 방법이 "$set"이 아니라 "$pull"(삭제)
      {$pull: {items: {_id: checkedItemId}}},
      function(err, foundList) {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/' + listName);
        }
      }
    );
    // OR
    // List.findOne({name: listName}, function (err, foundList) {
    //   foundList.items.pull({_id: checkedItemID});
    //   // OR
    //   // foundList.items.remove({_id: checkedItemID});
    //   foundList.save();
    //   res.redirect('/' + listName);
    // });
    /*--------------------------------------------------------------------*/
  }
/*----------------------------------------------------------------------------*/
  // Item.findByIdAndRemove(checkedItemID, function (err) {
  //
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // console.log('Deleted the item from todolistDB.');
  //
  //     res.redirect('/');
  //   }
  // });
  // OR
  // Item.deleteOne({_id: checkedItemID}, function (err) {
  //
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // console.log('Deleted the item from todolistDB.');
  //
  //     res.redirect('/');
  //   }
  // });
/*----------------------------------------------------------------------------*/
});

/******************************************************************************/
/*** Create Custom Lists with Dynamic Route (using Express Route Parameters)***/
/******************************************************************************/

/*** Create List -----------------------------------------------------------***/

// Create list shchema
const listSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Please check the data entry, no name of list specified!']
  },
  items: [itemSchema]
});

// Modeling list schema
const List = mongoose.model('List', listSchema);

/* 7. Express Route Parameters :
    app.get('/category/:<paramName>', function (req, res) {
      // Access 're.params.paramName'.
    });                                                      */

/* 8. Mongoose method "findOne()" :
    <modelName>.findOne(
      {conditions},
      function(err, docs) {
        // Use the found docs.
      }
    );                                                        */

app.get('/:customListName', function (req, res) {
  // console.log(req.params.customListName);

  const customListName = _.capitalize(req.params.customListName);
  /*------------------------------------------------------------------------*/
  List.findOne({name: customListName}, function (err, foundList) {
    // console.log(foundList);

    if (err) {
      console.log(err);
    } else {

      if (!foundList) {
        // console.log('List name does not exist.');

        // Generate list document
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        // Save list document
        list.save();
        // Redirect route
        res.redirect('/' + customListName);
      } else {
        // console.log('List name already exists!');

        res.render('list', {listTitle: foundList.name, listItems: foundList.items});
      }
    }
  });
  /* OR --------------------------------------------------------------------*/
  // List.find({name: listName}, function (err, foundLists) {
  //   // console.log(foundLists);
  //
  //   if (err) {
  //     console.log(err);
  //   } else {
  //
  //     if (foundLists.length === 0) {
  //
  //       // Generate list document
  //       const list = new List({
  //         name: listName,
  //         items: defaultItems
  //       });
  //       // Save list document
  //       list.save();
  //       // Redirect route
  //       res.redirect('/' + listName);
  //     } else {
  //       // console.log('Created a custom list from todolistDB.');
  //
  //       res.render('list', {
  //         listTitle: _.upperFirst(foundLists[0].name) + ' List',
  //         listItems: foundLists[0].items
  //       });
  //     }
  //   }
  // });
  /*------------------------------------------------------------------------*/
});
