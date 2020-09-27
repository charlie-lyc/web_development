//jshint esversion:6
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
/*** Import some modules for "Adding Sessions and Cookies" ***/
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
/*************************************************************/
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
/***********************************************/
// Use 'Session' and 'Passport'
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
/***********************************************/
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
/********************************************/
// Handle with "(node:14649) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead."
mongoose.set('useCreateIndex', true);
/********************************************/
/*----------------------------------------------------------------------------*/
const userSchema = new mongoose.Schema({
  /* 정확한 이유는 모르겠지만 이전 userSchema 구조로는 'Passport' 사용이 되질 않고 에러가 발생하였음 */
  email: String,
  password: String
  /***********************************************/
});
/***********************************************/
// Set 'Passport' plugin to userSchema
userSchema.plugin(passportLocalMongoose);
/***********************************************/
/*----------------------------------------------------------------------------*/
const User = mongoose.model('User', userSchema);
/*----------------------------------------------------------------------------*/
/***********************************************/
// Use method from 'passport.js' for creating strategy
passport.use(User.createStrategy());
// Use method from 'passport.js' for serializing and deserializing
// serializing : create cookies, deserializing : delete cookies
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
/***********************************************/
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
  /**************************************************************************/
  // Use method from 'passport.js' for registering
  User.register({username: req.body.username}, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.redirect('/register');
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/secrets');
      });
    }
  });
  /**************************************************************************/
});

app.route('/login')
.get(function (req, res) {
  res.render('login');
})
.post(function (req, res) {
  /**************************************************************************/
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  // Use method from 'passport.js' for login
  req.login(user, function(err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/secrets');
      });
    }
  });
  /**************************************************************************/
});
/*----------------------------------------------------------------------------*/

// Add route '/secrets'
app.route('/secrets')
.get(function (req, res) {
  // Use method from 'passport.js' for checking being authenticated
  if (req.isAuthenticated()) {
    res.render('secrets');
  } else {
    res.redirect('login');
  }
})
/* 여기까지 완료하고 새로운 아이디와 비번을 이용해 등록해보면 바로 'localhost:3000/secrets'에
  접근할 수가 있다. 'localhost:3000/'로 이동했다가 다시 'localhost:3000/secrets'를 그냥
  타이핑해도 접근할 수가 있다. 왜냐하면 쿠키를 사용해서 현재 사용중인 아이디가 이미 인증받았음을
  브라우저가 인지하고 있는것이다.

  쿠키의 실체를 보려면, Chrome Browser - Settings - Privacy and Security -
  Cookies and Other Site Data 로 이동해서 "See all cookies and site data"를 선택하고
  상단의 'Search cookies'에서 'localhost'를 검색하면 "connect.sid"를 찾을 수 있다.

  그리고 브라우저를 모두 종료하였다가 다시 실행하여 'localhost:3000/secrets'로 접속하게 되면
  쿠키는 사라지고 없다.
*/

// Add route '/logout'
app.route('/logout')
.get(function(req, res) {
  // Use method from 'passport.js' for logout
  req.logout();
  res.redirect('/');
})
/* 여기까지 완료하고 로그인한 상태와 로그아웃한 상태에서 'localhost:3000/secrets'에 접근했을 때
  차이를 확인함으로써 모든 것이 갖추어진 것 같다. 단 한가지만 빼고!!!

  바로 백엔드에서의 문제다. 즉 "nodemon app.js"를 다시 실행하게 되면 사용자의 브라우저가 종료되지
  않았는데 쿠키들이 사라져 버리게 되는 것이다.

  따라서 최종적인 업데이트가 필요하다!!!
*/
