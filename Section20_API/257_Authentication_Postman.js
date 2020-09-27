/*
  4. Authentication : Open Weather API(https://openweathermap.org/)에서 실습 => 회원가입하고 API Key 생성 및 저장

    1) Generate and store API key : 실습 후 새로운 키로 교체

    2) Call current weather data for one location
      - By city name : "cit name", "state code", "country code"에 대한 document 확인 요망
        api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
        api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}
        api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}
      - By city ID
        api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
      - By geographic coordinates
        api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
      - By ZIP code
        api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

      ex) api.openweathermap.org/data/2.5/weather?q=London&appid=56ca9d5cb6952dce868a00fa43be5bc5
          위와 같이 조회하여 아래와 같이 데이터를 얻었다.
          {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":803,"main":"Clouds",
          "description":"broken clouds","icon":"04d"}],"base":"stations",
          "main":{"temp":293.92,"feels_like":292.89,"temp_min":292.59,
          "temp_max":295.37,"pressure":1004,"humidity":68},"visibility":10000,
          "wind":{"speed":3.6,"deg":200},"clouds":{"all":75},"dt":1597916552,
          "sys":{"type":1,"id":1414,"country":"GB","sunrise":1597899281,
          "sunset":1597950800},"timezone":3600,"id":2643743,"name":"London","cod":200}

      ex) 온도 관련(ex: main.temp) document를 보면  "Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit"임을 알수 있다.
          온도 데이터를 Celsius나 Fahrenheit 기준으로 얻고자 한다면 어떻게 해야 하는가?
          - Units format
            For temperature in Fahrenheit use "units=imperial"
            For temperature in Celsius use "units=metric"
            Temperature in Kelvin is used by default, no need to use units parameter in API call

          api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=56ca9d5cb6952dce868a00fa43be5bc5
          "main":{"temp":19.73,"feels_like":18.36,"temp_min":18.89,"temp_max":20.56,
          "pressure":1003,"humidity":68}

          api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=56ca9d5cb6952dce868a00fa43be5bc5
          "main":{"temp":67.51,"feels_like":65.05,"temp_min":66,"temp_max":69.01,
          "pressure":1003,"humidity":68}

*/

/*** 웹페이지 상에서 위와 같은 데이터 파악에 한계가 있고, 좀더 체계적인 API Development을 위해
     "Postman(https://www.postman.com/)"을 이용

    1. Create a request

      1) GET api.openweathermap.org/data/2.5/weather
        => Body.pretty
          {
            "cod": 401,
            "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
          }

      2) GET api.openweathermap.org/data/2.5/weather["Params"에서 입력한 값들이 자동으로 조합된다.]
        - "Params"
          => key:     q, value: London
          => key: units, value: metric
          => key: appid, value: 56ca9d5cb6952dce868a00fa43be5bc5

        // - 위의 Params에서 세번째 key-value는 "Authorization"에서 아래와 같이 입력해도 된다. 양쪽 모두 입력할 필요는 없다.
        // => TYPE : API Key
        // => Key : appid
        // => Value : 56ca9d5cb6952dce868a00fa43be5bc5
        // => Add to : Query Params

          위와 같이 입력하면 아래와 같이 데이터를 얻게 된다.
        => Body.pretty
          {
            "coord": {
                "lon": -0.13,
                "lat": 51.51
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 20.79,
                "feels_like": 19.76,
                "temp_min": 19.44,
                "temp_max": 22.22,
                "pressure": 1004,
                "humidity": 68
            },
            "visibility": 10000,
            "wind": {
                "speed": 3.6,
                "deg": 200
            },
            "clouds": {
                "all": 75
            },
            "dt": 1597916435,
            "sys": {
                "type": 1,
                "id": 1414,
                "country": "GB",
                "sunrise": 1597899281,
                "sunset": 1597950800
            },
            "timezone": 3600,
            "id": 2643743,
            "name": "London",
            "cod": 200
          }
***/
