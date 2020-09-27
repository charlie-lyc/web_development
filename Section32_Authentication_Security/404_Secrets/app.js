//jshint esversion:6
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

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
  googleId: String,
  /* Add field for secret */
  secret: String
  /************************/
});
/*----------------------------------------------------------------------------*/
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
/*----------------------------------------------------------------------------*/
const User = mongoose.model('User', userSchema);
/*----------------------------------------------------------------------------*/
passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
/*----------------------------------------------------------------------------*/
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_API_CLIENT_ID,
    clientSecret: process.env.GOOGLE_API_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
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
/*----------------------------------------------------------------------------*/
app.route('/secrets')
.get(function (req, res) {
  User.find({'secret': {$ne: null}}, function(err, foundUsers) {
    if (err) {
      console.log(err);
    } else {
      if (foundUsers) {
        // 비밀이 있는 사용자들만 찾아서 front end쪽으로 넘김 => "secrets.ejs"수정 요망
        res.render('secrets', {usersWithSecrets: foundUsers});
      }
    }
  });
})

app.route('/logout')
.get(function(req, res) {
  req.logout();
  res.redirect('/');
})

app.route('/auth/google')
.get(
  passport.authenticate('google', { scope: ['profile'] })
)

app.route('/auth/google/secrets')
.get(
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/secrets');
  }
)
/*----------------------------------------------------------------------------*/
// Add route '/submit'
app.route('/submit')
.get(function(req, res) {
  if (req.isAuthenticated()) {
    res.render('submit');
  } else {
    res.redirect('login');
  }
})
.post(function(req, res) {
  /* 등록, 로그인한 사람만 비밀을 작성할 수 있게 하기 위해 user 정보 확인이 필요하다.
    따라서 거기에 더해 userSchema에 비밀을 저장할 필드도 추가할 필요가 있다.    */
  /* Check user when using local strategy */
  // console.log(req.user.id);
  User.findById(req.user.id, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = req.body.secret;
        foundUser.save(function(error) {
          if (error) {
            console.log(error);
          } else {
            res.redirect('/secrets');
          }
        });
      }
    }
  });
})
