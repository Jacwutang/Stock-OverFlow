const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require(__base + '/config/db');
const User = require(__base + '/components/users/userModel');


const login = (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       //Middleware 'login'
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }

           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, 'your_jwt_secret');
           return res.json({user, token});
        });
    })(req, res);
  };

  /**************************************************/

const signup  = (req,res) => {
  // db.users.create();
  console.log("authController signup");
  const {password, username} = req.body;
  console.log(password,username);

  /*
  Check if user exists already by username
  db.users.findByUsername(req.body.username) --> user
  If user
    return error msg user already exists
  else
    - gen pass hash
    - insert user into
    - perform passport login
    */

    db.users.findByUsername(username)
    .then( user => {
      console.log("User is", user);
      if(user) {
        res.send( {error:"Username already exists!"} )
      }
      else {
        User.generateHash(password)
        .then( password_hash => {
          console.log(password_hash)
          return db.users.insert(username, password_hash);
          //Passport login here
        })
        .then( user => console.log("new created user", user));

      }
    });

}

/**************************************************/
const logout = (req,res) => {
  req.logout();
  //Terminate JWT?
  res.redirect('/');
}

/**************************************************/

module.exports = {
  login,
  signup,
  logout
};
