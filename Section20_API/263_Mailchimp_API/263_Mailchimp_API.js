
/*** Summary : 간단하게 개념을 설명하자면,
  1. 앞서 구현한 Live Weather은 내 서버에서 사용자 입력을 받아 그것을 파라미터로 이용해 외부 API에
    조회하여 정보를 얻는 구조였다. : 'POST' => 'GET'
    ex) 간략화
        app.post('/', function(req, res) {
          https.get(url, function(reponse) {
            response.on('data', function(data) {
              // process data
          });
        });
      });

  2. 이 Mailchimp API를 이용한 Newsleter Signup App은 사용자 입력을 받은 데이터를 내 서버를 통해 외부 API로 보내고, 거기에서
    외부 API에서 다시 해당 외부 서버로 데이터를 보내어 회원가입을 요청하는 구조이다. : 'POST' => request 'POST'
    ex) 간략화
        app.post('/', function(req, res) {
          https.reuest(url, function(reponse) {
            response.on('data', function(data) {
              // process data
          });
        });
      });
***/

/* Mailchimp (https://mailchimp.com/)

  1. Sign Up - Create Account - Log In - Account - Extras - "API Keys"
  2. Log In - Audience - All contacts - Audience name and campaign defaults - "Audience ID(list id)"
  3. Log In - Developers - Marketing API - API Refrence - List/Audiences
    - Get lists info                 : GET    /lists
    - Add list                       : POST   /lists
    - Get list info                  : GET    /lists/{list_id}
    - Update lists                   : PATCH  /lists/{list_id}
    - Delete list                    : DELETE /lists/{list_id}
    - Batch subscribe or unsubscribe : POST   /lists/{list_id}
  4. Log In - Developers - Marketing API - API Refrence - List/Audiences - Members
  5. Log In - Developers - Marketing API - API Refrence - List/Audiences - Merge Fields
  6. Audience fields and *|MERGE|* tags
    : https://us17.admin.mailchimp.com/lists/settings/merge-tags?id=219040
  7. Merge Tages Cheat Sheet - Personalization
    : https://mailchimp.com/help/all-the-merge-tags-cheat-sheet/

*/
