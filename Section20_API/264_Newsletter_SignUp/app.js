// heroku.com 에 설치 : https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment

// jshint esversion:6
// install and import modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const pug = require('pug');

// initialize app
const app = express();
// use static folder
app.use(express.static('public'));
// use body-parser
app.use(bodyParser.urlencoded({extended: true}));
// set view engine
app.set('view engine', 'pug');

/******************************************************************************/

// set route '/' : GET
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/signup.html');
});

// set route '/' : POST
app.post('/', function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  // set data
  // Audience fields and *|MERGE|* tags : https://us17.admin.mailchimp.com/lists/settings/merge-tags?id=219040
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields:  {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  // prepare data to send
  const jsonData = JSON.stringify(data);
  // call external API to post data
  // Audience ID(list_id) : '1156b1110c'
  // Basic Authentication : "anystring:" + API Key('e8af8baaa5204436387f7fb1ab35d7db-us17')
  // 이 API Key는 이후에 재발급 받아 갱신.
  const listID = '1156b1110c'
  const url = 'https://us17.api.mailchimp.com/3.0/lists/' + listID;
  const option = {
    method: 'POST',
    auth: 'charlie1:' + 'e8af8baaa5204436387f7fb1ab35d7db-us17'
  };
  const request = https.request(url, option, function(response) {
    if (response.statusCode === 200) {
      response.on('data', function(data) {
        // console.log(JSON.parse(data));
        const memberData = JSON.parse(data);
        // console.log(memberData.errors[0]);
        if (memberData.errors[0]) {
          res.render('failure', {errorMessage: memberData.errors[0].error});
        }
        // console.log('You have been successfully signed up to the newsletter!');
        res.sendFile(__dirname + '/views/success.html');
      });
    } else {
      // console.log('There was an error with signing up, please try again!');
      res.sendFile(__dirname + '/views/failure.pug');
    }
  });
  // send data to external API
  request.write(jsonData);
  request.end();
});

// set route '/success' : POST
app.post('/success', function(req, res) {
  res.redirect('/');
});

// set route '/failure' : POST
app.post('/failure', function(req, res) {
  res.redirect('/');
});

/******************************************************************************/

// listen on port
app.listen(3000, function() {
  console.log('Server is running at http://localhost:3000');
});
