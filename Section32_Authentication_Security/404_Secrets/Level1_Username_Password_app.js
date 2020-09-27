//jshint esversion:6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, function () {
  if (port == 3000) {
    console.log('Server is running at http://localhost:3000');
  } else {
    console.log('Successfully server is running!');
  }
});
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
const uri = 'mongodb://localhost:27017/userDB';
mongoose.connect(
  uri,
  {useNewUrlParser: true, useUnifiedTopology: true},
  function(err) {
    if (!err) {
      console.log('Successfully connected to MongoDB!')
    } else {
      console.log(err);
    }
});
/*----------------------------------------------------------------------------*/
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Please check the data entry, username or email is required.']
  },
  password: {
    type: String,
    minlength: [5, 'Please check the data entry, password is 5 characters at least.']
  }
});
const User = mongoose.model('User', userSchema);
/*----------------------------------------------------------------------------*/
app.route('/')
.get(function (req, res) {
  res.render('home');
});
// Regitster Username and Password
app.route('/register')
.get(function (req, res) {
  res.render('register');
})
.post(function (req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });
  newUser.save(function (err) {
    if (!err) {
      res.render('secrets');
    } else {
      console.log(err);
    }
  });
});
// Login Username and Password
app.route('/login')
.get(function (req, res) {
  res.render('login');
})
.post(function (req, res) {
  User.findOne(
    {email: req.body.username},
    function (err, foundUser) {
      if (!err) {
        if (foundUser) {
          if (foundUser.password === req.body.password) {
            res.render('secrets');
          } else {
            res.render('error', {errorMessage: 'No password matching that!'});
          }
        } else {
          res.render('error', {errorMessage: 'No user matching that email!'});
        }
      } else {
        console.log(err);
      }
    }
  );
});
