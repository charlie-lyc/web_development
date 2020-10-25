// jshint esversion:6
// install and import express module
const express = require('express');
// install and import https module
const https = require('https');
// install and import body-parser module
const bodyParser = require('body-parser');

// initialize app
const app = express();
// listen to port
app.listen(3000, function() {
  console.log('Server is running on port 3000...');
});
// use body-parser
app.use(bodyParser.urlencoded({extended: true}));

/******************************************************************************/


// set route '/' : GET
app.get('/', function(req, res) {
/******************************************************************************/
  // /* call external API to get data */
  // const query = 'London';
  // const unit = 'metric';
  // const apiKey = 'e56bd8184c3a9c02c98e0c1d2f369027';
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=' + unit + '&appid=' + apiKey;
  // https.get(url, function(response) {
  //   // console.log(response);
  //   // console.log('Status Code:', response.statusCode);
  //   console.log('Connected to api.openweathermap.org...');
  //   /* deal with data */
  //   response.on('data', function(data) {
  //     // console.log(data);
  //     /*** 아래와 같은 결과를 얻게 되는데 이 "Hexadecimal Byte-code"들을 https://cryptii.com/
  //         에서 Text로 해독하면 string 타입의 raw data가 된다.
  //           <Buffer 7b 22 63 6f 6f 72 64 22 3a 7b 22 6c 6f 6e 22 3a 2d 30 2e 31 33
  //           2c 22 6c 61 74 22 3a 35 31 2e 35 31 7d 2c 22 77 65 61 74 68 65 72 22 3a
  //           5b 7b 22 69 64 ... 417 more bytes>
  //     ***/
  //     // process.stdout.write(data);
  //     /* process.stdout.write()를 통해 아래와 같이 결과를 얻을 수도 있다.
  //         {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear",
  //         "description":"clear sky","icon":"01n"}],"base":"stations","main":
  //         {"temp":19.43,"feels_like":14.95,"temp_min":18.89,"temp_max":20.56,
  //         "pressure":1000,"humidity":64},"visibility":10000,"wind":{"speed":7.48,
  //         "deg":209},"clouds":{"all":0},"dt":1597976643,"sys":{"type":3,"id":268730,
  //         "country":"GB","sunrise":1597985777,"sunset":1598037075},"timezone":3600,
  //         "id":2643743,"name":"London","cod":200}
  //     */
  //     /* convert data to JSON : string 타입으로 전송된 데이터를 JSON타입으로 변환 */
  //     const weatherData = JSON.parse(data);
  //     // console.log(weatherData);
  //     // console.log(JSON.stringify(weatherData));
  //     /* 콘솔에 출력되는 JSON데이터를 일일이 확인하기 어려우므로 앞서 설치한 "Awesome JSON"에
  //       해댱 url을 입력하여 얻은 결과 Tree로 부터 'Copy path' 클릭 한번으로 쉽게 정보를 얻을 수 있다.
  //     */
  //     const weatherDescription = weatherData.weather[0].description;
  //     const temp = weatherData.main.temp;
  //
  //     /* OpenWeather에는 날씨 정보와 관련된 아이콘도 존재 한다.
  //       ex) "weather":[
  //             {
  //               "id":800,
  //               "main":"Clear",
  //               "description":"clear sky",
  //               "icon":"01n"
  //             }
  //           ]
  //
  //         => 이와 관련된 documents는 아래의 경로를 참고 하면 된다.
  //             https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
  //               - 'Weather Conditions' - 'Weather icons' - 'How to get icon URL'
  //     */
  //     const weatherIcon = weatherData.weather[0].icon;
  //     const weatherIconImage = 'http://openweathermap.org/img/wn/' + weatherIcon + '@2x.png';
  //
  //     // res.send(
  //     //   '<h2>The weather in London is ' + weatherDescription + '.</h2>' +
  //     //   '<p>The temperature in London is ' + temp + ' degrees Celsisus.</p>'
  //     // );
  //     /* 에러가 발생하게 된다. : 대충 "res.send()"가 두번 실행되어 충돌이 발생한 정도로 볼 수 있다.
  //       따라서 두 개 중 하나를 지우면 실행 된다.
  //         code: 'ERR_HTTP_HEADERS_SENT'
  //         [nodemon] app crashed - waiting for file changes before starting...
  //     */
  //     // res.writeHead(200, {"content-type" : "text/html"});
  //     res.setHeader('content-type', 'text/html');
  //     res.write('<h2>The weather in London is ' + weatherDescription + '.</h2>');
  //     res.write('<p>The temperature in London is ' + temp + ' degrees Celsisus.</p>');
  //     res.write("<img src=" + weatherIconImage + " alt='weather-icon'>")
  //     res.send();
  //   });
  // });
  // //res.send('<h1>Live Weather</h1>')
/******************************************************************************/
  res.sendFile(__dirname + '/index.html');
});


// set route '/' : POST
app.post('/', function(req, res) {
  // console.log('Post request has received...');
  // console.log('City name is ' + req.body.cityName);
  const query = req.body.cityName;
  const unit = 'metric';
  const apiKey = 'e56bd8184c3a9c02c98e0c1d2f369027';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=' + unit + '&appid=' + apiKey;
  https.get(url, function(response) {
    console.log('Weather Data has received...');
    response.on('data', function(data) {
      const weatherData = JSON.parse(data);
      const weatherDescription = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const weatherIcon = weatherData.weather[0].icon;
      const weatherIconImage = 'http://openweathermap.org/img/wn/' + weatherIcon + '@2x.png';
      res.setHeader('content-type', 'text/html');
      res.write('<h2>The weather in ' + query + ' is ' + weatherDescription + '.</h2>');
      res.write('<p>The temperature in ' + query + ' is ' + temp + ' degrees Celsisus.</p>');
      res.write("<img src=" + weatherIconImage + " alt='weather-icon'>")
      res.send();
    });
  });
});


/******************************************************************************/
/* Googling :
    "how to make get request to external server in express js"
    "how to make external API call in express js"

  => 결과1 : StackOverflow => "http" module, "request" module 등 다양한 방법이 있다.
  => 결과2 : Twillo BLOG => "5 Ways to Make HTTP Requests in Node.js" 좀더 깔끔하게 정리해 놓았다.
            아래와 같은 방법들이 있고 각자 특징이 있지만 'HTTP – the Standard Library'를 가장 추천
              1) HTTP – the Standard Library
              2) Request
              3) Axios
              4) SuperAgent
              5) Got
  => 위의 결과를 바탕으로 'nodejs.org' DOCS에서 "http" 관련 검색
      1) HTTPS
      2) HTTP
      3) HTTP/2
*/

/* HTTP response status codes :
    from MDN(https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
      - Informational responses (100–199),
      - Successful responses (200–299),
      - Redirects (300–399),
      - Client errors (400–499),
      - Server errors (500–599).
*/
