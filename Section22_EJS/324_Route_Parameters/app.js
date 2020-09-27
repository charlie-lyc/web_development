// jshint esversion:6
const express = require('express');

const app = express();

app.get('/news/:topic', function (req, res) {
  // consoel.log('hello');
  console.log(req.params.topic);
  res.send('hello');
});

app.listen(3000, function () {
  console.log('Server is running at http://localhost:3000');
});
