//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts = [];

app.get('/', function (req, res) {
  // console.log(posts);
  res.render('home', {
    homeContent: homeStartingContent,
    posts: posts
  });
});

app.get('/about', function (req, res) {
  res.render('about', {aboutContent: aboutContent});
});

app.get('/contact', function (req, res) {
  res.render('contact', {contactContent: contactContent});
});

app.get('/compose', function (req, res) {
  res.render('compose');
});

app.post('/compose', function (req, res) {
  // console.log(req.body);
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect('/');
});

app.get('/posts/:title', function (req, res) {
  // console.log(req.params.title);
  /* 브라우저 URL입력창에서의 대소문자 입력 혼동 문제, 경로명에서의 공백 처리 문제, 애플리케이션 종류에
    따른 경로명 생성 등 여러가지 문제가 있다. 즉 이러한 문제들에 유연하게 대처하기 위하여 ':title'
    parameter를 이용한 post검색에 좀더 융통성이 요구된다. 그래서 도입한 것이 "_.lowerCase()"를
    이용하는 것이다. => lodash.com (https://lodash.com/docs/4.17.15#lowerCase)
    예를 들어 포스트의 제목이 'Day 1'이라면 'parameter' 값에 "day"와 "1"이 포함만 된다면,
    띄어쓰기나 특정 부호들의 추가는 크게 상관이 없이 포스트가 검색된다.
      ex) title: "Day 1" => 입력가능 parameter: day-1, day_1, day 1, day1, Day-1, Day_1, Day 1, Day1, ...
  */
  const requestedTitle = _.lowerCase(req.params.title);
  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle) {
      // console.log('Matched post has found.');
      res.render('post', {
        title: post.title,
        content: post.content
      });
    }
  });
});


app.listen(3000, function() {
  console.log("Server is running at http://localhost:3000");
});
