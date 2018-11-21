const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const db  = require(__base + '/config/db');
const User = require(__base + '/components/users/userModel');

/* Define various passport strategies */

/* LocalStrategy --> username,password */
passport.use('local',new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
  },
  (username, password, done) => {
    db.users.findByUsername(username)
    .then(user => {

      // console.log(user, "USER FOUND");
      if(!user) {
        // console.log("no user");
        return done(null, false, { message: 'Incorrect username.' });
      }
      User.validPassword(password, user.password)
      .then( validity => {
        // console.log(validity);
        if(validity == false) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      })
    })
    .catch(err => {
      console.log("error caught");
      console.log(err);
      return done(err)
    })
  })
 );




/* JWT strategy */
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
     (jwtPayload, done) => {
       console.log(jwtPayload, done, "JWT PASSPORT");
        if(jwtPayload) {
          console.log("inside");
          return done(null, jwtPayload);
        }
        else{
          console.log("2nd inside");
          return done({error: "Unable to match JWT"} )
        }
      }
));

module.exports = passport;
