//jshint esversion:6
/******************************************************************************/
/*** 1. As early as possible in your application,
    require and configure dotenv for using "Environment Variable"           ***/
require('dotenv').config();
/*** 2. Create ".env" file
     3. Add some code inside '.env' file
     4. Create or open ".gitignore" file
     5. Add ".env" code to '.gitignore' file
     5. git add .
     6. git commit -m "..."
     7. git push -u origin master                                           ***/
/******************************************************************************/
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

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
/******************************************************************************/
// userSchema.plugin(
//   encrypt,
//   {
//     secret: process.env.SOME_LONG_UNGUESSABLE_STRING,
//     encryptedFields: ['password']
//   }
// );
/* OR ------------------------------------------------------------------------*/
userSchema.plugin(
  encrypt,
  {
    encryptionKey: process.env.SOME_32BYTE_BASE64_STRING,
    signingKey: process.env.SOME_64BYTE_BASE64_STRING,
    encryptedFields: ['password']
  }
);
/******************************************************************************/
const User = mongoose.model('User', userSchema);
/*----------------------------------------------------------------------------*/
app.route('/')
.get(function (req, res) {
  res.render('home');
});

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
