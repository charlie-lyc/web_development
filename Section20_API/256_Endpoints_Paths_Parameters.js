/*
  1. Endpoints :
  
    ex) 브라우저에 "api.kanye.rest"를 입력할 때 마다 다른 데이터를 얻게 된다.
        GET https://api.kanye.rest
        {
          "quote": "The world is our family"
        }

  2. Paths :

    ex) These are all endpoints from Joke API(https://sv443.net/jokeapi/v2/).
        1) Get Joke
          GET https://sv443.net/jokeapi/v2/joke/[Category/-ies]
          - programming
          - miscellaneous
          - dark
          - pun
        2) Get Info
          GET https://sv443.net/jokeapi/v2/info
        3) Categories
          GET https://sv443.net/jokeapi/v2/categories
        4) Language Code
          GET https://sv443.net/jokeapi/v2/langcode/[Language]
          - en(english)
          - de(german)
        5) Supported Languages
          GET https://sv443.net/jokeapi/v2/languages
        6) Flags
          GET https://sv443.net/jokeapi/v2/flags
        7) Formats
          GET https://sv443.net/jokeapi/v2/formats
        8) Ping
          GET https://sv443.net/jokeapi/v2/ping
        9) Endpoints
          GET https://sv443.net/jokeapi/v2/endpoints
        10) Submit Joke
          PUT https://sv443.net/jokeapi/v2/submit

  3. Parameters : Joke API(https://sv443.net/jokeapi/v2/)에서 실습

    ex1) [Category/-ies]로 'Any'을 선택하고, search string에 'debugging'을 입력하면
        GET https://sv443.net/jokeapi/v2/joke/Any?contains=debugging

    ex2) [Category/-ies]로 custom에 'Programming'을 선택하고, search string에 'debugging'을 입력하면
        GET https://sv443.net/jokeapi/v2/joke/Programming?contains=debugging

    ex3) ex2)에 더해 language로 'de'로, flags to blacklist로 'religious'로, joke type을 'twopart'로 선택하면
        GET ttps://sv443.net/jokeapi/v2/joke/Programming?lang=de&blacklistFlags=religious&type=twopart&contains=debugging

        => 다시 정리하면 아래와 같이 5가지 parameters와 관련된 값들이 있다.(참고로 query의 순서는 상관없다. ex: ?contains=debugging&lang=de&...)
          [Category/-ies]                  : "Programming"
          lang=[Language]                  : "de"
          blacklistFlags=[Blacklist Flags] : "religious"
          type=[Joke Type]                 : "twopart"
          contains=[Search String]         : "debugging"

    ex4) "Send Request"를 눌러 back-end에 데이터를 요청하면 아래와 같은 결과를 얻게 된다.
        {
          "error": false,
          "category": "Programming",
          "type": "twopart",
          "setup": "Was macht ein Informatiker wenn sein Wagen nicht mehr anspringt?",
          "delivery": "Aussteigen, einsteigen und nochmal starten.",
          "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false
          },
          "id": 20,
          "lang": "de"
        }

*/
