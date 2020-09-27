/*** JSON(JavaScript Object Notation)

    1. Chrome web store : "Awesome JSON Viewer" 설치
      - 앞에서 얻은 아래와 같은 데이터를 'JASON Input'에 입력해 보자.
        {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":803,"main":"Clouds",
        "description":"broken clouds","icon":"04d"}],"base":"stations",
        "main":{"temp":23.13,"feels_like":20.73,"temp_min":22.22,"temp_max":23.89,
        "pressure":1004,"humidity":60},"visibility":10000,
        "wind":{"speed":5.7,"deg":200,"gust":10.8},"clouds":{"all":75},
        "dt":1597923481,"sys":{"type":1,"id":1414,"country":"GB",
        "sunrise":1597899281,"sunset":1597950800},"timezone":3600,
        "id":2643743,"name":"London","cod":200}

      - 입력 후 'Parse JSON' 버튼을 누르면, 아래와 같은 결과를 'Tree'탭에서 볼수 있다.
      - 그리고 'Chart'탭에서 "response"객체의 구조를 한눈에 파악할 수도 있다.
      =>{
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

      - 위의 Tree에서 각 parameter의 key-value line을 클릭하면
        "Copy path"와 "Copy value"를 이용할 수 있어 코딩에 매우 유용하다.
***/
