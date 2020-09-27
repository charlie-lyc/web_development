/* Third Party Oauth 2.0

  1. What is OAuth?
    - Oauth : Open Authorization

  2. Why OAuth?
    1) Granular Access Levels
    2) Read/Read+Write Access
    3) Revoke Access
*/

/* Using Oauth 2.0

  Step1. Set up your app
  Step2. Redirect to authenticate

  Step3. User logs in
  Step4. User grants permissions

  Step5. Receive authorization code
  Step6. Exchange authorization code for access token
*/

/* What's happening when login using OAuth?

  1. Receive Auth Code
  2. Exchange Auth Code for Access Token

  Auth    ------------>   Access
  Code    <------------   Token

  'Ticket'                'YearPass'
*/

/* Google Developer's API Console - APIs and Services

  1. New Project - Project Name - "Secrets" - Create

  2. Credentials - OAuth consent screen
    1) User Type - 외부사용자
    2) Application name - "Secrets"
    // 3) ~ 8)은 실제 설치할 때 기입
    3) Application logo
    4) Scope for Google APIs (If you want add scope, reference to Google API Library)
    5) Authorized domains
    6) Application homepage link
    7) Application privacy policy link
    8) Application Terms of Service link
  3. Save

  4. Credentials - Create Credentials - OAuth Client ID
    1) Application Type - Web application
    2) Name - "Secrets"
    // 3) ~ 4)은 실제 설치할 때 반드시 수정
    3) Authorized JavaScript Origins - "http://localhost:3000"
    4) Authorized redirect URIs - "http://localhost:3000/auth/google/secrets" - 기억해둘 것!
  5. Create

  6. Copy Client ID and Secret
    => 앞서 만들었던 ".env"에 저장
*/

/*
  Install "passport-google-oauth20"
  Install "mongoose-findorcreate"
*/
