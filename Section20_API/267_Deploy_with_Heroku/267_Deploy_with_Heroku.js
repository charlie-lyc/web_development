/*** Deploy Newsletter Signup Web Application with Herokuapp.com
      => project folder : newsletter_signup_heroku
***/

/* Heroku Dev Center (https://devcenter.heroku.com/)

  1. Select Blueprint : Node JS

  2. Get started with Node JS : Start Tutorial

  3. Download and Install Heroku CLI
    $ brew install heroku/brew/heroku
      : install homebrew('missing package manager')
        => /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

  4. Login Heroku CLI
    $ heroku login

  5. Check all libraries' and packages' version
    $ node --version
      : install node
        => brew install node
        OR
        => curl "https://nodejs.org/dist/latest/node-${VERSION:-
        $(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" >
        "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg
        "$HOME/Downloads/node-latest.pkg" -target "/"
    $ npm --version
      : install npm
        => npm install npm
        OR
        => npm install npm@latest -g
    $ git --version
      : install git
        => brew install git
        OR
        => git clone https://github.com/git/git

  6. If you want sample app, clone git...
    $ git clone https://github.com/heroku/node-js-getting-started.git
    $ cd node-js-getting-started

  7. Prepare deployment
    1) Set port
    => app.listen(process.env.PORT || 3000, function(){
        console.log('Server is running at https://stormy-brook-65159.herokuapp.com/');
        // console.log('Server is running at http://localhost:3000');
      });
    2) Make and define Procfile
      - inside project on root directory
        $ touch Procfile                            <= start with upper case, end with no extension
      - inside Procfile => web: node app.js

  8. Deploy app : inside project on root directory
    1) Git app
      $ git init                                    <= intialize git
      $ git add .                                   <= add all of the project folders and files on stage
      $ git commit -m "first commit : deployment"   <= commit git with message

    2) Create app
      $ heroku create
      => landing page : https://stormy-brook-65159.herokuapp.com/
      => git repository : https://git.heroku.com/stormy-brook-65159.git

    3) Deploy app
      $ git push heroku master                      <= send all of the project folders and files

  9. It takes a few minutes to complete deployment...

  10. Ensure that at least one instance of the app is running : inside project on root directory
    $ heroku ps:scale web=1
    => Scaling dynos... done, now running web at 1:Free

  11. Open web application
    $ heroku open

  12. Monitor logs
    $ heroku logs --tail
*/
