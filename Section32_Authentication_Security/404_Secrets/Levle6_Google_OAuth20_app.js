//jshint esversion:6
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
/************** Import modules for "Google OAuth20" **************/
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
/****************************************************************/
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
/*----------------------------------------------------------------------------*/
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
/*----------------------------------------------------------------------------*/
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
mongoose.set('useCreateIndex', true);
/*----------------------------------------------------------------------------*/
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  /* 3. Add field for using OAuth2.0 */
  googleId: String
  /********************************/
});
userSchema.plugin(passportLocalMongoose);
/***********************************************/
// Set 'findOrCreate' plugin to userSchema
userSchema.plugin(findOrCreate);
/***********************************************/
/*----------------------------------------------------------------------------*/
const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

/*********************************************/
/* Modify serializing and deserializing for using OAuth2.0 */
/* 1. 앞서 말했던 서버 리스타트시 쿠키가 삭제되는 것에 대한 해결책으로
    OAuth2.0를 이용하여 재접속 할 때 user의 id를 검색하도록 한다.    */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
/*********************************************/
/*----------------------------------------------------------------------------*/
/********************************************************************/
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_API_CLIENT_ID,
    clientSecret: process.env.GOOGLE_API_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    /* Handle with issue about "Query on Google+ deprecation" (from GitHub) */
    /* This option tells the strategy to use the userinfo endpoint instead  */
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    /* 2. 위에서 Serializing and Deserializing을 실행 했음에도 여전히 문제가 남아 있다.
      'Robo 3T'를 이용해 데이터베이스를 열어보면 gmail을 이용해 regitster한 user의 정보가 없다.
      단지 MongoDB id만 존재할 뿐 username, password 등 아무것도 없다.
      이것은 애초에 Google OAuth2.0이 Google profile의 "id"를 이용해 쿠키를 생성하고 인증을
      할 수있도록 해놓았기 때문이다. (password에는 접근할 수 없다.) 어쨌든 이를 구현하기 위해
      userSchema에 Google로 등록 또는 로그인할 때에 필요한 필드를 추가해야 한다.           */
    /* Check 'profile' when using 'Scope in Google OAuth' */
    // console.log(profile);
    /* Use method from 'findOrCreate' */
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
/*********************************************************************/
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

});

app.route('/login')
.get(function (req, res) {
  res.render('login');
})
.post(function (req, res) {

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  req.login(user, function(err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/secrets');
      });
    }
  });

});

app.route('/secrets')
.get(function (req, res) {
  if (req.isAuthenticated()) {
    res.render('secrets');
  } else {
    res.redirect('login');
  }
})

app.route('/logout')
.get(function(req, res) {
  req.logout();
  res.redirect('/');
})
/*----------------------------------------------------------------------------*/
/* Add route '/auth/google': copy Google Stategy from "passport.js" */
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] })
// );

app.route('/auth/google')
.get(
  passport.authenticate('google', { scope: ['profile'] })
)

/* Add route '/auth/google/callback': copy Google Stategy from "passport.js" */
// app.get('/auth/google/secrets',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/secrets');
//   }
// );

app.route('/auth/google/secrets')
.get(
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  }
)

/* 여기까지 코딩을 완료하고 실행을 해보면 결과적으로 안된다...
  1, 2, 3번 주석으로 차례로 가서 읽고 확인해보자.
*/

/* 주석 1, 2, 3번을 읽고 그대로 실행했다면, 다시 login한 상태와 logout한 상태에서
  "http://localhost:3000/secrets"에 대한 접근성의 차이를 확인해 보자.

  제대로 작동 된다면 최종적으로 Level6가 완료되었다.

  마지막으로 'Social Buttons for Bootstrap'을 이용해 아래의 파일들을 정리하여 소셜 버튼 블럭을
  깔끔하게 마무리하자.

  header.ejs
  register.ejs
  login.ejs
*/

/* Advance Challenge :

  Google의 경우와 마찬가지로 Facebook도 비슷하게 API 인증과정을 거치게 된다.
  시간이 허락된다면 한번 시도해보길 바란다!!!
*/
