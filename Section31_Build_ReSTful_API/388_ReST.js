/* API : Application Programming Interface

              HTML     Response
              ...
              Data     Response
              Resource Response
           <--------------------            <--------------------
  Client           <API>            Server                           Database
           -------------------->            -------------------->
              HTTP  Request
              ...
              HTTPS Request
              FTP   Request

              app.get('/', function(req, res) {
                // Respond to request
              });
*/

/* ReSTful API : Representational State Transfer API - "Architectural Style for Designing APIs"

        "Architectural Style"
              'ReST'
  Client  -+-  API  -+-  Server

  1. Use HTTP Request Verbs
    1) GET : read
      app.get('/', function(req, res) {
        // Respond to request
      });

    2) POST : create
      app.post('/', function(req, res) {
        // Respond to request
      });

    3) PUT, PATCH : update(PUT - 데이터 전체, PATCH - 데이터 일부분)
      app.put('/', function(req, res) {
        // Respond to request
      });

      app.patch('/', function(req, res) {
        // Respond to request
      });

    4) DELETE : destroy
      app.delete('/', function(req, res) {
        // Respond to request
      });

  2. Use Specific Pattern of Routes/Endpoint URLs

    [ ReSTful Routing ]
    HTTP-Verb  ex) /articles             ex) /articles/REST
    GET        Fetch all the articles    Fetch the articles on REST
    POST       Create one new argicle                  -
    PUT                  -               Update the article on REST
    PATCH                -               Update the article on REST
    DELETE     Deletes all the articles  Delete the article on REST

*/
