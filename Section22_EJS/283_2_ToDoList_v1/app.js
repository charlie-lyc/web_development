// jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
/* Node Module Exports */
const date = require('./date.js')
// const date = require(__dirname + '/date.js')

// console.log(date);
// console.log(date.getDate(), date.getMonthDay(), date.getWeekday());


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// set view engine
app.set('view engine', 'ejs');
// use static directory
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Server is running at http://localhost:3000');
});



// const newItems = ['Buy Food', 'Cook Food', 'Eat Food'];
const newItems = [];
const workItems = [];
/*** assign으로는 const array의 값을 바꿀수 없지만 push mehtod로는 바꿀수 있다.
    이것은 JSON객체의 문제에서도 비슷하게 적용된다.
    ex) const myObject = {'key': 'value'};
        myObject = {'other key': 'other value'}; // 불가능하다.
        myObject.key = 'other value'; // 가능하다.                     ***/

app.get('/', function (req, res) {
  /* const today = new Date();
     const options = {
       weekday: 'long',
       day: 'numeric',
       month: 'long'
     };
     const day = today.toLocaleDateString('en-US', options); */
  // OR
  // const day = date();
  // OR
  const day = date.getDate();
  res.render('list', {listTitle: day, newListItems: newItems});
});

app.post('/', function (req, res) {
  console.log(req.body);
  /* req.body => { newItem: '// item to do', list: '// value of button'}
    : 그런데 이해할 수 없게도 listTitle이 string type인 'Work List'가 되었을 때
      <h1><%= listTitle %></h1>내에서는 분명 'Work List'으로 모두 표시되는데,
      <button value=<%= listTitle %>>+</button>내에서는 'Work'만으로 표시된다...
      콘솔창에 출력된 결과를 보아 추측컨데 tag element 내의 property의 값으로 string type의
      EJS Variable이 할당될 경우 첫 번째 공백이 있는 위치까지의 string만 값으로 취하는 것 같다. */
  const newItem = req.body.newItem;
  if (req.body.list === 'Work') {
    workItems.push(newItem);
    res.redirect('/work')
  } else {
    newItems.push(newItem);
    res.redirect('/');
  }
});

app.get('/work', function (req, res) {
  res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.get('/about', function (req, res) {
  // res.sendFile(__dirname + '/about.html');
  //  OR
  res.render('about');
})


/******************************************************************************/
// app.get('/', function(req, res) {
//   // console.log('hello world');
//   const today = new Date();
//   const currentDay = today.getDay();
//   let day = '';
//   /*************************************************************/
//   switch (currentDay) {
//     case 0:
//       day = 'Sunday';
//       break;
//     case 1:
//       day = 'Monday';
//       break;
//     case 2:
//       day = 'Tuesday';
//       break;
//     case 3:
//       day = 'Wednesday';
//       break;
//     case 4:
//       day = 'Thursday';
//       break;
//     case 5:
//       day = 'Friday';
//       break;
//     case 6:
//       day = 'Saturday';
//       break;
//     default:
//       console.log('Error: current day is equal to ' + currentDay);
//   }
//   /***************************************************************/
//   // if (cuurentDay === 6 || cuurentDay === 0) {
//   //   // res.send('<h1>It is a weekend!</h1>');
//   //   // OR
//   //   // res.write('<h1>It is a weekend!</h1>');
//   //   // res.write('<p>Yay! I am free.</p>');
//   //   // res.send();
//   //   // OR
//   //   // res.sendFile(__dirname + '/weekend.html');
//   //   // OR
//   //   day = 'Weekend';
//   // } else {
//   //   // res.send('<h1>It is a weekday!</h1>');
//   //   // OR
//   //   // res.write('<h1>It is a weekday!</h1>');
//   //   // res.write('<p>Boo! I have to work.</p>');
//   //   // res.send();
//   //   // OR
//   //   // res.sendFile(__dirname + '/weekday.html');
//   //   // OR
//   //   day = 'Weekday'
//   // }
//   /*****************************************************************/
//   res.render('list-previous', {kindOfday: day});
// });
/******************************************************************************/
