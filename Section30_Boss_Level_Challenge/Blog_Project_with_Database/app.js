//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require('mongoose');


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
/*----------------------------------------------------------------------------*/
let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, function() {
  if (port !== 3000) {
    console.log('Successfully server is running!');
  } else {
    console.log('Server is running at http://localhost:3000');
  }
});
/*----------------------------------------------------------------------------*/
// Connect to MongoDB : mongodb.com에 로그인 해서 'Clusters' - 'CONNECT' - 'Connect your application'참조
const uri = 'mongodb+srv://charlie:kvylp4RB9j1lYIy1@cluster0-singapore-ap-s.h0k7h.mongodb.net/journalDB?retryWrites=true&w=majority';
mongoose.connect(
  uri,
  {useNewUrlParser: true, useUnifiedTopology: true},
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully connected to "journalDB" from MongoDB!')
    }
  }
);
/*----------------------------------------------------------------------------*/
// Create post schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please check data entry, no title of specified!'],
    unique: true
  },
  content: {
    type: String,
    required: [true, 'Please check data entry, no content of specified!']
  }
});
// Modelling from post schema
const Post = mongoose.model('Post', postSchema);
/*----------------------------------------------------------------------------*/
app.get("/", function(req, res){

  Post.find({}, function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      // console.log(posts);

      res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
      });
    }
  })
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  // Create post document using post model
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  // Save post document
  post.save();
  res.redirect("/");
});

app.get("/posts/:postId", function(req, res){
  // console.log(req.params.postId);

  const requestedId = req.params.postId;
  Post.findOne({_id: requestedId}, function (err, post) {
    // console.log(post._id);

    if (err) {
      console.log(err);
    } else {
      res.render(
        "post",
        {
          title: post.title,
          content: post.content
        }
      );
    }
  });
});
